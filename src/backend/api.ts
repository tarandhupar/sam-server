import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx'
import { Configuration } from './app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;    

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl ;

    }

    getCountries (){
       this.actionUrl = this.actionUrl + 'all';
       return this._http.get(this.actionUrl).map(res => res.json());
   }

   getCountriesByRegion (region:String){
       this.actionUrl = this.actionUrl + 'region/';
       return this._http.get(this.actionUrl+region).map(res => res.json());
   }
   
}