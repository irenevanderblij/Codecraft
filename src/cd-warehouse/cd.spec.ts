import { Cd } from './cd';

describe('when customer', () => {
  describe('buys cd', () => {
    it('should lower stock when available', () => {
      const cd = new Cd(2);
      cd.buy();

      expect(cd.stock).toEqual(1);
    });

    it('should not lower stock when not available', () => {
      const cd = new Cd(0);
      cd.buy();
      expect(cd.stock).toEqual(0);
    });
  });

  describe('reviews cd', () => {
    it('should add review to reviews', () => {
      const cd = new Cd(0);
      const review = { rating: 10, text: '' };
      cd.review(review);
      expect(cd.reviews).toEqual([review]);
    });
  });
});
