import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {GroupService} from '../group.service';
import {Router} from '@angular/router';
import {GroupStudent} from '../igroup';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      group_id: ['2']
    });
  }
  groupList: GroupStudent[] = this.groupService.getGroupList();

  createNewUser() {
    let newUser = this.newUserForm.value;
    this.userService.add(newUser);
    this.router.navigate(['user']);
    // console.log(this.userService.getUserList()); //dung de kiem tra xem da add duoc chua
  }
  get name() {
    return this.newUserForm.get('name');
  }
  get email() {
    return this.newUserForm.get('email');
  }
}
