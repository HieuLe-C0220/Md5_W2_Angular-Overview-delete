import { Injectable } from '@angular/core';
import {IGroup} from './igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: IGroup[] = [
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
