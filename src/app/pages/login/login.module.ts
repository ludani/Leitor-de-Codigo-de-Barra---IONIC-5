import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular';

//import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path:'',
    component: LoginPage
    }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
    //LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
