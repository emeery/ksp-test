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
  image: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
      salary: [0, Validators.required],
      status: [0, Validators.required],
      // date: ['', Validators.required],
      // picture: ['', ],
    })
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    if (this.id) {
      console.log('mm');
      this.employeeService.getEmployeeById(this.id).subscribe((employee: Employee) => {
        this.employee = employee;
        this.image = this.employee.picture;
        this.employeeForm.setValue({
          name: this.employee.name,
          job: this.employee.job,
          salary: this.employee.salary,
          status: this.employee.status
        })
      })
    }
  }

  onSubmit() {
    
  }

  goBack(): void {
    this.location.back();
  }

}
