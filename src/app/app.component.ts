import { Component } from '@angular/core';
import { PlayersService } from "../../services/players.service";
import { Router } from "@angular/router";
import { Players } from "models/players";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  players: Array<Players> = [];
  selectedPlayerId?: number;
  selectedPlayer: Players | null = null;
  isCardVisible:  boolean = false;
  searchText: string = '';
  questions = [
    {
      id: 1,
      text: 'Quel joueur a rempoté le tournois Roland-Garros en 2022 ?',
      answers: [
        { id: 1, text: 'Rafael Nadal' },
        { id: 2, text: 'Roger Federer' },
        { id: 3, text: 'Novak Djokovic' },
      ],
      correctAnswerId: 1,
    },
    {
      id: 2,
      text: 'En 2022, quel joueur français est le dernier à avoir remporté un tournoi du Grand Chelem ?',
      answers: [
        { id: 1, text: 'Guy Forget' },
        { id: 2, text: 'Yannick Noah' },
        { id: 3, text: 'Cédric Pioline' },
      ],
      correctAnswerId: 2,
    },
  ];
  isDarkMode = false;
  public selectedAnswers: any = {};

  constructor(
    public playersService: PlayersService,
    private router: Router,
  ) {
    this.selectedPlayerId = undefined;
  }

  ngOnInit() {
    this.getAllPlayers()
    this.initSelectedAnswers();
  }

  filterPlayers() {
    return this.players.filter(
      (player) =>
        player.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        player.lastname.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  showPlayerById(playerId: number) {
    if (this.selectedPlayerId === playerId) {
      return;
    }

    this.selectedPlayerId = playerId;
    const selectedPlayer = this.players.find(player => player.id === this.selectedPlayerId);

    if (selectedPlayer) {
      this.selectedPlayer = selectedPlayer;
      this.isCardVisible = true;
    }
  }


  closePlayerById() {
    this.selectedPlayerId = undefined;
    this.selectedPlayer = null;
    this.isCardVisible = false;
  }

  getAllPlayers() {
    this.playersService.getAllPlayers().subscribe((players: any) => {
      this.players = players;
      console.log(players)
    });
  }

  initSelectedAnswers() {
    this.selectedAnswers = {};
    this.questions.forEach((question) => {
      this.selectedAnswers[question.id] = null;
    });
  }

  submitQuiz() {
    let correctAnswers = 0;
    this.questions.forEach((question) => {
      if (this.selectedAnswers[question.id] === question.correctAnswerId) {
        correctAnswers++;
      }
    });

    const score = correctAnswers / this.questions.length * 100;
    if (score >= 50) {
      alert(`Félicitations, vous avez réussi le quiz avec un score de ${score}% !`);
    } else {
      alert(`Dommage, vous avez échoué le quiz avec un score de ${score}%...`);
    }
  }
}
