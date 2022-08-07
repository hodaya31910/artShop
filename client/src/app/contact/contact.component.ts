import { Component, OnInit ,Input} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      subject: this.fb.control(null, [Validators.required]),
      massage: this.fb.control(null, [Validators.required])
    });
  }

  submit() {
    this.isSubmitted=true;
    if (this.form.valid){

    }
  }

}
