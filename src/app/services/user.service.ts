import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3001/api/user';

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.url}/details`);
  }

  updateUserDetails(user: any): Observable<any> {
    return this.http.put(`${this.url}/update`, user);
  }
}
