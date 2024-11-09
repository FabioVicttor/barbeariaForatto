import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/auth/firebase.service';
import { DatabaseService } from '../../core/dataBase/database.service';
import { Produto } from '../../core/models/produtos';
import { CommonModule } from '@angular/common';
import { Barbeiro } from '../../core/models/barbeiro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  produtos!: Array<Produto>
  barbeiros!: Array<Barbeiro>

  constructor(private auth: AuthService, private dbService: DatabaseService, private router: Router) {
    console.log("enviroment prod: ", environment.production)
    this.fetchData()
  }

  validaLogin() {
    // this.auth.loginWithGoogle()
    // this.saveData()
  }

  // Função para salvar dados no banco de dados
  saveData() {
    const data = { name: 'Barbearia Foratto', services: ['Corte', 'Barba'] };
    this.dbService.writeData('barbeariaForatto', data);
  }

  // Função para buscar dados do banco de dados
  fetchData() {
    this.dbService.readData('produtos').then((data) => {
      this.produtos = data;
      this.produtos = this.produtos.slice(0, 4)
    });
    this.dbService.readData('barbeiros').then((data) => {
      this.barbeiros = data;
      console.log(this.barbeiros);
    });
  }

  redirectToAgendamento() {
    this.router.navigate(['agendamento'])
  }

  redirectToProdutos() {
    this.router.navigate(['produtos'])
  }

}
