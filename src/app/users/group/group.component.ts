import { Component, OnInit } from '@angular/core';
import {GroupStudent} from '../igroup';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }
  groups: GroupStudent[] = this.groupService.getGroupList();
}

