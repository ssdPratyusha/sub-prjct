import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private fb:FormBuilder) {
    this.loginForm=this.fb.group({
      UserID:'',
      Password:''
    })
   }

  ngOnInit() {
  }

}
