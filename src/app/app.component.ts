import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, range, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'course_tm';
}
