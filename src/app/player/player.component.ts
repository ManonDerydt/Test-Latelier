import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlayersService } from "../../../services/players.service";
import { Players } from "../../../models/players";

import { Observable } from "rxjs";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  players: Array<Players> = []
  public player = new Players();

  constructor(
    private route: ActivatedRoute,
    public playerService: PlayersService,
  ) { }

  ngOnInit() {
    // Récupérer l'ID du joueur à partir des paramètres de route
    this.route.params.subscribe(params => {
      const playerId = params['id'];
      // Utiliser l'ID du joueur pour afficher les détails du joueur ou effectuer d'autres actions nécessaires
    });
    console.log("coucou")
    /*this.getPlayerById();*/
  }

  // getPlayerById() {
  //   this.route.params.subscribe(async parameter => {
  //     const playerId: string = parameter['id'];
  //     this.playerService.getPlayerById(playerId)
  //       .subscribe((player: any) => {
  //           this.players = player;
  //         },
  //         error => {
  //           console.log(error);
  //         });
  //   });
  // }
}
