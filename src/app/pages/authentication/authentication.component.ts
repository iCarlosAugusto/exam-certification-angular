import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatDividerModule, RouterLink, ReactiveFormsModule, NgClass],
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {

  emailError: string | null = null;
  passwordError: string | null = null;

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  forgotPassword() {
    this.validateEmailForgot();
  }

  private validateEmailForgot() {
    if(!this.userForm.get("email")?.value){
      this.emailError = "Este campo é obrigatório";
      return;
    }
    if(this.userForm.get("email")?.invalid){
      this.emailError = "Email inválido";
      return;
    }
  }
}
