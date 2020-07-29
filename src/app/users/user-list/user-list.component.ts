import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';
import {GroupStudent} from '../igroup';
import {UserService} from '../user.service';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  title_page = 'Users_list';
  users: IUser[] = [];
  // tạo 1 list ảo
  // userFilter = [];
  groups: GroupStudent[];
  constructor(private userService: UserService,
              private groupService: GroupService) {

  }

  ngOnInit(): void {
    // this.userFilter = this.users;
    this.users = this.userService.getUserList();
    this.groups = this.groupService.getGroupList();
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
