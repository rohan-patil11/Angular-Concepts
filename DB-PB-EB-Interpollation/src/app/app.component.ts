import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DB-PB-EB-Interpollation';
  
  num=10


  obj={
    "name" : "hello"
  }

  arr=[1,2,3];

  isvalid=false;

// Property Binding
val1=20;

wanttodisable=false;

m1(){
  const a =10;
  const b =20;
console.log(a+b);
}

mouseOver(){
  alert("Mouse Over");
}

//Two way data Binding

myval=10;



}
