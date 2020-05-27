import { Component }  from '@angular/core';

import '../../public/style.css';

@Component({
  //moduleId: String(module.id),
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Football informer';
}
