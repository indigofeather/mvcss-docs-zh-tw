---
title: Config
type: page
priority: 11
parent: Foundation
nested: true
---

Foundation - Config
===================

Config 握有你的 `@font-face` 字體設置（如果適用的話），以及所有你的應用程式範圍（application-wide）變數。 我們預設引入一組被分解成 Base、Colors 和 Fonts 的配置。

@Font-face
----------

如果從一個已知路徑（如你的伺服器）供應字體檔案，我們引入 Bourbon 的 `+font-face` [mixin][bourbon-mixin-fontface] 來簡化令人畏懼的語法，並且也列出針對瀏覽器相容性所需的備用檔案。

```sass
// -------------------------------------
//   @font-face
// -------------------------------------

// ----- Open Sans ----- //

+font-face('OpenSans', 'OpenSans')
+font-face('OpenSans', 'OpenSansBold', bold)
+font-face('OpenSans', 'OpenSansItalic', normal, italic)
```

**註：** 如果你使用一個網頁字體供應商專門提供透過 JavaScript 片段的字體，你可以期望讓 `@font-face` 段落留空。

變數
---------

所有在 MVCSS 中的變數是定義在 Config 中，並且帶有他們的角色或相應 Component/Structure 的前綴。

- `$b-*` 給基礎變數
- `$c-*` 給顏色
- `$f-*` 給字型
- `$g-*` 給斷點（breakpoints）
- `$componentName-*` 給 Components
- `$structureName-*` 給 Structures

顏色是一個有點複雜的問題，但我們已經有最成功的方式，定義一個初始化調色盤（沒有顏色前綴）,然後在其他變數中參照那些顏色。在有限顏色的專案中，你可能不需要一個調色盤段落，所以我們建議你選擇你喜歡的方式。

```sass
// -------------------------------------
//   Colors
// -------------------------------------

// ----- Palette ----- //

$cerulean: #017ba7
$forest: #7ba05b
$gainsboro: #ecf0f1
$gold: #ffd700
$jet: #343434
$scarlet: #ff3f00
$white: #fff

// ----- Base ----- //

$c-background-invert: $white
$c-background: $gainsboro
$c-border: lighten($jet, 30%)
$c-error: $scarlet
$c-highlight: $cerulean
$c-text-invert: $white
$c-text: $jet
$c-subdue: lighten($cerulean, 40%)
$c-success: $forest
$c-warning: $gold

// ----- Components ----- //

// 範例：$row--a-background: $c-highlight

// ----- Structures ----- //

// 範例：$dropdown-link-color: $c-subdue

// -------------------------------------
//   Base
// -------------------------------------

// ----- Borders & Box Shadow ----- //

$b-borderRadius: 3px
$b-borderStyle: solid
$b-borderWidth: 2px
$b-border: $b-borderWidth $b-borderStyle $c-border
$b-boxShadow: 0 2px 0 rgba($jet, 0.25)

// ----- Typography ----- //

$b-fontFamily-heading: 'OpenSans', sans-serif
$b-fontFamily: 'OpenSans', sans-serif
$b-fontSize: 16px
$b-fontSize-s: 75%
$b-fontSize-m: 90%
$b-fontSize-l: 115%
$b-lineHeight: 1.5

// ----- Sizing ----- //

$b-space: em(20px)
$b-space-s: 0.5 * $b-space
$b-space-l: 2 * $b-space
$b-space-xl: 4 * $b-space

// -------------------------------------
//   Components
// -------------------------------------

// ----- Grid ----- //

$g-s: em(480px)
$g-m: em(800px)
$g-l: em(1024px)

// -------------------------------------
//   Structures
// -------------------------------------

// ----- Dropdown ----- //

// 範例：$dropdown-width: em(200px)
```


[bourbon-mixin-fontface]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_font-face.scss
