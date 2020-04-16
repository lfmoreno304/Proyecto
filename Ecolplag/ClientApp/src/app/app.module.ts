import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule} from '@fullcalendar/angular';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ClientePrincipalComponent } from './componentes/cliente-principal/cliente-principal.component';
import { ClienteSolicitarComponent } from './componentes/cliente-solicitar/cliente-solicitar.component';
import { ClienteConsultarComponent } from './componentes/cliente-consultar/cliente-consultar.component';
import {ClienteService} from './services/cliente.service';
import { AdminPrincipalComponent } from './componentes/admin-principal/admin-principal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteComponent,
    ClientePrincipalComponent,
    ClienteSolicitarComponent,
    ClienteConsultarComponent,
    AdminPrincipalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
