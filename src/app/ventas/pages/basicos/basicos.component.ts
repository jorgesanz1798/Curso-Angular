import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'jorge';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'JoRgE SanZ';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
