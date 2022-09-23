import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: '/template/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: '/template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: '/template/switches',
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: '/reactive/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: '/reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: '/reactive/switches',
    }
  ]

}

interface MenuItem {
  texto: string;
  ruta: string;
}
