import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {

  currentPage = "0";

  constructor(private router: Router, private activeRoute: ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe((qp) => {
      this.currentPage = this.activeRoute.snapshot.queryParams?.["page"] ?? "0";
    });
  }

  onPageChange(event: PageEvent) {
    this.router.navigate(['/questions'], {
      queryParams: {
        page: event.pageIndex
      },
      queryParamsHandling: 'merge',
      onSameUrlNavigation: "reload",
    });
  }
}
