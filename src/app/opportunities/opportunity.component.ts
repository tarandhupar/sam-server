import { Component, DynamicComponentLoader, Injector} from '@angular/core';
import { DataService } from '../../backend/api.ts';
import { Configuration } from '../../backend/app.constants.ts';
import { ComponentInjectService } from '../service/component.inject.service.ts';
import { InputTypeConstants } from '../constants/input.type.constants.ts';

@Component({
  selector: 'opportunity',
  styleUrls: [
    'opportunity.style.css'
  ],
  templateUrl: 'opportunity.template.html',
  providers: [DataService, Configuration, ComponentInjectService, InputTypeConstants]
})
export class Opportunity {
	private error : string;
	private countries;

    constructor(private _dataService: DataService, private _componentInjectService : ComponentInjectService, public dcl:DynamicComponentLoader,
      public _injector:Injector){
        this._dataService = _dataService;
        this._componentInjectService = _componentInjectService;

        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"large", data:"Test"}),"#olabel",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('alert',{type:"success", title:"Test", description:"This is a test"}),"#oalert",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"small", data:"Month"}),'#label1',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"small", data:"Day"}),'#label2',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"small", data:"Year"}),'#label3',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"large", data:"Month"}),'#label4',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"large", data:"Day"}),'#label5',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('label',{type:"large", data:"Year"}),'#label6',this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"default", data:"Default"}),"#button1",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"default", data:"Active"}),"#button2",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"default", data:"Hover"}),"#button3",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"alt", data:"Default"}),"#button4",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"alt", data:"Active"}),"#button5",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"alt", data:"Hover"}),"#button6",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"secondary", data:"Default"}),"#button7",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"secondary", data:"Active"}),"#button8",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"secondary", data:"Hover"}),"#button9",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"gray", data:"Default"}),"#button10",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"gray", data:"Active"}),"#button11",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"gray", data:"Hover"}),"#button12",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"outline", data:"Default"}),"#button13",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"outline", data:"Active"}),"#button14",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"outline", data:"Hover"}),"#button15",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"inverted", data:"Default"}),"#button16",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"inverted", data:"Active"}),"#button17",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"inverted", data:"Hover"}),"#button18",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"disabled", data:"Default"}),"#button19",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"disabled", data:"Active"}),"#button20",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"disabled", data:"Hover"}),"#button21",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"big", data:"Default"}),"#button22",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"big", data:"Active"}),"#button23",this._injector);
        this.dcl.loadAsRoot(_componentInjectService.injectComponent('button',{type:"big", data:"Hover"}),"#button24",this._injector);


    }
    ngOnInit() {
        this.getCountries();
    }

    getCountries(){
        this.error = "";
        this.countries = [];
        this._dataService.getCountries()
         .subscribe(
            data => this.countries = data,
            error => this.error = "Error in API call."
         );
    }
}
