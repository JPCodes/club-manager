import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [MemberService]
})
export class ProfileComponent implements OnInit {

  memberID;
  currentMember;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.memberID = urlParameters['id'];
  });
    this.currentMember = this.memberService.getMemberByID(this.memberID);
  }

}
