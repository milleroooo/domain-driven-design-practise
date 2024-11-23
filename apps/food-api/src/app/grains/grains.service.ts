import { Injectable } from '@nestjs/common';
import { Grain } from './grains.interface';
import { v4 as uuidv4 } from 'uuid';  // For generating unique IDs

@Injectable()
export class GrainsService {
  private grains: Grain[] = [
    { id: '1', name: 'Rice', type: 'White', nutritionalValue: 'High in carbs' },
    { id: '2', name: 'Quinoa', type: 'Whole', nutritionalValue: 'High in protein' },
    { id: '3', name: 'Oats', type: 'Rolled', nutritionalValue: 'High in fiber' },
  ];

  get(id: string): Grain {
    return this.grains.find(grain => grain.id === id);
  }

  findAll(): Grain[] {
    return this.grains;
  }

  create(grain: Grain): Grain {
    const newGrain = { ...grain, id: uuidv4() }; // Assign a new unique ID
    this.grains.push(newGrain);
    return newGrain;
  }

  update(id: string, updateData: Partial<Grain>): Grain {
    const index = this.grains.findIndex(grain => grain.id === id);
    if (index !== -1) {
      this.grains[index] = { ...this.grains[index], ...updateData };
      return this.grains[index];
    }
    return null;
  }

  delete(id: string): Grain {
    const index = this.grains.findIndex(grain => grain.id === id);
    if (index !== -1) {
      return this.grains.splice(index, 1)[0];
    }
    return null;
  }
}
