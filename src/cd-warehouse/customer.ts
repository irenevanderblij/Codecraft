import {Cd, Warehouse} from "./warehouse";

export class Customer {
  buy(warehouse: Warehouse, cd: Cd) {
    warehouse.buy(cd);
  }
}
