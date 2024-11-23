import { Injectable } from '@nestjs/common';
import { Spice } from './spices.interface';

@Injectable()
export class SpicesService {
  private spices: Spice[] = [
    { id: '1', name: 'Cinnamon', origin: 'Sri Lanka', flavorProfile: 'Sweet' },
    { id: '2', name: 'Pepper', origin: 'India', flavorProfile: 'Pungent' },
    { id: '3', name: 'Turmeric', origin: 'India', flavorProfile: 'Bitter' },
  ];

  get(id: string) {
    return this.spices.find(spice => spice.id === id);
  }

  findAll() {
    return this.spices;
  }

  update(id: string, updateData: Partial<Spice>) {
    const index = this.spices.findIndex(spice => spice.id === id);
    if (index !== -1) {
      this.spices[index] = { ...this.spices[index], ...updateData };
      return this.spices[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.spices.findIndex(spice => spice.id === id);
    if (index !== -1) {
      return this.spices.splice(index, 1);
    }
    return null;
  }
}
