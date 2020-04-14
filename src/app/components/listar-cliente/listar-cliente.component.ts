import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  
  clientes: any = []

  constructor(private service: ClienteService) { }

  ngOnInit(){
    this.listar()
  }


  listar(){
    this.service.listarCliente().subscribe((client)=>{
      this.clientes = client
    })
  }
}
