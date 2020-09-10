import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '7f47a110ac3f59c221c1815a493a3f13';
  URI: string = '';

  constructor( private http: HttpClient ) {

    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
  getWeather( cityName: string, countryCode: string ){
    return this.http.get(`${ this.URI }${ cityName },${ countryCode }`);
  }
}
