import { Component, OnInit } from '@angular/core';
import {Role} from '../model/role';
import {User} from '../model/user';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();
  isSuccessFul=false;
  isSignUpFailed=false;
  errormessage='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  listaRoles: Role[] = [
    { id: 0, name: '----' },
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },

  ];


createUser(){
  console.log(this.user.email);
  console.log(this.user.password);
  console.log(this.user.role);

  this.userService.register(this.user).subscribe({
    next: (data) => {
      console.log('Observer got a next value: ' + data);
      this.isSuccessFul=false;
      this.isSignUpFailed=false;
    },
    error: (err: Error) => {
      this.errormessage=err.message;
      this.isSignUpFailed=true;
      console.error('Observer got an error: ' + err.message);
    },
    complete: () => console.log('Observer got a complete notification'),
  });

}

}
