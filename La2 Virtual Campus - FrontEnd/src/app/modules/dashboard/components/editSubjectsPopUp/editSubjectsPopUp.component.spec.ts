import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectsPopUpComponent } from './editSubjectsPopUp.component';

describe('EditSubjectsPopUpComponent', () => {
  let component: EditSubjectsPopUpComponent;
  let fixture: ComponentFixture<EditSubjectsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubjectsPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubjectsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
