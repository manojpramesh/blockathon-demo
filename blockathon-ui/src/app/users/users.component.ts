import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { UserService } from '../service/user.service';
import { IdentityService } from '../service/identity.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService, IdentityService]
})
export class UsersComponent implements OnInit {

  users;

  constructor(private userService : UserService, private identityService: IdentityService) { }

  ngOnInit() {
    this.getAccounts();
  }

    getAccounts() {
    this.userService.getUsers()
      .then(result => {
        this.users = result;
      }, error => {
        console.log(error);
      })
  }

}
