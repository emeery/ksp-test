import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
    'status'
  ];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(TABLE_DATA);
  }

  updateActiveStatus(): void {}

}


const TABLE_DATA: Employee[] = [
  {
    id: '01',
    picture: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    name: 'Diego Lainez',
    job: 'Backend Developer',
    salary: 4000,
    status: true,
    date: new Date(),
  },
  {
    id: '02',
    picture: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    name: 'Leonel Messi',
    job: 'Analista de Bases de Datos',
    salary: 4000,
    status: false,
    date: new Date(),
  },

];
