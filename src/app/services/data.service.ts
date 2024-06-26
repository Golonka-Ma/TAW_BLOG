import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }

  addNew(data: any) {
    let header = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this.url + '/api/posts', data, { headers: header });
  }

  updatePost(id: string, data: any) {
    let header = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(this.url + '/api/post/' + id, data, { headers: header });
  }

  deletePost(id: string) {
    return this.http.delete(this.url + '/api/post/' + id);
  }
}
