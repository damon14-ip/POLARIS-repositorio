import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandwich } from './sandwich';

describe('Sandwich', () => {
  let component: Sandwich;
  let fixture: ComponentFixture<Sandwich>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sandwich]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sandwich);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
