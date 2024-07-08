import {withPluginApi} from "discourse/lib/plugin-api";

export default {
    name: "custom-header-nav",
    initialize(container) {
        withPluginApi("1.34.0", (api) => {
            api.renderInOutlet("before-header-pane", <template>
                'TESTING'
            </template>);
        });
    },
};
