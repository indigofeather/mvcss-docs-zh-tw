---
title: Components
type: page
priority: 14
---

Components
==========

可辨別 UI（recognizable user interface）的開端存在 Components 目錄中。這些是抽象的、合理的可移植模組，可以相對輕鬆地在不同專案之間被交換。

某些 Components，像 `g` (grid) 和 `card`，用於佈局和容器，而能包含許多其他模組。

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

**註**：我們把 `grid` 和 `grid-box` 類別分別簡寫為 `g` 和 `g-b`。既然我們如此頻繁寫這些網格類別，我們想要盡可能精簡。然而，如果對你來說使用完整字詞更適合的話，請隨意。

其他 Components，像 `thumb`，只影響單一元素，而且第一眼看起來與 Tools 類似。在這些情況下，Component 和 Tool 都有單一職責。然而，*Component* 可能被宣告在其修飾符類別旁邊，而 Tool 應用更明確樣式。

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
