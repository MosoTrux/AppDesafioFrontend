import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router'; 

import { ListExchangeRateComponent } from './list-exchange-rate/list-exchange-rate.component';
import { AddExchangeRateComponent } from './add-exchange-rate/add-exchange-rate.component';
import { EditExchangeRateComponent } from './edit-exchange-rate/edit-exchange-rate.component';
import { ApplyExchangeRateComponent } from './apply-exchange-rate/apply-exchange-rate.component';



@NgModule({
  declarations: [
    ListExchangeRateComponent,
    AddExchangeRateComponent,
    EditExchangeRateComponent,
    ApplyExchangeRateComponent
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class ExchangeRateModule { }
