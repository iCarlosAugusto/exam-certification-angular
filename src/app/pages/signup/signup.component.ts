import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatDividerModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {

}
