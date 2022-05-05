export class Warehouse {
  public stock: StockItem[];

  constructor(stock: StockItem[]) {
    this.stock = stock;
  }

  public buy(cd: Cd) {
    const cdIndex = this.stock.findIndex(
      (stockItem) =>
        stockItem.cd.title === cd.title && stockItem.cd.artist === cd.artist
    );
    this.stock[cdIndex].quantity--;
  }
}

export interface Cd {
  title: string;
  artist: string;
}

export interface StockItem {
  cd: Cd;
  quantity: number;
}
