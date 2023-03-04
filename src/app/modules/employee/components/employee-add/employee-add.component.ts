import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../employee/model/employee.model';
import { Location } from "@angular/common";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  id: number = 0;
  employee: Employee | undefined;
  employeeForm: FormGroup = new FormGroup({})
  title: string = '';
  image: string | undefined;
  date: Date | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
      salary: ['', Validators.required],
      status: [0, Validators.required],
      date: ['', ],
    })
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    if (this.id) {
     this.title =  'Editar Empleado'; 
      this.employeeService.getEmployeeById(this.id).subscribe((employee: Employee) => {
        this.employee = employee;
        this.image = this.employee.picture;
        this.date = this.employee.date;
        this.employeeForm.setValue({
          name: this.employee.name,
          job: this.employee.job,
          salary: this.employee.salary,
          status: this.employee.status,
          date: this.employee.date
        })
      })
    } else { this.title = 'Agregar Empleado'}
  }

  onSubmit() {
    
    if(this.id ) {
      console.log('edit')
      this.employeeService.editEmployeeById(this.employeeForm.value)
    } else {
      console.log('submit');
      this.employeeService.saveEmployee(this.employeeForm.value);
    }
  }

  get f() {
    return this.employeeForm.controls;
  }

  goBack(): void {
    this.location.back();
  }

}
