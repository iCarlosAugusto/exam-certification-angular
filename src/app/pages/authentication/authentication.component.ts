import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatDividerModule, RouterLink],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {

}
