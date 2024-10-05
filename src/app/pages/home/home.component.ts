import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/auth/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private auth: AuthService) {
    console.log("enviroment prod: ", environment.production)
  }

  validaLogin(){
    this.auth.loginWithGoogle()
  }

}
