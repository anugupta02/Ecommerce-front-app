import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signInForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor() { }

  ngOnInit() {
  }

  onSignUpHandler = () => {
    console.log(this.signInForm.value);
  }


  onSignUnWithFB = () => {
    console.log('fb Sign up');
  }

  onSignUnWithGmail = () => {
    console.log('Gmail Sign up');
  }

}
