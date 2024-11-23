import { Injectable } from '@nestjs/common';
import { Vegetable } from './vegetables.interface';

@Injectable()
export class VegetablesService {
  private vegetables: Vegetable[] = [
    { id: '1', name: 'Carrot', color: 'Orange', season: 'Winter' },
    { id: '2', name: 'Spinach', color: 'Green', season: 'Spring' },
    { id: '3', name: 'Potato', color: 'Brown', season: 'All' },
    { id: '4', name: 'Tomato', color: 'Red', season: 'Summer' },
    { id: '5', name: 'Broccoli', color: 'Green', season: 'Spring' },
    { id: '6', name: 'Spinach', color: 'Green', season: 'Spring' },
    { id: '7', name: 'Pumpkin', color: 'Orange', season: 'Autumn' },
    { id: '8', name: 'Beetroot', color: 'Red', season: 'Summer' },
  ];

  get(id: string) {
    return this.vegetables.find(veg => veg.id === id);
  }

  findAll() {
    return this.vegetables;
  }

  update(id: string, updateData: Partial<Vegetable>) {
    const index = this.vegetables.findIndex(veg => veg.id === id);
    if (index !== -1) {
      this.vegetables[index] = { ...this.vegetables[index], ...updateData };
      return this.vegetables[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.vegetables.findIndex(veg => veg.id === id);
    if (index !== -1) {
      return this.vegetables.splice(index, 1);
    }
    return null;
  }
}
