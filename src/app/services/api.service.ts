import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  login(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.post(`${environment.appUrl}${path}`, body)
  }
  resetPassword(path: string, body: Object = {}): Observable<any> {
    return this.httpClient.post(`${environment.appUrl}${path}`, body)
  }

}
