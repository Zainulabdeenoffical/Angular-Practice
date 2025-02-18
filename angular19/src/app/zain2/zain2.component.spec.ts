import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zain2Component } from './zain2.component';

describe('Zain2Component', () => {
  let component: Zain2Component;
  let fixture: ComponentFixture<Zain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zain2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
