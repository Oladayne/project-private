import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LVComponent } from './lv.component';

describe('LVComponent', () => {
  let component: LVComponent;
  let fixture: ComponentFixture<LVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
