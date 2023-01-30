import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservices/apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
    constructor(private router : Router,private service: ApiserviceService) {}
    readdata:any;
    ngOnInit(): void {
      this.service.getalldata().subscribe((res)=>{
          this.readdata = res.data;
      });
    }
    
    deleteid(id:any)
    {
      this.service.deletedata(id).subscribe((res)=>{
        //console.log(res);
        alert(res.message);
        location.reload();
      });
    }
    updateid(id:any)
    {
      console.log(id);
    }
}
