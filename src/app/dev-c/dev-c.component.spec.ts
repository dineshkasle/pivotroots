import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCComponent } from './dev-c.component';

describe('DevCComponent', () => {
  let component: DevCComponent;
  let fixture: ComponentFixture<DevCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
