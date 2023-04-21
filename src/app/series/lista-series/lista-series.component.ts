import { Component, OnInit } from '@angular/core';

import { Serie } from '../Serie';

import { SeriesService } from '../series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  get averageSeasons(): number {
    if (this.series.length === 0) {
      return 0;
    }
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

}
