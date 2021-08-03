import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ContactService } from 'src/app/core/services/contact.service';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-list-tracked',
  templateUrl: './contact-list-tracked.component.html',
  styleUrls: ['./contact-list-tracked.component.css'],
})
export class ContactListTrackedComponent implements OnInit {
  contact$ = this.contactSvc.contact;
  constructor(private contactSvc: ContactService, private router: Router) {}

  ngOnInit(): void {}

  onGoToDetail(contact: Contact): void {
    const navigationExtras: NavigationExtras = {
      state: { value: contact },
    };
    this.router.navigate(['admin/contact-detail'], navigationExtras);
  }

  async onGoToDelete(contactId: any): Promise<void> {
    const confirmacion = confirm('are you sure to delete');
    if (confirmacion) {
      try {
        await this.contactSvc.onDeleteContact(contactId);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
