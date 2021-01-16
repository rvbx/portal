import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { InputDirective } from './input';

describe('InputDirective', () => {
  it('should create an instance', () => {
    const directive = new InputDirective();
    expect(directive).toBeTruthy();
  });
});
