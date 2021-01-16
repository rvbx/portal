import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http: HttpClient) { }

  userEmailTaken(userEmail) {
    return this.http.get(environment.resetPassword + userEmail);
  }

  checkUserEmailTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userEmail =>
          this.userEmailTaken(userEmail)
        ))
        .pipe(map(isTaken => isTaken ? { userEmailTaken: true } : null))
        .pipe(tap(r => console.log(r)))
        .pipe(first());
    }
  }

  register(newUser) {
    return this.http.post(environment.register, newUser);
  }

}
