import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-contract-form',
  imports: [
    MatDivider,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.scss'
})
export class ContractFormComponent {
  items = [
    'a','b','c'
  ]
}
