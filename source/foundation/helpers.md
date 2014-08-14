---
title: Helpers
type: page
priority: 10
parent: Foundation
nested: true
---

Foundation - Helpers
====================

Helpers 是在整個 MVCSS 應用程式中被使用的函式、混入、擴充和動畫。

函式（Functions）
---------

由於 Sass 無償給我們許多有用的函式，我們幾乎不需要定義任何我們自己的。不過，可能有些情況下，你需要定義一些其他的（如 `em`、`rem`、`strip-units`）。對於這些情況，我們已經致力於 Helpers 中的 Functions 段落放置任何必要補充。

混入（Mixins）
------

我們在撰寫樣式表時使用混入來減少重複程式碼的數量。通常，這涉及簡化冗長的語法，以及為不支援的 CSS 屬性提供備用和供應商前綴。

以媒體查詢為例：最常用的參數是 `screen` 和 `min-width`，所以我們做了一個混入，包括這些值為預設，除非另有說明。

```sass
// ----- Respond-to ----- //
// -> Generates a media query
//
// $val - the breakpoint size
// $query - the type of query ('min-width', 'max-width')
// $media - the media type ('screen', 'print', etc.)
// @content - the generated content within the mixin
//

=respond-to($val, $query: min-width, $media: screen)
  @media #{$media} and ($query: $val)
    @content
```

現在透過在整個專案中使用 `respond-to` 混入，你可以少寫一點程式碼來達到相同結果。

```sass
// Standard CSS
@media screen and (min-width: $g-m)

// Sass mixin
+respond-to($g-m)
```

在 Mixin 段落的條目始終應該帶參數並且在利用時有能力去辨別。如果你正在尋找添加一個不變的屬性群組來重複使用，他們屬於 Extends。

擴充（Extends）
-------

Extends 是規則的集合用來直接使用在標記中，或在模組中 *擴充*。這些都是通常比 Tools 更冗長，但還是堅持單一職責原則。 

儘管我們經常在模組中擴充這些類別，我們避免百分比符號語法（`%className`）來在 Sass 中建立佔位符選擇器。這是給我們自己很好的一個提醒，這些類別不應該被嵌套在任何其他情境下，避免與擴充相關的 [選擇器膨脹][csswizardry-extends]。

### Markup 內部

`group` 類別應用多個規則到單一元素，並且在下面的範例中，我們直接在標記中使用它。

```sass
// ----- Clearfix ----- //

.group::after
  clear: both
  content: ''
  display: table
```

```html
<footer class="group">
  <p class="fl">Made with Envy</p>
  <img class="fr" src="logo-envy.svg" alt="Envy Logo">
</footer>
```

### Modules 內部

在以下的 `g` (grid) Component，我們在模組自身中擴充 `group` 類別。

```sass
.g
  @extend .group
  display: block
  margin-left: -$g-gutter / 2
  margin-right: -$g-gutter / 2
```

動畫（Animations）
----------

在 Helpers 中，Animations 一般使用可以跨各種模組呼叫的 `@keyframes` 定義。

如果你發現自己在兩個獨立的地方定義類似動畫，我們試著把它抽象成一個，語境動畫很少可以在整個專案中被重複使用。

例如，在 `fadeIn` 的情況，我們很可能會跨很多不同模組使用此動畫，讓它成為一個定義在 Helpers 中完美的動畫。

```sass
// ----- Fade In ----- //

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
```

**註：** 動畫特有的特定模組定義在他們相關樣式表的底部。

[csswizardry-extends]: http://csswizardry.com/2014/01/extending-silent-classes-in-sass/
