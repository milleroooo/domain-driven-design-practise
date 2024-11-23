import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateProductCardComponent } from './template-product-card.component';

describe('TemplateCardComponent', () => {
  let component: TemplateProductCardComponent;
  let fixture: ComponentFixture<TemplateProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
