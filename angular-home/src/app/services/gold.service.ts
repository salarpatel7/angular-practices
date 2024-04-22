import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GoldService {

  constructor(private http:HttpClient) { }
  apiUrl='https://www.goldapi.io/api/XAU/INR'
  apiKey='goldapi-4x1pq9slvasdt44-io'

  goldLiveRate(){
    const headers={
      'x-access-token':this.apiKey
    }

    return this.http.get(this.apiUrl,{headers})
  }


}
