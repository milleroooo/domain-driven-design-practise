/**ANGULAR*/
import { Route } from '@angular/router';

/**DAIRIES*/
import { dairiesRoutes } from '@dairies/routes';

/**VEGETABLES*/
import { vegetablesRoutes } from '@vegetables/routes';

/**BEVERAGES*/
import { beveragesRoutes } from '@beverages/routes';

export const appRoutes: Route[] = [
  ...dairiesRoutes,
  ...vegetablesRoutes,
  ...beveragesRoutes,
];
