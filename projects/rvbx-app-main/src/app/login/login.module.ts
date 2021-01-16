import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RvbxDesignSystemModule } from '@rvbx/design-system';
import { SendPasswordComponent } from './send-password/send-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { ErrorTemplateComponent } from './error-template/error-template.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    LoginFormComponent,
    SendPasswordComponent,
    RegisterSuccessComponent,
    ErrorTemplateComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RvbxDesignSystemModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
