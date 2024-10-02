import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // localStorage.setItem('user', JSON.stringify(user));
        // this.router.navigate(['/Home']);
      } else {
        // this.logout()
        // localStorage.removeItem('user');
        // this.router.navigate(['/Login']);
      }
    });
  }

  loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
      })
  }

  logout() {
    return this.afAuth.signOut();
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}