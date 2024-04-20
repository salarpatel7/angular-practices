import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent {

  signupUsers:any[]=[]

  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  }
constructor(){}
ngOnInit(){
const localData=localStorage.getItem('signupUsers')
if(localData != null){
  this.signupUsers=JSON.parse(localData)
}
}

onSignUp(){
this.signupUsers.push(this.signupObj)
localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers))
}

onLogin(){
  const isUserExist=this.signupUsers.find(m => m.userName==this.loginObj.userName && m.password==this.loginObj.password)
  if(isUserExist != null){
    alert('use login successfully')
  } else {
    alert ('wrong credentials')
  }
}
}
