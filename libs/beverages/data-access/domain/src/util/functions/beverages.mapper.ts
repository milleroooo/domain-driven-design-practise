/**INTERNALS**/
import { BeverageDomain } from '../../entity/beverage.domain';
import { Beverage } from '../model/beverage.model';

export function mapBeverageDomainToModel(beverage: BeverageDomain): Beverage {
  return {
    ...beverage,
  };
}

export { Beverage };
