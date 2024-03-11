import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBookSectionComponent } from './recommended-book-section.component';

describe('RecommendedBookSectionComponent', () => {
  let component: RecommendedBookSectionComponent;
  let fixture: ComponentFixture<RecommendedBookSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedBookSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedBookSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
