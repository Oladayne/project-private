import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemsuaxoaComponent } from './themsuaxoa.component';

describe('ThemsuaxoaComponent', () => {
  let component: ThemsuaxoaComponent;
  let fixture: ComponentFixture<ThemsuaxoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemsuaxoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemsuaxoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
