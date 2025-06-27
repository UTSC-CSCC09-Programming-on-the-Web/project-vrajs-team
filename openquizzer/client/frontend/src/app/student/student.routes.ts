import { Routes } from '@angular/router';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';

export const STUDENT_ROUTES: Routes = [
  { path: '', redirectTo: 'join', pathMatch: 'full' },
  { path: 'join', component: JoinQuizComponent }
];
