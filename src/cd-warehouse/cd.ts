import { ExternalPaymentProcess } from './external-payment-process';
import { Charts } from './charts';

export class Cd {
  constructor(
    private stock: number,
    private title: string,
    private artist: string
  ) {}

  buy(
    externalPaymentProcess: ExternalPaymentProcess,
    charts: Charts,
    copies = 1
  ) {
    if (externalPaymentProcess.isPaymentAccepted() && this.stock > 0)
      this.stock--;
    charts.notify(this.title, this.artist, copies);
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
