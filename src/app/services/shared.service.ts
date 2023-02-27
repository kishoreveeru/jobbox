import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loginStatus = new BehaviorSubject(true);
  //userDetails = new BehaviorSubject('');
  // newStudendetails = this.StudentDetails.asObservable();
  // userLogins = this.userDetails.asObservable();
  constructor() { }

  setLoginStatus(data: any) {
    this.loginStatus.next(data)
  }

  getLoginStatus(){
    return this.loginStatus;
  }
  
}
