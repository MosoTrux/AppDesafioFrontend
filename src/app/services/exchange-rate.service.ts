import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GenericResponse, IExchangeRate, IApplyExchangeRate } from '../exchange-rate/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  domainUrl : string = 'https://localhost:44339/';
  constructor(private http: HttpClient) { }

  listExchangeRate(): Observable<IExchangeRate[]> {
    return this.http
    .get<GenericResponse<IExchangeRate[]>>(this.domainUrl + 'api/TipoCambio/Listar')
    .pipe(map((r) => r.data));
  }

  getByCode(codigoIso : string): Observable<IExchangeRate> {
    return this.http
    .get<GenericResponse<IExchangeRate>>(this.domainUrl + 'api/TipoCambio/ObtenerPorCodigo?codigo=' + codigoIso)
    .pipe(map((r) => r.data));
  }
  
  addExchangeRate(codigoIso : string, divisa : string, valor : number): Observable<boolean> {
    const data = {
      codigoIso: codigoIso,
      divisa: divisa,
      valor: valor
    };
    return this.http
    .post<GenericResponse<boolean>>(this.domainUrl + 'api/TipoCambio/Agregar', data)
    .pipe(map((r) => r.isSuccess));
  }
  
  editExchangeRate(codigoIso : string, divisa : string, valor : number): Observable<boolean> {
    const data = {
      divisa: divisa,
      valor: valor
    };
    return this.http
    .put<GenericResponse<boolean>>(this.domainUrl + 'api/TipoCambio/Actualizar?codigoIso=' + codigoIso, data)
    .pipe(map((r) => r.isSuccess));
  }
  
  applyExchangeRate(monto : number, monedaOrigen : string, monedaDestino : string): Observable<IApplyExchangeRate> {
    return this.http
    .get<GenericResponse<IApplyExchangeRate>>(this.domainUrl + 'api/TipoCambio/Aplicar?monto=' + monto + '&monedaOrigen=' + monedaOrigen + '&monedaDestino=' + monedaDestino)
    .pipe(map((r) => r.data));
  }
}
