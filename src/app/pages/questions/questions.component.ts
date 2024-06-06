import { Component } from '@angular/core';
import { NewComponent } from '../../components/new-component/new-component.component';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../../components/question/question.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    NewComponent,
    MatButtonToggleModule,
    MatButtonModule,
    QuestionComponent,
    PaginationComponent,
    MatToolbarModule,
    MatIconModule,
    NavbarComponent,
    MatPaginatorModule
  ],
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
  currentQuestionType = "1";

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((qp) => {
      this.currentQuestionType = this.activeRoute.snapshot.queryParams?.["questionType"] ?? "1";
    });
  }

  onSelectQuestionType(event: MatButtonToggleChange) {
    this.router.navigate([], {
      queryParams: {
        questionType: event.value
      },
      queryParamsHandling: 'merge',
    });
  }
}
