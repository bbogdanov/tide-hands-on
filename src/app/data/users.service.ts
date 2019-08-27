import {Injectable} from '@angular/core';
import {User} from '../contracts/users.interface';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getAllUsers(): Observable<User[]> {
    return of([{}] as User[]);
  }

  getOneUser(id: number): Observable<User> {
    return of({} as User);
  }

  editUser(id: number, user: User): Observable<User> {
    return of({} as User);
  }

}
