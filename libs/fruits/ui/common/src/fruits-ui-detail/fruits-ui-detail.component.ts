// angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// interfaces
import { Fruit } from "@fruits/util/model";

@Component({
  selector: 'fruits-ui-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits-ui-detail.component.html',
  styleUrl: './fruits-ui-detail.component.scss',
})
export class FruitsUiDetailComponent {
    @Input() fruit: Fruit | null = null;
}
