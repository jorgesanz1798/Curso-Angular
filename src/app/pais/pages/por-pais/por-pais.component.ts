import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string="";
  paises: Country[] = [];
  hayError: boolean = false;
  sugerenciasPaises: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }
  buscar(termino: string): void {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPaises(this.termino).subscribe({
      next: (paises: Country[]) => {
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPaises(termino).subscribe({
      next: (paises: Country[]) => {
        this.sugerenciasPaises = paises.splice(0,3);
        console.log(this.sugerenciasPaises);
      },
      error: (err) => {
        this.sugerenciasPaises = [];
      }
    });
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

}
