import { ExternalPaymentProcess } from './external-payment-process';
import { Warehouse } from './warehouse';
import { Cd } from './cd';
import { Charts } from './charts';

describe('when customer', () => {
  let cd: Cd;
  let warehouse: Warehouse;
  let externalPaymentProcess: ExternalPaymentProcess;
  let charts: Charts;
  jest.mock('./charts');

  beforeEach(() => {
    cd = new Cd(2, 'Title', 'Artist');
    warehouse = new Warehouse([cd]);
    externalPaymentProcess = new ExternalPaymentProcess(true);
    charts = new Charts();
  });

  describe('buys cd', () => {
    it('should lower stock when available and payment is accepted', () => {
      cd.buy(externalPaymentProcess, charts, 1);

      expect(cd.getStock()).toEqual(1);
    });

    it('should not lower stock if payment is not accepted', () => {
      externalPaymentProcess = new ExternalPaymentProcess(false);
      cd.buy(externalPaymentProcess, charts, 1);

      expect(cd.getStock()).toEqual(2);
    });

    it('should not lower stock when out of stock', () => {
      cd.setStock(0);
      cd.buy(externalPaymentProcess, charts, 1);

      expect(cd.getStock()).toBe(0);
    });

    it('should notify the charts', () => {
      jest.spyOn(charts, 'notify').mockReturnValue();
      const copies = 3;

      cd.buy(externalPaymentProcess, charts, copies);

      expect(charts.notify).toHaveBeenCalledWith(
        cd.getTitle(),
        cd.getArtist(),
        copies
      );
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

  describe('Receive batches of cds', () => {
    it('should increase stock with 1 when batch is send with 1 cd', () => {
      warehouse.receiveBatch([new Cd(1, 'Title', 'Artist')]);
      expect(warehouse.getCdList()[0].getStock()).toBe(3);
    });

    it('should increase stock with 1 when batch is send with 2 cds', () => {
      warehouse.addCd(new Cd(1, 'I want it that way', 'Backstreet Boys'));
      warehouse.receiveBatch([
        new Cd(4, 'I want it that way', 'Backstreet Boys'),
      ]);
      expect(
        warehouse.search('I want it that way', 'Backstreet Boys').getStock()
      ).toBe(5);
    });

    it('should add new cd to list when it is not found', () => {
      warehouse.receiveBatch([
        new Cd(4, 'I want it that way', 'Backstreet Boys'),
      ]);
      expect(
        warehouse.search('I want it that way', 'Backstreet Boys').getStock()
      ).toBe(4);
    });
  });
});
