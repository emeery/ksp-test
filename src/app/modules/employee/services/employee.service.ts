import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/employee/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'https://my-json-server.typicode.com/emeery/ksp-test/employees'
    );
  }
  public getEmployeeById(id: number ): Observable<Employee> {
    return this.http.get<Employee>(
      'https://my-json-server.typicode.com/emeery/ksp-test/employees/' + id
    );
  }

  public getEmployeeDetailById(id: number){
    // return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }
  public saveEmployee(employee: Employee) {
    // return this.webApiService.post(httpLink.saveEmployee, model);
  }  
  
}
