import { Component } from '@angular/core';
import {UsersService} from './data/users.service';
import {UserEditDialogComponent} from './users/user-edit-dialog/user-edit-dialog.component';
import {User} from './contracts/users.interface';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'action']

  constructor(protected userService: UsersService, protected matDialog: MatDialog) {
  }

  editUser(user: User) {
    const dialogRef = this.matDialog.open(UserEditDialogComponent, {
      width: '250px',
      data: user
    });
  }
}
