import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutDisplayComponent } from './donut-display.component';

describe('DonutDisplayComponent', () => {
  let component: DonutDisplayComponent;
  let fixture: ComponentFixture<DonutDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
