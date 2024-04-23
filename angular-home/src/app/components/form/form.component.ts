import { Component ,OnInit} from '@angular/core';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newContact: any = {};

  constructor(private formapi:FormService){}

  ngOnInit(){
    this.fetchingContacts()
  }

  details:any
  fetchingContacts(){
  this.formapi.getFormData().subscribe(
    (data:any)=>{
      this.details=data
      console.log(data);
    },
    (error:any)=>{
      console.log('error getting data',error);
    }
  )
  }

  addContactDetails(){
    if (this.newContact.name && this.newContact.email){
      this.formapi.addContact(this.newContact).subscribe(
        (res:any)=>{
          console.log(res,'contact added successfully');
          this.newContact={}
        },
        (error:any)=>{
          console.log('error adding contact',error);
          
        }
      )
    }
  }
  }



