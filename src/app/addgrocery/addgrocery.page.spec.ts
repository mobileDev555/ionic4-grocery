import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroceryPage } from './addgrocery.page';

describe('AddgroceryPage', () => {
  let component: AddgroceryPage;
  let fixture: ComponentFixture<AddgroceryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgroceryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
