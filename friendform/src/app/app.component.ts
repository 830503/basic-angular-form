import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  languages = ['PHP', 'HTML', 'Javascript', 'CSS', 'Angular'];
  langError = true;
  friendModel = new Friend('', '', '', 0, 'default');
  // allFriends = [];
  allFriends = [{firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', telephone: '0469420666', signatureMove: 'Yeet', language: 'Javascript'}];

  url = 'http://localhost:9100/allFriends';
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
        success => this.getAllFriends(this.url),
        error => console.error()
      );

  }

  public async getAllFriends(url: string): Promise<any> {
    return await fetch(this.url, {method: 'get', headers: {'Content-type': 'applicaiton/json'}})
    // .then(response => response.json())
    // .then(data => this.allFriends = data);
    .then(response => {
      return response.json();
    })
    .then(response => this.allFriends = response);
  }

  ngOnInit(): any {
    this.getAllFriends(this.url);
    console.log(this.allFriends);
  } 

}
