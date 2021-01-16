import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(public http: HttpClient) { }

  resetPassword(userEmail) {
    return this.http.get(environment.resetPassword + userEmail);
  }
}
