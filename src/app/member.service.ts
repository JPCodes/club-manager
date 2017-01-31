import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('/members')
   }

  getMembers(){
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberByID(memberID: number){
   return this.angularFire.database.object('/members/' + memberID);
  }

  updateMember(localUpdatedMember){
  var memberEntryInFirebase = this.getMemberByID(localUpdatedMember.$key);
  memberEntryInFirebase.update({
                              title: localUpdatedMember.title,
                              name: localUpdatedMember.name,
                              description: localUpdatedMember.description,
                              preference: localUpdatedMember.preference
                            });
                          }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberByID(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }


}
