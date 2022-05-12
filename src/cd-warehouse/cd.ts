import { ExternalPaymentProcess } from './external-payment-process';
import { Charts } from './charts';

export class Cd {
  constructor(
    private stock: number,
    private title: string,
    private artist: string,
    private price: number
  ) {}

  buy(
    externalPaymentProcess: ExternalPaymentProcess,
    charts: Charts,
    copies: number,
    lowestCompetitorPrice = 100
  ) {
    if (this.price > lowestCompetitorPrice - 1) {
      this.setPrice(lowestCompetitorPrice - 1);
    }
    if (externalPaymentProcess.isPaymentAccepted() && this.stock >= copies) {
      this.stock -= copies;
      charts.notify(this.title, this.artist, copies);
    }
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

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }
}
