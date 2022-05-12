import { Cd } from './cd';

export class Warehouse {
  constructor(private cdList: Cd[]) {}

  search(title: string, artist: string): Cd {
    return this.cdList.filter((cd: Cd) => this.match(cd, title, artist))[0];
  }

  private match(cd: Cd, title: string, artist: string): boolean {
    return cd.getTitle() === title && cd.getArtist() === artist;
  }

  receiveBatch(cds: Cd[]) {
    cds.forEach((cd) => {
      const foundCd = this.search(cd.getTitle(), cd.getArtist());
      foundCd
        ? foundCd.setStock(cd.getStock() + foundCd.getStock())
        : this.addCd(cd);
    });
  }

  addCd(cd: Cd) {
    this.cdList.push(cd);
  }

  getCdList() {
    return this.cdList;
  }
}
