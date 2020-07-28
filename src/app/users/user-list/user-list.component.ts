import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  title_page = 'Users';
  users: IUser[] = [];
  setUserList(): IUser[] {
    const users = [
      {
        id: 1,
        name: 'Hieu',
        email: 'hieu@gmail.com'
      },
      {
        id: 2,
        name: 'Trung',
        email: 'trung@gmail.com'
      },
      {
        id: 3,
        name: 'Dung',
        email: 'dung@gmail.com'
      },
      {
        id: 4,
        name: 'Thien',
        email: 'thien@gmail.com'
      },
      {
        id: 5,
        name: 'Huan',
        email: 'huan@gmail.com'
      }
    ];
    return users;
  }
  // tạo 1 list ảo
  // userFilter = [];

  constructor() { }

  ngOnInit(): void {
    // this.userFilter = this.users;
    this.users = this.setUserList();
  }
  search(event) {
    let keyword = event.target.value;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.setUserList();
  }

  filterByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) !== -1;
    });
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
