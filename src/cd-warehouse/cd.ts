import { ExternalPaymentProcess } from './external-payment-process';

export class Cd {
  constructor(
    public stock: number,
    public title: string,
    public artist: string
  ) {}

  buy(externalPaymentProcess: ExternalPaymentProcess) {
    if (externalPaymentProcess.isPaymentAccepted() && this.stock > 0)
      this.stock--;
  }
}
