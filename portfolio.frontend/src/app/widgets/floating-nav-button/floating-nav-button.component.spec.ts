import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNavButtonComponent } from './floating-nav-button.component';

describe('FloatingNavButtonComponent', () => {
  let component: FloatingNavButtonComponent;
  let fixture: ComponentFixture<FloatingNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingNavButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
