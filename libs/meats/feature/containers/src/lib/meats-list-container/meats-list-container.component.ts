import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeatsFacade } from '@meats/data-access/domain';
import { FindAllMeatsComponent } from '@meats/ui/ui-components';
import { Subject, takeUntil, tap } from 'rxjs';
import { Meat } from '@meats/util/model';

@Component({
  selector: 'meats-feature-list-container',
  standalone: true,
  imports: [CommonModule, FindAllMeatsComponent],
  templateUrl: './meats-list-container.component.html',
  styleUrl: './meats-list-container.component.css',
})
export class MeatsListContainerComponent implements OnInit, OnDestroy {

  protected meats: Meat[] = []
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly meatsFacade: MeatsFacade) {}

  ngOnInit(): void {
      this.meatsFacade.meats$.pipe(
        tap((meats: Meat[]) => {
          this.meats = meats
        }),
        takeUntil(this.destroy$),
      ).subscribe()

      this.findAllMeats()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  findAllMeats() {
    this.meatsFacade.findAll();
  }

}
