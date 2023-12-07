import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanlComponent } from './chanl.component';

describe('ChanlComponent', () => {
  let component: ChanlComponent;
  let fixture: ComponentFixture<ChanlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
