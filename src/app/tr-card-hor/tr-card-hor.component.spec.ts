import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrCardHorComponent } from './tr-card-hor.component';

describe('TrCardHorComponent', () => {
  let component: TrCardHorComponent;
  let fixture: ComponentFixture<TrCardHorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrCardHorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrCardHorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
