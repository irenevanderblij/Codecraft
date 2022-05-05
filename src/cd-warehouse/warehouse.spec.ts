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

export class Customer {
  buy(warehouse: Warehouse, cd: Cd) {
    warehouse.buy(cd);
  }
}

describe('customer can buy cd', () => {
  const oldStock = 2;
  const cd = {
    title: 'Title',
    artist: 'Artiest',
  };
  const initialStock = {
    cd: cd,
    quantity: oldStock,
  };
  const warehouse = new Warehouse([initialStock]);
  const customer = new Customer();
  customer.buy(warehouse, cd);

  expect(
    warehouse.stock.find(
      (stockItem) =>
        stockItem.cd.title === initialStock.cd.title &&
        stockItem.cd.artist === initialStock.cd.artist
    ).quantity
  ).toEqual(oldStock - 1);
});

export interface Cd {
  title: string;
  artist: string;
}

export interface StockItem {
  cd: Cd;
  quantity: number;
}
