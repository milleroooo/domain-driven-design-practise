// angular
import { Route } from '@angular/router';

// vegetables
import { vegetablesListRoutes } from '@vegetables/feature/list';

export const vegetablesRoutes: Route[] = [
  ...vegetablesListRoutes
];