import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalifPopUpComponent } from './editCalifPopUp.component';

describe('EditCalifPopUpComponent', () => {
  let component: EditCalifPopUpComponent;
  let fixture: ComponentFixture<EditCalifPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCalifPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCalifPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
