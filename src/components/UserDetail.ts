import Div from "../elements/Div";

export default class UserDetail {
  private static ids = {
    name: "user-name",
    email: "user-email"
  };
  public static render() {
    return /* html */`
      <i class="center extra-large material-symbols-outlined">account_circle</i>
      <div id="${UserDetail.ids.name}" class="middle"></div><br />
      <div id="${UserDetail.ids.email}" class="small"></div><br />
    `;
  }
  private static instance: UserDetail;
  public static getInstance() {
    if (!UserDetail.instance) {
      UserDetail.instance = new UserDetail();
    }
    return UserDetail.instance;
  }

  private currentUser = {
    name: "Anonymous",
    email: "foo@example.com"
  };
  private user: { name: Div; email: Div };
  private constructor() {
    this.user = {
      name: new Div(`#${UserDetail.ids.name}`),
      email: new Div(`#${UserDetail.ids.email}`)
    };
  }
  public init() {
    this.user.name.getElement().textContent = this.currentUser.name;
    this.user.email.getElement().textContent = this.currentUser.email;
    return this;
  }
  public getUserName() {
    return this.currentUser.name;
  }
  public setUserName(userName: string) {
    this.currentUser.name = userName;
    this.user.name.getElement().textContent = userName;
  }
}
