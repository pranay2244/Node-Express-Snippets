import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{

  weather: any;
  //@ViewChild('weather') private chart:ElementRef;
  graph:any;
  chart:any;
  date:any = [];
  temp:any = [];
  constructor(private http:HttpClient) { 
	
  }

  ngOnInit(): void {
    //this.setChart();
	this.chart = document.getElementById("weather");
	console.log(this.chart);
  }

  

  getData(form:NgForm){
    var cityName = form.value.city;
    this.getWeather(cityName).subscribe((data)=>{
      this.weather = data;
		this.setChart();
      console.log(data);
    });
  }

  setChart(){
    var labels = [];
    var data = [];
    for(let i=0;i<40;i+=8){
      var date = this.weather.list[i].dt_txt.split(" ");
      labels.push(date[0]);
      data.push(this.weather.list[i].main.temp);
    }
	this.date = labels;
	this.temp = data;
    this.graph = new Chart(this.chart.getContext('2d'),{
      type:'bar',
      data:{
        labels:labels,
        datasets:[{
          label:'Temperature',
          data:data,
          backgroundColor: ['red','blue','green','violet','teal'],
          borderColor: ['black','black','black','black','black']
        }]
      }
    });
  }

  getWeather(city:string){
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1c8e8bb0b6a02c074b1de0c11a9264e7&units=metric`;
    return this.http.get(url)
  }
}
