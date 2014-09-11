---
title: 數字遊戲
type: page
priority: 4
parent: 樣式指南
nested: true
---

樣式指南 - 數字遊戲
=============================

我們堅持盡可能在可預測的規模中使用相對單位。基礎值（base value）通常儲存在 Config（涵蓋在 [Foundation][foundation]），並從中提取。基於效率和標準化的目的，在 MVCSS 中，你會比平時更少去定義數值。

方式（Approach）
--------

- 基礎字體大小（儲存在 Config）的像素值是設定在 `html` 根元素上，以此設定文字大小和 em 單位的相對值。
- 行高是沒有單位的，如 `1.5`。
- 間距（padding、margin 等）是已儲存基礎間距值的倍數，以 em 單位設定。
- 字體大小（除了 `html` 元素之外）以百分比值來定義，同時縮放元素的其他相對屬性。

一旦我們觸及 Foundation 的 Config、Tools 和 Base 部份，這種設置應該比較容易掌握。

**註：** 像素值有時必須符合設計需求，特別是像偏移。大多數情況下，這些被認為是 [magic numbers][csswizardry-magic-numbers]，而且你應該盡可能避免使用他們。


[foundation]: /foundation

[csswizardry-magic-numbers]: http://csswizardry.com/2012/11/code-smells-in-css/
