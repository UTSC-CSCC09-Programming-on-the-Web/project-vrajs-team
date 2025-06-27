import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { STUDENT_ROUTES } from './student.routes';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(STUDENT_ROUTES),
    JoinQuizComponent
  ]
})
export class StudentModule {}
