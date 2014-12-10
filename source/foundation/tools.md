---
title: Tools
type: page
parent: Foundation
nested: true
---

Foundation - Tools
==================

Tools 是直接用在標記自身的表象實用工具類別。他們在你需要一個獨特情境下的特定樣式時很有用，但不能成為建立（並命名）新模組或修飾符來達到預期效果的正當理由。

例如，下面 `card` Component 中的段落元素需要 `margin-bottom` 對齊，所以我們可以輕鬆應用一個 Tool 的 `mbf` 類別。

```html
<div class="card">
  <p class="mbf">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam non dolor eligendi placeat.</p>
</div>
```

在這個情況下使用 Tool 有助於我們避免宣告 `card` 或 `card` 修飾符來承擔過多規則，同時也有助於保持 CSS 完全地明確性與易辨的。

單一職責
---------------------

Tools 盡可能限制職責，允許你混合和搭配各種類別來快速產生更多不同樣式。每一個 Tool 做一件事，並且做好，確保他們影響的這些元素是可預測的和可擴充的。

太超過
-------------

如果你發現自己使用多個 Tools 來達到一個可重複使用的樣式群組，它可能是一個徵兆，你應該在他們自己的模組或修飾符中定義那些屬性。

```html
<a class="btn pbm pll prl ptm tsl" href="v3.zip" >Download v3.0.0</a>
<a class="btn pbm pll prl ptm tsl" href="v2.zip" >Download v2.4.1</a>
```

在以上的範例中，我們試著只透過 Tools 建立一個大按鈕。雖然我們的方式達到預期效果，我們在 `.btn--l` 類別中定義那些共同樣式會更好，然後在標記中套用它。

```sass
.btn--l
  font-size: $b-fontSize-l
  padding: $b-space $b-space-l
```

```html
<a class="btn btn--l" href="v3.zip" >Download v3.0.0</a>
<a class="btn btn--l" href="v2.zip" >Download v2.4.1</a>
```

第二種方式也給我們一個樣式的鉤子，用於 `btn--l` 任何未來的變更。Tools 提供一組強大的類別對獨特語境樣式進行改善調整，但他們不是模組化 CSS 做法的替代品。
