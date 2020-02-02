import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroceryitemdetailPage } from './groceryitemdetail.page';

describe('GroceryitemdetailPage', () => {
  let component: GroceryitemdetailPage;
  let fixture: ComponentFixture<GroceryitemdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryitemdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroceryitemdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
