import { Component, OnInit } from '@angular/core';
import { User } from '../user.shared';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, public user: User, private router: Router) { }

  ngOnInit() {
    if (!this.user._id) {
    this.userService.getProfile()
      .then(result => {
        if (result.legth > 0) {
          this.user.deserialize(result[0]);
        } else {
          this.router.navigate(['/login']);
        }
      }, error => {
        console.log(error);
        this.router.navigate(['/login']);
      });
    }
  }

  logout() {
    this.user.destroy();
    this.router.navigate(['/login']);
  }

}
