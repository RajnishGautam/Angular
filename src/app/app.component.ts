import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RheaderComponent } from './rheader/rheader.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConditionsflowComponent } from './conditionsflow/conditionsflow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RheaderComponent,ConditionsComponent,ConditionsflowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
