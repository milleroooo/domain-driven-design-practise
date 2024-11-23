/**ANGULAR*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**DEPENDENCIES*/
import { RxFor } from '@rx-angular/template/for';
import { Observable } from 'rxjs';

/**DAIRIES*/
import { Dairy } from '@dairies/util/model';
import { DairyFacadeService } from '@dairies/data-access/domain';

@Component({
  selector: 'dairies-feature-list',
  standalone: true,
  imports: [CommonModule, RxFor],
  templateUrl: './container-list.component.html',
  styleUrl: './container-list.component.scss',
})
export class ContainerListComponent implements OnInit {
  dairies$!: Observable<Dairy[]>;

  constructor( private readonly facade: DairyFacadeService) {}

  ngOnInit(): void {
    this.facade.actions.findAll();
    this.dairies$ = this.facade.dairies$;
  }
}
