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

A class such as `.mbm` is a shorthand way to define a basic unit of bottom margin: **m**argin **b**ottom **m**edium. Similarly, `.mbl` would be the large variety of bottom margin.

組件／結構（Components/Structures）
---------------------

Structures and Components exist as Sass partials in their respective directories, and are always singular. Examples include `icon`, `button`, `g` (grid), `form`, and `modal`.

If the name comprises two words, utilize `camelCase`&mdash;for instance, `taskList`.

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

Generally added via JavaScript, states are similar to modifiers but carry conditional context. `is-` denotes a state, such as `is-active`, and they’re utilized as such:

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

We use `is-active` as a convention throughout MVCSS, but any state can affect any module in a unique way. For example, applying `is-active` on an `btn` may have a completely different effect from applying `is-active` on a `nav-item`. By using only compound selectors (`.module.is-state`) to define state, we're able to increase specificity when needed, while also containing any changes within a single module's namespace.

情境（Context）
-------

We also borrow the idea of context from SUIT. Modularizing styles into self-contained units works well *most* of the time, but you’ll occasionally need a parent element to fall in line.

The most common case tends to be positioning context. If you have a dropdown structure that’s being positioned absolutely, the parent element should be (at least) positioned relatively:

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

Similar to `is-` with states, classes beginning with `has-` denote a context selector.

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
