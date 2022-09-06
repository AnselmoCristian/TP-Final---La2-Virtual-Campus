import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursadaComponent } from './cursada.component';

describe('CursadaComponent', () => {
  let component: CursadaComponent;
  let fixture: ComponentFixture<CursadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
