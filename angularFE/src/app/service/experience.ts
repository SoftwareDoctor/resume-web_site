import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, tap, delay } from 'rxjs';
import { Experience } from '../models/experience.model';
import { MOCK_EXPERIENCES } from './mock-experiences';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences = signal<Experience[]>([]);

  constructor(private http: HttpClient) { }

  loadExperiences() {
    //  dati mock per popolare la timeline
    return of(MOCK_EXPERIENCES).pipe(
      delay(500),
      tap(data => this.experiences.set(data))
    );
  }
}
