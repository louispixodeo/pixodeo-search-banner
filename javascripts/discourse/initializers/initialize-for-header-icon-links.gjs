import { dasherize } from "@ember/string";
import { withPluginApi } from "discourse/lib/plugin-api";
import icon from "discourse-common/helpers/d-icon";
import isValidUrl from "../lib/isValidUrl";

function buildIcon(iconNameOrImageUrl, title) {
  if (isValidUrl(iconNameOrImageUrl)) {
    return <template>
      <img src={{iconNameOrImageUrl}} aria-hidden="true" />
      <span class="sr-only">{{title}}</span>
    </template>;
  } else {
    return <template>{{icon iconNameOrImageUrl label=title}}</template>;
  }
}

export default {
  name: "header-icon-links",
  initialize() {
    withPluginApi("0.8.41", (api) => {
      try {
        const iconComponent = <template>
            <div
              class="custom-header-icon-link"
            >
              TEST
            </div>
          </template>;

          const beforeIcon = ["chat", "search", "hamburger", "user-menu"];

          api.headerIcons.add("OK", iconComponent, { before: beforeIcon });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(
          error,
          "There's an issue in the header icon links component. Check if your settings are entered correctly"
        );
      }
    });
  },
};
