import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LurahComponent } from './lurah.component';

describe('LurahComponent', () => {
  let component: LurahComponent;
  let fixture: ComponentFixture<LurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
