import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './Components/editar/editar.component';


const routes: Routes = [
  { path: '', loadChildren: () => import
('./Components/produtos/produtos.module').then(m => m.ProdutosModule) },
{ path: 'editar', loadChildren: () => import
('./Components/editar/editar.component').then(m => m.EditarComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
