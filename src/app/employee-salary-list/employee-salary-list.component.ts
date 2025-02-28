import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService } from '../services/employee.service/employee.service';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeClass } from '../ClassFolder/Employee';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-employee-salary-list',
  imports: [MatButtonModule ,MatCardModule, NgFor, NgIf, AsyncPipe, MatCheckboxModule, CommonModule],
  templateUrl: './employee-salary-list.component.html',
  styleUrl: './employee-salary-list.component.scss'
})
export class EmployeeSalaryListComponent {
  private page : number = 1;
  public employees!: Observable<EmployeeClass[]>;
  public idForSalary : number[] = [];
  public salaryDictionary: Record<number, number> = {};

  constructor(private employeeService : EmployeeService) {
    this.employees = this.employeeService.employees$;
  }

  public ngOnInit(): void {
    this.employeeService.fetchEmployees(this.page);
  }

    public trackByFn(index: number, item: EmployeeClass): number {
      return item.id; // Унікальний ідентифікатор кожного контракту
    }

  public displayNextPage() {
    this.page++
    console.log(this.page)
    this.employeeService.fetchEmployees(this.page);
  }

  public displayPrevPage() {
    this.page--
    console.log(this.page)
    this.employeeService.fetchEmployees(this.page);
  }

  public onCheckboxChange(employeeId : number, event : boolean ) {
    const isChecked = event;

    if(isChecked) {
      this.idForSalary.push(employeeId);
    }
    else {
      this.idForSalary = this.idForSalary.filter(id => id !== employeeId);
    }
    console.log(this.idForSalary);
  }

  public calculateSalary(){
    this.salaryDictionary = this.employeeService.fetchSalary(this.idForSalary);
  }
}
