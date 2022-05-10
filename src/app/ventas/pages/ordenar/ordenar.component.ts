import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  mayus: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Iron Man",
      vuela: true,
      color: Color.rojo
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggleMayus() {
    this.mayus = !this.mayus;
  }

  cambiarOrden(valor:string) {
    this.ordenarPor = valor;
  }

}
