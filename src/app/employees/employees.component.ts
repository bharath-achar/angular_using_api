
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee = {
    empId: null,
    name: null,
    email: null,
    phone: null,
    status: null,
    pk: null
  };

  constructor(public employeeService: EmployeeService) {
    this.employeeService.getData();
    console.log(employeeService.employees);
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteData(employee).subscribe(response => {
      console.log(response);
      console.log('deleted one employee');
      //to update the table again
      this.employeeService.getData();
    }, err => {
      console.log(err);
    });

  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }


  submitForm(form: NgForm) {
    this.employeeService.putData(form.value).subscribe(response => {
      console.log(response);
      form.reset();
    }, err => {
      console.log(err);
    });
  }
  ngOnInit() {
  }

}