import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _isSignedIn = new BehaviorSubject<boolean>(false);
  isSignedIn$ = this._isSignedIn.asObservable();

  private userId = new BehaviorSubject<String>('');
  userId$ = this.userId.asObservable();
  constructor() {}

  setSignin(status: boolean) {
    this._isSignedIn.next(status);
  }
  getSignin(): boolean {
    return this._isSignedIn.value;
  }

  setUserId(id: String) {
    this.userId.next(id);
  }
  getUserId(): String {
    return this.userId.value;
  }
}
