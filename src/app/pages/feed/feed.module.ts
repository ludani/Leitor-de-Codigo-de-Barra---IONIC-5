import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router'
//import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';

const routes: Routes =[
  {
    path:'',
    component: FeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    //FeedPageRoutingModule
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
