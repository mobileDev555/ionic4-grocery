import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysupportPage } from './mysupport.page';

describe('MysupportPage', () => {
  let component: MysupportPage;
  let fixture: ComponentFixture<MysupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysupportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
