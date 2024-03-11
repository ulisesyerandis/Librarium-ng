import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingBookSectionComponent } from './best-selling-book-section.component';

describe('BestSellingBookSectionComponent', () => {
  let component: BestSellingBookSectionComponent;
  let fixture: ComponentFixture<BestSellingBookSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingBookSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellingBookSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
