import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';
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
  constructor(private dialog: MatDialog, private router: Router ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(TABLE_DATA);
  }

  addEmployee() {
    this.router.navigate(["add-employee"]);  
  }

  updateActiveStatus(): void {}

  openDialog(type: string) {
    if(type == 'add') this.dialog.open(DialogComponent, { data: { title: 'Alta de usuario' }})
    if(type == 'edit') this.dialog.open(DialogComponent, { data: { title: 'Edición de usuario' }})
    if(type == 'delete') this.dialog.open(DialogComponent, { data: { title: 'Usuario eliminado' }}) 
  }

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
    beneficiary: []
  },
  {
    id: '02',
    picture: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    name: 'Leonel Messi',
    job: 'Analista de Bases de Datos',
    salary: 4000,
    status: false,
    date: new Date(),
    beneficiary: [
      {id: '001', name: 'Julio Iglesias', relationship: 'Hijo', birth: new Date(), gender: 'Masculino'}
    ]
  },

];
