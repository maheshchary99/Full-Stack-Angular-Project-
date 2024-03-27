import { Component ,OnInit} from '@angular/core';
import{Employee}from'../employee';
import{FormsModule}from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
employee:Employee=new Employee();
constructor(private employeeservice:EmployeeServiceService)
{
  
}
ngOnInit():void{

}
onSubmit(){
  console.log(this.employee);
 this.saveEmployee()
}
saveEmployee()
{
  this.employeeservice.addEmployee(this.employee).subscribe(data =>{
    console.log(data);
  });
}
  
}
