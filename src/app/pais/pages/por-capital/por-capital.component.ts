import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string="";
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino).subscribe({
      next: (paises: Country[]) => {
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }

}
