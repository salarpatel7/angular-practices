import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {


  apiUrl='http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  getFormData(){
    return this.http.get(this.apiUrl)
  }
}
