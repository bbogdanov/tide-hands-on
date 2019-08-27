import {Injectable} from '@angular/core';
import {User} from '../contracts/users.interface';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(protected http: HttpClient) {}

  getAllUsers: Observable<User[]> = this.http.get('/assets/users.json') as Observable<User[]>;

  getOneUser(id: number): Observable<User> {
    return of({} as User);
  }

  editUser(id: number, user: User): Observable<User> {
    return this.http.put(`/users/${id}`, user) as Observable<User>;
  }

}
