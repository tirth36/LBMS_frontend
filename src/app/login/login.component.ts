import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = '';
  password:string= '';
  constructor(public router: Router){
  }
  checkvalue()
  {
    if(this.username=="TIRTH" && this.password=="123")
    {
      this.router.navigateByUrl('/create');   
    }
    else{
      alert("NOT REGISTERED");
    }
    //console.log(formvalue);
    
  }
}
