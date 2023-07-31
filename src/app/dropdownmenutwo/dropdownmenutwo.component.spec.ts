import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownmenutwoComponent } from './dropdownmenutwo.component';

describe('DropdownmenutwoComponent', () => {
  let component: DropdownmenutwoComponent;
  let fixture: ComponentFixture<DropdownmenutwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownmenutwoComponent]
    });
    fixture = TestBed.createComponent(DropdownmenutwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
