import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmployeeClass } from '../../ClassFolder/Employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserId! : number;
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();
  private Employee! : EmployeeClass;
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient, private router: Router ) { }


  login(username: string, password: string): void {
    const url = `${this.apiUrl}/login/`;

    this.http.post<{ id: number, privileges: string }>(url, { username, password }).subscribe({
      next: (response) => {
        this.currentUserId = response.id;
        this.isAdminSubject.next(response.privileges === 'admin');
        console.log('Login successful:', response);
        this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  public get employee() : EmployeeClass {
    return this.Employee;
  }

  public get CurrentUserId() : number {
    return this.currentUserId;
  }

  public fetchCurrentEmployee() {
    this.http.get(`${this.apiUrl}/employee/${this.currentUserId}`).subscribe({
      next: (responseForEmployee : any) => {
        const newEmployee = new EmployeeClass(
          responseForEmployee.id,
          responseForEmployee.name,
          responseForEmployee.surname,
          responseForEmployee.address,
          responseForEmployee.phoneNumber
        )
        this.Employee = newEmployee;
      }
    })
  }

}
