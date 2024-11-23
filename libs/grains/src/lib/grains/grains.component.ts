import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'lib-grains',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grains.component.html',
  styleUrl: './grains.component.scss',
})
export class GrainsComponent {}
