import { Fruit } from "@fruits/util/model";

// eslint-disable-next-line @nx/enforce-module-boundaries
import { FruitDomain } from "@fruits/data-access/domain";

function mapFruitsList(fruitsDomain: FruitDomain[]): Fruit[] {
  return fruitsDomain.map(mapSingleFruit);
}

function mapSingleFruit(fruit: FruitDomain): Fruit {
  return {
    id: fruit.id,
    name: fruit.name,
    color: fruit.color,
    taste: fruit.taste
  };
}

export { mapFruitsList, mapSingleFruit };
