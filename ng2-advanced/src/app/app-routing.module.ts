import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes,  RouterModule} from '@angular/router';
import { FallbackRoute } from './shared/fallback-route';
import { ChartsModule } from './charts/charts.module'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  { path: 'charts/:username', loadChildren:'./charts/charts.module.ts#ChartsModule'},
  FallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
