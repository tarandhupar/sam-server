import { Component, Directive, ElementRef, Renderer, ViewEncapsulation, DynamicComponentLoader, OnInit , Injector} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ComponentInjectService } from './service/component.inject.service.ts';
import { InputTypeConstants } from './constants/input.type.constants.ts';
import '../js/samuikit.js';

// templateUrl example
import { Home } from './home';
import { Opportunity } from './opportunities';

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
  templateUrl: 'app.template.html',
  providers : [ComponentInjectService,InputTypeConstants]
})
export class App implements OnInit{
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public dcl:DynamicComponentLoader,public _injector:Injector,private _componentInjectService : ComponentInjectService) {

    this._componentInjectService = _componentInjectService;

    this.dcl.loadAsRoot(_componentInjectService.injectComponent('header',{}),"#header",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('footer',{}),"#footer",this._injector);
    
  }

  ngOnInit() {


  }

}
