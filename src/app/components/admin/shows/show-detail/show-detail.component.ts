import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ShowServiceService } from 'src/app/core/services/show-service.service';
import { Show } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css'],
})
export class ShowDetailComponent implements OnInit {
  show!: Show;

  constructor(private router: Router, private showSvc: ShowServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.show = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.show === 'undefined') {
      this.router.navigate(['/admin/show-list']);
    }
  }

  onGoToEdit(): void {
    const navigationExtras: NavigationExtras = {
      state: { value: this.show },
    };
    this.router.navigate(['/admin/edit-show'], navigationExtras);
  }

  onGoBackToList(): void {
    this.router.navigate(['/admin/show-list']);
  }

  async onGoToDelete(): Promise<void> {
    const confirmacion = confirm('are you sure you want to delete it?');
    if (confirmacion) {
      try {
        await this.showSvc.onDeleteShow(this.show.id);
        alert('deleted');
        this.onGoBackToList();
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  }
}
