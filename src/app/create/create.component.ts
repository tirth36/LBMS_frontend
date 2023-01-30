import { Component } from '@angular/core';
import { FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservices/apiservice.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
    book_name:any;
    book_author:any;
    book_price:any;
    msg:any;
    getparamid:any;
    constructor(private formBuilder : FormBuilder,private service:ApiserviceService,private router:ActivatedRoute) {}

    ngOnInit(): void {
        this.getparamid=this.router.snapshot.paramMap.get('id');
        this.service.getsingledata(this.getparamid).subscribe((res)=>{
          //console.log(res.data[0].book_name);
          this.book_name=res.data[0].book_name;
          this.book_author=res.data[0].book_author;
          this.book_price=res.data[0].book_price;
        });
    }

    usersubmit(formvalue : NgForm)
    {
      if(this.book_name==null || this.book_author==null || this.book_price==null)
      {
        alert('All fields are required');
      }
      else
      {
        this.service.createdata(formvalue.value).subscribe((res)=>{
          // console.log(res,"hello");
            alert(res.message);
            if(res.message=="Data inserted succesfully")
            {
              formvalue.resetForm();
            }
        });
      }
    }

    updatedata(formvalue : NgForm)
    {
      // console.log(this.book_name,this.book_author);
      if(this.book_name==null || this.book_author==null || this.book_price==null)
      {
        alert('All fields are required');
      }
      else
      {
          this.service.updatedata(formvalue.value,this.getparamid).subscribe((res)=>{
              alert(res.message);
              if(res=="data updated")
              {
                formvalue.resetForm();
              }
          })
      }
    }
}
