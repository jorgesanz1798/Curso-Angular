import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroe: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {
    switch (ordenarPor) {
      case 'nombre': return heroe = heroe.sort((a, b) => { return (a.nombre > b.nombre) ? 1 : -1; });
      case 'vuela': return heroe = heroe.sort((a, b) => { return (a.vuela > b.vuela) ? 1 : -1; });
      case 'color': return heroe = heroe.sort((a, b) => { return (a.color > b.color) ? 1 : -1; });
      default: heroe;
    }
    return heroe;
  }
}
