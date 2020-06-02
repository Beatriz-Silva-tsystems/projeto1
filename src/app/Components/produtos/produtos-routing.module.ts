import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { EditarComponent } from '../editar/editar.component';
import { NovoComponent } from '../novo/novo.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'editar', component:EditarComponent},
  { path: 'novo', component:NovoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
