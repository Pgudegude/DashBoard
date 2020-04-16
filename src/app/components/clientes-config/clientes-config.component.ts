import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';

@Component({
  selector: 'app-clientes-config',
  templateUrl: './clientes-config.component.html',
  styleUrls: ['./clientes-config.component.css']
})
export class ClientesConfigComponent implements OnInit {
  login: boolean
  usuario: any

  constructor(private service: ClienteService, private emissor:EmissorDeEventosService) { }

  ngOnInit() {
    this.verificarLogin();
  }
emissorDeEvento(){
  this.emissor.emitirEventoClienteAlterado()
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
