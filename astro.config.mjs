import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://www.victtor.com/",
	base: "/",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	integrations: [sitemap()],
	i18n: {
		defaultLocale: "es",
		locales: ["es"]
	},
	markdown: {
		shikiConfig: {
			theme: "material-theme-darker",
			langs: [],
		},
	},
});
