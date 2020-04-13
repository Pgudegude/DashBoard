import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoConfigComponent } from './components/produto-config/produto-config.component';
import { ClienteConfigComponent } from './components/cliente-config/cliente-config.component';


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
    path: "produto_config",
    component: ProdutoConfigComponent
  },{
    path: "cliente_config",
    component: ClienteConfigComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
