import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  datauser: Object = {}
  profileform = new FormGroup({
    _id: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id =  this.route.snapshot.paramMap.get('_id');
    this.authService.Profile(id).subscribe(res=>{
      this.datauser = res
      this.profileform.setValue({
        _id : res._id,
        email: res.email,
        username: res.username,
        password:''
      })
      
    })
  }

  update() : void{

  }

}
