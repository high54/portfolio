import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputTimeDirectiveComponent } from './ngx-input-time-directive.component';

describe('NgxInputTimeDirectiveComponent', () => {
  let component: NgxInputTimeDirectiveComponent;
  let fixture: ComponentFixture<NgxInputTimeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInputTimeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputTimeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
