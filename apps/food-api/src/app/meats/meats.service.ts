import { Injectable } from '@nestjs/common';
import { Meat } from './meats.interface';

@Injectable()
export class MeatsService {
  private meats: Meat[] = [
    {id: '1', type: 'Beef', cut: 'Ribeye', origin: 'USA'},
    {id: '2', type: 'Chicken', cut: 'Breast', origin: 'Brazil'},
    {id: '3', type: 'Pork', cut: 'Loin', origin: 'Spain'},
  ];

  get(id: string) {
    return this.meats.find(meat => meat.id === id);
  }

  findAll() {
    return this.meats;
  }

  update(id: string, updateData: Partial<Meat>) {
    const index = this.meats.findIndex(meat => meat.id === id);
    if (index !== -1) {
      this.meats[index] = {...this.meats[index], ...updateData};
      return this.meats[index];
    }
    return null;
  }

  delete(id: string) {
    const index = this.meats.findIndex(meat => meat.id === id);
    if (index !== -1) {
      return this.meats.splice(index, 1);
    }
    return null;
  }
}
