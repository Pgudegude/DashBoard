import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmissorDeEventosService {
  emissor: EventEmitter<string>
  constructor() {
    this.emissor = new EventEmitter
  }
  emitirUsuarioLogado(){
    this.emissor.emit("usuariologado")
  }
  emitirUsuarioDeslogado(){
    this.emissor.emit("usuarioDeslogado")
  }
  emitirEventoClienteAlterado(){
    this.emissor.emit("clienteAlterado")
  }
  emitirEventoProdutoAlterado(){
    this.emissor.emit("produtoAlterado")
  }
  emitirEventoPedidoAlterado(){
    this.emissor.emit("pedidoAlterado")
  }
}
