import { Injectable } from '@angular/core';
import {GroupStudent} from './igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
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
  public getGroupList() {
    return this.groups;
  }
}
