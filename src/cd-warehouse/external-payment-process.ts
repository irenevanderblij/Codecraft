export class ExternalPaymentProcess {
  constructor(private paymentAccepted: boolean) {}

  isPaymentAccepted(): boolean {
    return this.paymentAccepted;
  }
}
