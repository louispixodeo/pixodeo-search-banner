import { createWidget } from "discourse/widgets/widget";

export default createWidget("section-login-buttons", {
  tagName: "div.section-login-buttons",

  html(attrs) {

    if (this.currentUser) {
      return;
    }

    const buttons = [];

    buttons.push(
      this.attach("button", {
        label: "sign_up",
        className: "btn-primary btn-small sign-up-button",
        action: "showCreateAccount",
        sendActionEvent: true
      })
    );

    buttons.push(
      this.attach("button", {
        label: "log_in",
        className: "btn-primary btn-small login-button",
        action: "showLogin",
        icon: "user",
        sendActionEvent: true
      })
    );
    return buttons;
  }
});
