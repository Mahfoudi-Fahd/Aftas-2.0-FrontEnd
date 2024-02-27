import { Component } from '@angular/core';
import { CCompetition, Competition } from '../../models/competition';
import { CompetitionService } from '../../services/competition/competition.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mycompetitions',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './mycompetitions.component.html',
  styleUrl: './mycompetitions.component.scss'
})
export class MycompetitionsComponent {

  competitions: Competition[] = [];
  constructor(private competitionService:CompetitionService,private authService:AuthService) { }
  ngOnInit(): void {
    // const userId = this.authService.getUser().id; // Replace with the actual user ID
    // this.competitionService.getMyCompetitions(userId).subscribe((competitions: Competition[]) => {
    //   this.competitions = competitions;
    // });
    

  }
  
}
