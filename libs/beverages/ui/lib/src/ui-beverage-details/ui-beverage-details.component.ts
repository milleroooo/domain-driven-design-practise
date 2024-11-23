/**ANGULAR**/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**BEVERAGES**/
import { Beverage } from '@beverages/data-access/domain';

@Component({
  selector: 'beverages-ui-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-beverage-details.component.html',
  styleUrl: './ui-beverage-details.component.scss',
})
export class UiBeverageDetailsComponent {
  @Input() beverage!: Beverage;
}
