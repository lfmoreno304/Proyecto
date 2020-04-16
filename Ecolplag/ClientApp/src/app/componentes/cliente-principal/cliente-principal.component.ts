import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.css']
})
export class ClientePrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calendarPlugins = [dayGridPlugin];
}
