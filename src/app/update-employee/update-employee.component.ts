import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent  implements OnInit{
id:number
employee:Employee = new Employee();
constructor(private employeeservice:EmployeeServiceService,private route:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.employeeservice.getEmployeedataById(this.id).subscribe(data =>{
    this.employee=data;
   })
  }
  onSubmit(){
    this.employeeservice.EditEmployeeDataById(this.id,this.employee).subscribe(data =>{
     console.log("updated");
     this.gotoEmpinfo();
    })
  }
  gotoEmpinfo(){
    this.router.navigate(['/employee']);
  }
  EditEmployeeDetails(id:number){

  }


}
