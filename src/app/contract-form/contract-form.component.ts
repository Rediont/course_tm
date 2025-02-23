import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InsurancesService } from '../services/insurance.service/insurances.service';
import { Insurance } from '../ClassFolder/insurance';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service/user.service';
import { EmployeeClass } from '../ClassFolder/Employee';


@Component({
  selector: 'app-contract-form',
  imports: [
    MatDivider,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.scss'
})
export class ContractFormComponent {
  employee! : EmployeeClass;
  clientName : string = '';
  clientSurname : string = '';
  clientAddress : string = '';
  clientPhone : string = '';
  insuranceType : number = 0;
  duration : string = '';
  insuranceAmount : number = 0;

  insuranceItems : Insurance[] = []
  constructor(private insuranceService: InsurancesService, private http: HttpClient,private userService : UserService) {}

  ngOnInit(){
    this.insuranceItems = this.insuranceService.Insurances;
  }

  public createContract() {
    console.log("click")
    this.http.post('http://localhost:3000/contracts/create',{
      employeeId: this.userService.CurrentUserId,
      clientName: this.clientName,
      clientSurname: this.clientSurname,
      clientAddress: this.clientAddress,
      clientPhone: this.clientPhone,
      insuranceTypeId: this.insuranceType,
      insuranceAmount: this.insuranceAmount,
      duration: this.duration
    }).subscribe({
      next: (response) => {
        console.log("Server response:", response);
      },
      error: (error) => {
        console.error("HTTP error:", error);
      }
    });
  }
}
