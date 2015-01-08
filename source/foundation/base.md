---
title: Base
type: page
parent: Foundation
nested: true
---

Foundation - Base
=================

Base 包含所有針對預設 HTML 元素的 tag-level 設定。像是 anchors、headings、paragraphs、lists，以及其他沒有附加類別名稱的元素。因為涵蓋太多可能的 HTML 元素，我們通常只對專案中我們需要的相關元素做樣式。

我們在頂端定義 `html` 和 `body` 樣式，然後把剩下的內容分為 Block 和 Inline 段落。

```sass
// *************************************
//
//   Base
//   -> Tag-level settings
//
// *************************************

html
  background: $c-background
  color: $c-base
  font-family: $b-fontFamily
  font-size: $b-fontSize
  line-height: $b-lineHeight

body
  font-size: 100%
```

區塊內容（Block Content）
-------------

在 MVCSS 專案中，區塊內容是由所有需要的 block-level 的元素組成。通常，這個段落包括前述的 headings、paragraphs、lists、以及 figures、blockquotes 等。

外邊距疊加（Collapsing margins），一個 CSS 的刻意特色（intentional feature），在編寫樣式表時只會增加複雜度，所以我們限制 block-level 元素的垂直 margins 為 [單一方向][csswizardry-margins]。

```sass
// -------------------------------------
//   Block Content
// -------------------------------------

ul, p
  margin-bottom: $b-space
  margin-top: 0

li
  margin-bottom: $b-space-s
  margin-top: 0

// ----- Headers ----- //

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4
  font-family: $b-fontFamily-heading
  font-weight: bold
  line-height: 1.2
  margin-bottom: $b-space-xs
  margin-top: 0
```

內嵌內容（Inline Content）
--------------

內嵌內容是指－你猜對了－內嵌元素。這些包括標籤像 `a`、`strong`、`em`、`code` 和任何其他預設不強制在自身前後換行的元素。

```sass
// -------------------------------------
//   Inline Content
// -------------------------------------

a
  border-bottom: $b-border
  color: $c-highlight
  text-decoration: none

  &:hover,
  &:focus
    border-bottom-color: $c-highlight
    color: $c-subdue
```

[csswizardry-margins]: http://csswizardry.com/2012/06/single-direction-margin-declarations/

