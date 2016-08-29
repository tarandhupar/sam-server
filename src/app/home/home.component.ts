import { Component,DynamicComponentLoader, Injector } from '@angular/core';
import { ComponentInjectService } from '../service/component.inject.service.ts';
import { InputTypeConstants } from '../constants/input.type.constants.ts';


@Component({

  selector: 'home',
  styleUrls: [
    'home.style.css'
  ],
  templateUrl: 'home.template.html',
  providers: [ComponentInjectService,InputTypeConstants]
})
export class Home {
  constructor(private _componentInjectService : ComponentInjectService, public dcl:DynamicComponentLoader,public _injector:Injector){
    this._componentInjectService = _componentInjectService;
    var accordionConfig = {accordions: [
                                          {title:"Test1", content:"This is Test1",expanded:false},
                                          {title:"Test2", content:"This is Test2", expanded:true},
                                          {title:"Test3", content:"This is Test3",expanded:false}
                                        ],
                          bordered:false };
    var accordionBorderConfig = {accordions: [
                                          {title:"Test1", content:"This is Test1",expanded:false},
                                          {title:"Test2", content:"This is Test2", expanded:true},
                                          {title:"Test3", content:"This is Test3",expanded:false}
                                        ],
                          bordered:true };
    var MainDropDownConfig = {
                                type: 'dropdown',
                                label: 'Dropdown label',
                                name: 'options',
                                options: {
                                  'value1': 'Option A',
                                  'value2': 'Option B',
                                  'value3': 'Option C'
                                }
                              };
    var dropdownShortConfig = {
                                type: 'dropdown',
                                label: 'Dropdown label',
                                name: 'options',
                                options: {
                                  'value1': 'Option A'
                                }
                              };
    var radioMainConfig = {
                            type: 'radio',
                            label: 'Historical figures 2',
                            name: 'historical-figures-2',
                            options: {
                              'stanton': 'Elizabeth Cady Stanton',
                              'anthony': 'Susan B. Anthony',
                              'tubman': 'Harriet Tubman'
                            }
                          };
    var radioShortConfig = {
                              type: 'radio',
                              label: 'Custom label',
                              name: 'historical-figures-2',
                              options: {
                                'stanton': 'Elizabeth Cady Stanton'
                              }
                            };
    var checkboxMainConfig = {
                                type: 'checkbox',
                                label: 'Historical figures 2',
                                name: 'historical-figures-2',
                                options: {
                                  'stanton': 'Elizabeth Cady Stanton',
                                  'anthony': 'Susan B. Anthony',
                                  'tubman': 'Harriet Tubman'
                                }
                              };

    var checkboxShortConfig = {
                                type: 'checkbox',
                                label: 'Custom label',
                                name: 'historical-figures-2',
                                options: {
                                  'stanton': 'Elizabeth Cady Stanton'
                                }
                              };



    this.dcl.loadAsRoot(_componentInjectService.injectComponent('alert',{type:"success", title:"Successful Alert Tiltle", description:"Description of sucessful alert"}),"#alert1",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('alert',{type:"warning", title:"Warning Alert Tiltle", description:"Description of warning alert"}),"#alert2",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('alert',{type:"error", title:"Error Alert Tiltle", description:"Description of error alert"}),"#alert3",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('alert',{type:"info", title:"Info Alert Tiltle", description:"Description of info alert"}),"#alert4",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('accordions',accordionConfig),'#accordions1',this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('accordions',accordionBorderConfig),"#accordions2",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',MainDropDownConfig),"#select1",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',dropdownShortConfig),"#select2",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',radioMainConfig),"#select3",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',radioShortConfig),"#select4",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',checkboxMainConfig),"#select5",this._injector);
    this.dcl.loadAsRoot(_componentInjectService.injectComponent('select',checkboxShortConfig),"#select6",this._injector);
  }

  public name: string = 'John';

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}
