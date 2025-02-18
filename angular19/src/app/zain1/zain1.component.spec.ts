import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zain1Component } from './zain1.component';

describe('Zain1Component', () => {
  let component: Zain1Component;
  let fixture: ComponentFixture<Zain1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zain1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
