import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggalleryComponent } from './doggallery.component';

describe('DoggalleryComponent', () => {
  let component: DoggalleryComponent;
  let fixture: ComponentFixture<DoggalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggalleryComponent]
    });
    fixture = TestBed.createComponent(DoggalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
