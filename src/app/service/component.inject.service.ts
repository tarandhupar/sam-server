import { Component, Injectable } from '@angular/core';
import { InputTypeConstants } from '../constants/input.type.constants.ts';


@Injectable()
export class ComponentInjectService {   

    constructor(private _inputTypeConstants : InputTypeConstants) {     
      
    }

    compileToComponent(selector,template) {
      @Component({ 
        selector, 
        template 
      })
      class ComponentInject {};
      return ComponentInject;
    }

    injectComponent( id : string, config : any){   

      let type : any;
      
      if(id === 'label')
        type = this._inputTypeConstants.getConstants().label;
      else if (id === 'alert')
        type = this._inputTypeConstants.getConstants().alert;
        
      
      return this.compileToComponent(id,type.render(config));
    }
   
   
}