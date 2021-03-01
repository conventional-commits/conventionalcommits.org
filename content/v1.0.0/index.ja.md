---
draft: false
aliases: ["/ja/"]
---

# Conventional Commits 1.0.0

## 概要

Conventional Commitsの仕様は、コミットメッセージのための軽量の規約です。
明示的なコミット履歴を作成するための簡単なルールを提供します、この規則に従うことで自動化ツールの導入を簡単にします。
この規約は[SemVer](http://semver.org)と組み合わせることで、コミットメッセージへ機能、修正、破壊的変更を入れることで、さらに詳細な説明を可能にします。

コミットメッセージは次のような形にする必要があります

---

原文：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

訳：

```
<型>[任意 範囲]: <説明>

[任意 本文]

[任意 脚注]
```

---

<br />

コミットにはあなたのライブラリの利用者に思想を伝えるために、次の構造要素を持ちます：

1. **fix:** _型_ `fix` はコードベースのバグにパッチを当てる場合です。（これは セマンティックバージョン管理における[`PATCH`](http://semver.org/#summary)に相当します)
1. **feat:** _型_ `feat` はコードベースに新しい機能を追加した場合です。(これはセマンティックバージョン管理における [`MINOR`](http://semver.org/#summary)に相当します)
1. **BREAKING CHANGE:** _本文_ または _脚注_ に `BREAKING CHANGE:`が存在する、または _型_ 、 _範囲_ の直後に`!`が追加されているコミットは、APIの破壊的変更を意味できます。(セマンティックバージョン管理における[`MAJOR`](http://semver.org/#summary)に相当します)
`BREAKING CHANGE` はあらゆる _型_ のコミットに含めることができます。
1. `fix:` and `feat:` 以外の _型_ を許容します、例えば  [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ([Angularの規約] (https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)ベース)は  `build:`, `chore:`, `ci:`,`docs:`, `style:`, `refactor:`, `perf:`, `test:`, などがあります。
1. 次のような規則に従うことで、`BREAKING CHANGE: <説明>` 以外の _脚注_ を使うこともできます。 [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

追加された _型_ はconventional commitsで強制されているものではなく、セマンティックバージョン管理に暗黙的な影響も与えません。（それが、BREAKING CHANGEを含めない限り）

<br /><br />

コミットの _型_ には、追加の情報として _範囲_ を追加することができ、それは括弧で囲みます。例 `feat(parser): add ability to parse arrays`

## 例

### 説明と破壊的変更を含む脚注のメッセージをコミットに含める

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 破壊的変更であることに気づいてもらうために `!` を付けてメッセージをコミットする

```
refactor!: drop support for Node 6
```

### `!` と BREAKING CHANGE の両方を脚注に追加して、メッセージをコミットする

```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### 本文無しでメッセージをコミットする

```
docs: correct spelling of CHANGELOG
```

### _範囲_ のあるメッセージをコミットする

```
feat(lang): add polish language
```

### 複数の _本文_ と _脚注_ を持ったメッセージをコミットする

```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## 仕様

この文書における次の各キーワード「しなければならない（ MUST ）」、 「してはならない（ MUST NOT ）」、「要求されている（ REQUIRED ）」、 「することになる（ SHALL ）」、「することはない（ SHALL NOT ）」、 「する必要がある（ SHOULD ）」、「しないほうがよい（ SHOULD NOT ）」、 「推奨される（ RECOMMENDED ）」、「してもよい（ MAY ）」、 「選択できる（ OPTIONAL ）」は、 [RFC 2119 (IPA 日本語)](https://www.ipa.go.jp/security/rfc/RFC2119JA.html) で述べられているように 解釈されるべきものです。

1. コミットは名詞、`feat`、`fix`などから始まる（ REQUIRED ） _型_ から始まり、次に選択できる（ OPTIONAL ） _範囲_ と、必須の`!` 末尾に要求されている（ REQUIRED ）コロンとスペースで成り立ちます。
1. コミットがあなたのアプリケーションやライブラリに新しい機能を追加するとき、 _型_ は`feat`にしなければならない（ MUST ）。
1. コミットがあなたのアプリケーションのためのバグ修正を表すとき、 _型_ は `fix`にしなければならない（ MUST ）。
1. _範囲_ は _型_ の後に記述してもよい（ MAY ）。 _範囲_ は括弧で囲まれたコードベースのセクションを記述する名詞にしなければならない（ MUST ）。例： `fix(構文解析ツール):`
1. _説明_ は型/範囲の後にあるコロンとスペースの直後にしなければならない（ MUST ）。
_説明_ はコード変更の要約です。 例： _fix：文字列に複数の空白がある場合の配列解析における問題_
1. 短い _説明_ の後に、より長いコミットの本文を追加してもよく（ MAY ）、コード変更に関する追加の情報を提供することができます。
本文は、_説明_ の下に1行の空行を追加しなければならない（ MUST ）。
1. コミットの本文は自由形式であってよく（ MAY ）、改行で区切られた複数の段落で構成することが可能です。
1. １つ以上のフッターを持つことができます（ MAY ）、フッターは改行の後に一つの空白を持ちます。
各フッターは文字トークンで構成されてなければいけません（ MUST ）、その後に `:<space>` か `<space>#` による区切りが続き、最後に文字列が入ります。（これは[git trailer convention](https://git-scm.com/docs/git-interpret-trailers)にインスパイアされています）
1. _脚注_ のトークンには空白の代わりに `-` を使う必要があります（ MUST ）、例えば `Acked-by` などです（_脚注_ と _本文_ を区別するのに役立ちます ）。
`BREAKING CHANGE`の例外を作ることができ、これはトークンとして使用することもできます（ MAY ）。
1. _脚注_ の本文にはスペースと改行を含めることができます（ MAY ）、そして次の _脚注_ トークンとセパレーターのペアが見つかった時、以前の _脚注_ の解析は終了しなければなりません（ MUST ）。
1. 破壊的変更は、コミットの _型_ / _範囲_ の接頭辞か、_脚注_ に指定する必要があります（ MUST ）
1. 破壊的変更がフッターに含まれる場合、大文字の REAKING CHANGE の後にコロンとスペース、そして説明を続ける必要があります（ MUST ）。例： _BREAKING CHANGE: 環境変数が設定ファイルよりも優先されるようになりました_
1. 破壊的変更がある場合、_型_ や _範囲_ の接頭辞には `:` の直前に `!` を用いて明示的にしなければなりません（ MUST ）。 `!` を使用する場合には、 _脚注_ セクションから `BREAKING CHANGE:` を省略できます（ MAY ）。そうすると、コミットの _説明_ 部分で破壊的変更の内容を説明することになるでしょう（ SHALL ）。
1. コミットメッセージでは `feat` と `fix` 以外の _型_ を使うことができます（ MAY ）。 （例：_docs: ドキュメントの参照を更新_）
1. Conventional Commitsを構成する情報の単位は、必ず大文字の`BREAKING CHANGE`を除いて、実装側は大文字と小文字を別の物して扱ってはいけない（ MUST NOT ）
1. _脚注_ の BREAKING-CHANGE は BREAKING CHANGE と同じトークンとして解釈されなければいけません（ MUST ）。

## 何故 Conventional Commits を使うのか

* 変更履歴(CHANGELOG)を自動的に生成できます。
* semantic version単位で自動的に履歴を纏めれます（コミットされた _型_ に基づきます）。
* チームメイトや一般のユーザー、およびその他の利害関係者へ変更の内容を伝えることができる。
* ビルドおよび公開プロセスをトリガーにできます。
* より構造化されたコミット履歴を調査できるようにすることで、人々があなたのプロジェクトに貢献しやすくなります。

## よくある質問

### 初期の開発段階ではコミットメッセージをどのように扱うべきですか？

すでに製品をリリースしているかのように進めることをお勧めします。
あなたの仲間のソフトウェア開発者であっても、普通は *誰か* があなたのソフトウェアを使っています。
何が修正されたのか、何が壊れたのかなどを知りたいでしょう。

### コミットタイトル(1行目)の型は大文字か小文字のどちらが良いですか？

どちらでも問題はありません、一貫性を保つことが最善です。

### コミットが複数のコミットタイプ( _型_ )に準拠している場合はどうすればいいですか？

可能な限り前に戻り複数のコミットに分割します。
Conventional Commits の利点の一つは、より組織化されたコミットとプルリクエストを行う事を可能にする事です。

### これは開発速度とインテグレーションを遅くしたりはしませんか？

無秩序にただ早く開発することはお勧めではありません。
それはあなたがさまざまな貢献者との複数のプロジェクト間で長期的に素早く動けるようにするのを助けます。

### Conventional Commitsで開発者は提供された _型_ を検討することになるため、コミットの _型_ を制限することができますか？

Conventional Commitsは、修正などの特定の _型_ のコミットメントを行うように促します。
それ以外の点では、Conventional Commitsの柔軟性により、あなたのチームは彼ら自身の _型_ を新しく作り、時間の経過とともにそれらの _型_ を変更することもできます。

### これはSemVerとどのような関係を持っていますか？

`fix` _型_ のコミットは`PATCH`リリースへ変換します。 `feat` _型_ のコミットは`MINOR`リリースに変換します。 _型_ にかかわらずコミット内で `BREAKING CHANGE`を使ったコミットは`MAJOR`リリースに変換するべきでしょう。

### 私の拡張仕様をどのようにしてConventional Commitsの仕様にバージョンアップするべきでしょうか？、例： `@jameswomack/conventional-commit-spec`

SemVerを使用して、この仕様に対する独自の拡張仕様をリリースすることをお勧めします（そしてこれらの拡張仕様を作成することをお勧めします）。

### 間違ったコミットタイプを使用してしまった時はどうしたらいいですか？

#### 仕様的に正しい型だが意味を間違った _型_ を使用した場合、例えば `feat`の代わりに`fix`

間違いをマージやリリースする前に、コミット履歴を編集する`git rebase -i`を使うことを勧めます。
リリース後、どのツールやプロセスを使用するかによってクリーンアップは異なってくるでしょう。

#### 仕様に *ない* _型_ を使った時、例えば`feat` ではなく`feet`

最悪のシナリオはコミットが conventional commit の仕様を満たさない場合です、しかしそれは世界の終わりではありません。
それは単に仕様に基づいているツールによってコミットが見逃されるだけでしかありません。

### 貢献者全員が conventional commit を使用する必要がありますか？

いいえ！ Gitでsquashベースのワークフローを使用するなら、主要メンテナはマージ時にコミットメッセージをクリーンアップすることができるため、通常のコミッタには作業負荷がかかりません。
また一般的なワークフローの場合は、あなたのgitシステムが自動的にpull requestからコミットを破棄し、主要メンテナにマージのための適切なgit commitメッセージを入力するためのフォームを提示することです。

### Conventional Commitsは`revert`コミットをどのように扱いますか？

コードを元に戻すのは複雑な場合があります。
複数のコミットを元に戻していますか？機能をもとに戻す時にリリースはパッチにまとめる必要がありますか？

Conventional Commitsはrevertの振る舞いを定義するための明示的な努力をしません、代わりにツールに任せます。
作者は _型_ と _脚注_ の柔軟性を利用して、revertを処理するためのロジックを開発します。

おすすめの方法として、ひとつは `revert` _型_ とrevertされるコミットのSHAを参照するフッターを使うようにすることです。

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## 要約

Conventional Commitの仕様は、[Angular Commitのガイドライン](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)に触発されており、それに基づいています。

この仕様書の最初のドラフトは、以下に何人かのコントリビューターと共同して書かれました:

* [traditional-changelog](https://github.com/conventional-changelog/conventional-changelog): git履歴からconventional commitのメッセージを変換するためのツールのセット。
* [bumped](https://bumped.github.io): ソフトウェアの新しいバージョンをリリースする前後にアクションを実行することを手助けするためのツール。
* [unleash](https://github.com/netflix/unleash): ソフトウェアのリリースを自動化し、ライフサイクルを公開するためのツール。
* [lerna](https://github.com/lerna/lerna): Babelプロジェクトから生まれたモノレポを管理するためのツール。

## Conventional Commitsのためのツール一覧

* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): 仕様に従ってバージョンを管理し、更新ログを自動的生成します。
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Conventional Commit の仕様に従ってコミットメッセージを作成するためのツール。
composerに依存するPHPプロジェクトに対して設定、使用可能であり、非PHPプロジェクトに対してもグローバルに使用可能。
* [conform](https://github.com/autonomy/conform): conventional commitsを含めたgitリポジトリにポリシーを強制するために使用できるツール。
* [standard-version](https://github.com/conventional-changelog/standard-version): GitHubの新しいsquashボタンと推奨されているConventional Commitワークフローを使用した、自動のバージョン管理とCHANGELOG管理。
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): [JetBrains Editors](https://www.jetbrains.com/)に_Conventional Commits_サポートを追加します。(IntelliJ IDEA, PyCharm, PhpStorm...).
* [commitsar](https://github.com/commitsar-app/commitsar): ブランチのコミットがconventional commitに準拠しているかどうかを確認するためのGo言語で書かれたツール。 CI用のDockerイメージがあります。
* [semantic-release](https://github.com/semantic-release/semantic-release): 次のバージョン番号の決定、リリースノートの生成、パッケージの公開など、パッケージリリースのワークフロー全体を自動化するツール。
* [Semantic Commit Generator](https://jadsonlucena.github.io/semantic-commit-generator/): 標準化されたセマンティックコミットを作成するための実用的なジェネレーター。

## Conventional Commitsを利用しているプロジェクト

* [yargs](https://github.com/yargs/yargs): 多くの人に人気な海賊をテーマにしたコマンドライン引数パーサ。
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): JavaScriptテストにテストのカバレッジを追加するためのオープンソースのツールとライブラリのコレクション。
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) と [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): 追加の[Apereo uPortal](https://www.apereo.org/projects/uportal)でユーザーインターフェースを強化できます。
* [massive.js](https://github.com/dmfay/massive-js): NodeとPostgreSQL用のデータアクセスライブラリ。
* [electron](https://github.com/electron/electron): JavaScript、HTML、およびCSSを使用してクロスプラットフォームのデスクトップアプリケーションを構築します。
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): 要素のセンタリング、スムーズなスクロールアニメーションを簡単に実現するためのスクロールユーティリティパッケージです。
* [Blaze UI](https://github.com/BlazeUI/blaze): フレームワークに依存しないオープンソースUIツールキット。
* [Monica](https://github.com/monicahq/monica): オープンソースの人的関係管理システム。
* [mhy](https://mhy.js.org): 🧩 設定不要ですぐに使える多目的ツールボックスおよび開発環境。
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): 〜１００からなるデータ駆動型開発用のTypeScriptプロジェクトのMonorepo。
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 強化されたYii2アプリテンプレート。
* [dcyou/resume](https://github.com/dcyou/resume): 😎 オンライン履歴書を素早く簡単に作成できるテンプレート。
* [Nintex fōmuzu](https://www.nintex.jp/process-platform/#forms): 動的なオンラインフォームを簡単に作成して、正確で最新のデータをキャプチャして送信します。

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_あなたのプロジェクトをこのリストに載せたいですか？_ [プルリクエストを送ってください](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
