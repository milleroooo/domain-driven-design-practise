import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpiceUi} from "./ui-spices-element.interface";

@Component({
  selector: 'spices-ui-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-spices-element.component.html',
  styleUrl: './ui-spices-element.component.scss'
})
export class UiSpicesElementComponent {

  @Input()
  spice!: SpiceUi;

}
