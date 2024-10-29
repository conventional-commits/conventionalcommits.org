---
draft: false
aliases: ["/zh-hant/"]
---

# 慣例式提交 1.0.0-beta.4

## 概述

慣例式提交規範，是一種對提交說明的輕量慣例。
它提供一些簡單的條件集合用於建立明確的提交歷史；
這能讓自動化工具更容易撰寫。
這份慣例能對應到 [SemVer](https://semver.org/lang/zh-TW/)，
透過在提交說明裡描述功能、修正以及重大變更。

提交說明應被以下方式建構：

---

```
<類型>[可選的作用範圍]: <描述>

[可選的正文]

[可選的頁腳]
```
---

<br />
提交應包含以下結構性元素，用以向使用這套函式庫的使用者溝通當時的意圖：

1. **fix:** 為 `fix` _類型_ 的提交，表示對程式修正了一個臭蟲 (對應到語意化版本中的 [`PATCH`](http://semver.org/#summary))。
1. **feat:** 為 `feat` _類型_ 的提交，表示對程式增加了一個功能 (對應到語意化版本中的 [`MINOR`](http://semver.org/#summary))。
1. **BREAKING CHANGE:** 在可選的正文或是頁腳的起始文字為 `BREAKING CHANGE:` 的提交，表示有重大的 API 變更 (對應到語意化版本中的 [`MAJOR`](http://semver.org/#summary))。
重大變更可以是任何 _類型_ 提交的一部分。
1. 其他: 除 `fix:` 與 `feat:` 以外，其他的提交 _類型_ 也是被允許的，例如 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (基於 [Angular 慣例](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)) 中推薦的 `chore:`、`docs:`、`style:`、`refactor:`、`perf:`、`test:` 以及更多。

我們也推薦對那些沒有增加新功能或是修正臭蟲而是改善目前實作的提交使用 `improvement`。
請注意，這些類型在慣例式提交規範中並不是強制性的，且在語意化版本中也沒有隱含的作用 (除非它們包含 BREAKING CHANGE)。
<br />
提交的類型可以在括號內給予作用範圍，以提供額外的脈絡資訊。例如：`feat(parser): add ability to parse arrays`。

## 範例

### 包含描述以及正文有重大變更的提交說明
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含可選的 `!` 用以提示重大變更的提交說明
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### 不包含正文的提交說明
```
docs: correct spelling of CHANGELOG
```

### 包含作用範圍的提交說明
```
feat(lang): add polish language
```

### 為修正而寫提交說明，包含 (可選的) 問題編號
```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## 規範

在本文中使用的關鍵字：必須 (MUST)、禁止 (MUST NOT)、必要 (REQUIRED)、應當 (SHALL)、不應當 (SHALL NOT)、應該 (SHOULD)、不應該 (SHOULD NOT)、推薦 (RECOMMENDED)、可以 (MAY) 以及可選 (OPTIONAL) 應以 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) 為參考解釋。

1. 每個提交最前面**必須**要有類型，類型由名詞組成，例如：`feat`、`fix` 等，後接上**可選的**作用範圍以及**必要的**一個冒號與空格。
1. 當提交一個新功能到你的應用程式或是函式庫時，**必須**使用 `feat` 類型。
1. 當提交一個臭蟲修正到你的應用程式時，**必須**使用 `fix` 類型。
1. 作用範圍**可以**給予在類型之後。一個作用範圍**必須**由一個描述程式區段的名詞所組成，並用括號包覆。例如： `fix(parser):`
1. 描述**必須**緊接在類型/作用範圍的空格之後。描述是一個對程式碼變更的簡短總結，例如： _fix: array parsing issue when multiple spaces were contained in string._
1. 在簡短的描述後**可以**給予更長的提交正文，對程式碼變更提供額外的脈絡資訊。正文**必須**在描述後的一個空行之後開始。
1. 在正文後**可以**給予一行或是多行的頁腳。頁腳**必須**包含關於提交的詮釋資訊，例如：相關的拉取請求 (pull-request)、審核者、重大變更，每個詮釋資訊一行。
1. 重大變更**必須**在標示在正文區段的最前面，或是標示在頁腳區段的每行最前面。一個重大變更**必須**由大寫的 BREAKING CHANGE 文字所組成，後接一個冒號與空格。
1. `BREAKING CHANGE: ` 之後**必須**提供描述，說明 API 的變更部分。例如： _BREAKING CHANGE: environment variables now take precedence over config files._
1. 在提交訊息中，**可以**使用 `feat` 與 `fix` 以外的類型。
1. 實作上，慣例式提交的訊息單元**禁止**以區分大小寫的方式解析，只有 BREAKING CHANGE **必須**是大寫。
1. 在類型/作用範圍的 `:` 之前**可以**加上一個 `!`，用以提示重大變更。當有這個提示時，正文或頁腳內**必須**包含 `BREAKING CHANGE: description` 。

## 為何要使用慣例式提交

* 自動產生 CHANGELOG。
* 基於提交的類型，自動決定語意化版本的升級。
* 向同事、公眾以及其他的利益相關者傳達變化的過程。
* 觸發建置與發布流程。
* 藉由更有結構的提交歷史，有助於你的專案讓其他人參與開發。

## FAQ

### 在初始的開發階段，我該如何處理提交說明？

我們建議你可以就像是產品已經發行的那樣去執行。因為通常都會 *有人* 使用你的軟體，即使是你的軟體開發的同事們，他們會希望知道修正了什麼以及有什麼重大變更等資訊。

### 提交標題中的類型應該要用大寫還是小寫？

大小寫都可以，但是最好是一致的。

### 當提交符合一或多種提交類型，我應該怎麼做？

退回並盡可能切成多個提交。慣例式提交的一個好處就是它能夠促使我們做更有組織的提交與拉取請求 (PR)。

### 這不會阻礙快速開發與快速迭代嗎？

它阻礙用非組織化的方式快速前進。它幫助你長期能在橫跨多個專案與多個貢獻者協作時都能快速前進。

### 慣例式提交會讓開發者受限於提交的類型，因為他們會用已提供的類型去思考嗎？

慣例式提交鼓勵我們多使用某些類型的提交，例如 `fixes`。除此之外，慣例式提交的彈性也允許你的團隊使用自己的類型，以及隨時間推移更改這些類型。

### 這與 SemVer 有什麼關係呢？

`fix` 類型的提交應該對應到 `PATCH` 發行版。`feat` 類型的提交應該對應到 `MINOR` 發行版。含有 `BREAKING CHANGE` 的提交，無論是什麼類型，都應該要對應到 `MAJOR` 發行版。

### 我對慣例式提交做了擴充 (例如：`@jameswomack/conventional-commit-spec`)，我該如何管理這些擴充的版本呢？

我們推薦使用 SemVer 來發行你對這份規範的擴充 (並且也鼓勵你做些擴充！)

### 如果我不小心用錯提交類型，該怎麼辦？

#### 當你使用規範中但是錯誤的類型，例如：將 `feat` 寫成 `fix`

在合併或是發行這個錯誤之前，我們推薦使用 `git rebase -i` 來編輯提交歷史。
而在發行之後，根據你使用的工具與流程，會有不同的清理方式。

#### 當你使用 *非* 規範中的類型時，例如：將 `feat` 寫成 `feet`

最糟狀況下，即使提交沒有符合慣例式提交的規範，也不會是世界末日。它僅意味著這個提交將會被基於這個規範的工具略過。

### 所有的貢獻者都需要使用慣例式提交的規範嗎？

不用！如果你使用的是基於 squash 的 Git 工作流程，主維護者可以在合併時清理提交說明，因此這不會對一般的提交者產生額外的負擔。
有一種常見的工作流程是讓 git 系統自動從 pull request 中 squash 出提交，然後提供一份表單給主維護者，用以在合併的時候輸入合適的 git 提交說明。
