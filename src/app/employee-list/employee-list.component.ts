import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
employees : Employee[];
 constructor(private employeeservice:EmployeeServiceService,private router:Router){}
  ngOnInit():void{
    this.getAllEmployees();
  }
  private getAllEmployees(){
this.employeeservice.getEmployeeList().subscribe(data =>{
  this.employees=data;
  console.log(data);
})

  }
  GetEmployeeData(id:number){
   console.log("hi");
   console.log(id);
  this.router.navigate(['/empdetails',id]);
  }

  EditEmployeeData(id:number){
    //console.log("hi");
    //console.log(id);
   this.router.navigate(['/updateemp',id]);
   }
   DeleteEmployeeData(id:number){
    this.employeeservice.DeleteEmployeeById(id).subscribe(data =>{
      //this.router.navigate(['/employees']);
      this.getAllEmployees();
    })
   }

  }

