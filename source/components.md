---
title: Components
type: page
priority: 14
---

Components
==========

The beginnings of a recognizable user interface live in the Components directory. These are abstract, reasonably portable modules that can be swapped in and out of different projects with relative ease.

Some Components, like `g` (grid) and `card`, are used for layout and containers, and can encompass many other modules.

```html
<div class="g">
  <div class="g-box g-b--1of2">
    <div class="card">
      <!-- Content -->
    </div>
  </div>
  <div class="g-b g-b--1of2">
    <div class="card">
      <!-- Content -->
    </div>
  </div>
</div>
```

Other Components, like `thumb`, affect only a single element, and can resemble Tools at first glance. In these situations, both the Component and Tool have a single responsibility. The *Component*, however, may be declared alongside its modifier classes, while the Tool applies more definitive styles.

```html
<div class="bucket">
  <div class="bucket-media">
    <img class="thumb thumb--m" src="avatar-nick.jpg" alt="Nick Walsh">
  </div>
  <div class="bucket-content">
    <p>Nick Walsh</p>
  </div>
</div>
```

特徵
---------------

在決定一個模組是 Component 或 Structure 時，我們發現反問自己以下幾個問題是很有用的：

- 這個模組是否有盡可能限制其作用範圍？
- 這個模組是否獨立於已存在的 Components？
- 這個模組是否夠抽象，以在其他專案使用不須做顯著更動？

如果你對任何這些問題回答了「否」，被詢問的模組就更有可能是一個 Structure。
