import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmpComponent } from './set-emp.component';

describe('SetEmpComponent', () => {
  let component: SetEmpComponent;
  let fixture: ComponentFixture<SetEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
