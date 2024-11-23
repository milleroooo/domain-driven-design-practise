// interfaces
import { Vegetable } from '../interfaces/vegetables.interface';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { VegetableDomain } from '@vegetables/data-access/domain';

function mapToVegetablesList(fruitsDomain: VegetableDomain[]): Vegetable[] {
  return fruitsDomain.map(mapToVegetable);
}

function mapToVegetable(vegetable: VegetableDomain): Vegetable {
  return {
    id: vegetable.id,
    name: vegetable.name,
    color: vegetable.color,
    season: vegetable.season
  };
}

export { mapToVegetablesList, mapToVegetable };