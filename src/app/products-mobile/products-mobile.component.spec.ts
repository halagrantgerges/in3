import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMobileComponent } from './products-mobile.component';

describe('ProductsMobileComponent', () => {
  let component: ProductsMobileComponent;
  let fixture: ComponentFixture<ProductsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
