import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'pref',
  pure: false
})

export class PrefPipe implements PipeTransform {

  transform(input: Member[], materialFilter){
    var output: Member[] = [];
    if(materialFilter.toLowerCase() === "paper"){
      for (var i = 0; i < input.length; i++) {
        if(input[i].preference === "paper") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (materialFilter.toLowerCase() === "plastic") {

      for (var i = 0; i < input.length; i++) {
        if(input[i].preference === "plastic") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
