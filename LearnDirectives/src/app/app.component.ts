import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LearnDirectives';

  //for ngIf
  data: any = {
    username: "ram",
    password: "1234"
  }

  //forngFor
  //1
  numbers: any = [1, 2, 3, 4];

  students: any = [
    {
      id: 1,
      name: "hello"
    },
    {
      id: 2,
      name: "hiii"
    }
  ]

  color:any="White";

  options:any="Option1";

  ishighlighted=false;
  Highlightonoff() {

    this.ishighlighted= !this.ishighlighted;

    }
    fontsize='30px';
    increase(){
      this.fontsize = (parseInt(this.fontsize)+2)+'px';
    }

    decrease(){
      this.fontsize = (parseInt(this.fontsize)-2)+'px';
    }


}
