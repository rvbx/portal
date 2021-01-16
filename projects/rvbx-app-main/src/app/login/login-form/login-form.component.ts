import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'rvbx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }


  loginForm: FormGroup = this.formBuilder.group({
    userEmail: ['', [Validators.required, Validators.email]],
    userPassword: ['', Validators.required],
  });

  login() {
    const userEmail = this.loginForm.get('userEmail').value;
    const password = this.loginForm.get('userPassword').value;

    this.authService
      .login(userEmail, password)
      .subscribe(
        () => this.router.navigate(['home']),
        err => {
          this.router.navigate(['/login/error'], {
            state: {
              template: 'login-error'
            }
          });
          this.loginForm.reset();
          return EMPTY
        }
      );
  }

  ngOnInit(): void {

  };

}
