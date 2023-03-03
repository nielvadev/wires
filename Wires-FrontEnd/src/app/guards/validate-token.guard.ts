import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  constructor(private AuthService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    return this.AuthService.validateToken();
  }

  canLoad(): Observable<boolean> | boolean {
    return this.AuthService.validateToken();
  }
}
