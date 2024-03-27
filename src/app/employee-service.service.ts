import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseURL="http://localhost:8075/ibm/employee/";
  private baseURL1="http://localhost:8075/ibm/employee/add";
  constructor(private httpClient:HttpClient) { }
  addEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseURL1}`,employee)
  }

getEmployeeList():Observable<Employee[]>
{
 return this.httpClient.get<Employee[]>(`${this.baseURL}`)

}
getEmployeedataById(id:number):Observable<Employee>{
return this.httpClient.get<Employee>(`${this.baseURL}${id}`);
}
EditEmployeeDataById(id:number,employee:Employee):Observable<Object>{

return this.httpClient.put(`${this.baseURL}${id}`,employee);

}
DeleteEmployeeById(id:number):Observable<Object>{

  return this.httpClient.delete(`${this.baseURL}${id}`);
}


}
