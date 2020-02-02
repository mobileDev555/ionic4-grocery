import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynotificationPage } from './mynotification.page';

describe('MynotificationPage', () => {
  let component: MynotificationPage;
  let fixture: ComponentFixture<MynotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
