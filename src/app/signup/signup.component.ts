import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  username:any = '';
  password_txt:any= '';
  password_txt1:any='';
  constructor(private router : Router , private formBuilder : FormBuilder){
  }
  addvalue(formvalue : NgForm)
  {
    if(this.username.length==0 || this.password_txt.length==0 || this.password_txt1.length==0)
    {
      alert("please fill all details");
    }
    else if(this.password_txt!=this.password_txt1)
    {
      alert("password does not match");
    }
    else if(this.username=="tirth" && this.password_txt==this.password_txt1)
    {
      alert("registered successfully");
      this.router.navigateByUrl('/login');
    }
    else{
      alert("Error in registration");
    }
  }
}
