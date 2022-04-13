import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(
    private gifsService: GifsServiceService
  ) { }

  ngOnInit(): void {
  }

  get resultado(): any[] {
    return this.gifsService.resultado;
  }

}
