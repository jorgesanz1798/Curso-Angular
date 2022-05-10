import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 746576.65668;
  porcentaje: number = 0.1256;

  constructor() { }

  ngOnInit(): void {
  }

}
