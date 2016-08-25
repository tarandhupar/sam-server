import { Component, DynamicComponentLoader, Injector} from '@angular/core';
import { DataService } from '../../backend/api.ts';
import { Configuration } from '../../backend/app.constants.ts';
import { ComponentInjectService } from '../service/component.inject.service.ts';
import { InputTypeConstants } from '../constants/input.type.constants.ts';

@Component({
  moduleId: __filename,
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
