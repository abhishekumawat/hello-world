import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadderComponent } from './loadder.component';

describe('LoadderComponent', () => {
  let component: LoadderComponent;
  let fixture: ComponentFixture<LoadderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadderComponent]
    });
    fixture = TestBed.createComponent(LoadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
