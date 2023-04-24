import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  { path: 'player', component: PlayerComponent }, // Définir la route du composant "PlayerComponent"
  // Ajouter d'autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
