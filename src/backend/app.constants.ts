import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "https://restcountries.eu/";
    public ApiUrl: string = "rest/v1/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}