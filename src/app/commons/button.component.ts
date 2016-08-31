import { Component,DynamicComponentLoader, Injector, Input } from '@angular/core';
import { ComponentInjectService } from '../service/component.inject.service.ts';
import { InputTypeConstants } from '../constants/input.type.constants.ts';

@Component({
  selector: 'buttonComp',
  template:`<div id={{labelname}}></div>`,
  providers: [ComponentInjectService, InputTypeConstants]
})
export class ButtonComponent{
  @Input() labelname;
  @Input() datatype;
  @Input() dataItem : any;
  constructor(private _componentInjectService : ComponentInjectService, public dcl:DynamicComponentLoader,
    public _injector:Injector){

      this._componentInjectService = _componentInjectService;

  }
  ngOnInit(){
    console.log("Here " + this.labelname + "," + this.dataItem.type);
    this.dcl.loadAsRoot(this._componentInjectService.injectComponent('button',this.dataItem),"#"+this.labelname,this._injector);
  }
}
