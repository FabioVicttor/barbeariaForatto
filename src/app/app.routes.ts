import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "agendamento",
        component: AgendamentoComponent
    },
    {
        path: "agenda",
        component: AgendaComponent
    },
    {
        path: "produtos",
        component: ProdutosComponent
    },

];
