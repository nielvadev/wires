import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../auth.component.css'],
})
export class RegisterComponent {
  errorMessage: string = '';

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    fullname: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  register(): void {
    const { username, password, email, fullname } = this.registerForm.value;

    this.authService
      .register(username, password, email, fullname)
      .subscribe((resp: boolean) => {
        resp
          ? this.router.navigateByUrl('/auth/login')
          : (this.errorMessage = 'This user or email already exists');
      });
  }

  fieldNotNull(field: string) {
    return (
      this.registerForm.get(field)?.invalid &&
      this.registerForm.get(field)?.touched
    );
  }
}
