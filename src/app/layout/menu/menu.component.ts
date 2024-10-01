import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  showMenu: boolean = false;
  showLogoFlutuante: boolean = true;

  constructor() {

  }

  toggleMenu() {
    if (this.showMenu) {
      // Se o menu está aberto, fecha e atrasa a exibição da logo
      this.showMenu = false;
      setTimeout(() => {
        this.showLogoFlutuante = true;
      }, 250);
    } else {
      // Abre o menu e oculta a logo imediatamente
      this.showLogoFlutuante = false;
      this.showMenu = true;
    }
  }
}


