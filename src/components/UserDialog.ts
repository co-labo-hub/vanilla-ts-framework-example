import Dialog from "../elements/Dialog";
import Button from "../elements/Button";
import UserDetail from "./UserDetail";

export default class UserDialog extends Dialog {
  private static ids = {
    open: "user-dialog-open",
    close: "user-dialog-close",
    dialog: "user-dialog"
  };
  public static render() {
    // Syntax highlighting
    // https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
    return /* html */`
      <button
        id="${UserDialog.ids.open}"
        class="right large material-symbols-outlined">account_circle</button>
      <dialog id="${UserDialog.ids.dialog}">
        <button
          id="${UserDialog.ids.close}"
          class="right large material-symbols-outlined">close</button><br />
        ${UserDetail.render()}
      </dialog>
    `;
  }
  private static instance: UserDialog;
  public static getInstance() {
    if (!UserDialog.instance) UserDialog.instance = new UserDialog();
    return UserDialog.instance;
  }

  private constructor() {
    super(`#${UserDialog.ids.dialog}`);
  }
  public init() {
    new Button(`#${UserDialog.ids.open}`)
      .getElement()
      .addEventListener("click", (event: Event) =>
        UserDialog.getInstance().getElement().showModal()
      );
    new Button(`#${UserDialog.ids.close}`)
      .getElement()
      .addEventListener("click", (event: Event) =>
        UserDialog.getInstance().getElement().close()
      );

    UserDetail.getInstance().init();
    return this;
  }
}
