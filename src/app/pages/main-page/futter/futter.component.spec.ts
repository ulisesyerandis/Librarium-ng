import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutterComponent } from './futter.component';

describe('FutterComponent', () => {
  let component: FutterComponent;
  let fixture: ComponentFixture<FutterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FutterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
