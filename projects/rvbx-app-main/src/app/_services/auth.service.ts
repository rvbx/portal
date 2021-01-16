import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }

  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  login(userEmail: string, password: string) {

    return this.http
      .post(environment.login, { userEmail, password }, { observe: 'response' })
      .pipe(
        tap(resposta => {
          const authToken = resposta.headers.get('x-access-token');
          this.tokenService.setToken(authToken);
          let token = this.parseJwt(authToken)
          console.log(token)
        })
      );
  }

}
