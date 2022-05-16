import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  private readonly BASE_URL = 'http://localhost:8080/api/submissions/';

  constructor(private readonly httpClient: HttpClient) {
  }

  getTop3Rows() {
      return this.httpClient.get(`${this.BASE_URL}`);
  }

  submitCode(code:any) {
    console.log(code);
    return this.httpClient.post(`${this.BASE_URL}`, code);
  }

}
