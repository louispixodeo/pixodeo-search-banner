import {apiInitializer} from "discourse/lib/api";
import SearchBanner from "../components/search-banner";

export default apiInitializer("1.14.0", (api) => {
    api.renderInOutlet(
        settings.plugin_outlet === "above-main-container"
            ? "above-main-container"
            : "below-site-header",
        SearchBanner
    );

    api.forceDropdownForMenuPanels("search-menu-panel");

    api.addSidebarSection((BaseCustomSidebarSection, BaseCustomSidebarSectionLink) => {
        return class extends BaseCustomSidebarSection {
            get name() {
                return "wp_menu";
            }

            get title() {
                return 'Main Navigation';
            }

            get text() {
                return 'Main Navigation';
            }

            get displaySection() {
                return true;
            }

            get links() {
                return [
                    new (class extends BaseCustomSidebarSectionLink {
                        get name() {
                            "nos-services"
                        }

                        get href() {
                            return "https://www.partirseul.com/destination-voyage-seul/";
                        }

                        get title() {
                            return "Nos Services - Pays";
                        }

                        get text() {
                            return "Nos Services - Pays";
                        }
                    })(),
                ];
            }
        }
    })
});
