import { addClass } from "discourse-common/lib/dom";
import { on } from "discourse-common/utils/decorators";

export default {
  name: "latest-page",
  initialize() {},
  after: "router",

  @on("router:transitionTo")
  updateBodyClass(transition) {
    const currentRouteName = transition.router.currentRouteName;
    const isLatestPage = currentRouteName === "discovery.latest";
    addClass(document.body, "latest-page", isLatestPage);
  },
};
