import { Component, ElementRef, HostListener } from '@angular/core';
import { DatabaseService } from '../../core/dataBase/database.service';
import { Produto } from '../../core/models/produtos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {

  dropdownVisible = false;
  controlaListaProdutos!: {
    produtos: Array<Produto>,
    paginas: number,
    paginaAtual: number,
    itensPorPagina: number,
  }
  filtro: {
    valor: "1" | "2" | "3" | false,
    label?: "Preço crescente" | "Preço decrescente" | "Ordem alfabetica"
  } = {
      valor: false
    }

  constructor(private dbService: DatabaseService, private eRef: ElementRef) {
    this.fetchData()
  }
  // Função para buscar dados do banco de dados
  fetchData() {
    this.dbService.readData('produtos').then((data) => {
      this.controlaListaProdutos = {
        produtos: data,
        paginas: 5,
        paginaAtual: 1,
        itensPorPagina: 5
      }

    }).catch((e) => {
      console.log(e)
    }).finally(() => {
    })
  }

  ordernar(param: string) {
    switch (param) {
      case '1':
        this.filtro = {
          valor: "1",
          label: "Preço crescente"
        }
        break;
      case '2':
        this.filtro = {
          valor: "2",
          label: "Preço decrescente"
        }
        break;
      case '3':
        this.filtro = {
          valor: "3",
          label: "Ordem alfabetica"
        }
        break;

      default:
        this.filtro = {
          valor: false
        }
        break;
    }
    this.toggleDropdown()
  }

  limpaOrdem() {
    this.filtro = {
      valor: false
    }
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownVisible = false;
    }
  }
  onDropdownClick(event: Event) {
    event.stopPropagation();
  }

}
