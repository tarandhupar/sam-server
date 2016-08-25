import { Component, Directive, ElementRef, Renderer, ViewEncapsulation, DynamicComponentLoader, OnInit , Injector} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import '../js/samuikit.js';

// templateUrl example
import { Home } from './home';
import { Opportunity } from './opportunities';

declare var label: any;
declare var footer: any;
declare var header: any;

function compileToComponent(selector,template) {
  @Component({ 
    selector, 
    template 
  })
  class FakeComponent {};
  return FakeComponent;
}
//
/////////////////////////h
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}




/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge
  ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app.style.css'
  ],
  template: `
 <div id="header"></div>

   <nav>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./home'] ">Home</a>
    <a [routerLinkActive]="['active', 'router-link-active']" [routerLink]=" ['./opportunity'] ">Opportunities</a>
  </nav>

  <main>
        <router-outlet></router-outlet>
  </main>

  
  <div id="footer"></div>

   
  `
})
export class App implements OnInit{
  title: string = 'ftw';
  data = {};
  server: string;  
  footerText : any; 
  headerText : any;

  constructor(public dcl:DynamicComponentLoader, 
      public _injector:Injector) {    
    
    this.footerText = footer.render({});
    this.headerText = header.render({});
    
    this.dcl.loadAsRoot(compileToComponent('footer',this.footerText),"#footer",this._injector);
    this.dcl.loadAsRoot(compileToComponent('header',this.headerText),"#header",this._injector);

  }

  ngOnInit() {
    
    
  }

}
