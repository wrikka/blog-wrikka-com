import type { DefaultTheme } from "vitepress";

export default function sidebarBlog(): DefaultTheme.SidebarItem[] {
	return [
		{ text: "บทความทั้งหมด", link: "/blog" },
		/*{
			text: "Blog (เรียงตามล่าสุด)",
			collapsed: false,
			base: "/blog",
			items: [
				{ text: "ติดตั้ง starship", link: "/starship" },
				{ text: "จัดการชีวิตด้วย clickup", link: "/clickup" },
			],
		},*/
	];
}
