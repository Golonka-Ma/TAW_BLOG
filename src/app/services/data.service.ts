import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }

  getLatestPosts(limit: number = 3) {
    return this.http.get(`${this.url}/api/posts/latest?limit=${limit}`);
  }

  addNew(data: any) {
    let header = new HttpHeaders().set('content-type', 'application/json');
    console.log('received data', data)
    return this.http.post(this.url + '/api/posts', data, {
      headers: header
    })
  }
}
