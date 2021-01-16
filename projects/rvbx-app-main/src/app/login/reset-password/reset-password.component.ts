import { ResetPasswordService } from '../_services/reset-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'rvbx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private router: Router
  ) { }

  loginForm: FormGroup = this.formBuilder.group({
    userEmail: ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
  }

  resetPassword() {
    const userEmail = this.loginForm.getRawValue()['userEmail'];
    this.resetPasswordService
      .resetPassword(userEmail)
      .subscribe(
        (retorno) => {
          if (retorno) {
            this.router.navigate(['/login/send-password'])
          } else {
            this.router.navigate(['/login/error'], {
              state: {
                template: 'reset-error'
              }
            });
          }
        },
        err => console.log(err)
      );
  }

}
