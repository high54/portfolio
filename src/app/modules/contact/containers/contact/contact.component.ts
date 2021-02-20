import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// Services
import { AppService } from 'src/app/app.service';
import { ContactService } from '../../services';
// Rxjs
import { Subscription } from 'rxjs';
// Interfaces
import { Contact } from '../../models/contact.interface';

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
  private sendEmailSub: Subscription | undefined;
  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.appService.title = 'Me contacter';
    this.appService.description = `
    Vous pouvez directement m'envoyer un mail depuis cette page !
    `;
  }
  public ngOnDestroy(): void {
    if (this.sendEmailSub) {
      this.sendEmailSub.unsubscribe();
    }
  }
  public sendEmail(): void {
    const { value, valid } = this.contactForm;
    if (valid) {
      const { name, email, subject, message } = value;
      const mail: Contact = {
        name,
        email,
        subject,
        message
      };
      this.sendEmailSub = this.contactService.sendEmail(mail).subscribe((response) => {
        this.router.navigateByUrl('contact/success');
      });
    }
  }
  get name(): AbstractControl | null {
    return this.contactForm.get('name');
  }
  get subject(): AbstractControl | null {
    return this.contactForm.get('subject');
  }
  get email(): AbstractControl | null {
    return this.contactForm.get('email');
  }
  get message(): AbstractControl | null {
    return this.contactForm.get('message');
  }
}
