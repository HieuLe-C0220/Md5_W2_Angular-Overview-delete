import { Component, OnInit } from '@angular/core';
import {GroupStudent} from '../igroup';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups: GroupStudent[] = [
    {
      id: 1,
      name: 'Java'
    },
    {
      id: 2,
      name: 'PHP'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

