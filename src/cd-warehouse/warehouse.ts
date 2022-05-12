import { Cd } from './cd';

export class Warehouse {
  constructor(public cdList: Cd[]) {
    this.cdList = cdList;
  }

  search(title: string, artist: string): Cd {
    return this.cdList.filter((cd: Cd) => this.match(cd, title, artist))[0];
  }

  private match(cd: Cd, title: string, artist: string): boolean {
    return cd.title === title && cd.artist === artist;
  }

  receiveBatch(cds: Cd[]) {
    cds.forEach((cd) => {
      const foundCd = this.search(cd.title, cd.artist);
      foundCd ? (foundCd.stock += cd.stock) : this.cdList.push(cd);
    });
  }
}
