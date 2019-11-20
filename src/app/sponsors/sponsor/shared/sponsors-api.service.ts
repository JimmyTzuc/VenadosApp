import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SponsorsApiService {

  URL_API = 'https://venados.dacodes.mx/api/sponsors';
  constructor(private http: HttpClient) { }
  getAllSponsors(): Observable<any> {
    let headers = new HttpHeaders().append('Accept', 'application/json'); 
    return this.http.get<any>(this.URL_API,{headers})
      // .pipe(map((data: any) => data.data.results))
      .pipe(map((data: any) => data.data.sponsors))
  }
}
