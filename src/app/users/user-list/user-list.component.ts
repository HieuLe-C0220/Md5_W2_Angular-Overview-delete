import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';
import {IGroup} from '../igroup';
import {UserService} from '../user.service';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title_page = 'Users_list';

  users: IUser[] = [];

  // tạo 1 list ảo
  // userFilter = [];
  groups: IGroup[];
  constructor(private userService: UserService,
              private groupService: GroupService) {

  }

  ngOnInit(): void {
    // this.userFilter = this.users;
    this.users = this.userService.getUserList();
    this.groups = this.groupService.getGroupList();
    console.log(this.users);
    console.log(this.groups);
  }

  filterByKeyword(keyword) {
    return this.userService.getUserList().filter(user => {
      return user.name.indexOf(keyword) !== -1;
    });
  }

  search(event) {
    this.users = (event) ? this.filterByKeyword(event) : this.userService.getUserList();
  }


  // deleteById(id: number) {
  //   this.users.splice(id , id);
  // }
  deleteById(id) {
    let userDeleted = [];
    this.users.map(user => {
      if (user.id !== id) {
        userDeleted.push(user);
      }
    });
    this.users = userDeleted;
  }
}
