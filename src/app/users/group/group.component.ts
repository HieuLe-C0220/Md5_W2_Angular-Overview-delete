import { Component, OnInit } from '@angular/core';
import {IGroup} from '../igroup';
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
  groupList: IGroup[] = this.groupService.getGroupList();
}

