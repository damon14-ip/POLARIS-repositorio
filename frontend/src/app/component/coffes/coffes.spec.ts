import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coffes } from './coffes';

describe('Coffes', () => {
  let component: Coffes;
  let fixture: ComponentFixture<Coffes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coffes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coffes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
