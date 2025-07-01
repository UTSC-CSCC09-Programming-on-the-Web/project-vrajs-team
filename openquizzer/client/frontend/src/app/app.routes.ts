import { Routes } from '@angular/router';
import { PayComponent } from './billing/subscripe/subscripe';

export const routes: Routes = [
  { path: '', redirectTo: 'student/join', pathMatch: 'full' }, 
  { path: 'pay', component: PayComponent },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then(m => m.StudentModule)
  }
];
