import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact;
  constructor(private router: Router, private contactSvc: ContactService) {
    const navigation = this.router.getCurrentNavigation();
    this.contact = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.contact === 'undefined') {
      this.router.navigate(['/admin/contact-list-tracked']);
    }
  }

  onGoBackToList() {
    this.router.navigate(['/admin/order-list']);
  }

  async onGoToDelete(): Promise<void> {
    const confirmacion = confirm('are you sure you cant to delete ir?');
    if (confirmacion) {
      try {
        await this.contactSvc.onDeleteContact(this.contact.id);
        alert('deleted');
        this.onGoBackToList();
      } catch (err) {}
    }
  }
}
