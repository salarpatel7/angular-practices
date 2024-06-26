import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  apiUrl='http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  getFormData():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  addContact(contactData:any):Observable<any>{
    return this.http.post(this.apiUrl,contactData)
  }

  deleteContact(contactId:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${contactId}`)
  }

  updateContact(contactID:any,newData:any){
    return this.http.put(this.apiUrl,newData)
  }
}
