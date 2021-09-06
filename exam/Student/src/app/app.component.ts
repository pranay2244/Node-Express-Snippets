import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'student';
data: userData[]=[];
name: string="";
email:string="";
phone:string="";
name1: string="";
email1:string="";
phone1:string="";
js:any;
clear(){
this.name1 = "";
this.phone1 = "";
this.email1 = "";
}
insert(){
this.clear();
const user = this.data.find((user) => user.phone == this.phone);
if(!user)
this.data.push({name:this.name,email:this.email,phone:this.phone});
console.log(this.data);
}
read(){
const user:any = this.data.find((user) => user.phone == this.phone);
if(user){
this.name1 = user.name;
this.phone1 = user.phone;
this.email1 = user.email;
}
}
update(){
this.clear();
const user:any = this.data.find((user) => user.phone == this.phone);
if(user){
const index = this.data.indexOf(user);
this.js = {name:this.name,email:this.email,phone:this.phone};
console.log(this.js);
this.data.splice(index, 1, this.js);
}
console.log(this.data);
}
delete(){
this.clear();
const user:any = this.data.find((user) => user.phone == this.phone);
if(user){
const index = this.data.indexOf(user);
this.data.splice(index,1);
}
console.log(this.data);
}
}
class userData{
name:string="";
email:string="";
phone:string="";
}