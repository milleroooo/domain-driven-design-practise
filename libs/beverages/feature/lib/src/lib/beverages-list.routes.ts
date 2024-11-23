/**ANGULAR**/
import { Route } from '@angular/router';

export const beveragesListRoutes: Route[] = [
  {
    path: 'beverages',
    loadComponent: () =>
      import('../beverages-list/beverages-list.component').then(
        (x) => x.BeveragesListComponent
      ),
  },
];
