package com.ibm.application.employee.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.application.employee.CustomeException.EmployeeResureceException;
import com.ibm.application.employee.model.Employee;
import com.ibm.application.employee.repository.EmployeeRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ibm/employee/")
public class EmployeeController {
	
	@Autowired
private EmployeeRepository empRep; // Interface

@PostMapping("/add")
public Employee createEmployee(@RequestBody Employee emp)
{
	
	return empRep.save(emp);
	
}
@GetMapping("/")
public List<Employee> getAllEmployee(){
	return empRep.findAll();
}
@GetMapping("/{id}")
public ResponseEntity <Employee> getEmployeeById(@PathVariable Long id) throws EmployeeResureceException
{
	Employee emp= empRep.findById(id).orElseThrow(()->new 
			EmployeeResureceException("Employee not  found"));
return  ResponseEntity.ok(emp);
}
// Update data in table
@PutMapping("/{id}")
public ResponseEntity <Employee> getEmployeeByIdupdate(@PathVariable Long id,@RequestBody Employee emp1) throws EmployeeResureceException
{
	Employee emp= empRep.findById(id).orElseThrow(()->new 
			EmployeeResureceException("Employee not  found"));
emp.setFirstname(emp1.getFirstname());
emp.setLastname(emp1.getLastname());
emp.setEmail(emp1.getEmail());
Employee e= empRep.save(emp);
	return  ResponseEntity.ok(emp);

}
//delete data from table
@DeleteMapping("/{id}")
public ResponseEntity <Employee> getEmployeeByIddelete(@PathVariable Long id) throws EmployeeResureceException
{
	Employee emp= empRep.findById(id).orElseThrow(()->new 
			EmployeeResureceException("Employee not  found"));
	empRep.delete(emp);
return  ResponseEntity.ok(emp);
}
}