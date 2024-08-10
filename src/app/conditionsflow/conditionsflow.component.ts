import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionsflow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ol>
      <li *ngFor="let fruit of fruits">{{ fruit }}</li>
    </ol>
  `,
  styleUrls: ['./conditionsflow.component.css']
})
export class ConditionsflowComponent {
  name = 'rajnish';
  fruits = ['apple', 'pineapple', 'pinnes'];
  age = 21;
}

