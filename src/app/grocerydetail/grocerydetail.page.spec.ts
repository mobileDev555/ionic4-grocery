import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrocerydetailPage } from './grocerydetail.page';

describe('GrocerydetailPage', () => {
  let component: GrocerydetailPage;
  let fixture: ComponentFixture<GrocerydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrocerydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrocerydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
