import { ErrorTemplateComponent } from './error-template/error-template.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { SendPasswordComponent } from './send-password/send-password.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'form',
        component: LoginFormComponent, data: { animation: 'LoginFormPage' },
      },
      {
        path: 'error',
        component: ErrorTemplateComponent, data: { animation: 'ErrorTemplatePage' },
      },
      {
        path: 'register',
        component: RegisterComponent, data: { animation: 'RegisterPage' },
      },
      {
        path: 'register-success',
        component: RegisterSuccessComponent, data: { animation: 'RegisterSuccessPage' },
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent, data: { animation: 'ResetPasswordPage' },
      },
      {
        path: 'send-password',
        component: SendPasswordComponent, data: { animation: 'SendPasswordPage' },
      },
      {
        path: '**', redirectTo: 'form'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
