import { createWidget } from "discourse/widgets/widget";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

export default createWidget("banner-buttons", {
  tagName: "div.search-banner-wrap",
  html() {
    return [
      new RenderGlimmer(
        this,
        "div",
        hbs`<div class="search-banner-buttons">
        <DButton
          @action={{action "showCreateAccount"}}
          @label="sign_up"
          @icon="user"
          @class="btn-primary"
        />
        <DButton
          @action={{action "showLogin"}}
          @label="log_in"
          @class="btn-primary"
        />
      </div>`
      ),
    ];
  },
});