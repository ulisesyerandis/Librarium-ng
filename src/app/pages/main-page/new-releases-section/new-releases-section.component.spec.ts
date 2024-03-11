import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesSectionComponent } from './new-releases-section.component';

describe('NewReleasesSectionComponent', () => {
  let component: NewReleasesSectionComponent;
  let fixture: ComponentFixture<NewReleasesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReleasesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewReleasesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
