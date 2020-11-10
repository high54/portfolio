import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// Services
import { AppService } from 'src/app/app.service';
import { ContactService } from '../../services';
// Rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });
  private sendEmailSub: Subscription;
  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
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
        this.router.navigateByUrl('contact/success');
      });
    }
  }
  get name(): AbstractControl {
    return this.contactForm.get('name');
  }
  get subject(): AbstractControl {
    return this.contactForm.get('subject');
  }
  get email(): AbstractControl {
    return this.contactForm.get('email');
  }
  get message(): AbstractControl {
    return this.contactForm.get('message');
  }
}
