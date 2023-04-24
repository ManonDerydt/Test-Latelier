import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from '../models/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<Players[]> {
    return this.http.get<Players[]>("http://localhost:1995/players");
  }

  getPlayerById(playerId: string){
    console.log("hello")
    return this.http.get(`http://localhost:1995/player/` + playerId);
  }

}

