import { Component } from '@angular/core';

@Component({
  moduleId: __filename,
  selector: 'home',
  styleUrls: [
    'home.style.css'
  ],
  templateUrl: 'home.template.html'
})
export class Home {
	public name: string = 'John';

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}
