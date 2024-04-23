import { Component ,OnInit} from '@angular/core';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

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
}
