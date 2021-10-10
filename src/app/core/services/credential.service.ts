import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from '../../../../node_modules/jwt-decode';
import { RoleEnum } from 'src/app/core/enums/role.enum';
import { ConstEnum } from 'src/app/core/enums/const.enum';


@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(
    private router: Router
  ) { }

  getToken() {
    return localStorage.getItem(ConstEnum.token);
  }

  getUser() {
    const user = jwt_decode(this.getToken());
    return user;
  }

  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    const token = this.getUser();
    if (token.role === RoleEnum.Admin) {
      return true;
    } else {
      return false;
    }
  }

  isNormalUser() {
    const token = this.getUser();
    if (token.role === RoleEnum.NormalUser) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem(ConstEnum.token);
    this.router.navigate(['/login']);
  }

}
