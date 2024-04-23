import { Component ,OnInit} from '@angular/core';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newContact: any = {};
  formData: any = {};
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
  // submitForm(): void {
  //   console.log('Form data:', this.formData);
    
  //   this.formapi.addContact(this.formData).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //       this.details.push(res)
  //       this.formData={}
        
  //     }
  //   )
  // }


  delete(constactId:any):void{
    this.formapi.deleteContact(constactId).subscribe(
      (res:any)=>{
        console.log(`Deleted succesfully ${res}`);

        this.details=this.details.filter((constact: { id: any; }) => constact.id !==constactId)
      },
      (err)=>{
        console.log('failed to delete');
        
      }
    )
  }


  editContact(contactId:any,newData:any){
    this.formapi.updateContact(contactId,newData).subscribe(
      (res)=>{
        console.log(`editing ${res}`);
        
      },
      (err:any)=>{
        console.log('error to edit ');
        
      }
    )
  }
  }



