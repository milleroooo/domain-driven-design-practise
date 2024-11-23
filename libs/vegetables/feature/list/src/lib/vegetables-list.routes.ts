// angular
import { Route } from '@angular/router';

export const vegetablesListRoutes: Route[] = [
  {
    path: 'vegetables',
    loadComponent: () =>
      import('../vegetables-feature-list/vegetables-feature-list.component')
        .then((x) => x.VegetablesFeatureListComponent),
  }
];
