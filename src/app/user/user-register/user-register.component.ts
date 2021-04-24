import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm  = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl(null,[Validators.required]),
      mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    },this.passwordMatchingvalidator);
  }

  passwordMatchingvalidator(fg:FormGroup) : Validators{
    return fg.get('password').value ===fg.get('confirmpassword').value ? null :
    { notmatched: true };
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  onSubmit()
  {
    console.log(this.registrationForm);
  }
}
