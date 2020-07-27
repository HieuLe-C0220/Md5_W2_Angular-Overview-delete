import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title_page = 'Users';
  users: IUser[] = [
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
  // tạo 1 list ảo
  userFilter = [];

  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }
  search(event) {
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filterByKeyword(keyword) : this.users;
  }

  filterByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) !== -1;
    })
  }
  deleteById(id: number) {
    this.userFilter.splice(id , id);
  }
}
