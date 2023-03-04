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

  public editEmployeeById(employee: Employee){
    console.log(employee);
    // return this.http.put<Employee>(
    //   'https://my-json-server.typicode.com/emeery/ksp-test/employees/' + id
    // );
  }
  public saveEmployee(employee: Employee) {
    console.log(employee)
    // return this.http.post<Employee>(
    //   'https://my-json-server.typicode.com/emeery/ksp-test/employees/' + id
    // );
  }  

  public deleteEmployee(id: number) {
    console.log(id)
    // return this.http.delete(
    //   'https://my-json-server.typicode.com/emeery/ksp-test/employees/' + id
    // );
  } 
  
}
