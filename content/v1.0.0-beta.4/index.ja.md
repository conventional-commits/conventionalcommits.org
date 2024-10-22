---
draft: false
aliases: ["/ja/"]
---

# Conventional Commits 1.0.0-beta.4

## 概要

Conventional Commitsの仕様は、コミットメッセージのための軽量の規約です。
明示的なコミット履歴を作成するための簡単なルールを提供します、この規則に従うことで自動化ツールの導入を簡単にします。
この規約は[SemVer](http://semver.org)と組み合わせることで、コミットメッセージへ機能、修正、重大な変更を入れることで、さらに詳細な説明を可能にします。

コミットメッセージは次のような形にする必要があります

---

原文：

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
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
1. **BREAKING CHANGE:** 本体または脚注の冒頭に `BREAKING CHANGE:` という内容があるコミットは、APIの重大な変更を意味できます。(セマンティックバージョン管理における[`MAJOR`](http://semver.org/#summary)に相当します)
`BREAKING CHANGE` はあらゆる _型_ のコミットに含めることができます。

1. Others: `fix:` and `feat:` 以外のコミット _型_ を許容します、例えば  [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ([Angularの規約](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)ベース)は  `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, などがあります。


新しい機能の追加やバグを修正ではなく、現在の実装を改善するコミットには `improvement` をおすすめします。


これらの _型_ はconventional commitsで強制されているものではなく、セマンティックバージョン管理に暗黙的な影響も与えません。（それが、BREAKING CHANGEを含めない限り）

<br />

コミットの _型_ には、追加の情報として _範囲_ を追加することができ、それは括弧で囲みます。例 `feat(parser): add ability to parse arrays`

## 例

### 説明と重大な変更を含む本文のメッセージをコミットに含める

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 重大な変更であることに気づいてもらうために `!` を付けてメッセージをコミットできる

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### 本文無しでメッセージをコミットする

```
docs: correct spelling of CHANGELOG
```

### _範囲_ のあるメッセージをコミットする

```
feat(lang): add polish language
```

### (オプション) issueの番号を修正用のコミットメッセージに含めます

```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## 仕様

この文書における次の各キーワード「しなければならない（ MUST ）」、 「してはならない（ MUST NOT ）」、「要求されている（ REQUIRED ）」、 「することになる（ SHALL ）」、「することはない（ SHALL NOT ）」、 「する必要がある（ SHOULD ）」、「しないほうがよい（ SHOULD NOT ）」、 「推奨される（ RECOMMENDED ）」、「してもよい（ MAY ）」、 「選択できる（ OPTIONAL ）」は、 [RFC 2119 (JPNIC 日本語)](https://www.nic.ad.jp/ja/tech/ipa/RFC2119JA.html) で述べられているように 解釈されるべきものです。

1. コミットは _型_ から始まり、次に選択できる（ OPTIONAL ） _範囲_ と、末尾に要求されている（ REQUIRED ）コロンとスペースで成り立ちます。
1. コミットがあなたのアプリケーションやライブラリに新しい機能を追加するとき、 _型_ は`feat`にしなければならない（ MUST ）。
1. コミットがあなたのアプリケーションのためのバグ修正を表すとき、 _型_ は `fix`にしなければならない（ MUST ）。
1. _範囲_ は _型_ の後に記述してもよい（ MAY ）。 _範囲_ は括弧で囲まれたコードベースのセクションを記述する名詞にしなければならない（ MUST ）。例： `fix(構文解析ツール): '
1. _説明_ は型/範囲の直後にしなければならない（ MUST ）。
_説明_ はコード変更の要約です。 _fix：文字列に複数の空白がある場合の配列解析における問題_
1. 短い _説明_ の後に、より長いコミットの本文を追加してもよく（ MAY ）、コード変更に関する追加の情報を提供することができます。
本文は、_説明_ の下に1行の空行を追加しなければならない（ MUST ）。
1. 1行以上の _脚注_ は、本文の後ろに1行の空白行を入れてもよい（ MAY ）。 _脚注_ はコミットに関するメタ情報、例えば関連するプルリクエスト、レビュアー、変更の中断などを1行につき1つのメタ情報として含めなければならない（ MUST ）。
1. 重大な変更(`BREAKING CHANGE`)は、本文セクションの一番最初、または脚注の先頭にしなければいけません（ MUST ）。
重大な変更は大文字のテキスト `BREAKING CHANGE` と続くコロンとスペースから構成されなければいけません（ MUST ）。
1. APIについて何が変わったのかを説明する`BREAKING CHANGE:`の後には説明を書かなければいけません（ MUST ）。
例、 _BREAKING CHANGE: 環境変数が設定ファイルよりも優先されるようになりました。_
1. `feat`と`fix` 以外の _型_ をあなたのコミットメッセージに仕様してもよい（ MAY ）。
1. Conventional Commitsを構成する情報の単位は、必ず大文字の`BREAKING CHANGE`を除いて、実装側は大文字と小文字を別の物して扱ってはいけない（ MUST NOT ）
1. さらに重大な変更の注意を引くために、  _種類_ / _範囲_ の `:` の前に `!`を追加することができます（ MAY ）。`BREAKING CHANGE: description`は、接頭辞の`!`とともに、本文または脚注にも含めなければなりません（ MUST ）。

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
