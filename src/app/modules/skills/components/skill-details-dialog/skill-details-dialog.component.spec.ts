import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsDialogComponent } from './skill-details-dialog.component';

describe('SkillDetailsDialogComponent', () => {
  let component: SkillDetailsDialogComponent;
  let fixture: ComponentFixture<SkillDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
