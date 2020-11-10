import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
// Services
import { AppService } from 'src/app/app.service';
import { ContactService } from '../../services';
// Material
import { MatSnackBar } from '@angular/material/snack-bar';
// Rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    companyName: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    'form-name': ['contact', Validators.required]
  });
  private sendEmailSub: Subscription;
  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Me contacter';
  }
  public ngOnDestroy(): void {
    if (this.sendEmailSub) {
      this.sendEmailSub.unsubscribe();
    }
  }
  public sendEmail(): void {
    const { value, valid } = this.contactForm;
    if (valid) {
      console.log(value);
      this.sendEmailSub = this.contactService.sendEmail(value).subscribe((response) => {
        console.log(response);
        this.snackBar.open('Votre email à bien été envoyé.', '', {
          duration: 5000
        });
      });
    }
  }
  get firstName(): AbstractControl {
    return this.contactForm.get('firstName');
  }
  get lastName(): AbstractControl {
    return this.contactForm.get('lastName');
  }
  get companyName(): AbstractControl {
    return this.contactForm.get('companyName');
  }
  get email(): AbstractControl {
    return this.contactForm.get('email');
  }
  get message(): AbstractControl {
    return this.contactForm.get('message');
  }
}
