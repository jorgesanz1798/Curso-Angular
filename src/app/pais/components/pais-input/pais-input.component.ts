import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() paisSeleccionado: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() titulo: string = "";

  debouncer: Subject<string> = new Subject<string>();

  termino: string="";

  constructor() { }

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(100)).subscribe(termino => this.onDebounce.emit(termino));
  }

  buscar(): void {
    this.paisSeleccionado.emit(this.termino);
  }

  teclaPresionada(evento: any): void {
    this.debouncer.next(this.termino);
  }

}
