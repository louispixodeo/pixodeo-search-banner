import { createWidget } from "discourse/widgets/widget";

export default createWidget("search-buttons", {
  tagName: "div.header-buttons.search-banner-buttons",

  html(attrs) {
    if (this.currentUser) {
      return;
    }

    const buttons = [];

    buttons.push(
      this.attach("button", {
        label: "sign_up",
        className: "btn-primary btn-small sign-up-button",
        action: "showCreateAccount"
      })
    );

    buttons.push(
      this.attach("button", {
        label: "log_in",
        className: "btn-primary btn-small login-button",
        action: "showLogin",
        icon: "user"
      })
    );
    return buttons;
  }
});
