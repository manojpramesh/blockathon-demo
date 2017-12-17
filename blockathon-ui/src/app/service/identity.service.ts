import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IdentityService {

  root = `${(environment.production) ? '' : 'http://localhost:3000'}/api`;

  createIdentityApi = this.root + '/identity/createIdentity';
  readIdentity = this.root + '/identity/readIdentity';
  endorse = this.root + '/identity/endorse';
  endorsements = this.root + '/identity/endorsements';
  identityLogsUrl = this.root + '/identity/getEvents';

  constructor(private http: Http) { }

  getIdentity(address: string): Promise<any> {
    return this.http.get(this.readIdentity + '?address=' + address)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  getEndorsements(address: string): Promise<any> {
    return this.http.get(this.endorsements + '?address=' + address)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }


  createIdentity(user: string, identity: string): Promise<any> {
    return this.http.post(this.createIdentityApi, {
      user: user,
      data: identity
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
      });
  }

  createEndorsement(address: string): Promise<any> {
    return this.http.post(this.endorse, {
      address: address
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
      });
  }

  getIdentityLogs(): Promise<any> {
    return this.http.get(this.identityLogsUrl)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }
}
