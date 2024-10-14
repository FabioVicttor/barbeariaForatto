import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {

  }

  // Detectar cliques fora do menu
  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    const clickedInsideMenu = this.elementRef.nativeElement.contains(event.target);

    if (clickedInsideMenu) {
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
    } else {
      if (this.showMenu) {
        // Se o menu está aberto, fecha e atrasa a exibição da logo
        this.showMenu = false;
        setTimeout(() => {
          this.showLogoFlutuante = true;
        }, 250);
      }
    }
  }
}


