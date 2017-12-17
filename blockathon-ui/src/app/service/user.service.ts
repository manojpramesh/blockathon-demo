import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  root = `${(environment.production) ? '' : 'http://localhost:3000'}/api`;

  getUsersApi = this.root + '/users/allUsers';
  profile = this.root + '/users/profile';
  signInApi = this.root + '/users/signIn';
  signUpApi = this.root + '/users/signup';

  constructor(private http: Http) { }

  getUsers(): Promise<any> {
    return this.http.get(this.getUsersApi)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  getProfile(): Promise<any> {
    return this.http.get(this.profile)
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
      });
  }

  signIn(username, password): Promise<any> {
    return this.http.post(this.signInApi, {
      email: username,
      password: password
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
      });
  }

  signUp(name, password, email, role): Promise<any> {
    return this.http.post(this.signUpApi, {
      name: name,
      email: email,
      role: role,
      password: password
    })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        console.log('An Error occured', error);
        return Promise.reject(error.message || error);
      });
  }

}
