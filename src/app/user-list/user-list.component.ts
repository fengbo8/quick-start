import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { UserAddComponent } from './../user-add/user-add.component';
import { UserRemoveComponent } from './../user-remove/user-remove.component';

@Component({
  selector: 'work-demo',
  styleUrls: ['app/user-list/user-list.css'],
  templateUrl: 'app/user-list/user-list.html'
})

export class UserListComponent {
  userName: string = 'rongjing';
  userAge = 12;
}

export const appRoutes: Routes = [
  { path: 'user-add', component: UserAddComponent},
  { path: 'user-remove', component: UserRemoveComponent}
]

