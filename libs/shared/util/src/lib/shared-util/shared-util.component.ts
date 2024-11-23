import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-util',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-util.component.html',
  styleUrl: './shared-util.component.scss',
})
export class SharedUtilComponent {}
