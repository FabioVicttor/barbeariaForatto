import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth'; // Para pegar a instância de autenticação

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>; // Observable para acompanhar o estado do usuário

  constructor(private auth: Auth, private router: Router) {
    this.user$ = new Observable((observer) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(user); // Emitir o estado do usuário
        } else {
          observer.next(null);
        }
      });
    });
  }

  // Função para login com Google
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      if (result.user) {
        localStorage.setItem('user', JSON.stringify(result.user));
        this.router.navigate(['/']); // Redirecionar após o login
      }
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
    }
  }

  // Função para logout
  logout() {
    return signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']); // Redirecionar após logout
    });
  }

  // Função para pegar o usuário logado
  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
