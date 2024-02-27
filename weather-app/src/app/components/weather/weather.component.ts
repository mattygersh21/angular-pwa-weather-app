import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;

  constructor(private weaterService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city: string): void {
    this.weaterService.getWeather(city).subscribe(weather => this.weather = weather);
  }

}
