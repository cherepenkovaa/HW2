import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillModuleComponent } from './fill-module.component';

describe('FillModuleComponent', () => {
  let component: FillModuleComponent;
  let fixture: ComponentFixture<FillModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
