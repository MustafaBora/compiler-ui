import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  private readonly BASE_URL = 'http://localhost:8080/api/submissions/';

  constructor(private readonly httpClient: HttpClient) {
  }

  getTop3Rows():Observable<Place> {
      return <Observable<Place>>this.httpClient.get(`${this.BASE_URL}`);
  }

  submitCode(code:any) {
    console.log(code);
    return this.httpClient.post(`${this.BASE_URL}`, code);
  }

}
