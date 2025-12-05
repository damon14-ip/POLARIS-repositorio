import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wafles } from './wafles';

describe('Wafles', () => {
  let component: Wafles;
  let fixture: ComponentFixture<Wafles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wafles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wafles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
