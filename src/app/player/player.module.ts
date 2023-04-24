import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PlayerRoutingModule } from './player.routing.module';

import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlayerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlayerComponent
  ]
})
export class OrderPageModule {}
