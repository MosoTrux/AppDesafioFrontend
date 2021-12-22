export interface GenericResponse<T = any> {
  isSuccess: boolean;
  message: string[];
  data: T;
}

export interface IExchangeRateList {
  data: IExchangeRate[];
  }

  export interface IExchangeRate {
      codigoIso: string;
      divisa: string;
      valor: number;
    }

    export interface IApplyExchangeRate {
        monto: number;
        montoConTipoCambio: number;
        monedaOrigen: string;
        monedaDestino: string;
        tipoCambio: number;
      }