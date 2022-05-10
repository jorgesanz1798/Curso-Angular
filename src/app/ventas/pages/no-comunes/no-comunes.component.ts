import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Jorge';
  genero: string = 'masculino';
  invitacion = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  clientes: string[] = ['Maria','Pedro','Juan','Pepe'];
  clientesMap = {
    '=0':'no hay clientes esperando',
    '=1':'tenemos # cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  persona = {
    nombre: 'Jorge',
    edad: 23,
    direccion: 'Madrid, España'
  }
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta');
    }, 2000);
  });

  constructor(
    private primeNgConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

  cambiarCliente() {
    this.nombre == 'Jorge' ? this.nombre = 'Maria' : this.nombre = 'Jorge';
    this.genero == 'masculino' ? this.genero = 'femenino' : this.genero = 'masculino';
  }

  quitarCliente() {
    this.clientes.pop();
  }

}
