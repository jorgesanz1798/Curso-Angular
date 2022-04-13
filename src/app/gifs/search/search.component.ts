import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsServiceService
  ) { }

  ngOnInit(): void {
  }

  buscarGifs() {
    let valor = this.txtSearch.nativeElement.value;
    if (valor.trim().length === 0) { return };
    this.gifsService.buscarGifs(valor.toLowerCase());
    const gifBuscado = this.txtSearch.nativeElement.value = '';


  }
}
