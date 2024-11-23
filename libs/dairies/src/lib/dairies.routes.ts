/**ANGULAR*/
import { Route } from '@angular/router';

/**DAIRIES*/
import { dairiesListRoutes } from '@dairies/feature/list';

export const dairiesRoutes: Route[] = [
  ...dairiesListRoutes
];
