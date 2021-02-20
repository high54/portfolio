import { Component, Input } from '@angular/core';
// Models
import { Skill } from '../../models/skill.model';
// Material
import { MatDialog } from '@angular/material/dialog';
// Components
import { SkillDetailsDialogComponent } from '../skill-details-dialog/skill-details-dialog.component';
// Rxjs
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skill!: Skill;
  private subscription: Subscription | undefined;
  constructor(
    public dialog: MatDialog
  ) { }

  public openDialog(skill: Skill): void {
    const dialogRef = this.dialog.open(SkillDetailsDialogComponent, { data: skill });
    this.subscription = dialogRef.afterClosed().subscribe(() => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    });
  }
}
