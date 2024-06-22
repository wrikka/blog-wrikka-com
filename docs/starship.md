## Starship คือ Shell Prompt

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717937036/wrikka-obsidian/lx0pscsibutp4bpxh75m.webp)

## [Installation](https://starship.rs/guide/)

สะดวกติดตั้งทางในไหนก็ติดตั้งตามนั้น รองรับทั้ง windows, macos, linux

ผมใช้ windows จะติดตั้งผ่าน [scoop](https://scoop.sh/) `scoop install starship`

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717937100/wrikka-obsidian/ewdorgcbhweco38y9mce.webp)

## [Configuration](https://starship.rs/config/)

พิมพ์ `mkdir -p ~/.config && touch ~/.config/starship.toml` เพื่อสร้างไฟล์ starship.toml หรือจะสร้างเองก็ได้

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717937396/wrikka-obsidian/xfbc6gwn8ns4vjpddbzz.webp)

## ดูว่าติดตั้งใน Shell ไหน

ผมติดตั้งใน Powershell พิมพ์ `$profile` ใน terminal เพื่อดูว่า shell profile อยู่ที่ไหน

เมื่อรู้แล้วก็กดเข้าไป วางคำสั่งนี้ลงไป เพื่อให้ shell เรียกใช้ starship ทุกครั้งเมื่อเปิด terminal

::: code-group

```js [Microsoft.PowerShell_profile.ps1]
$ENVSTARSHIP_CONFIG = "$HOME.configstarship.toml"

Invoke-Expression (&starship init powershell)
```

:::

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717937765/wrikka-obsidian/wfmq1wyy7nol5lg33cwi.webp)

## เปิด Terminal อีกครั้ง

ได้แล้ว สวยๆ

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717937960/wrikka-obsidian/zi9opmax35lamznwqmsz.webp)

## [Config เพิ่มเติมได้](https://starship.rs/config/)

ถ้าจะ config ไม่เหมือนใคร ทำใน `starship.toml` โดยจริงๆใช้ค่า Default ก็ได้ ดีแล้ว

![](https://res.cloudinary.com/dc54nmhwq/image/upload/f_auto/v1717938555/wrikka-obsidian/peseadgkzrq15o5wkw5f.webp)
