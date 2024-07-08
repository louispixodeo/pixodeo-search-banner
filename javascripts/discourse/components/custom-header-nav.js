import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-header-nav",

  initialize() {
    withPluginApi("0.8", api => {
      api.decorateWidget("header-buttons:before", helper => {
        return helper.h("div.custom-header-nav", [
          helper.h("a.custom-header-nav-item", { href: "/page1" }, "Page 1"),
          helper.h("a.custom-header-nav-item", { href: "/page2" }, "Page 2"),
          helper.h("a.custom-header-nav-item", { href: "/page3" }, "Page 3")
        ]);
      });
    });
  }
};
