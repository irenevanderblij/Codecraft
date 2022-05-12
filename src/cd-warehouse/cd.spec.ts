import { Cd } from './cd';
import { ExternalPaymentProcess } from './external-payment-process';
import { Warehouse } from './warehouse';

describe('when customer', () => {
  let cd: Cd;
  let warehouse: Warehouse;
  let externalPaymentProcess: ExternalPaymentProcess;

  beforeEach(() => {
    cd = new Cd(2, 'Title', 'Artist');
    warehouse = new Warehouse([cd]);
  });

  describe('buys cd', () => {
    it('should lower stock when available and payment is accepted', () => {
      externalPaymentProcess = new ExternalPaymentProcess(true);
      cd.buy(externalPaymentProcess);

      expect(cd.stock).toEqual(1);
    });

    it('should not lower stock if payment is not accepted', () => {
      externalPaymentProcess = new ExternalPaymentProcess(false);
      cd.buy(externalPaymentProcess);

      expect(cd.stock).toEqual(2);
    });

    it('should not lower stock when out of stock', () => {
      cd.stock = 0;
      externalPaymentProcess = new ExternalPaymentProcess(true);
      cd.buy(externalPaymentProcess);

      expect(cd.stock).toBe(0);
    });
  });

  describe('searches for a cd', () => {
    it('should get the correct cd back', () => {
      expect(warehouse.search('Title', 'Artist')).toBe(cd);
    });

    it('should not get a result when there is no matching cd', () => {
      expect(
        warehouse.search('Unknown title', 'Unknown artist')
      ).toBeUndefined();
    });
  });

  it('should increase stock with 1 when batch is send with 1 cd', () => {
    warehouse.receiveBatch([new Cd(1, 'Title', 'Artist')]);
    expect(warehouse.cdList[0].stock).toBe(3);
  });

  it('should increase stock with 1 when batch is send with 2 cds', () => {
    warehouse.cdList.push(new Cd(1, 'I want it that way', 'Backstreet Boys'));
    warehouse.receiveBatch([
      new Cd(4, 'I want it that way', 'Backstreet Boys'),
    ]);
    expect(
      warehouse.search('I want it that way', 'Backstreet Boys').stock
    ).toBe(5);
  });

  it('should add new cd to list when it is not found', () => {
    warehouse.receiveBatch([
      new Cd(4, 'I want it that way', 'Backstreet Boys'),
    ]);
    expect(
      warehouse.search('I want it that way', 'Backstreet Boys').stock
    ).toBe(4);
  });
});
