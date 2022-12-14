import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureComponent } from './sure.component';

describe('SureComponent', () => {
  let component: SureComponent;
  let fixture: ComponentFixture<SureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
