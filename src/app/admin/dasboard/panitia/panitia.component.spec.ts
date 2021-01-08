import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitiaComponent } from './panitia.component';

describe('PanitiaComponent', () => {
  let component: PanitiaComponent;
  let fixture: ComponentFixture<PanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
