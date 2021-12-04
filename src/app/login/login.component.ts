import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  isSuccessFul=false;
  isSignUpFailed=false;
  errormessage='';

  constructor(private userService: UserService,
    private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
  }

  role:string=''
  login(): void{

    this.userService.login(this.user).subscribe({
      next: (data)=>{
        this.isSuccessFul=true;
        this.tokenStorageService.saveToken(data.token);
        //this.tokenStorageService.saveUser(date);
        //this.role =this.tokenStorageService.getUser().role;
      },
      error:(error:Error)=>{
        this.errormessage=error.message;
        this.isSignUpFailed=true;
        this.isSuccessFul=false;

      },
      complete:()=>{
        console.log('login completado');
      }
    });

  }

  realoadPage(): void{
    window.location.reload();
  }

}
