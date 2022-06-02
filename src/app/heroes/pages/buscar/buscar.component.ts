import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interace';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(
    private heroeService: HeroesService
  ) { }

  ngOnInit(): void {
  }

  buscando() {
    if (this.termino.length > 0) {
      this.heroeService.buscarHeroes(this.termino.trim()).subscribe(
        (data: Heroe[]) => {
          this.heroes = data;
        }
      );
    } else {
      this.heroes = [];
    }
  }

  opcionSeleccionada(event: any) {
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroeService.getHeroe(heroe.id!).subscribe(
      (data: Heroe) => {
        this.heroeSeleccionado = data;
      }
    );
  }
}


