import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


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
  clientName = '';
  clientSurname = '';
  clientAddress = '';
  clientPhone = '';

  items = [
    'a','b','c'
  ]
}
