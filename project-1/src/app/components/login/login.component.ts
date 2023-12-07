import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  url = 'http://localhost:4200';
  admin = this.fb.group({
    "email": ["", [Validators.email,Validators.pattern("olawithbae217@gmail.com"), Validators.required]],

    "password": ["",[Validators.required, Validators.pattern("1234567")]]
  })
  // @ts-ignore
  focus: boolean;
  // @ts-ignore
  focus1: boolean;

  constructor( private fb: FormBuilder, private router:Router) { }

  get form1() {
    return this.admin.controls
  }

  ngOnInit(): void {
  }

  onSubmit() {
   
    // tslint:disable-next-line:triple-equals
    if ( true) {
      alert('Welcome Admin Come Back');

      this.router.navigate([''])
    }

  }
}