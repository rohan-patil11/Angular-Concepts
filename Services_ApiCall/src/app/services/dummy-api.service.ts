import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http:HttpClient) {

   }
   getAllBooks(): Observable <any>{
  return this.http.get('http://localhost:8181/FetchAllBooks');
   }
   getAllPosts():Observable <any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
     }
}
