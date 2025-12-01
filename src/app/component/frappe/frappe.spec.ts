import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frappe } from './frappe';

describe('Frappe', () => {
  let component: Frappe;
  let fixture: ComponentFixture<Frappe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frappe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frappe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
