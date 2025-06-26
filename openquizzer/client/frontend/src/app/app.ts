import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Masterform } from './components/quizform/masterform/masterform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Masterform],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
