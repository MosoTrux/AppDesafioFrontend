import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExchangeRateComponent } from './exchange-rate/add-exchange-rate/add-exchange-rate.component';
import { EditExchangeRateComponent } from './exchange-rate/edit-exchange-rate/edit-exchange-rate.component';
import { ListExchangeRateComponent } from './exchange-rate/list-exchange-rate/list-exchange-rate.component';
import { ApplyExchangeRateComponent } from './exchange-rate/apply-exchange-rate/apply-exchange-rate.component';

const routes: Routes = [
  { path:'exchange-rate',
  children:[
    { path:'', component: ListExchangeRateComponent },
    { path:'list', component: ListExchangeRateComponent },
    { path:'edit/:id', component: EditExchangeRateComponent },
    { path:'create', component: AddExchangeRateComponent },
    { path:'apply', component: ApplyExchangeRateComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
