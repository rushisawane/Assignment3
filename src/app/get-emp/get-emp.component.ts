import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-emp',
  templateUrl: './get-emp.component.html',
  styleUrls: ['./get-emp.component.css']
})
export class GetEmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('getEmp') employee:any;
}
