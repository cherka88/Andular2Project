import { Route } from '@angular/router';
export const FallbackRoute: Route = {
  path: '**', redirectTo: '/form', pathMatch: 'full'
};
