import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrSliderComponent } from './tr-slider.component';

describe('TrSliderComponent', () => {
  let component: TrSliderComponent;
  let fixture: ComponentFixture<TrSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
