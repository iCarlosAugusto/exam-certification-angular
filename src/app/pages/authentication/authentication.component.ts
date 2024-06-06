import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatDividerModule],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {

}
