---
title: 基礎知識
type: page
priority: 3
parent: 樣式指南
nested: true
---

樣式指南 - 基礎知識
===================

樣式表（Style Sheets）
------------

- 屬性按字母順序排列（有 vendor 前綴的屬性按無前綴來排序）
- Extends 和 Mixins 應該被放在標準屬性之前
- 使用兩個空格縮排
- 在 `:` 之後添加一個空格 
- 在註解 `//` 之後添加一個空格
- 在值中的逗號之後添加一個空格（如 `rgba(#000, 0.5)`）
- 堅持為類別而非 ID 上樣式
- 盡可能限制巢狀結構

```sass
// 範例

.component
  @extend .group
  +transition(opacity 0.2s ease-in-out)
  border-radius: 5px
  box-shadow: 0 2px 5px rgba(#000, 0.5)
  -webkit-flex: 1 1 50%
  -ms-flex: 1 1 50%
  flex: 1 1 50%
  font-style: italic
```

標記（Markup）
------

- 按字母順序排列類別，依序是 Component、Structure、Tool、狀態和情境
- 在每個獨立模組之後應用修飾符類別（modifier classes）

```html
<div class="g collection collection--1of3 bch mtl tci is-active has-dropdown"></div>
```
