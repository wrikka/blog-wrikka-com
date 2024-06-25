---
layout: home

hero:
  name: "Wrikka Blog"
  tagline: บทความ เครื่องมือ ความรู้ต่างๆ
  image:
    src: "/logo.svg"
    alt: Wrikka
  actions:
    - theme: brand
      text: คอร์สเรียน
      link: https://wrikka.com/courses
    - theme: alt
      text: แชร์ความรู้ webdev
      link: https://www.facebook.com/webdev.sharex
    - theme: alt
      text: แชร์ความรู้ uxui
      link: https://www.facebook.com/uxui.sharex
---

<script setup>
  import BlogIndex from "./.vitepress/theme/components/BlogIndex.vue"

  const posts = [
    {
    title: 'เปรียบเทียบ AI Coding Assistance',
    cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/v1718854883/wrikka-obsidian/gigdaawjypk8anqbb8r3.webp',
    link: 'ai-coding-assistance-compare'
  },
  {
    title: 'แนะนำ VSCode Extensions ดีๆ ไม่มีไม่ได้แล้ว',
    cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/v1718854883/wrikka-obsidian/gigdaawjypk8anqbb8r3.webp',
    link: 'vscode-extensions'
  },
  {
    title: 'Browser Extensions ที่ใช้บ่อยๆ ที่ดีและมีประโยชน์ น่าลองใช้',
    cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/v1718335166/wrikka-obsidian/j6izb5ctnnebyymdug6k.webp',
    link: 'browser-extensions'
  },
	{
    title: 'ฟังการพิมพ์แป้นพิมพ์ของคุณและสะท้อนเสียงที่น่าฟัง',
    cover: 'https://res.cloudinary.com/daldcdwqs/image/upload/f_auto/v1718070727/wrikka-obsidian/awdmriamodfrrplqsky4.webp',
    link: 'keyecho'
  },
  {
    title: 'Clickup billing จัดการค่าใช้จ่ายรายเดือน',
    cover: 'https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717982179/wrikka-obsidian/fandtqhb5a5i5noimxvo.webp',
    link: 'clickup-billing'
  },
  {
    title: 'ติดตั้ง starship เพื่อให้ shell prompt สวยๆ',
    cover: 'https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717936955/wrikka-obsidian/fqas1sspjmctqfjrvih7.webp',
    link: 'starship'
  },

]
</script>

<BlogIndex :post="posts" />
