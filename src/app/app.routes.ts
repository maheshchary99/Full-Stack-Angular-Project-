import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    {path:'employee',component:EmployeeListComponent},
    {path:'addemp',component:AddEmployeeComponent},
    {path:'empdetails/:id',component:EmployeeDetailsComponent},
    {path:'updateemp/:id',component:UpdateEmployeeComponent}


];
