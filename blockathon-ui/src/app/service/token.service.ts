import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TokenService {

  root = `${(environment.production) ? '' : 'http://localhost:3000'}/api`;

  checkBalance = this.root + '/token/checkBalance';
  transfer = this.root + '/token/transfer';
  mint = this.root + '/token/mint';
  tokenLogsUrl = this.root + '/token/getEvents';

  constructor(private http: Http) { }

  getBalance(address: string): Promise<any> {
    return this.http.get(this.checkBalance + '?address=' + address)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  transferAmount(to: string, amount: number): Promise<any> {
    return this.http.post(this.transfer, {
      to: to,
      value: amount
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  mintAmount(to: string, amount: number): Promise<any> {
    return this.http.post(this.mint, {
      to: to,
      value: amount
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
      });
  }

  getTokenLogs(): Promise<any> {
    return this.http.get(this.tokenLogsUrl)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

}
