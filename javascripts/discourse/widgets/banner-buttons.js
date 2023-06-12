import { createWidget } from "discourse/widgets/widget";
import hbs from "discourse/widgets/hbs-compiler";

export default createWidget("banner-buttons", {
  tagName: "div.search-banner-buttons",

  template: hbs`
    <div class="search-banner-buttons">
        <DButton
          @action={{routeAction "showCreateAccount"}}
          @label="sign_up"
          @icon="user"
          @class="btn-primary"
        />
        <DButton
          @action={{routeAction "showLogin"}}
          @label="log_in"
          @class="btn-primary"
        />
      </div>;
  `
});