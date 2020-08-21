import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductDetailsComponent } from './item-product-details.component';

describe('ItemProductDetailsComponent', () => {
  let component: ItemProductDetailsComponent;
  let fixture: ComponentFixture<ItemProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
