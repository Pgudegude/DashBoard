import { Component, OnInit } from '@angular/core';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';


@Component({
  selector: 'app-pedido-config',
  templateUrl: './pedido-config.component.html',
  styleUrls: ['./pedido-config.component.css']
})
export class PedidoConfigComponent implements OnInit {
  login: boolean
  usuario: any

  constructor(private emissor: EmissorDeEventosService) { }

  ngOnInit() {
    this.verificarLogin();
  }
emitirEvento(){
  this.emissor.emitirEventoPedidoAlterado()
}

  verificarLogin(){
    if (sessionStorage.getItem("usuario") != null) {
      this.usuario = JSON.parse(atob(sessionStorage.getItem("usuario")))
      this.login = true
    }
    else {
      this.login = false
    }
  }

}
