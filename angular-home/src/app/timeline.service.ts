import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {


  private apiUrl2 ='https://disease.sh/v3/covid-19/historical/all?lastdays=all'
  private apiUrl='http://localhost:3000/chartData'
  constructor(private http: HttpClient) { }

  getCovidData(){
   return this.http.get(this.apiUrl2)
  }

  getchartdata(){
    return this.http.get(this.apiUrl2)
  }

 
}
