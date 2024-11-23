import { Injectable } from '@nestjs/common';
import { Dairy } from './dairy.interface';
import { v4 as uuidv4 } from 'uuid';  // For generating unique IDs

@Injectable()
export class DairyService {
  private dairyItems: Dairy[] = [
    { id: '1', name: 'Cheddar', type: 'Cheese', fatContent: 33 },
    { id: '2', name: 'Whole Milk', type: 'Milk', fatContent: 3.25 },
    { id: '3', name: 'Yogurt', type: 'Yogurt', fatContent: 4 },
  ];

  get(id: string): Dairy {
    return this.dairyItems.find(item => item.id === id);
  }

  findAll(): Dairy[] {
    return this.dairyItems;
  }

  create(dairy: Dairy): Dairy {
    const newDairy = { ...dairy, id: uuidv4() }; // Assign a new unique ID
    this.dairyItems.push(newDairy);
    return newDairy;
  }

  update(id: string, updateData: Partial<Dairy>): Dairy {
    const index = this.dairyItems.findIndex(item => item.id === id);
    if (index !== -1) {
      this.dairyItems[index] = { ...this.dairyItems[index], ...updateData };
      return this.dairyItems[index];
    }
    return null;
  }

  delete(id: string): Dairy {
    const index = this.dairyItems.findIndex(item => item.id === id);
    if (index !== -1) {
      return this.dairyItems.splice(index, 1)[0];
    }
    return null;
  }
}
