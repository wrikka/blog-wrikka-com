// import "virtual:uno.css";
// https://vitepress.dev/guide/custom-theme

import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import "./index.css";
import { createMediumZoomProvider } from "./composables/useMediumZoom.ts";

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		createMediumZoomProvider(app, router);
	},
} satisfies Theme;
