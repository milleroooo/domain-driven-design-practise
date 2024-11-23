import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrainsComponent } from './grains.component';

describe('GrainsComponent', () => {
  let component: GrainsComponent;
  let fixture: ComponentFixture<GrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
