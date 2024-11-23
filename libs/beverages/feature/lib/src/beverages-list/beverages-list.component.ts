/**ANGULAR**/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES**/
import { Observable } from 'rxjs';

/**BEVERAGES**/
import { UiBeverageDetailsComponent } from '@beverages/ui/lib';
import { BeverageFacade } from '@beverages/data-access/domain';
import { Beverage } from '@beverages/data-access/domain';

@Component({
  selector: 'beverages-feature-list',
  standalone: true,
  imports: [CommonModule, UiBeverageDetailsComponent],
  templateUrl: './beverages-list.component.html',
  styleUrl: './beverages-list.component.scss',
})
export class BeveragesListComponent implements OnInit {
  protected beverages$!: Observable<Beverage[]>;
  protected selectedBeverage!: Beverage;

  constructor(private readonly facade: BeverageFacade) {}

  ngOnInit(): void {
    this.beverages$ = this.facade.beverages$;
    this.facade.findAll();
  }

  selectBeverage(beverage: Beverage): void {
    this.selectedBeverage = beverage;
  }
}
