import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSolicitacionComponent } from './all-solicitacion.component';

describe('AllSolicitacionComponent', () => {
  let component: AllSolicitacionComponent;
  let fixture: ComponentFixture<AllSolicitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSolicitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSolicitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
