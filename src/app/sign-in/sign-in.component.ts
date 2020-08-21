import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiServiceService} from '../services/api-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  private signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
  }

  onSubmitSignIn = () => {
    console.log(this.signInForm.value);
  }

  onSignInWithFB = () => {
    console.log('signIn with facebook');
  }

  onSignInWtihGmail = () => {
    console.log('singIn with gmail');
  }
}
