import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-emp',
  templateUrl: './set-emp.component.html',
  styleUrls: ['./set-emp.component.css']
})
export class SetEmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() 
  setEmp: EventEmitter<any>=new EventEmitter<any>();
  ename;
  eno;
  addDetails(ename:string,eno:number)
  {
    this.setEmp.emit({'ename':this.ename,'eno':this.eno});
  }

}
