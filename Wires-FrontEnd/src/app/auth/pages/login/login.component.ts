import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.component.css'],
})
export class LoginComponent {
  message: string = '';

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login(): void {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe((resp: boolean) => {
      resp
        ? this.router.navigateByUrl('/dashboard')
        : (this.message = 'Invalid username or password');
    });
  }

  clearError(): void {
    this.message = '';
  }

  fieldNotNull = (field: string): boolean | undefined =>
    this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched;
}
