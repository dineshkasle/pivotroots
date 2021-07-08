import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesComponent} from './courses/courses.component';
import {MonthlyComponent} from './courses/monthly/monthly.component';
import {YearlyComponent} from './courses/yearly/yearly.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},
  {path: 'monthly', component: MonthlyComponent},
  {path: 'yearly', component: YearlyComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
