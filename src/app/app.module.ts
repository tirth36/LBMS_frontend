import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiserviceService } from './apiservices/apiservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateComponent,
    ReadComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
