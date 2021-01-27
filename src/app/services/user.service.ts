import { baseURL } from './../shared/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`/users/` + id);
    }

    register(user: User) {
       return this.http.post(`/users/register`, user);

    }

    update(user: User) {
        return this.http.put(`/users/` + user.cin, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}