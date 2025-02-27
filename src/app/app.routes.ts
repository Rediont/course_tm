import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContractDisplayComponent } from './contract-display/contract-display.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { EmployeeSalaryListComponent } from './employee-salary-list/employee-salary-list.component';

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main-page' , component: MainPageComponent,
    children: [
      {path: 'sallary', component: EmployeeSalaryListComponent},
      {path: 'contract-display/:id', component: ContractDisplayComponent},
      {path: 'contract-create', component: ContractFormComponent},
      // {path: 'client'},
      {path: 'contract-list', component: ContractListComponent}
    ]
  },
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login' }
];
