import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MemberService } from '../../services/member/member.service';
import { CMember, Member } from '../../models/member';
import { NotificationsService } from '../../services/notification/notifications.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from '../notifications/notifications.component';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Flowbite } from '../../config/flowbite';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,NotificationsComponent,ReactiveFormsModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})

@Flowbite()
export class MemberComponent implements OnInit{
  httpClient = inject(HttpClient);
  toSave: Member = new CMember();

  searchControl = new FormControl();


  constructor(private memberService: MemberService,private router:Router, private notificationService: NotificationsService) { }
  members: Member[] = [];

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data: Member[]) => {
      console.log(data);
      this.members = data;
    }
    );
  
    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      if (searchTerm.length <= 0)
        this.memberService.getMembers().subscribe((data: Member[]) => {
            this.members = data;
          });
      else
        this.memberService.searchByCriteria(searchTerm).subscribe((data: Member[]) => {
            this.members = data;
          });
    });
  }


  onSubmit() {
    this.memberService.addMember(this.toSave).subscribe(
      (data) => {
        console.log(data);
        this.notificationService.show(["Member added successfully"], "success")
      },   
      (error) => {
        if (error.status === 401 || error.status === 403) {
          // Token expired or unauthorized
          console.error('Token expired or unauthorized:', error);
          this.notificationService.show(["Token expired or unauthorized"], "error")
        }
        else  if (error.status === 400) {
          // Token expired or unauthorized
          console.error('Bad request:', error);
          this.notificationService.show(["Bad request"], "error")
        }
        else  if (error.status === 500) {
          // Token expired or unauthorized
          console.error('Server error:', error);
          this.notificationService.show(["You dont have the right permission"], "error")
        }
        else  if (error.status === 404) {
          // Token expired or unauthorized
          console.error('Not found:', error);
          this.notificationService.show(["Not found"], "error")
        }
      }
    );
    }
}
