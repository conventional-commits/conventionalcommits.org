---
type: about
draft: false
---

# Conventional Commits について

Conventional Commits の仕様は [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) に触発され、そして大いに基づいています。

この仕様の最初の草案は、以下のコントリビュートをしている一部の人たちが共同で書きました。

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): Git の履歴から Conventional Commits にコミットメッセージを解析するためのツールセットです。
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): Conventional Commits に準じているコミットメッセージをパース、文字列へ変換、バリデーションするための拡張可能なユーティリティです。
* [bumped](https://bumped.github.io): 新しいバージョンをリリースする前後にアクションを簡単に実行できるようにするソフトウェアをリリースするためのツールです。
* [unleash](https://github.com/netflix/unleash): ソフトウェアの自動リリースとライフサイクル公開のためのツールです。
* [lerna](https://github.com/lerna/lerna): モノレポを管理するためのツールです。このツールは Babel プロジェクトから生まれました。


## Conventional Commits のためのツール
* [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): Go 言語を最大限活用して Conventional Commits をパースします。
* [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit): Conventional Commits に準じているコミットメッセージをパースするための Go 言語製ライブラリです。
* [chglog](https://github.com/goreleaser/chglog): git の履歴から Conventional Commits に準じているコミットメッセージをパースし、テンプレート化可能な CHANGELOG に変換するためのツールです。
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): バージョン管理し、自動で CHANGELOG を生成するために Conventional Commits へ従うプラグインです。
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): Conventional Commits に準じているコミットメッセージを作成するための Node.js 製ツールです。
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): プロジェクトのコミットルールや自動でバージョンを上げる機構、 CHANGELOG の自動生成機構を生成するための Python 製ライブラリです。
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Conventional Commits に準じているコミットメッセージを生成するための PHP 製ライブラリです。
  Composerの依存関係としてPHPプロジェクトで構成することも使用することもできる他、非PHPプロジェクトでグローバルに使用することができます。
* [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): プロジェクトのメタデータやコミット履歴にあるメッセージから CHANGELOG を生成し、Conventional Commits に準じセマンティックバージョニングでバージョン管理を自動化するツールです。PHP プロジェクトでは composer の依存関係として構成することも設定することもできる他、非 PHP プロジェクトではグローバルに使用することができます。
* [conventional-commits](https://github.com/ramsey/conventional-commits): Conventional Commits に従ってコミットメッセージを作成したりバリデーションするための PHP 製ライブラリです。
* [commitlint](https://github.com/conventional-changelog/commitlint): コミットメッセージが Conventional Commits のフォーマットを満たしているかチェックするための Linter です。
* [gitlint](https://github.com/jorisroovers/gitlint): Python 製のコミットメッセージ Linter。[Conventional Commits のフォーマットを強制させる](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits)よう構成できます。
* [conform](https://github.com/autonomy/conform): git リポジトリに関するポリシー(Conventional Commits を含む)を強要するために使用できるツールです。
* [detect-next-version](https://npmjs.com/package/detect-next-version): 与えられた Conventional Commit に準じているコミットメッセージを解析し、検出し、より多くのメタデータを取得します。
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): 与えられた Conventional Commit に準じているコミットメッセージに基づいて上げるべきバージョンを計算します。
* [git-commits-since](https://www.npmjs.com/package/git-commits-since): 期間以降のすべての（生の）コミット、または（デフォルトでは）最新のセマンティックバージョニングのタグから取得し、さらにプラグインをサポートします。
* [standard-version](https://github.com/conventional-changelog/standard-version): Conventional Commits で推奨されるワークフローと GitHub の Squash ボタンを使ったバージョンアップと CHANGELOG を自動で管理します。
* [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): VCS のコミットダイアログ内の Conventional Commits に対して、拡張可能なコンテキストとテンプレートベースの補完、およびインスペクションを提供します。すべての [JetBrains IDEs](https://www.jetbrains.com/) で利用可能です。
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): [JetBrains Editors](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...)に Conventional Commits のサポートを追加します。
* [commitsar](https://github.com/commitsar-app/commitsar): ブランチ上のコミットが Conventional Commits に準拠しているかチェックするためのGo言語製ツールです。CI 用の Docker イメージが付属しています。
* [semantic-release](https://github.com/semantic-release/semantic-release): 次のバージョン番号の決定、リリースノートの作成、パッケージの公開など、パッケージリリースのワークフロー全体を自動化するツールです。
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Python プロジェクトのためのセマンティックバージョニングを自動的に行います。これは Node.js の [semantic-release](https://github.com/semantic-release/semantic-release) を Python で実装したものです。
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): VSCode に Conventional Commits のサポートを追加します。
* [Pyhist](https://github.com/jgoodman8/pyhist): git の履歴からパッケージのバージョンを自動で更新し、CHANGELOG を生成する Python 製のユーティリティです。
* [git-mkver](https://github.com/idc101/git-mkver): _Conventional Commits_ に基づいて Git リポジトリにセマンティックバージョニングを自動的に適用するツールです。.
* [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): ツールや言語にとらわれず、前のバージョンからの _Conventional Commits_ に基づいて次のセマンティックバージョンを計算するためのユーティリティです。モノレポをサポートします。
* [change](https://github.com/adamtabrams/change): Conventional Commitsを使った変更履歴の生成・更新のためツールです。
* [Turbogit](https://b4nst.github.io/turbogit): _Conventional Commits_ のフローへの追従を支援するコマンドラインツールです。
* [sv4git](https://github.com/bvieira/sv4git): コミットメッセージのバリデーション、バージョンアップ、タグや CHANGELOG の生成のためのコマンドラインツールです。
* [Versio](https://github.com/chaaz/versio): Conventional Commits やプロジェクトの依存関係をに基づいてバージョン番号を更新するモノレポ対応のツールです。タグや CHANGELOG の生成も可能です。
* [Git Changelog Lib](https://github.com/tomasbjerre/git-changelog-lib): Git から派生したコンテキストで CHANGELOG のレンダリングをサポートする Java 製ライブラリです。[Handlebars Helpers](https://github.com/tomasbjerre/git-changelog-lib#helpers)で Conventional Commits をサポートします。このライブラリは以下でも使用されています:
    * [Gradle](https://github.com/tomasbjerre/git-changelog-gradle-plugin)
    * [Maven](https://github.com/tomasbjerre/git-changelog-maven-plugin)
    * [Jenkins](https://github.com/jenkinsci/git-changelog-plugin)
    * [Command Line](https://github.com/tomasbjerre/git-changelog-command-line)
* [Cocogitto](https://github.com/oknozor/cocogitto): Conventional Commits やセマンティックバージョニングのための CLI ツールセットです。
* [Conventional Commits Linter](https://gitlab.com/DeveloperC/conventional_commits_linter): _Conventional Commits_ に対応した、ツールや言語に依存しない Git コミット Linter です。
* [Uplift](https://github.com/gembaadvantage/uplift): セマンティックバージョニングを簡単に。Conventional Commits を搭載。CI と一緒に使うために構築されています。

## Conventional Commits を使っているプロジェクト

* [NFPM](https://github.com/goreleaser/nfpm): NFPM は FPM ではありません。Go 言語で書かれたシンプルな deb, rpm, apk パッケージャーです。
* [yargs](https://github.com/yargs/yargs): みんな大好き海賊をテーマにしたコマンドライン引数パーサーです。
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): JavaScript のテストにテストカバレッジを追加するための、オープンソースのツールやライブラリのコレクションです。
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) と [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): [Apereo uPortal](https://www.apereo.org/projects/uportal) を強化するオプションの補助的なユーザーインターフェースです。
* [massive.js](https://github.com/dmfay/massive-js): Node と PostgreSQL のためのデータアクセスライブラリです。
* [electron](https://github.com/electron/electron): JavaScript、HTML、CSS を使用して、クロスプラットフォームのデスクトップアプリケーションを構築します。
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): シンプルに使える要素のセンタリングやスムーズなアニメーションのためのスクロールユーティリティパッケージです。
* [Blaze UI](https://github.com/BlazeUI/blaze): フレームワークを使わないオープンソースの UI ツールキットです。
* [Monica](https://github.com/monicahq/monica): 個人のオープンソース CRM システムです。
* [mhy](https://mhy.js.org): 設定不要ですぐ使える多目的ツールボックスと開発環境です。
* [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): Diff ファイル(統一差分形式)用簡易パーサーです。
* [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): .diff と .patch ファイルを簡単に分割することができます。
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): データ駆動型開発のための 100 件以上のモノレポ TypeScript プロジェクトです。
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 拡張された Yii2 アプリテンプレートです。
* [dcyou/resume](https://github.com/dcyou/resume): 😎 オンライン履歴書を簡単かつ迅速に作成するためのテンプレートです。
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): 正確・最新なデータを取得・送信するため動的なオンラインフォームを簡単に作成することができます。
* [Tina CMS](https://tinacms.org): Web サイトにフロントエンドのコンテンツ管理を組み込むためのオープンソースツールキットです。
* [Belajarpython](https://github.com/belajarpythoncom/belajarpython.com) オープンソースのインドネシア語 Python プログラミングチュートリアルサイトです。
* [Uno Platform](https://platform.uno): C# と XAML でモバイル、デスクトップ、WebAssembly アプリケーションを構築します。オープンソースである他、プロフェッショナルによるサポートを受けています。
* [Jenkins X](https://jenkins-x.io/): Jenkins X は、パイプラインの自動化、組み込みの GitOps 、およびプレビュー環境を提供し、あらゆる規模のチームでのコラボレーションとソフトウェアデリバリーの高速化を支援します。
* [Changeloguru](https://github.com/haunt98/changeloguru): Conventional Commits から CHANGELOG を自動生成します。Go 言語で書かれています。

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_この一覧にあなたのプロジェクトが欲しいですか?_ [プルリクエストを送ってください。](https://github.com/conventional-changelog/conventionalcommits.org/pulls)
