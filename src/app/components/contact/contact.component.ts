import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formBuild();
  }

  ngOnInit(): void {}

  onSubmitMessage() {
    console.log(this.form.value);

    // this.router.navigate(['/']);
    if (this.form.valid) {
      alert('Thank you for your contact');
      this.form.reset();
    } else {
      alert('not valid');
    }
  }

  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(
            '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$'
          ),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get message() {
    return this.form.get('message');
  }
}
