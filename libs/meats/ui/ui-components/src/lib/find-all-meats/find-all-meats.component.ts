import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeatsPipePipe } from '@meats/util/pipes';
import { Meat } from '@meats/util/model';

@Component({
  selector: 'meats-ui-find-all-meats',
  standalone: true,
  imports: [CommonModule, MeatsPipePipe],
  templateUrl: './find-all-meats.component.html',
  styleUrl: './find-all-meats.component.css',
})
export class FindAllMeatsComponent {
  @Input() meats: Meat[] = [];
}
