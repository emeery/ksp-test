import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = [
    'id',
    'picture',
    'name',
    'job',
    'salary',
    'status',
    'edit',
    'delete'
  ];
  constructor(
    private dialog: MatDialog, 
    private router: Router,
    private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployees()
    // this.dataSource = new MatTableDataSource(TABLE_DATA);
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.dataSource.data = res;
      console.log(this.dataSource.data);
    }

    )
  }

  addEmployee(): void {
    this.router.navigate(["add-employee"]);  
  }

  editEmployee(id: number): void {
   
    this.router.navigate(["/add-employee", id]); 
      // this.dialog.open(DialogComponent, { data: { title: 'Edición de usuario' }})
  }

  deleteEmployee(): void {

  }
  


  updateActiveStatus(): void {}

  openDialog(type: string) {
    if(type == 'add') this.dialog.open(DialogComponent, { data: { title: 'Alta de usuario' }})
    if(type == 'delete') this.dialog.open(DialogComponent, { data: { title: 'Usuario eliminado' }}) 
  }

}


