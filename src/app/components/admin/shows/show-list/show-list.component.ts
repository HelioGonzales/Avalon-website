import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ShowServiceService } from 'src/app/core/services/show-service.service';
import { Show } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  show$ = this.showSvc.show;

  constructor(private showSvc: ShowServiceService, private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(show: Show): void {
    const navigationExtras: NavigationExtras = {
      state: { value: show },
    };
    this.router.navigate(['/admin/edit-show'], navigationExtras);
  }

  onGoToDetail(show: Show): void {
    const navigationExtras: NavigationExtras = {
      state: { value: show },
    };
    this.router.navigate(['/admin/show-detail'], navigationExtras);
  }

  async onGoToDelete(showId: any): Promise<void> {
    try {
      await this.showSvc.onDeleteShow(showId);
      alert('deleted');
    } catch (err) {
      console.log(err);
    }
  }
}
