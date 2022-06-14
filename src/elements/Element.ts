export default class Element<T extends HTMLElement> {
  private element: T;
  constructor(tagName: string, query?: string) {
    this.element = (query
      ? document.querySelector(query)
      : document.createElement(tagName.toLocaleLowerCase())) as T;
  }
  public getElement() {
    return this.element;
  }
}
