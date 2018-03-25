import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

  canActivate() {
    console.log('AuthService#canActivate was called');
    return true;
  }

  constructor() { }

}
