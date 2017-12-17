import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { UserService } from '../service/user.service';
import { IdentityService } from '../service/identity.service';


@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],
  providers: [UserService, IdentityService]
})
export class IdentityComponent implements OnInit {

  identity = new Identity();
  getIdentityAddress;
  users;
  IdentityData;

  constructor(private userService: UserService, private identityService: IdentityService) { }

  ngOnInit() {
    this.getAccounts();
  }

  createIdentity() {

    const name = this.identity.name;

    const address = this.users.filter(function (el) {
      return (el.name === name);
    })[0].address;

    const createId = this.identityService.createIdentity(address, JSON.stringify(this.identity));

    swal.queue([{
      title: 'Identity',
      confirmButtonText: 'Create',
      text: 'Do you want to create and identity for the user',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return createId.then(result => {
          this.getAccounts();
          swal.insertQueueStep({
            title: 'Identity created',
            text: result,
            type: 'success'
          });
        }, error => {
          console.log(error);
        });
      }
    }]);
  }

  getAccounts() {
    this.userService.getUsers()
      .then(result => {
        this.users = result;
      }, error => {
        console.log(error);
      });
  }

  getIdentity() {
    this.IdentityData = '';
    this.identityService.getIdentity(this.getIdentityAddress)
      .then(result => {
        this.IdentityData = result;
      }, error => {
        console.log(error);
      });
  }

}

class Identity {
  name: string;
  phone: string;
  house: string;
  aadhar: string;
  street: string;
  state: string;
}
