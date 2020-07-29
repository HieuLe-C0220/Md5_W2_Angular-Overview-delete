import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { InputSearchComponent } from './core/input-search/input-search.component';
import { GroupComponent } from './users/group/group.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    InputSearchComponent,
    GroupComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
