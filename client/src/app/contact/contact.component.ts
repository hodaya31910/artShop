import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../shared/services/contact.service';
import {NotificationService} from '../shared/services/generic/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder, private contactService: ContactService,
              private notificationService: NotificationService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      subject: this.fb.control(null, [Validators.required]),
      massage: this.fb.control(null, [Validators.required])
    });
  }

  submit() {
    const options = {
      title: 'CONFIRM.DOWNLOAD.JOB.TITLE',
      message: 'CONFIRM.DOWNLOAD.JOB.MESSAGE',
      cancelText: 'CONFIRM.DOWNLOAD.JOB.CANCELTEXT',
      confirmText: 'CONFIRM.DOWNLOAD.JOB.CONFIRMTEXT'
    };
    this.notificationService.open(options);
    this.notificationService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.saveData();
      }
    });

    this.isSubmitted = true;
    if (this.form.valid) {
      this.contactService.contact(this.form.getRawValue()).subscribe(response => {
        if (response) {
        }
      });

    }
  }
  saveData() {

  }

}
