import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSubscritionComponent } from './subjectSubscription.component';

describe('SubjectSubscritionComponent', () => {
  let component: SubjectSubscritionComponent;
  let fixture: ComponentFixture<SubjectSubscritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSubscritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectSubscritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
