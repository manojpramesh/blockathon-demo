import { Injectable } from '@angular/core';

@Injectable()
export class User {

  _id: string;
  name: string;
  address: string;
  email: string;
  privateKey: string;
  role: string;
  identity: string;

  deserialize(user) {
    this._id = user._id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.privateKey = user.privateKey;
    this.role = user.role;
    this.identity = user.identity;
  }

  destroy() {
    this._id =
      this.name =
      this.address =
      this.email =
      this.privateKey =
      this.role =
      this.identity = undefined;
  }
}
