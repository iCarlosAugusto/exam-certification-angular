import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AlternativeComponent } from '../alternative/alternative.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AlternativeComponent],
  templateUrl: './question.component.html',

})
export class QuestionComponent {

}
