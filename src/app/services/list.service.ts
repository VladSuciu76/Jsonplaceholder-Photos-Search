import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { GlobalVar } from './../globals';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private URL = GlobalVar.BASE_API_URL;

  constructor(private http: HttpClient) { }

  getPhotos() {
   return this.http.get(`${this.URL}/photos`).pipe(map(res=> res));
  }

}
