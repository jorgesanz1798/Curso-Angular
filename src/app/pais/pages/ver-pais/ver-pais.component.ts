import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  termino: string="";
  pais!: Country;
  hayError: boolean = false;

  constructor(
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( (params) => this.paisService.verPais(params['id']) ),
      tap( (pais) => this.pais = pais[0] ),
    ).subscribe(
      (pais: Country[]) => {
        this.pais = pais[0];
        this.hayError = false;
      }
    );

    //OTRA OPCION
    // this.activatedRoute.params.subscribe(
    //   (params) => {
    //     this.termino = params['id'];
    //     this.paisService.verPais(this.termino).subscribe({
    //       next: (pais: Country) => {
    //         this.pais = pais;
    //       },
    //       error: (err) => {
    //         this.hayError = true;
    //       }
    //     });
    //   }
    // );
  }

}
