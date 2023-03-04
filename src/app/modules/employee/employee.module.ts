import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { MaterialModule } from 'src/app/core/material.module';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    EmployeeComponent
  ],
})
export class EmployeeModule { }
