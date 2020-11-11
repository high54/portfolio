import { Component, OnInit } from '@angular/core';
// Services
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ngx-input-time-directive',
  templateUrl: './ngx-input-time-directive.component.html',
  styleUrls: ['./ngx-input-time-directive.component.scss']
})
export class NgxInputTimeDirectiveComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Angular - Custom Input Time Directive';
  }

}
