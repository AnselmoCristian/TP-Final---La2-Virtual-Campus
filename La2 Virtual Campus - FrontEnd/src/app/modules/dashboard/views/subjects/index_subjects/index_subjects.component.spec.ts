import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSubjectsComponent } from './index_subjects.component';

describe('IndexSubjectsComponent', () => {
  let component: IndexSubjectsComponent;
  let fixture: ComponentFixture<IndexSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
