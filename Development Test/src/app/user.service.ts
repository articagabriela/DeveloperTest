import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

    // return what comes back from this http call
    getUsers() {
      return this.http.get(`${this.apiUrl}/users`);
    }
  
    getUser(userId){
      return this.http.get(`${this.apiUrl}/users/${userId}`);
    }
  
    addUser(data) {
      return this.http.post(`${this.apiUrl}/users`, data);
    }
  
    editUser(data){
      return this.http.put(`${this.apiUrl}/users/${data.id}`, data);
    }
  
    deleteUser(userId){
      return this.http.delete(`${this.apiUrl}/post/${userId}`);
    }
}
  

