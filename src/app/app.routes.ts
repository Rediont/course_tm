import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContractDisplayComponent } from './contract-display/contract-display.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { ContractListComponent } from './contract-list/contract-list.component';

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '' , component: MainPageComponent,
    children: [
      // {path: 'salary'},
      {path: 'contract-display', component: ContractDisplayComponent},
      {path: 'contract-create', component: ContractFormComponent},
      // {path: 'client'},
      {path: 'contract-list', component: ContractListComponent}
    ]
  },
  {path: '**', redirectTo: 'login' }
];
