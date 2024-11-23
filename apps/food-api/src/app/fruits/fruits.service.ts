import { Injectable } from '@nestjs/common';
import { Fruit } from './fruits.interface';

@Injectable()
export class FruitsService {
  private fruits: Fruit[] = [
    { id: '1', name: 'Apple', color: 'Red', taste: 'Sweet' },
    { id: '2', name: 'Banana', color: 'Yellow', taste: 'Sweet' },
    { id: '3', name: 'Lemon', color: 'Yellow', taste: 'Sour' },
  ];

  get(id: string) {
    return this.fruits.find(fruit => fruit.id === id);
  }

  findAll() {
    return this.fruits;
  }

  update(id: string, updateData: Partial<Fruit>) {
    const index = this.fruits.findIndex(fruit => fruit.id === id);
    if (index !== -1) {
      this.fruits[index] = { ...this.fruits[index], ...updateData };
      return this.fruits[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.fruits.findIndex(fruit => fruit.id === id);
    if (index !== -1) {
      return this.fruits.splice(index, 1);
    }
    return null;
  }
}
