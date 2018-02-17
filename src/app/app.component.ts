import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mailTo = "mailto:?body=www.wthrn.com&subject=" + encodeURI("Check out wthrn! rn!");
}
