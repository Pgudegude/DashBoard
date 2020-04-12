import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {PedidoComponent} from './components/pedido/pedido.component';
import {HomeComponent}   from './components/home/home.component';
import { ProdutoConfigComponent } from './components/produto-config/produto-config.component';


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
    path: "pedido",
    component: PedidoComponent},{
    path: "produto_config",
    component: ProdutoConfigComponent
  }

 
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
