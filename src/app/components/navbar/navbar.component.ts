import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isAuthenticated = true;
  isShowingProfileSettings = false;

  showProfileSettings() {
    if(this.isShowingProfileSettings === false){
      console.log("switchProfileSetting");
      this.isShowingProfileSettings = true;
    }

  }

  hindeProfileSettings() {
    if(this.isShowingProfileSettings === true){
      console.log("Hide!");
      this.isShowingProfileSettings = false;
    }
  }


}
