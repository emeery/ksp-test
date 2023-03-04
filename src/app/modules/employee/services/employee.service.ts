import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/employee/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getAllEmployee() {
    // return this.webApiService.get(httpLink.getAllEmployee)
  }
  public deleteEmployeeById(id: any) {
    // return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }
  public getEmployeeDetailById(id: any){
    // return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }
  public saveEmployee(employee: Employee) {
    // return this.webApiService.post(httpLink.saveEmployee, model);
  }  
  
}
