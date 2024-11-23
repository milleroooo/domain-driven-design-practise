import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { Grain, GrainsFacade } from '@grains/data-access/domain';

@Component({
  selector: 'grains-feature-list-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-all-grains-component.html',
  styleUrl: './list-all-grains-component.css',
})
export class ListAllGrainsComponent implements OnInit {
  grainsList: Grain[] = [];
  constructor(private grainFacade: GrainsFacade) {}

  ngOnInit() {
    this.findAllGrains();
    this.grainFacade.grains$
      .pipe(
        tap((grains: Grain[]) => {
          console.log("grains", grains)
          this.grainsList = grains;
        })
      )
      .subscribe();
  }
  findAllGrains() {
    this.grainFacade.findAll();
  }
}
