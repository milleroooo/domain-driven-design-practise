// angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// dependencies
import { Observable, tap, take } from 'rxjs';

// interfaces
import { Vegetable } from "@vegetables/util/model";
import { VegetablesFacade } from "@vegetables/data-access/domain";
import { VegetablesUiListComponent } from "@vegetables/ui/ui-components";

@Component({
  selector: 'vegetables-feature-list',
  standalone: true,
  imports: [CommonModule, VegetablesUiListComponent],
  templateUrl: './vegetables-feature-list.component.html',
  styleUrl: './vegetables-feature-list.component.css',
})
export class VegetablesFeatureListComponent implements OnInit {
  vegetables$: Observable<Vegetable[]> = new Observable<Vegetable[]>();

  constructor(private readonly vegetablesFacade: VegetablesFacade) {}

  ngOnInit(): void {
    this.findAll();
    this.vegetables$ = this.vegetablesFacade.vegetables$.pipe(
      tap((vegetables: Vegetable[]) => {
        // console.log(vegetables);
      })
    );
  }

  findAll(): void {
    this.vegetablesFacade.findAll().pipe(take(1)).subscribe();
  }
}
