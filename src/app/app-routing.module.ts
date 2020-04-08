import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {PedidoComponent} from './components/pedido/pedido.component';
import {HomeComponent}   from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';

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
    path: "pedido",
    component: PedidoComponent
  },
 

 
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }