import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular 6';

  @ViewChildren('divs') divs: QueryList<ElementRef>;
  getDivs() {
    this.divs.forEach((div: ElementRef) => console.log(div.nativeElement));
  }
}
