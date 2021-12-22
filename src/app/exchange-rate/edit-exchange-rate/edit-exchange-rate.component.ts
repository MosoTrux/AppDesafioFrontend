import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { IExchangeRate } from '../interfaces';

@Component({
  selector: 'app-edit-exchange-rate',
  templateUrl: './edit-exchange-rate.component.html',
  styleUrls: ['./edit-exchange-rate.component.scss']
})
export class EditExchangeRateComponent implements OnInit {

  codigoIso !: string;
  dataLoaded : boolean = false;
  tipoCambio !: IExchangeRate;
  editExchangeRateForm : FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute, 
    private _snackBar: MatSnackBar,
    private exchangeRateService: ExchangeRateService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.codigoIso = data["id"];
    });

    if(this.codigoIso === '') return;

    const exchangeRate$ = this.exchangeRateService.getByCode(this.codigoIso);
    lastValueFrom(exchangeRate$)
    .then(data => {
      this.tipoCambio = data;
      
      this.editExchangeRateForm = this.formBuilder.group({
      'codigoIso': new FormControl(this.tipoCambio.codigoIso),
      'divisa': new FormControl(this.tipoCambio.divisa),
      'valor': new FormControl(this.tipoCambio.valor)
    });
    this.dataLoaded = true;
  });

  }  

  editExchangeRate() {
    this.exchangeRateService.editExchangeRate(
      this.editExchangeRateForm.get('codigoIso')?.value, 
      this.editExchangeRateForm.get('divisa')?.value, 
      this.editExchangeRateForm.get('valor')?.value)
      .subscribe({
        next: isSuccess => {
          if(isSuccess) this._snackBar.open("Tipo de cambio actualizado.");
          else this._snackBar.open("No se pudo actualizar el tipo de cambio");
        },
        error: err => this._snackBar.open("No se pudo actualizar el tipo de cambio")
      });
  }

}
