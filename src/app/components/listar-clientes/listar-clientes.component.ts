import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { EmissorDeEventosService } from 'src/app/service/emissor-de-eventos.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  constructor(private http: ClienteService, private emissor:EmissorDeEventosService) { 
    this.emissor.emissor.subscribe(()=>this.buscarClientes())
  }

  ngOnInit(): void {
    this.buscarClientes()
  }

  clientes: Cliente [] = []
  buscarClientes(){
    this.http.listarClientes().subscribe(data=>{
    return this.clientes = data
    }) 
    console.log(this.clientes)
    }
   
  
}
