import { createWidget } from "discourse/widgets/widget";

export default createWidget("section-login-buttons", {
  tagName: "div.section-login-buttons",

  html(attrs) {
    if (this.currentUser) {
      return;
    }

    return [this.attach("banner-buttons")];
  }
});
