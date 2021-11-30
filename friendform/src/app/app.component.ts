import { Component } from '@angular/core';
import { Friend } from './friend';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['PHP', 'HTML', 'Javascript', 'CSS', 'Angular'];
  langError = true;
  friendModel = new Friend('', '', '', 0, 'default');

  validateLang(value: string){
    if (value === 'default'){
      this.langError = true;
    } else {
      this.langError = false;
    }
  }

}
