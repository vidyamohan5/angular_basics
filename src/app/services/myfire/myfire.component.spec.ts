import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfireComponent } from './myfire.component';

describe('MyfireComponent', () => {
  let component: MyfireComponent;
  let fixture: ComponentFixture<MyfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
