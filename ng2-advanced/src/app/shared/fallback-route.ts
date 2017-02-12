import { Route } from '@angular/router';
export const FallbackRoute: Route = {
  path: '**', redirectTo: '/layout', pathMatch: 'full'
};
