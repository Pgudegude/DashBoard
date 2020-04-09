import { Component, OnInit } from '@angular/core';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  


  constructor(private emissor: EmissorDeEventosService,private route: Router) { }

  ngOnInit(): void {
  }

  deslogar() {
    sessionStorage.removeItem("usuario")
    alert("Você saiu do DashBoard")
    this.emissor.emitirUsuarioLogado()
    this.route.navigate([""])
  }


}
