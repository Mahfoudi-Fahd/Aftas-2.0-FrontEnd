import { Component } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { Competition } from '../../models/competition';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss'
})
export class CompetitionsComponent {
  competitions: Competition[] = [];

  constructor(private competitionService:CompetitionService) { }

  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((data: Competition[]) => {
      this.competitions = data;
    }
    );
  }
  isFutureDate(date: Date | undefined): boolean {
    if (!date) return false;
    
    const currentDate = new Date();
    date = new Date(date);
    currentDate.setHours(1, 0, 0, 0);
    return date.getTime() > currentDate.getTime();
  }
}
