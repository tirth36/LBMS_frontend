import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let injector:TestBed;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    router = injector.inject(Router);
    component.router=router;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login on correct username and password',()=>{
    component.username="TIRTH";
    component.password="123";
    const navigatespy=spyOn(router,"navigateByUrl");
    component.checkvalue();
    expect(navigatespy).toHaveBeenCalledWith("/create");
  })
  it('should not login and alert message shown',()=>{
    component.username="tirth";
    component.password="123";
    spyOn(window,"alert");
    component.checkvalue();
    expect(window.alert).toHaveBeenCalledWith("NOT REGISTERED");
    // //const navigatespy=spyOn(router,"navigateByUrl");
    // component.checkvalue();
    // expect(navigatespy).toHaveBeenCalledWith("/create");
  })
});
