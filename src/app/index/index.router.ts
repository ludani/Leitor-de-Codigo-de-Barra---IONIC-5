import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageModule } from '../pages/login/login.module';
//import { IndexPage } from './index.page';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/login/login.module').then(
            m => m.LoginPageModule
            )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRouter {}

/* const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../pages/login/login.module').then(
            m => m.LoginPageModule
            )
      },
    ]
  }
]; */
