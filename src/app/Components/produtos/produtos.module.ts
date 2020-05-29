import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
//import { BotaoComponent } from '../botao/botao.component';


@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
   // BotaoComponent
  ]
})
export class ProdutosModule { }
