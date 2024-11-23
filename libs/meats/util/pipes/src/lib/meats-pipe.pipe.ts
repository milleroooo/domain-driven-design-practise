import { Pipe, PipeTransform } from '@angular/core';
import { Meat } from '@meats/util/model';

@Pipe({
  name: 'meatsPipe',
  standalone: true,
})
export class MeatsPipePipe implements PipeTransform {
  transform(meat: Meat): string {
    if (!meat) {
      return '';
    }
    return `Type: ${meat.type}, Cut: ${meat.cut}, Origin: ${meat.origin}`;
  }
}
