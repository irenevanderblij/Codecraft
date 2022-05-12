import { ExternalPaymentProcess } from './external-payment-process';

export class Cd {
  constructor(
    private stock: number,
    private title: string,
    private artist: string
  ) {}

  buy(externalPaymentProcess: ExternalPaymentProcess) {
    if (externalPaymentProcess.isPaymentAccepted() && this.stock > 0)
      this.stock--;
  }

  getStock() {
    return this.stock;
  }

  setStock(stock: number) {
    this.stock = stock;
  }

  getTitle() {
    return this.title;
  }

  getArtist() {
    return this.artist;
  }
}
