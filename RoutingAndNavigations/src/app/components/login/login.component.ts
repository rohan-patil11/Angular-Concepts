import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any = ''
  password: any = ''

  constructor(private r: Router) {

  }

  Login() {
    if (this.username === 'Rohan' && this.password ==='123') {
      this.r.navigate(['/Home'])
    } else {
      this.r.navigate(['/LogIn'])
    }
  }

}
