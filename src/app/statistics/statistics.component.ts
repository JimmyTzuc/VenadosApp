import { Component, OnInit } from '@angular/core';
import { StatisticsApiService } from './statistic/shared/statistics-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private statisticSvc: StatisticsApiService) { }
  allStatistics: Observable<any>;
  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(){
    this.allStatistics = this.statisticSvc.getAllStatistics();
  }
}
