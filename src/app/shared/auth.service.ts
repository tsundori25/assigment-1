import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endpoint: string = "http://localhost:3000/user/";
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    datauser = { }
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    login(user: User){
        return this.http.post<any> (`${this.endpoint}login`, user).subscribe((res:any)=>{
                localStorage.setItem('acces_token', res.acces_token)
                this.Profile(res.user._id).subscribe((res:any)=>{
                    this.datauser = res.user
                    this.router.navigate(['user/profile/'+res.user._id])
                })
        })
                
    }

    logout(){
        let deleteToken = localStorage.removeItem('acces_token');
        if(deleteToken == null){
            this.router.navigate([''])
        }
    }

    get isLogin(): boolean{
        let token = localStorage.getItem('acces_token');
        return (token !==null) ? true : false
    }

    getToken(){
        return localStorage.getItem('acces_token');
    }

    Profile(_id): Observable<any>{
        let api = `${this.endpoint}user/${_id}`;
        return this.http.get(api,{
            headers: this.headers
        }).pipe(
            map((res: Response)=>{
                return res || { }
            }),
            catchError(this.handleError)
        )
    }
    handleError(error:HttpErrorResponse){
        let pesan = '';
        if (error.error instanceof ErrorEvent){
            pesan = error.error.message
        }else{
            pesan = `Error code: ${error.status}\n Pesan Error: ${error.message}`;
        }
        return throwError(pesan);
        
    }
}
