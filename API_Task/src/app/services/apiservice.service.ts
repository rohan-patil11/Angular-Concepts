import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  [x: string]: any;

  constructor(private http:HttpClient) {

  }
  GetAllComments(): Observable <any> {
   return this.http.get('https://dummyjson.com/comments') ;
  }
  GetAllPosts(): Observable <any> {
    return this.http.get('https://dummyjson.com/posts') ;
   }
}
