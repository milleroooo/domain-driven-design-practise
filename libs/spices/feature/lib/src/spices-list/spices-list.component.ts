import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpicesFacade} from "@spices/data-access/domain";
import {Observable} from "rxjs";
import {Spice} from "@spices/util/model";
import {SpiceUi, UiSpicesElementComponent} from "@spices/ui/lib";

@Component({
  selector: 'spices-feature-list',
  standalone: true,
  imports: [CommonModule, SpicesListComponent, SpicesListComponent, UiSpicesElementComponent],
  templateUrl: './spices-list.component.html',
})
export class SpicesListComponent implements OnInit {

  constructor(private spicesFacade: SpicesFacade) {}

  protected spices$: Observable<Spice[]> = this.spicesFacade.spices$;

  ngOnInit(): void {
    this.spicesFacade.findAll();
  }

  mapToSpiceUi(spice: Spice): SpiceUi {
    return {
      name: spice.name,
      origin: spice.origin,
      flavorProfile: spice.flavorProfile
    }
  }
}
