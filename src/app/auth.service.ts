import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate {



  canActivate(): boolean {
    console.log('AuthService#canActivate was called');
    return true;
  }

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
