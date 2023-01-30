import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiserviceService } from './apiservice.service';

describe('ApiserviceService', () => {
  let service: ApiserviceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(ApiserviceService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // getalldata
  it('it should get all data', () => {

    const expect_result = { "message": "all books details", "data": [{ "id": 32, "book_name": "Tirth", "book_author": "suthar", "book_price": 100 }, { "id": 33, "book_name": "chakit", "book_author": "bhandari", "book_price": 122 }, { "id": 35, "book_name": "abc", "book_author": "abc", "book_price": 123 }] };

    let serviceresult:any;

    service.getalldata().subscribe(res=>{
      serviceresult=res;
    });
    httpMock.expectOne('http://localhost:4000/user').flush(expect_result);
    expect(serviceresult).toBe(expect_result);
  })

  //create data
  it('it should get all data', () => {

    const expect_result = {"message":"Data inserted succesfully"};

    let serviceresult:any;

    service.createdata({"id": 36, "book_name": "ab", "book_author": "ab", "book_price": 123}).subscribe(res=>{
      serviceresult=res;
    });
    httpMock.expectOne('http://localhost:4000/user').flush(expect_result);
    expect(serviceresult).toBe(expect_result);
  })

  //delete data
  it('delete working fine', () => {

    const expect_result = {message:'data deleted'};

    let serviceresult:any;

    service.deletedata(32).subscribe(res=>{
      serviceresult=res;
    });
    httpMock.expectOne('http://localhost:4000/user/32').flush(expect_result);
    expect(serviceresult).toBe(expect_result);
  })

  //update data
  it('update working fine', () => {

    const expect_result = {"message":"data updated"};

    let serviceresult:any;

    service.updatedata({"book_name": "ab", "book_author": "ab", "book_price": 123},32).subscribe(res=>{
      serviceresult=res;
    });
    httpMock.expectOne('http://localhost:4000/user/32').flush(expect_result);
    expect(serviceresult).toBe(expect_result);
  })

  //getsingledata

  it('get one data working fine', () => {

    const expect_result = {"message":"get single data","data":[{"id":32,"book_name":"Tirth1","book_author":"suthar","book_price":100}]};

    let serviceresult:any;

    service.getsingledata(32).subscribe(res=>{
      serviceresult=res;
    });
    httpMock.expectOne('http://localhost:4000/user/32').flush(expect_result);
    expect(serviceresult).toBe(expect_result);
  })

});
