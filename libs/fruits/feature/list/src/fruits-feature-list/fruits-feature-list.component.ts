// angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// dependencies
import { Observable, tap, take } from 'rxjs';

// interfaces
import { Fruit } from "@fruits/util/model";

import { FruitsFacade } from "@fruits/data-access/domain";

import { FruitsUiListComponent } from "@fruits/ui/common";

@Component({
  selector: 'fruits-feature-list',
  standalone: true,
  imports: [CommonModule, FruitsUiListComponent],
  templateUrl: './fruits-feature-list.component.html',
  styleUrl: './fruits-feature-list.component.scss',
})
export class ContainerFruitsListComponent implements OnInit {
  fruits$: Observable<Fruit[]> = new Observable<Fruit[]>();

  constructor(private readonly fruitsFacade: FruitsFacade) {}

  ngOnInit(): void {
    this.findAll();
    this.fruits$ = this.fruitsFacade.fruits$.pipe(tap((ff: Fruit[]) => console.log(ff)));
  }

  findAll(): void {
    this.fruitsFacade.findAll().pipe(take(1)).subscribe();
  }
}
