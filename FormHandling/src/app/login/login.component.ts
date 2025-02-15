import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username:any=''
password:any=''

  LogIn(myForm:any) {
  this.username=myForm.value.username;
  this.password=myForm.value.password;
  alert(this.username+"  "+this.password);
}
Loginn() {
console.log(this.username);
console.log(this.password);
}
}
