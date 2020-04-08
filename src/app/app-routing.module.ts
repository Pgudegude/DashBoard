import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
