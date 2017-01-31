import { Component, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  updateMemberForm(memberToUpdate){
  this.memberService.updateMember(memberToUpdate);
  }

  deleteMemberForm(memberToDelete){
  if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.memberService.deleteMember(memberToDelete);
  }
}
}
