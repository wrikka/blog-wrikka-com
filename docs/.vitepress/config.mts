import { defineConfig } from "vitepress";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	sitemap: {
		hostname: "https://blog.wrikka.com",
	},
	appearance: "force-dark",
	title: "Wrikka Blog",
	titleTemplate: "บทความ เครื่องมือ ความรู้ต่างๆ",
	description: "แชร์สิ่งที่รียนรู้ในทุกๆวัน",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
		[
			"link",
			{
				href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap",
				rel: "stylesheet",
			},
		],
		[
			"link",
			{
				rel: "search",
				type: "application/opensearchdescription+xml",
				href: "/search.xml",
				title: "UnoCSS",
			},
		],
	],
	lang: "th-TH",
	cleanUrls: true,
	srcDir: ".",
	srcExclude: ["**/README.md", "**/TODO.md"],
	ignoreDeadLinks: true,
	lastUpdated: true,
	themeConfig: {
		outline: [2, 3],
		logo: "/logo.svg",
		search: {
			provider: "local",
			options: {
				miniSearch: {
					/**
					 * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
					 */
					options: {
						/* ... */
					},
					/**
					 * @type {import('minisearch').SearchOptions}
					 * @default
					 * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
					 */
					searchOptions: {
						/* ... */
					},
				},
			},
			/*
			provider: 'algolia',
			options: {
				appId: '...',
				apiKey: '...',
				indexName: '...'
			}
			*/
		},
		footer: {
			message: "Released under the MIT License",
			copyright: "Copyright © 2024-PRESENT Wrikka",
		},
		socialLinks: [
			{
				icon: {
					svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#e8eaf6" d="M42 39H6V23L24 6l18 17z"/><path fill="#c5cae9" d="m39 21l-5-5V9h5zM6 39h36v5H6z"/><path fill="#b71c1c" d="M24 4.3L4 22.9l2 2.2L24 8.4l18 16.7l2-2.2z"/><path fill="#d84315" d="M18 28h12v16H18z"/><path fill="#01579b" d="M21 17h6v6h-6z"/><path fill="#ff8a65" d="M27.5 35.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5"/></svg>`,
				},
				link: "https://wrikka.com",
			},
		],
		nav: navbar,
		sidebar: sidebar,
	},
	markdown: {
		// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
		toc: {
			level: [1, 2],
			shouldAllowNested: true,
		},
		image: {
			lazyLoading: true,
		},
	},
	vite: {},
	vue: {},
});
