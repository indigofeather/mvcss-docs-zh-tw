---
title: 概觀
type: page
priority: 1
---

概觀
========

**MVCSS** [Modular View CSS]（模組化檢視 CSS）是一個以 Sass 為基礎的 CSS 架構，用於建立可預測與可維護的應用程式樣式。

CSS，因其簡明性，在大規模實作中是一個難於管理的語言。命名、抽象路徑、結構和方法論都是自由形式；MVCSS 尋求為實作中的自由形式提供規範。

為了符合架構的主題，應用程式被分為主要三大類：[*Foundation*][foundation]、[*Components*][components] 和 [*Structures*][structures]。如果 Foundation 代表工具、材料和地平面，Components 等同於建立一扇窗，而 Structures 築起牆面來映出一些窗子和門。

要搶先體驗的話，這裡是粗略的 Component 可能的組成：

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

// -------------------------------------
//   Modifiers
// -------------------------------------

// ----- Sizes ----- //

.card--s
  padding: $b-space-s

// ----- Theme ----- //

// Hierarchy

.card--b
  background: $c-highlight

// Error

.card--error
  border: 2px $b-borderStyle $c-error
  box-shadow: none

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Label ----- //

.card-label
  font-size: $b-fontSize-s
  font-weight: bold
  text-transform: uppercase
```

整個網路不乏精彩的框架、想法和方法來處理 CSS，而沒有前面這些理念的提出，MVCSS 就不會存在。看看 [資源][resources] 章節以了解更多關於我們的架構根源。


[components]: /components
[foundation]: /foundation
[resources]: /resources
[structures]: /structures
