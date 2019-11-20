import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService {

  URL_API = 'https://venados.dacodes.mx/api/notifications';
  constructor(private http: HttpClient) { }
  getAllNotifications(): Observable<any> {
    let headers = new HttpHeaders().append('Accept', 'application/json'); 
    return this.http.get<any>(this.URL_API,{headers})
      // .pipe(map((data: any) => data.data.results))
      .pipe(map((data: any) => data.data.notifications))
  }
}
