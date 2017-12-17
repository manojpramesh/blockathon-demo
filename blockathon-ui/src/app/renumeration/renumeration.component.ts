import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { UserService } from '../service/user.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-renumeration',
  templateUrl: './renumeration.component.html',
  styleUrls: ['./renumeration.component.css'],
  providers: [UserService, TokenService]
})  
export class RenumerationComponent implements OnInit {
  
  users;
  balanceTo;
  value;
  
  balanceFor;
  balance;

  constructor(private userService : UserService, private tokenService: TokenService) { }

  ngOnInit() {
    this.getAccounts();
  }

  transfer() {

    const createToken = this.tokenService.transferAmount(this.balanceTo, this.value);
    swal.queue([{
      title: 'Token',
      confirmButtonText: 'Create',
      text: 'Do you want to send token to the user',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return createToken.then(result => {
            swal.insertQueueStep({
              title: 'Token sent',
              type: 'success'
            });
          }, error => {
            console.log(error);
          });
      }}]);
  }

  getBalance() {
    this.tokenService.getBalance(this.balanceFor)
      .then(result => {
          this.balance = result;
      }, error => {
        console.log(error);
      })
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
