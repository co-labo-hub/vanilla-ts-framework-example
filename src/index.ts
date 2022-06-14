import "./styles.css";
import UserDialog from "./components/UserDialog";

document.getElementById("app")!.innerHTML = /* html */`
  ${UserDialog.render()}
`;
(() => {
  UserDialog.getInstance().init();
})();
