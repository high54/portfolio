import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
// Services
import { SkillsService } from '../../services';
import { AppService } from 'src/app/app.service';
// Models
import { Skill } from '../../models/skill.model';
// rxjs
import { from, fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('filterInput')
  filterInput!: ElementRef<HTMLInputElement>;
  public skills: Skill[] = [];
  private filterSubscription: Subscription | undefined;
  constructor(
    private skillsService: SkillsService,
    private appService: AppService
  ) { }
  public ngOnInit(): void {
    this.skills = this.skillsService.skills.slice();
    let description = 'Compétences : ';
    for (const skill of this.skills) {
      description += skill.title + ', ';
    }
    this.appService.title = 'Compétences';
    this.appService.description = description;
  }
  public ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }
  public ngAfterViewInit(): void {
    this.filterSubscription = fromEvent(this.filterInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      pluck('target', 'value')
    ).subscribe((value: unknown) => {
      this.skills = this.skillsService.skills.slice();
      this.skills = this.skills.filter(skill => skill.title.toLowerCase().includes((value as string).toLowerCase()));
    });
  }
  public clear(): void {
    this.filterInput.nativeElement.value = '';
    this.skills = this.skillsService.skills.slice();
  }

}
