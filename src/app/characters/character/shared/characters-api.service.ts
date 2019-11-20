import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  // URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_API = 'https://venados.dacodes.mx/api/games';
  constructor(private http: HttpClient) { } 
 
  getAllCharacters(): Observable<any> {
    let headers = new HttpHeaders().append('Accept', 'application/json'); 
    return this.http.get<any>(this.URL_API,{headers})
      // .pipe(map((data: any) => data.data.results))
      .pipe(map((data: any) => data.data.games))
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { map, catchError} from 'rxjs/operators';

// @Injectable()
// export class CharactersApiService {

//   constructor(
//     public http: HttpClient
//   ) { }

//   getAllCharacters(): Observable<any> {

//     // tslint:disable-next-line:prefer-const
//     let url ='https://venados.dacodes.mx/api/games';
//     let headers: HttpHeaders = new HttpHeaders();
//     headers = headers.set('Accept', 'application/json');
//     return this.http.get(url, {headers})
//     .pipe(
//     map( (resp: any) => {
//     return resp.data;
//     }));
//   }

// }
