import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona = {
    nombre: 'Jorge',
    favorito: [
      { id: 1, nombre: 'Pizza' },
      { id: 2, nombre: 'Hamburguesa' },
    ]
  }

  nuevaComida: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {}

  eliminar(index: number) {
    this.persona.favorito.splice(index, 1);
  }

  anadir() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevaComida
    }
    this.persona.favorito.push({...nuevoFavorito});
    this.nuevaComida = '';
  }

}
