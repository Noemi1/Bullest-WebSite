import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CasesDetalhesComponent } from './template-parts/cases-detalhes/cases-detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'cases/:Id', component: CasesDetalhesComponent },
  ] },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
