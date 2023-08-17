import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { AssessmentQuestionsComponent } from './users/assessment-questions/assessment-questions.component';
import { AssessmentScoreComponent } from './users/assessment-score/assessment-score.component';
import { HomeComponent } from './users/home/home.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'assessment', component: AssessmentQuestionsComponent},
  {path: 'assessment-score', component: AssessmentScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
