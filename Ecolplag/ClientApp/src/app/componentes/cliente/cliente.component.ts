import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../services/cliente.service';
import { Cliente} from './../models/cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente:Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente=new Cliente();
  }
  Registrar(){
    this.clienteService.post(this.cliente).subscribe(p=>{
      if(p!=null){
        alert("Se ha registrado: "+ p.nombre)
        this.cliente=p;
      }
    })
  }
}
