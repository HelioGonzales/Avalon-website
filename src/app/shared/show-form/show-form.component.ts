import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowServiceService } from 'src/app/core/services/show-service.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  show!: Show;
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private showService: ShowServiceService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.show = navigation?.extras?.state?.value;
    this.formBuild();
  }

  ngOnInit(): void {
    if (typeof this.show === 'undefined') {
      this.router.navigate(['/admin/create-show']);
    } else {
      this.form.patchValue(this.show);
    }
  }

  onSaveCreateShow(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      const show = this.form.value;
      const showId = this.show?.id || null;

      this.showService.onSaveShow(show, showId);
      this.form.reset();
    }
  }

  onGoBacktoList(): void {
    this.router.navigate(['/admin/show-list']);
  }

  private formBuild(): void {
    this.form = this.formBuilder.group({
      date: ['', [Validators.required]],
      place: ['', [Validators.required]],
      time: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
  }
}
