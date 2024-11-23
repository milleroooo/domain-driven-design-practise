import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Beverage } from './bevarage.interface';  // For generating unique IDs

@Injectable()
export class BeverageService {
  beverages: Beverage[] = [
    {
      id: 'b1',
      name: 'Cola',
      type: 'Cold',
      volumeInLiters: 1.5,
      isCarbonated: true,
    },
    {
      id: 'b2',
      name: 'Green Tea',
      type: 'Hot',
      volumeInLiters: 0.3,
      isCarbonated: false,
    },
    {
      id: 'b3',
      name: 'Orange Juice',
      type: 'Cold',
      volumeInLiters: 1.0,
      isCarbonated: false,
    }
  ];

  get(id: string): Beverage {
    return this.beverages.find(item => item.id === id);
  }

  findAll(): Beverage[] {
    return this.beverages;
  }

  create(dairy: Beverage): Beverage {
    const newDairy = { ...dairy, id: uuidv4() }; // Assign a new unique ID
    this.beverages.push(newDairy);
    return newDairy;
  }

  update(id: string, updateData: Partial<Beverage>): Beverage {
    const index = this.beverages.findIndex(item => item.id === id);
    if (index !== -1) {
      this.beverages[index] = { ...this.beverages[index], ...updateData };
      return this.beverages[index];
    }
    return null;
  }

  delete(id: string): Beverage {
    const index = this.beverages.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.beverages.splice(index, 1)[0];
    }
    return null;
  }
}
