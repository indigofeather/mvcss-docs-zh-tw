---
title: Structures
type: page
priority: 15
---

Structures
==========

Structures 是一個專案中專門用於跨站使用的模組和使用者界面元素。在某些情況下，他們可能擔任某些情境或內容類型，而在其他情況下，他們可能包括主題樣式或響應式佈局。

在解釋 Component 相對於 Structure 有什麼特徵時，我們概述幾點考量來幫助我們在兩者之間做決定：

- 作用範圍大小
- 依賴其他模組
- 專案之間的可移植性，或者沒有

作用範圍大小
-------------

當一個模組同時影響一個元素或元素佈置的不同方面（也就是說，它 *作用範圍* 很廣）這就是你正在處理 Structure 的一個非常強烈的指標。

比方說，例如你正在設計一個相當常見的網站 header：logo 在左邊，再加上一些水平導覽列在右邊。你可以使用一個 Helpers、Components 和 Tools 的組合來實際建立這個模式。

```html
<header class="group">
    <img class="fl" src="logo.svg" alt="Website">
    <nav class="fr">
        <ul class="list list--inline">
            <li class="list-item"><a href="/">Home</a></li>
            <li class="list-item"><a href="/blog">Blog</a></li>
            <li class="list-item"><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

但當我們試著讓我們的網站響應會發生什麼事？在小螢幕裝置上，我們也想要我們的導覽列：

- 填入 viewport 寬度
- Stack 彼此鍊結在一起
- 應用一個交替背景色到每個清單項目

看到問題了？我們的模組肯定不再是 `list--inline`。它現在需要它自己的美學和響應行為－這兩者都是針對其周圍的設計。雖然我們可能在網站中的多個地方使用此模式，其作用範圍之廣，使得在不同的設計中複製它不太可能。在這種情況下，我們最好的辦法是建立一個新的 Structure，並且在裡面定義我們的新主題、響應清單模組。

依賴關係
------------

不像 Components，Structures 可以依賴，或甚至擴充，已存在的 Components。這在你想要添加主題或行為到一個 Component 時是很有用的，但請保持任何包含在他們自身模組中的獨特變更。

在 MVCSS，我們主要使用 `g` (grid) Component 在頁面佈局。我們試著保持簡單並且盡可能少假設，但有些情況下，我們想在更特別的模組內引入類似功能。浮動為底的網格始終無法在他們的項目有可變高度時預設行為，所以我們已經定義一個 `collection` Structure 來添加語境的清除修正。

```sass
.collection

// -------------------------------------
//   Modifiers
// -------------------------------------

.collection--1of3

  .collection-item:nth-child(3n + 1)
    clear: left

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Item ----- //

.collection-item
  margin-bottom: $b-space-l
```

同時使用 `g` (grid) Component 和 `collection` Structure，我們可以直接在標記中同時應用模組的類別。

**註：** 應用多個修飾符到 `grid` 和 `grid-box` 會讓標記難以快速閱讀，所以我們已經縮寫類別為 `g` 和 `g-b`。

```html
<div class="g collection collection--1of3">
  <div class="g-b g-b--1of3 collection-item">
    <!-- Content -->
  </div>
  <div class="g-b g-b--1of3 collection-item">
    <!-- Content -->
  </div>
  <div class="g-b g-b--1of3 collection-item">
    <!-- Content -->
  </div>
  <div class="g-b g-b--1of3 collection-item">
    <!-- Content -->
  </div>
</div>
```

但這樣有太多類別來保持聯繫！幸運的是，Sass 可以幫助我們簡化我們的標記，多虧有 `@extend` 指令。

```sass
.collection
  @extend .g

// -------------------------------------
//   Modifiers
// -------------------------------------

.collection--1of3
  @extend .g-b--1of3

  .collection-item:nth-child(3n + 1)
    clear: left

// -------------------------------------
//   Scaffolding
// -------------------------------------

// ----- Item ----- //

.collection-item
  @extend .g-b
  margin-bottom: $b-space-l
```

現在我們只在標記中應用 *一組* 類別。

```html
<div class="collection collection--1of3">
  <div class="collection-item">
    <!-- Content -->
  </div>
  <div class="collection-item">
    <!-- Content -->
  </div>
  <div class="collection-item">
    <!-- Content -->
  </div>
  <div class="collection-item">
    <!-- Content -->
  </div>
</div>
```

可移植性
-----------

最後，限制作用範圍和最小化依賴性都影響 *可移植性*，它通常是我們在進行模組分類時最關心的問題。如果你可以輕易調整一些在模組中的幾行 CSS，並且在專案之間使用它，這意味著它是可合理移植的，你就有堅實的理由將它分類為一個 Component。另一方面，如果試著移植一個模組，並發現你自己撰寫相當數量的程式碼，那麼該模組分類為一個 Structure 可能會更好。
