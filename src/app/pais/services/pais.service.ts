import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  
  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,flags,population,cca2');
  }

  constructor(
    private http: HttpClient
  ) { }

  buscarPaises(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, { params: this.httpParams });
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`, { params: this.httpParams });
  }

  verPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${termino}`);
  }

  buscarPorRegion(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${termino}`, { params: this.httpParams });
  }

}
