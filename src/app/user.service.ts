import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root'})

export class UserService {
    constructor(private http: HttpClient) { }

    login(user :any){
        return this.http.post('/api/login', user);
    }
    
    register(user : any){
        return this.http.post('/api/register', user);
    }
}