import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAllGrainsComponent } from './list-all-grains-component';

describe('ListAllGrainsComponentComponent', () => {
  let component: ListAllGrainsComponent;
  let fixture: ComponentFixture<ListAllGrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllGrainsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListAllGrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
