import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowseByCategoryComponent } from './browse-by-category/browse-by-category.component';
import { LatestJobComponent } from './latest-job/latest-job.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { JobsComponent } from './jobs/jobs.component';
import { SearchComponent } from './shared/search/search.component';
import { JobsFilterComponent } from './shared/jobs-filter/jobs-filter.component';
import { JobsListComponent } from './jobs-list/jobs-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    HomeComponent,
    BrowseByCategoryComponent,
    LatestJobComponent,
    CarouselComponent,
    DashboardComponent,
    JobsComponent,
    SearchComponent,
    JobsFilterComponent,
    JobsListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    FormsModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
