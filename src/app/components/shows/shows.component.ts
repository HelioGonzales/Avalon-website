import { Component, OnInit } from '@angular/core';
import { ShowServiceService } from 'src/app/core/services/show-service.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  show$ = this.showSvc.show;
  showSpinner: boolean = true;
  constructor(private showSvc: ShowServiceService) {}

  ngOnInit(): void {
    this.show$.subscribe(() => (this.showSpinner = false));
  }
}
