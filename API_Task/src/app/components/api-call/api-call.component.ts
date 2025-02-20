import { Component } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent {

  posts:any;
  comments: any[] = [];
  

  constructor(private ApiserviceService:ApiserviceService){

  }
GetAllComments() {
this.ApiserviceService.GetAllComments().subscribe(response =>{
  this.comments = response.comments;
});
}

GetAllPosts()  {
  this.ApiserviceService.GetAllPosts().subscribe(response1 =>{
  this.posts=response1;

  });
}
}
