import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any=''
  password:any=''
Login() {
alert(this.username+"   "+this.password);
}


}
