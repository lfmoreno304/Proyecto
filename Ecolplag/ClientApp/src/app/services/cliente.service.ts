import { Injectable, Inject } from '@angular/core';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../componentes/models/cliente';
import { Observable, } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  post(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl + 'api/Cliente', cliente)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente>('Registrar Persona', null))
      );
  }
}
