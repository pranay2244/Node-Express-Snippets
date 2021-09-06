import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }
  data:any=[
    {
      name:"Pranay",age:21,roll:"18B81A0589",gpa:8.72
    },
    {
      name:"Kumar",age:20,roll:"18B81A0389",gpa:4.85
    }
  ]
  ngOnInit(): void {
  }

}
