
export class Players {
  id!: number;
  firstname!: string;
  lastname!: string;
  shortname!: string;
  sex!: string;
  country!: {
    picture: string,
    code: string,
    name: string
  }
  picture!: string;
  data!: {
    rank: number,
    points: number,
    weight: number,
    height: number,
    age: number,
    last: number
  }
}
