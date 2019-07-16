import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: User = { email: 'martin@nuc.cz' };

  isUserLoggedIn(): boolean {
    return !!this.user;
  }
}
