import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

@Component({
  selector: 'app-add-exchange-rate',
  templateUrl: './add-exchange-rate.component.html',
  styleUrls: ['./add-exchange-rate.component.scss']
})
export class AddExchangeRateComponent implements OnInit {

  addExchangeRateForm : FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, 
    private exchangeRateService: ExchangeRateService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addExchangeRateForm = this.formBuilder.group({
      'codigoIso': new FormControl(''),
      'divisa': new FormControl(''),
      'valor': new FormControl(1.0)
    });
  }

  createExchangeRate() {
    this.exchangeRateService.addExchangeRate(
      this.addExchangeRateForm.get('codigoIso')?.value, 
      this.addExchangeRateForm.get('divisa')?.value, 
      this.addExchangeRateForm.get('valor')?.value)
      .subscribe({
        next: isSuccess => {
          if(isSuccess) this._snackBar.open("Tipo de cambio agregado.");
          else this._snackBar.open("No se pudo agregar el tipo de cambio");
        },
        error: err => this._snackBar.open("No se pudo agregar el tipo de cambio")
      });
  }

}
