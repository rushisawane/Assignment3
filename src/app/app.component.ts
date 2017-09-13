import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ename='xyz';
  eno=1;
  emp={'ename':'xyz','eno':1};
  EmpArr:any[]=[];
  
  addToLocalVars(event:any)
  {
    console.log(event);
    this.EmpArr.push(event);
  }
}
