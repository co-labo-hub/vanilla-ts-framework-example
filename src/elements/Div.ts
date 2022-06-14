import Element from "./Element";

export default class Div extends Element<HTMLDivElement> {
  constructor(query?: string) {
    super(Div.name, query);
  }
}
