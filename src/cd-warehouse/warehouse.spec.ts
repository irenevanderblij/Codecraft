import {Warehouse} from "./warehouse";
import {Customer} from "./customer";

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

