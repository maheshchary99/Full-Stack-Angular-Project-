import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
  })
  export class EmployeeDetailsComponent implements OnInit{
  id:number
  employee:Employee
  constructor(private route:ActivatedRoute,private employeeservice:EmployeeServiceService){

  }
  ngOnInit():void {
    this.id=this.route.snapshot.params['id'];
  this.getEmployee();
  }
  getEmployee()
  {
    this.employeeservice.getEmployeedataById(this.id).subscribe(data =>{
      this.employee=data;
    })
  }
}
