import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  string='rohan patil';
  Num=0.50;

  num=1234.5877;

  student={
    name:'Rohan',
    age:23

  }
  birthdate:any;
  genderselect={
    "Male":'Mr',
    "Female":'Mrs'
  }
gender: any='';
}
