import { Route } from '@angular/router';
export const FallbackRoute: Route = {
  path: '**', redirectTo: '/dashboard', pathMatch: 'full'
};
