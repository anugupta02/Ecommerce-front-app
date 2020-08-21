import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrFilterPanelComponent } from './tr-filter-panel.component';

describe('TrFilterPanelComponent', () => {
  let component: TrFilterPanelComponent;
  let fixture: ComponentFixture<TrFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
