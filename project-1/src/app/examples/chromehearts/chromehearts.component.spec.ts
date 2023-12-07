import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeheartsComponent } from './chromehearts.component';

describe('ChromeheartsComponent', () => {
  let component: ChromeheartsComponent;
  let fixture: ComponentFixture<ChromeheartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromeheartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeheartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
