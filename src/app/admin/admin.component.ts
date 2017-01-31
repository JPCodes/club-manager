import { Component } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [MemberService]
})
export class AdminComponent {

  constructor(private memberService: MemberService) { }

  submitForm(title: string, name: string, description: string) {
  var newMember: Member = new Member(title, name, description);
  this.memberService.addMember(newMember);
  }
}
