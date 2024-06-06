import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  constructor(private router: Router) {}

  onPageChange(event: PageEvent) {
    this.router.navigate([], {
      queryParams: {
        page: event.pageIndex
      },
      queryParamsHandling: 'merge'
    });
  }
}
