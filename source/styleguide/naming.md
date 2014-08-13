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

As you may notice in `_tools.sass`, many of the Tool classes look pretty acronym-y. We’ll get into the gains inherent with defining Tools shortly, but for now just assume two- or three-letter classes fall under this notion.

一個類別例如 `.mbm` 是一個定義 bottom margin 基本單位的縮寫法：**m**argin **b**ottom **m**edium。同樣地，`.mbl` 會是 large 種類的 bottom margin。

組件／結構（Components/Structures）
---------------------

Structures 和 Components 如同 Sass 局部模板存在他們各自的目錄中，而且始終是單數。範例包括 `icon`、`button`、`g` (grid)、`form` 和 `modal`。

如果名稱包含兩個單詞，利用 `camelCase`－例如 `taskList`。

修飾符（Modifiers）
---------

After defining the base properties of a Component or Structure, modifiers exist to allow stylistic tweaks that build on the initial definition.  These tweaks are denoted with two hyphens `--`. A button, for instance, might have a number of different colors and sizes:

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

After creation, elements that need a modifier will use the root class (`.btn`) and any number of modifiers deemed necessary:

```html
<button class="btn btn--a btn--l">A Button</button>
```

**註：** modifiers typically work best when defined in hierarchical sequence (`a`, `b`) or via function (`cancel`, `submit`) as opposed to look (`red`, `blue`).

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

Elements nested within a Component or Structure that need styling *based on being there* can be added to the scaffolding. Keeping with the dropdown Structure, the scaffold section falls last:

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

For items in scaffolding, the Component/Structure name comes first, followed by a single hyphen and the subcomponent/substructure name (also in camelCase, if necessary). Where applicable, they can have their own modifiers, states, and subcomponents/substructures&mdash;more than two levels, though, typically means it’s time to refactor.

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

In the `card` example above, we've defined a modifier class that affects the `card-header` scaffolding item. Applying the class directly to the element descendent of `card` helps us insert additional space when needed, while also keeping CSS specificity low.

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
