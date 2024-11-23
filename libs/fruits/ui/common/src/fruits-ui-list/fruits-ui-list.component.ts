// angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// interfaces
import { Fruit } from "@fruits/util/model";

@Component({
  selector: 'fruits-ui-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits-ui-list.component.html',
  styleUrl: './fruits-ui-list.component.scss',
})
export class FruitsUiListComponent {
    @Input() fruits: Fruit[] | null = [];
}
