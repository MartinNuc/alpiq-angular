import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: User = null;

  isUserLoggedIn(): boolean {
    return !!this.user;
  }
}
