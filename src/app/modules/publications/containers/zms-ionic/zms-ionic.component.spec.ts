import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmsIonicComponent } from './zms-ionic.component';

describe('ZmsIonicComponent', () => {
  let component: ZmsIonicComponent;
  let fixture: ComponentFixture<ZmsIonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZmsIonicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmsIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
