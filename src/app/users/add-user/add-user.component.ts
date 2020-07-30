import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {GroupService} from '../group.service';
import {Router} from '@angular/router';
import {IGroup} from '../igroup';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) { }
  get name() {
    return this.newUserForm.get('name');
  }
  get email() {
    return this.newUserForm.get('email');
  }
  newUserForm: FormGroup;
  groups: IGroup[] = this.groupService.getGroupList();

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      group_id: ['']
    });
  }

  createNewUser() {
    let newUser = this.newUserForm.value;
    this.userService.add(newUser);
    this.router.navigate(['users']);
    // console.log(this.userService.getUserList()); //dung de kiem tra xem da add duoc chua
  }
}
