import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolcegabanaComponent } from './dolcegabana.component';

describe('DolcegabanaComponent', () => {
  let component: DolcegabanaComponent;
  let fixture: ComponentFixture<DolcegabanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolcegabanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolcegabanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
