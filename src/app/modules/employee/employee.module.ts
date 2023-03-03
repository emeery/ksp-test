import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { MaterialModule } from 'src/app/core/material.module';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    BeneficiaryComponent
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
