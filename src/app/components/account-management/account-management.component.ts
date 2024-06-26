import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AccountManagementComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: '',
    newPassword: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUserDetails().subscribe(user => {
      this.user.name = user.name;
      this.user.email = user.email;
    });
  }

  updateDetails() {
    const updatedUser = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      newPassword: this.user.newPassword
    };

    this.userService.updateUserDetails(updatedUser).subscribe(response => {
      alert('Dane zostały zaktualizowane pomyślnie!');
      this.router.navigate(['/']);
    });
  }
}
