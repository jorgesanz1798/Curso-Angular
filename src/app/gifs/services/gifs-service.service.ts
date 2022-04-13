import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  apiKey: string = 'WTjl6j9mo4TUOM9T5mxfsoEeKR1U3TME';
  servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultado: Gif[] = [];
  public images: string[] = [];

  constructor(
    private http: HttpClient
  ) {
    localStorage.getItem('historial') ? this._historial = JSON.parse(localStorage.getItem('historial')!) : this._historial = [];
    localStorage.getItem('images') ? this.resultado = JSON.parse(localStorage.getItem('images')!) : this.resultado = [];
  }

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(gif: string):void {
    if (!this._historial.includes(gif.trim().toLowerCase())) {
      this._historial.unshift(gif);
    };
    this._historial = this._historial.splice(0, 10);
    localStorage.setItem('historial', JSON.stringify(this._historial));
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', gif)
      .set('limit', '10');
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, {params: params}).subscribe(
      (resp: SearchGifsResponse) => {
        this.resultado = resp.data;
        localStorage.setItem('images', JSON.stringify(this.resultado));
      }
    );
  }
}
