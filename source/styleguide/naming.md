---
title: 命名慣例
type: page
priority: 6
parent: 樣式指南
nested: true
---

樣式指南 - 命名慣例
===============================

以下想法由 [BEM][bem-definitions] 和 [SUIT][suit-naming-conventions] 首創，MVCSS 有一系列嚴格的命名慣例，提供一目了然的情境。

工具（Tools）
-----

正如你可能在 `_tools.sass` 注意到，很多 Tool 類別看起來是漂亮的首字母略縮詞。簡要定義 Tools 可以讓我們得到固有好處，但現在只是假設兩個或三個字母的類別屬於這個概念。

一個類別例如 `.mbm` 是一個定義 bottom margin 基本單位的縮寫法：**m**argin **b**ottom **m**edium。同樣地，`.mbl` 會是 large 種類的 bottom margin。

組件／結構（Components/Structures）
---------------------

Structures 和 Components 如同 Sass 局部模板存在他們各自的目錄中，而且始終是單數。範例包括 `icon`、`button`、`g` (grid)、`form` 和 `modal`。

如果名稱包含兩個單詞，利用 `camelCase`－例如 `taskList`。

修飾符（Modifiers）
---------

在定義過一個 Component 或 Structure 的基礎屬性之後，修飾符的存在允許建立在初始定義上的風格調整。這些調整以兩個連字符 `--` 表示。例如，一個按鈕可能有一些不同的顏色和大小。

```sass
// *************************************
//
//   Button
//   -> Action points
//
// *************************************

.btn
  border: 0
  display: inline-block
  line-height: 2.5
  padding: 0 $b-space
  font-weight: bold

// -------------------------------------
//   Modifiers
// -------------------------------------

// ----- Sizes ----- //

.btn--s
  font-size: 75%

.btn--l
  font-size: 150%

// ----- Theme ----- //

// Hierarchy

.btn--a
  background: $c-base

.btn--b
  background: $c-highlight
```

在建立之後，需要修飾符的元素會使用 root 類別（`.btn`） 以及任何被認為有必要的修飾符：

```html
<button class="btn btn--a btn--l">A Button</button>
```

**註：** 修飾符通常在層次順序（`a`、`b`）定義，或透過函式（`cancel`、`submit`）時發揮最好，而不是（`red`、`blue`）。

狀態（States）
------

通常是透過 JavaScript 添加，狀態類似於修飾符但具有條件的情境。`is-` 表示是一個狀態，例如 `is-active`，可以像這樣利用：

```sass
// *************************************
//
//   Button
//   -> Action points
//
// *************************************

.btn
  // Styles

// Modifiers

// -------------------------------------
//   States
// -------------------------------------

.btn.is-active
  background: $c-highlight
```

在整個 MVCSS 中我們使用 `is-active` 做為一個慣例，但任何狀態能夠以獨特的方式影響任何模組。例如，在一個 `btn` 應用 `is-active` 與在一個 `nav-item` 應用 `is-active` 可能有完全不同的效果。只透過使用複合選擇器（`.module.is-state`）來定義狀態，我們可以在需要時增加特異性，同時也包含在單一模組的命名空間內的任何變更。

情境（Context）
-------

我們也從 SUIT 借用情境的想法。模組化樣式成為完備的單位在 *大多數* 的時候運作良好，但你有時會需要一個父元素來排入隊伍。

最常見的情況趨向於定位情境。如果你有一個 dropdown 結構，而它是絕對定位，父元素應該（至少）是相對定位：

```sass
// *************************************
//
//   Dropdown
//   -> Revealed information
//
// *************************************

.dropdown
  // Styles

// Modifiers, States

// -------------------------------------
//   Context
// -------------------------------------

.has-dropdown
  position: relative
```

類似於狀態有 `is-`，類別以 `has-` 開頭表示是一個情境選擇器。

鷹架（Scaffolding）
-----------

Component 或 Structure 中需要 *根據在哪裡* 上樣式的巢狀元素可以被添加到鷹架。鷹架段落跟著 dropdown Structure 排在最後：

```sass
// *************************************
//
//   Dropdown
//   -> Revealed information
//
// *************************************

.dropdown
  // Styles

// Modifiers, States, Context

// -------------------------------------
//   Scaffolding
// -------------------------------------

.dropdown-media
  border: 4px solid $c-invert
```

對於鷹架中的項目，先是 Component/Structure 名稱，後面接著一個連字符和子元件／子結構名稱（如果必要的話，也是駝峰式）。在適用的情況，他們可以有自己的修飾符、狀態和子元件／子結構－多於兩層，雖然通常這意味著該是重構的時候。

```sass
// *************************************
//
//   Card
//   -> Individual style containers
//
// *************************************

.card
  background: $c-invert
  border-radius: $b-borderRadius
  box-shadow: $b-boxShadow
  padding: $b-space
  position: relative

// Modifiers, States, Context

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Header ----- //

.card-header
  border-bottom: $b-border
  margin-bottom: $b-space-s
  margin-left: -$b-space
  margin-right: -$b-space
  padding-left: $b-space
  padding-right: $b-space

// Modifiers

.card-header--push
  margin-bottom: $b-space-l
```

在上面 `card` 的範例中，我們已經定義一個影響 `card-header` 鷹架項目的修飾符類別。直接應用該類別到 `card` 的後代元素幫助我們在需要時插入額外空間，同時也保持低 CSS 特異性。

變數（Variables）
---------

變數是一個足夠大要考慮的事，我們致力於整個檔案來保持他們有組織。你可以在 [Config][config] 中找到所有關於變數的資訊。

圖像（Images）
------

關於命名圖像的段落？我明白，讓我們讀完它。

- `bg-*` 給背景圖
- `logo-*` 給 logo
- `img-*` 給內容圖像
- 子文件夾給更大的群組


[config]: /foundation/config

[bem-definitions]: http://bem.info/method/definitions
[suit-naming-conventions]: https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
