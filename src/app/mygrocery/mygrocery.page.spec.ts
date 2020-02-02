import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygroceryPage } from './mygrocery.page';

describe('MygroceryPage', () => {
  let component: MygroceryPage;
  let fixture: ComponentFixture<MygroceryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygroceryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygroceryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
