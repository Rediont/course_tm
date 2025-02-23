import { Injectable } from '@angular/core';
import { Insurance } from '../../ClassFolder/insurance';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsurancesService {
  private insurances : Insurance[] = [];

  constructor(private http: HttpClient) { }

  public get Insurances() : Insurance[] {
    this.fetchInsuranceList()
    return this.insurances;
  }

  public async fetchInsuranceList() {
    await this.http.get<any[]>(`http://localhost:3000/insurance-list`)
      .subscribe(insuranceItems => {
        const insuranceList = insuranceItems.map(insurance => {
          const newInsurance = new Insurance(
            insurance.id,
            insurance.name,
            insurance.description,
            insurance.wageRate
          );

          return newInsurance;
        });
        this.insurances = insuranceList;
      })
  }
}
