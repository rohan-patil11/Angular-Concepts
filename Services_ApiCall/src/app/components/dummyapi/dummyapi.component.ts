import { Component } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';

@Component({
  selector: 'app-dummyapi',
  templateUrl: './dummyapi.component.html',
  styleUrls: ['./dummyapi.component.css']
})
export class DummyapiComponent {

  data:any;
  posts:any;

  constructor(private DummyApiService:DummyApiService){

  }

  getAllBooks() {
  this.DummyApiService.getAllBooks().subscribe(response=>{
  this.data=response;
  console.log(response);
 });
}
getAllPosts(){
  this.DummyApiService.getAllPosts().subscribe(response1=>{
    this.posts=response1;
    console.log(response1);
   });
}

}
