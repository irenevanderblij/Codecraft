export class Cd {
  constructor(public stock: number, public reviews: any[] = []) {
  }

  buy() {
    if (this.stock > 0) {
      this.stock--;
    }
  }

  review(review: any) {
    this.reviews.push(review);
  }
}
