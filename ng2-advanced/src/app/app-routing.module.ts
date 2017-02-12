import { Page2Component } from './page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FallbackRoute } from './shared/fallback-route'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'Page2',
    component: Page2Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
