import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    const temp = Math.random();
    if ( temp <= 0.5) {
      alert('您未登录');
    }
    return temp > 0.5;
  }
}
