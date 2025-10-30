import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceTimeline } from '../experience-timeline/experience-timeline'; // Importa il componente della timeline

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ExperienceTimeline],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
