import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'rvbx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
    ) { }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
