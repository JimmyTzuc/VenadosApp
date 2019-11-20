import { Component, OnInit } from '@angular/core';
import { PlayersApiService } from './player/shared/players-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private playerSvc: PlayersApiService) { }
  allPlayers: Observable<any>;

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.allPlayers = this.playerSvc.getAllPlayers();
  }
}
