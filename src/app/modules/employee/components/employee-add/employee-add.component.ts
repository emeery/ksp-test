import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  id: number = 0;
  employeeForm: FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
    });
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
      salary: [0, Validators.required],
      date: ['', Validators.required],
      picture: ['', Validators.required],
    })
  }

}
