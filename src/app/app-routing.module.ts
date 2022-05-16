import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top3Component } from './components/top3/top3.component';
import { SubmitComponent } from './components/submit/submit.component';


const routes: Routes = [
  {path: '', redirectTo: 'top3', pathMatch: 'full'},
  {path: 'submit', component: SubmitComponent},
  {path: 'top3', component: Top3Component},
  {path: '**', redirectTo: 'top3'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
