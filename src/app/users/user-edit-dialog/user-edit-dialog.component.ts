import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../contracts/users.interface';
import {UsersService} from '../../data/users.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {

  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    dateOfBirth: new FormControl(null)
  });

  constructor(
    public dialogRef: MatDialogRef<UserEditDialogComponent>,
    public userService: UsersService,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: User) {

  }

  ngOnInit() {
    if (this.data) {
      const data = Object.assign(this.data, {
        dateOfBirth: new Date(this.data.dateOfBirth)
      });

      this.userForm.setValue(data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(user: User) {

    console.log(this.data, ' vs ', user);
    this.userService.editUser(user.id, user).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
