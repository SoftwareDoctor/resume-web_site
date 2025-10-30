import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../service/experience';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-timeline.html',
  styleUrl: './experience-timeline.css',
})
export class ExperienceTimeline implements OnInit {
  experienceService = inject(ExperienceService);
  experiences = this.experienceService.experiences;

  // Array di colori per le card della timeline
  colors = ['#41516C', '#FBCA3E', '#E24A68', '#1B5F8C', '#4CADAD'];

  ngOnInit() {
    this.experienceService.loadExperiences().subscribe();
  }
}
