import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteformComponent } from './templeteform.component';

describe('TempleteformComponent', () => {
  let component: TempleteformComponent;
  let fixture: ComponentFixture<TempleteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
