// angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// interfaces
import { Vegetable } from "@vegetables/util/model";

@Component({
  selector: 'vegetables-ui-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetables-ui-list.component.html',
  styleUrl: './vegetables-ui-list.component.css',
})
export class VegetablesUiListComponent {
 @Input() vegetables: Vegetable[] | null = [];
}