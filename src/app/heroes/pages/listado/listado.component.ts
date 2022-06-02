import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interace';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listHeroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      (heroes: Heroe[]) => {
        this.listHeroes = heroes;
      }
    );
  }

}
