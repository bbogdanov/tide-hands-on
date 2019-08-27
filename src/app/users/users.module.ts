import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserEditDialogComponent} from './user-edit-dialog/user-edit-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [
    UserEditDialogComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  entryComponents: [
    UserEditDialogComponent
  ],
  exports: [
    UserEditDialogComponent,
    MatDatepickerModule
  ]
})
export class UsersModule {
}
