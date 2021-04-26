import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { LocalComponent } from './local/local.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';import { NowComponent } from './children/now/now.component';
import { HourlyComponent } from './children/hourly/hourly.component';
import { DailyComponent } from './children/daily/daily.component';
import { SubnavComponent } from './subnav/subnav.component';





 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SearchComponent,
    LocalComponent,
    HomeComponent,
    DetailsComponent,
    
    NowComponent,
    HourlyComponent,
    DailyComponent,
    SubnavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
