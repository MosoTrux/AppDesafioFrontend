import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { IApplyExchangeRate } from '../interfaces';

@Component({
  selector: 'app-apply-exchange-rate',
  templateUrl: './apply-exchange-rate.component.html',
  styleUrls: ['./apply-exchange-rate.component.scss']
})
export class ApplyExchangeRateComponent implements OnInit {

  applyExchangeRateForm : FormGroup = new FormGroup({});

displayedColumns : string[] = ['Monto', 'Moneda origen', 'Moneda destino', 'Tipo de cambio', 'Monto con tipo de cambio'];
  dataSource !: MatTableDataSource<IApplyExchangeRate>;

  constructor(private formBuilder: FormBuilder, 
    private exchangeRateService: ExchangeRateService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.applyExchangeRateForm = this.formBuilder.group({
      'monto': new FormControl(0),
      'monedaOrigen': new FormControl(''),
      'monedaDestino': new FormControl('')
    });
  }

  
  applyExchangeRate() {
    console.log(this.applyExchangeRateForm.get('monto')?.value);
    this.dataSource = new MatTableDataSource<IApplyExchangeRate>();
    this.exchangeRateService.applyExchangeRate(
      this.applyExchangeRateForm.get('monto')?.value, 
      this.applyExchangeRateForm.get('monedaOrigen')?.value, 
      this.applyExchangeRateForm.get('monedaDestino')?.value)
      .subscribe(data => {
        console.log(data);
        let arrayData : IApplyExchangeRate[] = [
          { 
            monto: data.monto, 
            monedaOrigen: data.monedaOrigen, 
            monedaDestino: data.monedaDestino, 
            tipoCambio: data.tipoCambio,
            montoConTipoCambio: data.montoConTipoCambio
          }
        ];
        this.dataSource.data = arrayData;
      });
  }

}
