import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor( private weatherService: WeatherService ){}

  ngOnInit(): void {


  }
  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      resp => (this.weather = resp,
        console.log(resp)),
    );

  }
  submitLocation( cityName: HTMLInputElement, countryCode: HTMLInputElement ){
    if ( cityName.value && countryCode.value ){
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';

    } else {
      alert( 'Please insert some values' );
    }
    cityName.focus();
    return false;
  }


}
