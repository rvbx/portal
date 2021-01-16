import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'rvbx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {

  }

  loginForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    userLastName: ['', [Validators.required, Validators.minLength(3)]],
    userEmail: ['', [Validators.required, Validators.email], this.registerService.checkUserEmailTaken()],
    userPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
  });

  ngOnInit(): void {
  }

  register() {
    const newUser = this.loginForm.getRawValue();
    console.log(newUser)
    this.registerService
      .register(newUser)
      .subscribe(
        () => this.router.navigate(['/login/register-success']),
        err => console.log(err)
      );
  }

}
