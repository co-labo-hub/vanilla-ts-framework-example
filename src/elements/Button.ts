import Element from "./Element";

export default class Button extends Element<HTMLButtonElement> {
  constructor(query?: string) {
    super(Button.name, query);
  }
}
