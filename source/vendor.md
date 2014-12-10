---
title: Vendor
type: page
---

Vendor
======

Vendor 是我們引入所有第三方樣式表的地方，且預設情況下，裡面是空的。

Vendor 可能包含未變更的第三方程式碼，以及來自其他函式庫、框架和 UI 工具包重構過的模組。要引入任何 `.css` 檔案，你可以變更他們的副檔名為 `.scss` 並像平常一樣使用 `@import`。

如果一個程式碼片段是可移植的，且不大於一個類別，我們通常把這些貼在 [Helpers][helpers] 段落中的其他模組旁邊。

**註：** 雖然 `_reset.sass` 包含第三方程式碼，我們把它包含在 Foundation 之中。這有助於我們組織低層級樣式，並且在編寫 CSS 時防止一些潛在來源的順序相關問題。


[helpers]: /foundation/helpers/
