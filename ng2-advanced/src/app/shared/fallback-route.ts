import { Route } from '@angular/router';
export const FallbackRoute: Route = {
  path: '**', redirectTo: '/reactiveform', pathMatch: 'full'
};
