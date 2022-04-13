import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private gifsService: GifsServiceService,
  ) { }

  ngOnInit(): void {
  }

  get historial(): string[] {
    return this.gifsService.historial;
  }

  buscar(gif: string) {
    this.gifsService.buscarGifs(gif);
  }

}
