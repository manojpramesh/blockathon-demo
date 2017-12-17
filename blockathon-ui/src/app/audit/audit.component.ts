import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../service/identity.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css'],
  providers: [IdentityService, TokenService]
})
export class AuditComponent implements OnInit {

  identityLogs;
  tokenLogs;

  constructor(private identityService: IdentityService, private tokenService: TokenService) { }

  ngOnInit() {
    this.getIdentity();
    this.getToken();
  }

  getIdentity() {
    this.identityService.getIdentityLogs()
      .then(result => {
        this.identityLogs = result;
      }, error => {
        console.log(error);
      });
  }

  getToken() {
    this.tokenService.getTokenLogs()
      .then(result => {
        this.tokenLogs = result;
      }, error => {
        console.log(error);
      });
  }
}
