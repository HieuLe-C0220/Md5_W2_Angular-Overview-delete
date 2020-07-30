import { Component, OnInit } from '@angular/core';
import {IUser} from '../../users/iuser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: IUser
  constructor() { }

  ngOnInit(): void {
  }

}
