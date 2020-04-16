import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {ClienteComponent} from './componentes/cliente/cliente.component';
import {ClientePrincipalComponent} from './componentes/cliente-principal/cliente-principal.component';
import {ClienteSolicitarComponent} from './componentes/cliente-solicitar/cliente-solicitar.component';
import {ClienteConsultarComponent} from './componentes/cliente-consultar/cliente-consultar.component';
import {AdminPrincipalComponent} from './componentes/admin-principal/admin-principal.component';
const routes: Routes=[
  {
    path: 'clienteRegistro',
    component: ClienteComponent
  },
  {
    path: 'clientePrincipal',
    component: ClientePrincipalComponent
  },
  {
    path: 'clienteSolicitar',
    component: ClienteSolicitarComponent
  },
  {
    path: 'clienteConsultar',
    component: ClienteConsultarComponent
  },
  {
    path:'adminPrincipal',
    component: AdminPrincipalComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
