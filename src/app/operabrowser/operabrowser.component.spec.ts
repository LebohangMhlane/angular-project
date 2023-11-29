import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperabrowserComponent } from './operabrowser.component';

describe('OperabrowserComponent', () => {
  let component: OperabrowserComponent;
  let fixture: ComponentFixture<OperabrowserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperabrowserComponent]
    });
    fixture = TestBed.createComponent(OperabrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
