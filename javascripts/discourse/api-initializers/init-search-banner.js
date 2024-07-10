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
                return "chat-channels";
            }

            get route() {
                return "chat";
            }

            get title() {
                return I18n.t("sidebar.sections.chat.title");
            }

            get text() {
                return I18n.t("sidebar.sections.chat.text");
            }

            get actionsIcon() {
                return "cog";
            }

            get actions() {
                return [
                    {
                        id: "browseChannels", title: "Browse channel", action: () => {
                        }
                    },
                    {
                        id: "settings", title: "Settings", action: () => {
                        }
                    },
                ];
            }

            get links() {
                return [
                    new (class extends BaseCustomSidebarSectionLink {
                        get name() {
                            "dev"
                        }

                        get route() {
                            return "chat.channel";
                        }

                        get model() {
                            return {
                                channelId: "1",
                                channelTitle: "dev channel"
                            };
                        }

                        get title() {
                            return "dev channel";
                        }

                        get text() {
                            return "dev channel";
                        }

                        get prefixType() {
                            return "icon";
                        }

                        get prefixValue() {
                            return "hashtag";
                        }

                        get prefixColor() {
                            return "000000";
                        }

                        get prefixBadge() {
                            return "lock";
                        }

                        get suffixType() {
                            return "icon";
                        }

                        get suffixValue() {
                            return "circle";
                        }

                        get suffixCSSClass() {
                            return "unread";
                        }
                    })(),
                    new (class extends BaseCustomSidebarSectionLink {
                        get name() {
                            "random"
                        }

                        get route() {
                            return "chat.channel";
                        }

                        get model() {
                            return {
                                channelId: "2",
                                channelTitle: "random channel"
                            };
                        }

                        get currentWhen() {
                            return true;
                        }

                        get title() {
                            return "random channel";
                        }

                        get text() {
                            return "random channel";
                        }

                        get hoverType() {
                            return "icon";
                        }

                        get hoverValue() {
                            return "times";
                        }

                        get hoverAction() {
                            return () => {
                            };
                        }

                        get hoverTitle() {
                            return "button title attribute"
                        }
                    })()
                ];
            }
        }
    })
});
