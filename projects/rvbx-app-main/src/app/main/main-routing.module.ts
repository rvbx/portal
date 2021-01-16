import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'second',
        loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '**', redirectTo: 'home'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
