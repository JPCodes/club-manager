import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  providers: [MemberService]
})
export class RosterComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers();
  }

}
