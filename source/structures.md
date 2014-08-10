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

When a module affects different aspects of an element or arrangement of elements simultaneously (i.e., it has a wide *scope*), that's a very strong indicator that you're dealing with a Structure.

Let's say, for example, you're designing a fairly common site header: logo on the left, plus some horizontal navigation on the right. You could realistically build this pattern using a combination of Helpers, Components, and Tools.

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

But what happens when we try to make our site responsive? On small-screen devices, we want our navigation to also:

- Fill the viewport width
- Stack links atop one another
- Apply an alternating background color to each list item

See the problem? Our module definitely isn't `list--inline` anymore. It now needs its own aesthetics and responsive behavior&mdash;both of which are tailored to their surrounding design. Although we might use this pattern in multiple places on the site, its broad scope makes copying it across different designs unlikely. In this case, our best bet is to create a new Structure, and define our new themed, responsive list module inside.

依賴關係
------------

不像 Components，Structures 可以依賴，或甚至擴充，已存在的 Components。這在你想要添加主題或行為到一個 Component 時是很有用的，但請保持任何包含在他們自身模組中的獨特變更。

在 MVCSS，我們主要使用 `g` (grid) Component 在頁面佈局（page layout）。We try to keep it simple and assume as little as possible, but there are cases where we want to include similar functionality inside of a more specific module. Float-based grids don't always behave predictably when their items have variable a height, so we've defined a `collection` Structure to add contextual clearfixing.

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

Using both the `g` (grid) Component and the `collection` Structure, we can apply both modules' classes directly in the markup.

**註：** applying multiple modifiers to `grid` and `grid-box` can make markup difficult to read quickly, so we've shortened the classes to `g` and `g-b`.

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

But that's a lot of classes to keep track of! Luckily, Sass can help us simplify our markup thanks to its `@extend` directive.

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

And now we apply only a *single set* of classes in the markup.

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

In the end, limiting scope and minimizing dependencies both affect *portability*, which is usually our biggest concern when classifying modules. If you can easily tweak a few lines of CSS inside a module and use it between projects, that means it's reasonably portable, and you have solid grounds for classifying it as a Component. On the other hand, if try to port a module and find yourself rewriting a significant amount of code, then the module is likely better classified as a Structure.
