import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from '../../components/new-component/new-component.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from '../../components/question/question.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../components/navbar/navbar.component';


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
    NavbarComponent
  ],
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {

}
