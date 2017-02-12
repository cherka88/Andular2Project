import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FallbackRoute } from './shared/fallback-route'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component:CardsComponent},
  FallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
