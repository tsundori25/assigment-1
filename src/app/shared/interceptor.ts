import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { AuthService } from './auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler){
        const acces_token = this.authService.getToken()
            req = req.clone({
                setHeaders:{
                    Authorization:'acces_token' + acces_token
                }
            });
            return next.handle(req)
        }
        
    }
