import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  PLATFORM_ID,
  Inject,
  ApplicationRef
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavContent } from '@angular/material/sidenav';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment';
import { SwUpdate } from '@angular/service-worker';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
// Services
import { AppService } from './app.service';
// RxJs
import { first } from 'rxjs/operators';
import { interval, concat } from 'rxjs';
// Angular Material
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// Components
import { InstallUpdateComponent } from './core/ui/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {
  @ViewChild('scrollContent', { static: true }) public scrollContent !: MatSidenavContent;

  public title = $localize`:Application name:${environment.appName}`;
  public btnAriaLabelSideNav = ':Button toggle side nav:Open side navigation';
  public btnAriaLabelToggleDarkMode = ':Button toggle dark mode:Activate dark mode';
  public progressMode = 'indeterminate';
  public isBrowser = false;
  public darkMode = false;
  public langague: string;
  public themeForm = this.fb.group({
    theme: [false]
  });

  private mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
    private updates: SwUpdate,
    private appRef: ApplicationRef,
    private fb: FormBuilder,
    private appService: AppService,
    private snackBar: MatSnackBar
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
      this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    }
  }

  get matches(): boolean {
    return this.isBrowser ? this.mobileQuery.matches : true;
  }
  public ngAfterViewInit(): void {
    this.loadTheme();
    this.checkCookies();
    this.loader();
    this.checkForUpdate();

  }
  public ngOnDestroy(): void {
    if (this.isBrowser) {
      this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }
  }
  public changeTheme(): void {
    if (this.isBrowser) {
      const { value } = this.themeForm;
      this.darkMode = value.theme;
      localStorage.setItem('darkMode', value.theme.toString());
    }
  }
  public canShare(): boolean {
    return environment.production && this.isBrowser ? !!navigator.share : true;
  }
  public share(): void {
    if (this.isBrowser) {
      navigator.share({
        url: 'https://julienbertacco.netlify.app/',
        text: 'Julien Bertacco - Tech lead front end',
        title: 'C.V Julien Bertacco'
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }

  }
  private checkCookies(): void {
    if (this.isBrowser) {
      if (!JSON.parse(localStorage.getItem('cookies'))) {
        const snackBarRef = this.snackBar.open(`Cette application utilise des cookies pour vous offrir une meilleure expérience. En utilisant cette application, vous acceptez leur utilisation.`, 'Voir les détails');
        localStorage.setItem('cookies', 'true');
        snackBarRef.onAction().subscribe(() => {
          this.router.navigateByUrl('cookies');
        });
      }
    }
  }
  private loadTheme(): void {
    if (this.isBrowser) {
      const darkMode = localStorage.getItem('darkMode');
      console.log(darkMode);
      if (darkMode !== null) {
        this.darkMode = darkMode === 'true';
        this.themeForm.patchValue({
          theme: darkMode === 'true'
        });
      }
    }
  }
  private loader(): void {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.progressMode = 'indeterminate';
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.scrollContent.getElementRef().nativeElement.scrollTop = 0;
          this.progressMode = 'determinate';
          break;
        }
      }
    });
  }
  private checkForUpdate(): void {
    if (this.updates.isEnabled && this.isBrowser) {
      const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everySixHours$ = interval(6 * 60 * 60 * 1000);
      const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
      everySixHoursOnceAppIsStable$.subscribe(() => this.updates.checkForUpdate());
      this.updates.available.subscribe(event => {
        this.updates.activateUpdate().then(() => {
          const dialogRef = this.dialog.open(InstallUpdateComponent, {
            width: '250px',
          });
          dialogRef.afterClosed().subscribe((install) => {
            if (install) {
              document.location.reload();
            }
          });
        });
      });

    }

  }
}
