import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';
import { IExchangeRate, IExchangeRateList } from '../interfaces';

@Component({
  selector: 'app-list-exchange-rate',
  templateUrl: './list-exchange-rate.component.html',
  styleUrls: ['./list-exchange-rate.component.scss']
})
export class ListExchangeRateComponent implements OnInit {
  displayedColumns : string[] = ['CodigoIso', 'Divisa', 'Valor', 'Edit'];
  dataSource !: MatTableDataSource<IExchangeRate>;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.createTable();
  }

  createTable() {
    this.dataSource = new MatTableDataSource<IExchangeRate>();
    this.exchangeRateService.listExchangeRate().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });

  }
}
