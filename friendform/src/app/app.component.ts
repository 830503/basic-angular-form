import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['PHP', 'HTML', 'Javascript', 'CSS', 'Angular'];
  langError = true;
  friendModel = new Friend('', '', '', 0, 'default');

  constructor(private addFriendService: AddFriendService){}

  validateLang(value: string){
    if (value === 'default'){
      this.langError = true;
    } else {
      this.langError = false;
    }
  }

  onSubmmit(): void{
    // console.log(this.friendModel);
    this.addFriendService.addFriend(this.friendModel)
      .subscribe(
        data => console.log(this.friendModel),
        error => console.error()
        
      )

  }
}
