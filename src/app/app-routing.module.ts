import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyComponent } from './children/daily/daily.component';
import { HourlyComponent } from './children/hourly/hourly.component';
import { NowComponent } from './children/now/now.component';


import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Details',
    component: DetailsComponent,
    children: [
      {path: 'now', component: NowComponent},
     
      {path: 'hourly', component: HourlyComponent},
      {path: 'daily', component: DailyComponent}
    ]
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
