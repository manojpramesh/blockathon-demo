import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../user.shared';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loginForm: Boolean = true;
  login_name: String;
  login_password: String;
  register_name: String;
  register_password: String;
  register_email: String;
  register_role: String;

  roles = ['user', 'government', 'employer'];

  constructor(private userService: UserService, private router: Router, private user: User) { }

  ngOnInit() {
  }

  login() {
    this.userService.signIn(this.login_name, this.login_password)
      .then(result => {
        if (result) {
          this.router.navigate(['/home']);
          this.user.deserialize(result[0]);
        }
      }, error => {
        alert('Incorrect username or password');
      });
  }

  register() {
    this.userService.signUp(this.register_name, this.register_password, this.register_email, this.register_role)
      .then(result => {
        swal({
          title: 'User registration success',
          type: 'success',
        });
      }, error => {
        console.log(error);
      });
  }

  toggleForm() {
    this.loginForm = !this.loginForm;
  }

}
