import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import {PedidoComponent} from './components/pedido/pedido.component';
import {HomeComponent}   from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
=======
import { HomeComponent } from './components/home/home.component';

>>>>>>> bdb41541ddcbb2616378dae30af57b3942906a0c

export const ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
<<<<<<< HEAD
  },
  {
    path: "produto",
    component: ProdutoComponent
  },
  {
    path: "pedido",
    component: PedidoComponent
  },
 

 
=======
  }
>>>>>>> bdb41541ddcbb2616378dae30af57b3942906a0c
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
