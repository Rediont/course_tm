import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../services/employee.service/employee.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { EmployeeClass } from '../ClassFolder/Employee';

@Component({
  selector: 'app-employee-salary-list',
  imports: [MatCard, MatCardContent, MatCardHeader, RouterLink, NgFor, NgIf, AsyncPipe],
  templateUrl: './employee-salary-list.component.html',
  styleUrl: './employee-salary-list.component.scss'
})
export class EmployeeSalaryListComponent {
  private page : number = 0;
  public employees!: Observable<EmployeeClass[]>;

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
}
