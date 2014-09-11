---
title: 資源配置
type: page
priority: 7
---

資源配置
========

既然我們已經接觸了命名和零碎的概念，讓我們彙整起來吧！無論你的樣式在哪裡，MVCSS 預期以下設置：

```text
application.sass
foundation/
  _reset.sass
  _helpers.sass
  _config.sass
  _base.sass
  _tools.sass
components/
structures/
vendor/
```

`application.sass` 做為資源配置和收件匣（稍後詳述）。應用程式做為名稱是從 Rails 資產流水線所衍生，而其他檔案全都是導入的 Sass 局部模板。

在編譯後，`application.css` 被包括在網站每一頁，且可以壓縮各種設定。

導入（Imports）
-------

分布在 Foundation 中的檔案按特定順序導入到資源配置中，而 Components 和 Structures 通常依字母順序引入：

```sass
// *************************************
//
//   Project Name
//   -> Manifest
//
// *************************************

// -------------------------------------
//   Foundation
// -------------------------------------

@import "foundation/reset"
@import "foundation/helpers"
@import "foundation/config"
@import "foundation/base"

// -------------------------------------
//   Components
// -------------------------------------

// Component imports

// -------------------------------------
//   Structures
// -------------------------------------

// Structure imports

// -------------------------------------
//   Vendor
// -------------------------------------

// Third-party style imports, if needed

// -------------------------------------
//   Foundation - Tools
// -------------------------------------

@import "foundation/tools"

// -------------------------------------
//   Inbox
// -------------------------------------
```

收件匣（Inbox）
-----

與開發人員的合作有時是困難的，但我們已經找到了一種方法來幫忙減輕（至少它關係到 CSS）。在 `application.sass` 檔案的底部，有一個看起來像這樣的註解區塊：

```sass
// -------------------------------------
//   Inbox
// -------------------------------------
```

你可以添加任何臨時樣式到這個段落，這能讓 CSS 的維護人員適當地重寫或排序樣式。我們發現，開發人員尊重（甚至享受）這套系統，因為他們擺脫了樣式規則的妥善放置或結構的煩惱。
