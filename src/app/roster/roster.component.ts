import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  providers: [MemberService]
})
export class RosterComponent implements OnInit {
  filterByPreference: string = "all";

  constructor(private memberService: MemberService, private router: Router){}

  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  ngOnInit(){
    this.members = this.memberService.getMembers();
  };

  goToProfile(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };

  onChange(option) {
  this.filterByPreference = option;
}

}
