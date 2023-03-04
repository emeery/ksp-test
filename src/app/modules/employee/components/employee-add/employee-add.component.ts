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
  employeeForm: FormGroup = new FormGroup({})
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      // job: ['', Validators.required],
      // salary: [0, Validators.required],
      // date: ['', Validators.required],
      // picture: ['', Validators.required],
    })
    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    if (this.id) {
      this.employeeService.getEmployeeById(this.id).subscribe((employee: Employee) => {
        this.employeeForm.setValue({
          name: employee.name
        })
      })
    }
  }

  goBack(): void {
    this.location.back();
  }

}
