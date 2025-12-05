import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensalada } from './ensalada';

describe('Ensalada', () => {
  let component: Ensalada;
  let fixture: ComponentFixture<Ensalada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ensalada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ensalada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
