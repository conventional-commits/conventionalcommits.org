---
draft: false
aliases: ["/zh-hant/"]
---

# 約定式提交 Conventional Commits 1.0.0

## 概述

約定式提交規範，是一種對提交說明的輕量慣例。
它提供一些簡單的條件集合用於建立明確的提交歷史；
這能讓自動化工具更容易撰寫。
這份慣例能對應到 [SemVer](https://semver.org/lang/zh-TW/)，
透過在提交說明裡描述功能、修正以及重大變更。

提交說明應被以下方式建構：

---

```
<類型 type>[可選的作用範圍 scope]: <描述 description>

[可選的正文 body]

[可選的頁腳 footer]
```
---

<br />
提交應包含以下結構性元素，用以向使用這套函式庫的使用者溝通當時的意圖：

1. **fix:** 為 `fix` _類型_ 的提交，表示對程式修正了一個臭蟲（bug）（對應到語意化版本中的 [`修訂號 PATCH`](https://semver.org/lang/zh-TW/#%E6%91%98%E8%A6%81)）。
1. **feat:** 為 `feat` _類型_ 的提交，表示對程式增加了一個功能（對應到語意化版本中的 [`次版本 MINOR`](https://semver.org/lang/zh-TW/#%E6%91%98%E8%A6%81)）。
1. **BREAKING CHANGE:** 重大變更，在可選的正文或是頁腳的起始文字為 `BREAKING CHANGE:` 的提交，表示有重大的 API 變更（對應到語意化版本中的 [`主版本 MAJOR`](https://semver.org/lang/zh-TW/#%E6%91%98%E8%A6%81)）。
1. **BREAKING CHANGE:** 重大變更，如果提交的頁腳以 `REAKING CHANGE:` 開頭，或是在類型、作用範圍後有 `!`，代表包含了重大 API 變更（對應到語意化版本中的 [`主版本 MAJOR`](https://semver.org/lang/zh-TW/#%E6%91%98%E8%A6%81)）。
  重大變更可以是任何 _類型_ 提交的一部分。
1. 其他: 除 `fix` 與 `feat` 以外，其他的提交 _類型_ 也是被允許的，例如 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (基於 [Angular 慣例](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) 中推薦的 `chore`、`docs`、`style`、`refactor`、`perf`、`test` 以及更多。

我們也推薦對那些沒有增加新功能或是修正臭蟲而是改善目前實作的提交使用 `improvement`。
請注意，這些類型在約定式提交規範中並不是強制性的，且在語意化版本中也沒有隱含的作用 (除非它們包含 BREAKING CHANGE)。
<br />

1. 除了 `fix:` 與 `feat:` 之外也允許其他的 _類型_ ，如（基於 [Angular 慣例](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)的）[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) 推薦使用 `build:` 與 `chore:`、
  `ci:`、`docs:`、`style:`、`refactor:`、`perf:`、`test:`、等其他。
1. 也可以使用 `BREAKING CHANGE: <描述>` 之外的 _頁腳_ ，並遵守類似 [git trailer format](https://git-scm.com/docs/git-interpret-trailers) 的慣例。

追加類型並不被約定式提交所束縛，並且不對語義化版本有任何隱藏的影響。（但若包含 BREAKING CHANGE 則不在此限。）
<br /><br />
提交的類型可以在括號內給予作用範圍，以提供額外的脈絡資訊。例如：`feat(parser): add ability to parse arrays`。

## 範例

### 包含描述以及頁腳有重大變更的提交說明
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含用以提示重大變更的 `!` 的提交說明
```
refactor!: drop support for Node 6
```

### 不包含正文的提交說明
```
docs: correct spelling of CHANGELOG
```

### 包含作用範圍的提交說明
```
feat(lang): add polish language
```

### 正文有多段落以及有多個頁腳的提交說明
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## 規範

在本文中使用的關鍵字：MUST、MUST NOT、REQUIRED、SHALL、SHALL NOT、SHOULD、SHOULD NOT、RECOMMENDED、MAY、以及 OPTIONAL 應以 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) 為參考解釋。

1. 每個提交最前面「必須 MUST」要有類型，類型由名詞組成，例如：`feat`、`fix` 等，後接上「可選的 OPTIONAL」作用範圍以及「必要的 REQUIRED」一個冒號與空格。
1. 當提交一個新功能到你的應用程式或是函式庫時，「必須 MUST」使用 `feat` 類型。
1. 當提交一個臭蟲修正到你的應用程式時，「必須 MUST」使用 `fix` 類型。
1. 類型之後「可以 MAY」加上作用範圍。個別作用範圍「必須 MUST」由一個描述程式區段的名詞所組成，並用括號包覆。例如： `fix(parser):`
1. 描述「必須 MUST」緊鄰在類型／作用範圍後的冒號與空格。
  描述是對於程式碼修改的簡短總結，如 _fix: array parsing issue when multiple spaces were contained in string_ 。
1. 在簡短的描述後「可以 MAY」加上更長的提交正文，提供關於對程式碼變更的額外脈絡資訊。正文「必須 MUST」在描述後的一個空行之後開始。
1. 提交正文為自由格式，並「可以 MAY」有數個以換行字元區分的段落。
1. 在正文後「可以 MAY」有一個或多個頁腳，頁腳在正文後空行之後開始。
  每個頁腳「必須 MUST」包含一個符記 (token) ，並接着以 `:<space>` 或 `<space>#` 分隔，再緊鄰一個字串值。
  （本處靈感係源自於 [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)。）
1. 頁腳的符記「必須 MUST」使用 `-` 作為空白字元，如 `Acked-by` （這有助於區分出頁腳與多段落的正文）。
  但 `BREAKING CHANGE` 則為例外，且也「可以 MAY」作為符記使用。
1. 頁腳的值「可以 MAY」包含空白與換行，解析時「必須 MUST」在遇到下一組有效的符記／分隔時停止。
1. 重大變更「必須 MUST作為提交中的類型／作用範圍的前綴，或是在頁腳中作為一個段落存在。
1. 若放置於頁腳，重大變更「必須 MUST」維持大寫文字 BREAKING CHANGE，而後緊鄰一個分號、空白、並接着描述。如：
  _BREAKING CHANGE: environment variables now take precedence over config files_ 。
1. 若作為類型／作用範圍的前綴，重大變更「必須 MUST」以一個 `!` 識別，並緊鄰於 `:` 之前。若使用 `!`，
  頁腳段落的 `BREAKING CHANGE:` 則「可以 MAY」被省略，且提交說明「應當 SHALL」用來描述重大變更。
1. 除了 `feat` 與 `fix` 以外的類型「可以 MAY」被用於提交訊息內，如： _docs: updated ref docs_ 。
1. 組成約定式提交資訊的單位在實作時除了大寫的 `BREAKING CHANGE` 外，「禁止 MUST NOT」區分大小寫。
1. 在作為頁腳符記時，BREAKING-CHANGE「必須 MUST」與 BREAKING CHANGE 視為相同的。

## 為何要使用約定式提交

* 自動產生修改日誌 (Changelog)。
* 基於提交的類型，自動決定語意化版本的升級。
* 向同事、公眾以及其他的利益相關者傳達變化的過程。
* 觸發建置與發布流程。
* 讓大家探索更有結構的提交歷史，使你的專案更容易被貢獻。

## FAQ

### 在初始的開發階段，我該如何處理提交說明？

我們建議你可以就像是產品已經發布的那樣去執行。因為通常都會 *有人* 使用你的軟體，即使是你的軟體開發的同事們，他們會希望知道修正了什麼以及有什麼重大變更等資訊。

### 提交標題中的類型應該要用大寫還是小寫？

大小寫都可以，但是最好是一致的。

### 當提交符合一或多種提交類型，我應該怎麼做？

退回並盡可能切成多個提交。約定式提交的一個好處就是它能夠促使我們做更有組織的提交與拉取請求 (PR, Pull Request)。

### 這不會阻礙快速開發與快速迭代嗎？

它阻礙用非組織化的方式快速前進。它幫助你長期能在橫跨多個專案與多個貢獻者協作時都能快速前進。

### 約定式提交會讓開發者受限於提交的類型，因為他們會用已提供的類型去思考嗎？

約定式提交鼓勵我們多使用某些類型的提交，例如 `fixes`。除此之外，約定式提交的彈性也允許你的團隊使用自己的類型，以及隨時間推移更改這些類型。

### 這與 SemVer 有什麼關係呢？

`fix` 類型的提交應該對應到 `PATCH` 版本。`feat` 類型的提交應該對應到 `MINOR` 版本。含有 `BREAKING CHANGE` 的提交，無論是什麼類型，都應該要對應到 `MAJOR` 版本。

### 我對約定式提交做了擴充 (例如：`@jameswomack/conventional-commit-spec`)，我該如何管理這些擴充的版本呢？

我們推薦使用 SemVer 來發布你對這份規範的擴充 (並且也鼓勵你做些擴充！)

### 如果我不小心用錯提交類型，該怎麼辦？

#### 當你使用規範中但是錯誤的類型，例如：將 `feat` 寫成 `fix`

在合併或是發布這個錯誤之前，我們推薦使用 `git rebase -i` 來編輯提交歷史。
而在發布之後，根據你使用的工具與流程，會有不同的清理方式。

#### 當你使用 *非* 規範中的類型時，例如：將 `feat` 寫成 `feet`

最糟狀況下，即使提交沒有符合約定式提交的規範，也不會是世界末日。它僅意味著這個提交將會被基於這個規範的工具略過。

### 所有的貢獻者都需要使用約定式提交的規範嗎？

不用！如果你使用的是基於 squash 的 Git 工作流程，主維護者可以在合併時清理提交說明，因此這不會對一般的提交者產生額外的負擔。
有一種常見的工作流程是讓 git 系統自動從 pull request 中 squash 出提交，然後提供一份表單給主維護者，用以在合併的時候輸入合適的 git 提交說明。

### 約定式提交要如何處理回退提交 (revert commit)？

回退程式碼可能非常複雜：你是回退了多個提交嗎？如果你回退了一個功能，那麼下一個版本釋出應該要是修正檔嗎？

約定式提交沒有強制定義回退的行為。反而，我們將這個問題留給工具的作者，靈活運用 _類型_ 以及 _頁腳_ 來開發處理回退的邏輯。

其中一個推薦的方法時使用 `revert` 類型，並在頁腳中參照到被回退的 SHA 雜湊：

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```


## 關於

約定式提交規範，是受到 [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) 的啟發，也很大程度以其為依據。

此規範的第一版草稿，是由以下專案的一些貢獻者所協作出來的：

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): 一套用從 git 歷史中解析約定式提交的工具。
* [bumped](https://bumped.github.io): 一個用於發布軟體的工具，讓發布軟體新版本的前後能輕鬆的執行動作。
* [unleash](https://github.com/netflix/unleash): 一個能自動化軟體發布與發行的生命週期的工具。
* [lerna](https://github.com/lerna/lerna): 一個用於管理 monorepos 的工具，源自於 Babel 專案。

## 用於約定式提交的工具

* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): 遵守規範來慣例版本並自動產生更新日誌。
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): 一個用於建立遵循約定式提交規範的提交說明的工具。
可設定且可作為 PHP 專案中 composer 的依賴，或是對非 PHP 的專案中可以全域使用。
* [conform](https://github.com/autonomy/conform): 一個可以對 git 原始碼倉庫加上規則的工具，包含約定式提交。
* [standard-version](https://github.com/conventional-changelog/standard-version): 基於 GitHub 的新 squash 按鈕與推薦的約定式提交工作流程，自動化版本與 CHANGELOG 管理。
* [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): 提供可擴充的基於上下文或樣板的自動補全或檢查 VCS 提交視窗中約定式提交。可在所有 [JetBrains IDE](https://www.jetbrains.com/) 中使用。
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): 為 [JetBrains 編輯器](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...) 提供約定式提交支援。
* [commitsar](https://github.com/commitsar-app/commitsar): 用於確認分支上的提交是否符合約定式提交的 Go 工具。並提供 Docker 鏡像以供 CI 使用。
* [semantic-release](https://github.com/semantic-release/semantic-release): 自動化整個軟體包的釋出流程，提供包含：判斷下一個版本編號、產生更新日誌以及發佈軟體包。
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): 為 VSCode 提供約定式提交支援。

## 使用約定式提交的專案

* [yargs](https://github.com/yargs/yargs): 廣受喜愛的指令參數解析器。
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): 一套為 JavaScript 測試加上測試覆蓋率的開源工具與函式庫。
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) 與 [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): 用於增強 [Apereo uPortal](https://www.apereo.org/projects/uportal) 的可選使用者介面。
* [massive.js](https://github.com/dmfay/massive-js): 一個用於 Node 與 PostgreSQL 的資料存取函式庫。
* [electron](https://github.com/electron/electron): 用 JavaScript、HTML 與 CSS 建立跨平台的桌面應用程式。
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): 一個用於置中元素與平滑動畫的捲動畫面套件。
* [Blaze UI](https://github.com/BlazeUI/blaze): 無框架開源 UI 套件。
* [Monica](https://github.com/monicahq/monica): 一個開源的人際關係管理系統。
* [mhy](https://mhy.js.org): 一個無需設定、可以直接使用、多用途的工具箱與開發環境。
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): ~100 個 TypeScript 專案的 Monorepo，用於進行資料導向開發
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 加強版的 Yii2 應用程式樣板。
* [dcyou/resume](https://github.com/dcyou/resume): 😎 用於簡易且快速建立線上 CV 的樣板。
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): 簡單地建立動態的線上表單以截取並送出精確與目前的資料。
* [Tina CMS](https://tinacms.org):用於為你的網站加上前端內容管理的開放原始碼工具包。
* [Uno Platform](https://platform.uno): 馬上使用 C# 與 XAML 建立移動端、桌面程式與 WebAssembly 應用程式。開放原始碼並有專業支援。

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_想讓你的專案出現在列表中嗎？_ [發送 pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls) 吧。
