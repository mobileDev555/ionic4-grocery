import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhistoryPage } from './myhistory.page';

describe('MyhistoryPage', () => {
  let component: MyhistoryPage;
  let fixture: ComponentFixture<MyhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
