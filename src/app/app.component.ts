import { Component } from '@angular/core';
import {UsersService} from './data/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'action']

  constructor(protected userService: UsersService) {}

  editUser(userId: number) {
    // open modal.
  }
}
