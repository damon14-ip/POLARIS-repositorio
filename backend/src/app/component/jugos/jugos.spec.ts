import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugos } from './jugos';

describe('Jugos', () => {
  let component: Jugos;
  let fixture: ComponentFixture<Jugos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jugos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jugos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
