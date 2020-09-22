import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) {}

  user(): Observable<any> {
    const url = '/user';
    return this.http.get('assets/json/users.json');
  }

  roles(): Observable<any> {
    const url = '/diets/type';
    return this.http.get('assets/json/roles.json');
  }
}
