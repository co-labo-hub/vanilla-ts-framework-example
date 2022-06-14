import Element from "./Element";

export default class Dialog extends Element<HTMLDialogElement> {
  constructor(query?: string) {
    super(Dialog.name, query);
  }
}
