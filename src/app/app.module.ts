import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { Authentication } from './auth/authentication';
import { AuthenticateService } from './services/authenticate.service';
import { UserService } from './services/user.service';  
//import { ProductsService } from './services/products.service';  


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { ProfileComponent } from './profile/profile.component';
import { PaginationComponent } from './pagination.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	LoginComponent,	
	ProfileComponent,
	PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	routing,
	NgbModule.forRoot()
  ],
    providers: [
        Authentication,
        AuthenticateService,
		UserService
		/*,ProductsService*/
		/*{provide: ErrorHandler, useClass: MyErrorHandler}*/
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
