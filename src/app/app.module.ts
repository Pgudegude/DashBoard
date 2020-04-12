import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutoConfigComponent } from './components/produto-config/produto-config.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SeletorProdutoComponent } from './components/seletor-produto/seletor-produto.component'

export let options: Partial<IConfig> | (() => Partial<IConfig>);

import { PedidoComponent } from './components/pedido/pedido.component';
import { HeaderComponent } from './components/header/header.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    PedidoComponent,
    HeaderComponent,
    MenuComponent,
    ProdutoConfigComponent,
    SeletorProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgxMaskModule.forRoot(options)

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
