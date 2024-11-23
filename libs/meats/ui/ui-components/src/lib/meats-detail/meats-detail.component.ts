import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meat } from '@meats/util/model';

@Component({
  selector: 'meats-ui-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meats-detail.component.html',
  styleUrl: './meats-detail.component.css',
})
export class MeatsDetailComponent {
    @Input() meat: Meat
}
