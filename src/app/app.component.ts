import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><work-demo></work-demo>`,
})
export class AppComponent  { name = 'Angular'; }
