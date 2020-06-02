import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './Components/botao/botao.component';
import { EditarComponent } from './Components/editar/editar.component';
import { NovoComponent } from './Components/novo/novo.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    EditarComponent,
    NovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
