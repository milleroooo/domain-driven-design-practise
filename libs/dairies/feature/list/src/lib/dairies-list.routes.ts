/**ANGULAR*/
import { Route } from '@angular/router';

export const dairiesListRoutes: Route[] = [
  {
    path: 'dairies',
    loadComponent: () =>
      import('./container-list/container-list.component')
        .then((x) => x.ContainerListComponent),
  }
];
