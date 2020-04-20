import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorBarComponent } from './professor-bar.component';

describe('ProfessorBarComponent', () => {
  let component: ProfessorBarComponent;
  let fixture: ComponentFixture<ProfessorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
