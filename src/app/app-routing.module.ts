import { FaturamentoConfigComponent } from './components/faturamento-config/faturamento-config.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';

import { ProdutoConfigComponent } from './components/produto-config/produto-config.component';
import { PedidoConfigComponent } from './components/pedido-config/pedido-config.component';
import { ClientesConfigComponent } from './components/clientes-config/clientes-config.component';



export const ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "produto",
    component: ProdutoComponent
  },
  {
    path: "home/pedido",
    component: PedidoConfigComponent
  },
  {
    path: "pedido",
    component: PedidoConfigComponent
  }, {
    path: "clientes",
    component: ClientesConfigComponent
  },
  {
    path: "produto_config",
    component: ProdutoConfigComponent
  }, {
    path: "cliente_config",
    component: ClientesConfigComponent
  },
  {
    path: "faturamento",
    component: FaturamentoConfigComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
