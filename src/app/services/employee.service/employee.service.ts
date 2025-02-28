import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { EmployeeClass } from '../../ClassFolder/Employee';
import { HttpClient } from '@angular/common/http';
import { CompanyBranch } from '../../ClassFolder/companyBranch';
import { url } from 'inspector';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly _employees$: BehaviorSubject<EmployeeClass[]> = new BehaviorSubject<EmployeeClass[]>([]);
  public readonly employees$ = this._employees$.asObservable();


  constructor(private http: HttpClient) { }

  get contracts() : EmployeeClass[] {
    return this._employees$.getValue();
  }

  private set contracts(contracts: EmployeeClass[]){
    this._employees$.next(contracts);
  }

  public async fetchEmployees(pageId : number) : Promise<void> {
    this.http.get<any[]>(`http://localhost:3000/employee/${pageId}`).subscribe(employees => {
      const employeeData = employees.map(data => {
        const branch = new CompanyBranch(
          data.branch.id,
          data.branch.name,
          data.branch.address
        )

        return new EmployeeClass(
          data.id,
          data.name,
          data.surname,
          data.address,
          data.phoneNumber,
          branch
        );
      })

      this._employees$.next(employeeData);

    }, error => {
      console.error("Error fetching contracts:", error);
    })
  }

  public fetchSalary(employees : number[]){
    let salary : Record<number, number> = {};
    for(let employeeId of employees) {
      this.http.get<any>(`http://localhost:3000/salary/${employeeId}`).subscribe(response =>{
        salary[employeeId] = response.salary;
      })
    }
    console.log(salary);
    return salary;
  }

}
