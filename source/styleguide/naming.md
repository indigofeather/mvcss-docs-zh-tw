---
title: 命名慣例
type: page
parent: 樣式指南
nested: true
---

樣式指南 - 命名慣例
===============================

以下想法由 [BEM][bem-definitions] 和 [SUIT][suit-naming-conventions] 首創，MVCSS 有一系列嚴格的命名慣例，提供一目了然的情境。

工具（Tools）
-----

你可能注意到在 `_tools.sass` 裡，大部分的 Tool 類別看起來是首字母略縮詞。扼要地定義 Tools 可以為我們帶來好處，在這個概念下，採用兩個或三個字母的類別。

像是 `.mbm` 這樣的類別，是定義 bottom margin 基本單位的縮寫法：**m**argin **b**ottom **m**edium。同樣地，`.mbl` 會是 bottom margin 的 large 種類。

元件／結構（Components/Structures）
---------------------

Structures 和 Components 如同 Sass 局部模板存在他們各自的目錄中，而且始終是單數命名。範例包括 `icon`、`button`、`g` (grid)、`form` 和 `modal`。

如果名稱包含兩個單詞，利用 `駝峰式命名（camelCase）`－例如 `taskList`。

修飾符（Modifiers）
---------

在定義過 Component 或 Structure 的基礎屬性之後，修飾符的存在允許建立在初始定義上的風格調整。這些調整以兩個連字符 `--` 表示。例如，一個按鈕可能有一些不同的顏色和大小。

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

在建立之後，需要修飾符的元素會使用根類別（`.btn`） 以及任何被認為有必要的修飾符：

```html
<button class="btn btn--a btn--l">A Button</button>
```

**註：** 修飾符通常在分層序列（`a`、`b`）定義或透過功能（`cancel`、`submit`）時發揮最好，而不是使用外觀（`red`、`blue`）。

### 簡寫表示法（Shorthand Notation）

正如你可以在上面看到，我們會對尺寸和層次修飾符使用簡寫表示法。例如，我們會寫 `btn--l`，而不是 `btn--large`。我們這樣做是為了簡潔，但如果對你和你的作者們來說，具體寫出更適合的話，請隨意。

以下是我們使用在尺寸和層次的簡寫表示法修飾符慣例：

```sass
// Sizing
--f  (flush)
--xs (extra small)
--s  (small)
--m  (medium)
--l  (large)
--xl (extra large)

// Hierarchy
--a (primary)
--b (secondary)
--c (tertiary)
```

**註**：如果你在層級規模上超過三層，你可能需要不同的修飾符，因為你有過多等級的層次。

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

在整個 MVCSS 中我們使用 `is-active` 做為一個慣例，但任何狀態能夠以獨特的方式影響任何模組。例如，在 `btn` 與在 `nav-item` 套用 `is-active` 可能有完全不同的效果。藉由只採用複合選擇器（`.module.is-state`）來定義狀態，使我們能夠在需要時增加特異性，同時也包含單一模組之命名空間內的任何變更。

情境（Context）
-------

我們也從 SUIT 借用情境的想法。把樣式模組化成為完備的單位在 *大多數* 的時候運作良好，但有時候你會需要一個父元素來加入元件。

最常見的情況傾向於定位情境。如果你有一個 dropdown 結構，而它是絕對定位，父元素應該（至少）是相對定位：

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

如同狀態加上 `is-`，情境選擇器以 `has-` 開頭表示。

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

變數是需要充分考慮的事，因此我們致力在整個檔案中保持他們具有組織。你可以在 [Config][config] 中找到所有關於變數的資訊。

圖像（Images）
------

關於命名圖像的段落？我明白，讓我們讀完它。

- `bg-*` 用於背景圖
- `logo-*` 用於 logo
- `img-*` 用於內容圖像
- 子文件夾用於更大的群組


[config]: /foundation/config

[bem-definitions]: http://bem.info/method/definitions
[suit-naming-conventions]: https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
