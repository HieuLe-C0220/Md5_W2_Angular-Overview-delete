import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../iuser';
import {GroupService} from '../group.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../user.service';
import {IGroup} from '../igroup';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  title_page = 'Edit user info';

  editUserForm: FormGroup;
  editUserId: string;
  editUser: IUser;
  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.editUserId = paramMap.get('id');
      this.editUser = this.userService.getUserById(+this.editUserId)
    })
  }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group(
      {
        id: [this.editUserId],
        name: [this.editUser.name, [Validators.required, Validators.minLength(4)]],
        email: [this.editUser.email, [Validators.required, Validators.email]],
        group_id: [this.editUser.group_id]
      }
    );
  }
  groupList: IGroup[] = this.groupService.getGroupList();
  get name(){
    return this.editUserForm.get('name')
  }

  get email(){
    return this.editUserForm.get('email');
  }

  editUserById() {
    let newUser = this.editUserForm.value;
    this.userService.editUserById(newUser);
    this.router.navigate(['user']);
    // console.log(this.userService.getUserList())
  }
}
