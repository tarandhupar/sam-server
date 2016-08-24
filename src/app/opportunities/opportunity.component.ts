import { Component } from '@angular/core';
import { DataService } from '../../backend/api.ts'
import { Configuration } from '../../backend/app.constants.ts'

@Component({
  moduleId: __filename,
  selector: 'opportunity',
  styleUrls: [
    'opportunity.style.css'
  ],
  templateUrl: 'opportunity.template.html',
  providers: [DataService, Configuration]
})
export class Opportunity {
	private error : string;
	private countries;

    constructor(private _dataService: DataService){
        this._dataService = _dataService;
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
