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
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { DeletarProdutoComponent } from './components/deletar-produto/deletar-produto.component';
import { AlterarProdutoComponent } from './components/alterar-produto/alterar-produto.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { ClienteConfigComponent } from './components/cliente-config/cliente-config.component';
import { AlterarClienteComponent } from './components/alterar-cliente/alterar-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';

export let options: Partial<IConfig> | (() => Partial<IConfig>);


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MenuComponent,
    ProdutoConfigComponent,
    CriarProdutoComponent,
    DeletarProdutoComponent,
    AlterarProdutoComponent,
    ListarProdutosComponent,
    ClienteConfigComponent,
    AlterarClienteComponent,
    ListarClienteComponent,
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
