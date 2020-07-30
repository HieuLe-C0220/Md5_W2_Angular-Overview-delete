import { Injectable } from '@angular/core';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'Hieu',
      email: 'hieu@gmail.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'Trung',
      email: 'trung@gmail.com',
      group_id: 1
    },
    {
      id: 3,
      name: 'Dung',
      email: 'dung@gmail.com',
      group_id: 2
    },
    {
      id: 4,
      name: 'Thien',
      email: 'thien@gmail.com',
      group_id: 2
    },
    {
      id: 5,
      name: 'Huan',
      email: 'huan@gmail.com',
      group_id: 1
    },
    {
      id: 6,
      name: 'Dang',
      email: 'dang@gmail.com',
      group_id: 2
    },
    {
      id: 7,
      name: 'Vinh',
      email: 'vinh@gmail.com',
      group_id: 1
    },
    {
      id: 8,
      name: 'Phong',
      email: 'phong@gmail.com',
      group_id: 1
    },
    {
      id: 9,
      name: 'Thuy',
      email: 'thuy@gmail.com',
      group_id: 2
    },
    {
      id: 10,
      name: 'Doan',
      email: 'doan@gmail.com',
      group_id: 1
    }
  ];
  constructor() { }
  public getUserList() {
    return this.users;
  }

  getUserById(id:number): IUser{
    for (let i = 0; i< this.users.length; i++) {
      if(this.users[i].id == id){
        return this.users[i]
      }
    }
  }

  editUserById(user:IUser) {
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id == user.id){
        this.users[i] = user;
      }
    }
  }

  add(user: IUser): void {
    this.users.push(user);
  }
}
