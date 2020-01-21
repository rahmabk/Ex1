 import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule, Validators,FormGroup,FormBuilder} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onchange = new EventEmitter<boolean>();
confirmed:boolean
  formEnvoi : FormGroup;
  connected:boolean;
  haveaccount:boolean;
  

  tab=[{"email":"rahma@gmail.com","password":"azerty"},{"email":"rahma@gmail.com","password":"azerty"}]
  constructor (private fb :FormBuilder)
 {this.formEnvoi=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(4)]],

    })
  }
  ngOnInit(){
    this.confirmed=false;
    this.haveaccount=true
  }


  get email(){return this.formEnvoi.get("email")}


  get password(){return this.formEnvoi.get("password")}

  register(){
    this.haveaccount=false
  }
  envoyer(){
   if(this.formEnvoi.valid){
   for (var i = 0; i < this.tab.length ; i++) {
    if (this.tab[i].email == this.formEnvoi.value.email && this.tab[i].password == this.formEnvoi.value.password) {
       this.connected=true
        this.onchange.emit(this.connected)

              }else this.connected=false
             
            }
      
      

      
  }


}
}