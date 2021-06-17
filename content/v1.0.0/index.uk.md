---
draft: true
aliases: ["/uk/"]
---

# Політика комітів  1.0.0

## Вступ

Політика Комітів - це полегшена угода понад стандартними повідомленнями про коміти.
Вона надає легкий набір правил для створення зручної історії комітів;
що робить простішим процес написання автоматичних утиліт для цього.
Дана угода узгоджується з [Семантичними Версіями](https://semver.org/lang/uk/)
шляхом вказування можливостей, латок, та великих змін, зроблених в коміт повідомленнях

Повідомлення коміту має бути структуровано наступним чином:


---

```
<тип>[додатково]: <опис>

[необов'язково тіло]

[необов'язково додаток(тки)]
```
---

<br />
Коміт містить наступні елементи структури, для спілкування інтенціх для споживачів
вашої бібліотеки:

1. **fix:** коміт _типу_ `fix` виправляє ваду в вашому коді (це корелюється з [`PATCH`](https://semver.org/lang/uk/) в Семантичних Версіях).
2. **feat:** коміт _типу_ `feat` додає новий функціонал до коду (це корелюється з [`MINOR`](https://semver.org/lang/uk/) в Семантичних Версіях).
3. **BREAKING CHANGE:** коміт, що має додаток `BREAKING CHANGE:`, або суфікс `!` після типу, додає зміну в API (це корелюється з [`MAJOR`](https://semver.org/lang/uk/) в Семантичних Версіях).
BREAKING CHANGE може бути частиною будь якого _type_.
4. _types_ інші ніж `fix:` та `feat:` дозволені, для прикладу [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (базовано на [Angular домовленостях](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) рекомендовані `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, та інші.
5. _footers_ інші ніж `BREAKING CHANGE: <опис>` можуть бути теж і наслідувати угоду схожу до
  [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Додаткові типи не заборонені угодою про Політику Комітів, і не накладають додаткові умови в Семантичних Версія ( окрім випадків коли вони містять BREAKING CHANGE).
<br /><br />
Область(сфера) може бути доданою до типу коміту в дужках, для надання додаткової контекстної інформації, наприклад `feat(parser): add ability to parse arrays`.

## Приклади

### Коміт повідомлення з описом і BREAKING CHANGE додатком
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Коміт повідомлення з `!` для додаткового наголосу щодо BREAKING CHANGE
```
refactor!: drop support for Node 6
```

### Коміт повідомлення з `!` та BREAKING CHANGE додатком
```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### Коміт повідомлення без тіла
```
docs: correct spelling of CHANGELOG
```

### Коміт повідомлення з областю(сферою)
```
feat(lang): add polish language
```

### Коміт повідомлення з тілом з кількома абзацами і додатками
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Специфікація

Ключові слова “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, та “OPTIONAL” в цьому документі потрібно інтерпретувати як описано в [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Коміти MUST(повинні) бути з префіксом типу, що складається з іменника `feat`, `fix`, тощо., наступним йде
OPTIONAL(необов'язково) область(сфера), OPTIONAL(необов'язково) `!`, та REQUIRED(обов'язково) завершити двокрапкою та пропуском.
2. Тип `feat` MUST(повинен) використовуватися, коли коміт додає новий функціонал в ваш додаток або бібліотеку.
3. Тип `fix` MUST(повинен) використовуватися якщо коміт є латкою для вашого додатку.
4. Область(сфера) MAY(може) бути вказана після типу. Область(сфера) MUST(повинна) містити іменник, що описує секцію коду виділену лапками, наприклад, `fix(parser):`
5. Опис MUST(повинен) одразу завершатися двокрапкою і пропуском після області(сфери).
Опис - це короткий підсумок змін в коді, наприклад, _fix: array parsing issue when multiple spaces were contained in string_.
6. Довге тіло коміту MAY(може) бути додано після короткого опису, надаючи додаткову контекстру інформацію про зміни в коді. Тіло MUST(повинне) починатися з однієї пустої строки після опису.
7. Тіло коміту - це вільна форма і може містити будь яку кількість нових рядків і параграфів.
8. Один або два додатки MAY(можуть) бути надані після одного пустого рядка після тіла. Кожен додаток MUST(повинен) містити слово токен, після якого має бути або `:<space>` або `<space>#` роздільник, після якого має йти строкове значення (запозичено з
  [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
9. Токен додатка MUST(повинен) використовувати `-` на місці пропусків, наприкла, `Acked-by` ( це допомагає відрізнити додаток від тіла з багатьма параграфами. Виключення зроблене для `BREAKING CHANGE`, що MAY(може) також використовуватися як токен.
10. Значення додатку MAY(може) містити пропуски та нові рядки, і зчитування MUST(повинне) припинятися коли наступний коректний токен/роздільник додатку знайдено.
11. BREAKING CHANGE MUST(повинні) бути виділені в типі/області префіксі коміту, або як вміст додатку.
12. Якщо виділено в додатку, BREAKING CHANGE MUST(повинно) містити великими літерами BREAKING CHANGE, потім двокрапка, пропуск, та опис, наприклад,
_BREAKING CHANGE: environment variables now take precedence over config files_.
14. Якщо вставлене в типі/області префіксом, BREAKING CHANGE MUST(повинно) бути виділено `!` одразу перед `:`. Якщо `!` використане, `BREAKING CHANGE:` MAY(може) бути упущене в додатку, і опис коміту SHALL(має) бути використаний для опису BREAKING CHANGE.
15. Типи, інші за `feat` та `fix` MAY(можуть) бути використані в ваших коміт повідомленнях, наприклад, _docs: updated ref docs._
16. Одиниці інформаціх, що роблять Політику Комітів MUST NOT(не повинні) бути сприйняті як чутливими до регістру творцями інструментів, за виключенням BREAKING CHANGE, що MUST(мусить) бути великими літерами.
17. BREAKING-CHANGE MUST(повинно) бути синонімом до BREAKING CHANGE, коли використовується в додатку.

## Для чого використовувати Політику Комітів.

* Автоматичне створення Нотаток про Реліз(Changelog)
* Автоматичне визначення наступної версії в Семантичних Версіях(базуючись на типах комітів, що увійшли).
* Комунікування природи змін для команди, в публічному просторі, до власників.
* Запуск процесів компіляції та публіації.
* Полегшує людям шлях до контрибуції в ваш проєкт, надаючи їм більш структуровану історію комітів.

## ЧЗП

### Як потрібно поводити себе на початковій фазі розробки?

We recommend that you proceed as if you've already released the product. Typically *somebody*, even if it's your fellow software developers, is using your software. They'll want to know what's fixed, what breaks etc.

### Are the types in the commit title uppercase or lowercase?

Any casing may be used, but it's best to be consistent.

### What do I do if the commit conforms to more than one of the commit types?

Go back and make multiple commits whenever possible. Part of the benefit of Conventional Commits is its ability to drive us to make more organized commits and PRs.

### Doesn’t this discourage rapid development and fast iteration?

It discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.

### Might Conventional Commits lead developers to limit the type of commits they make because they'll be thinking in the types provided?

Conventional Commits encourages us to make more of certain types of commits such as fixes. Other than that, the flexibility of Conventional Commits allows your team to come up with their own types and change those types over time.

### How does this relate to SemVer?

`fix` type commits should be translated to `PATCH` releases. `feat` type commits should be translated to `MINOR` releases. Commits with `BREAKING CHANGE` in the commits, regardless of type, should be translated to `MAJOR` releases.

### How should I version my extensions to the Conventional Commits Specification, e.g. `@jameswomack/conventional-commit-spec`?

We recommend using SemVer to release your own extensions to this specification (and
encourage you to make these extensions!)

### What do I do if I accidentally use the wrong commit type?

#### When you used a type that's of the spec but not the correct type, e.g. `fix` instead of `feat`

Prior to merging or releasing the mistake, we recommend using `git rebase -i` to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.

#### When you used a type *not* of the spec, e.g. `feet` instead of `feat`

In a worst case scenario, it's not the end of the world if a commit lands that does not meet the Conventional Commits specification. It simply means that commit will be missed by tools that are based on the spec.

### Do all my contributors need to use the Conventional Commits specification?

No! If you use a squash based workflow on Git lead maintainers can clean up the commit messages as they're merged—adding no workload to casual committers.
A common workflow for this is to have your git system automatically squash commits from a pull request and present a form for the lead maintainer to enter the proper git commit message for the merge.

### How does Conventional Commits handle revert commits?

Reverting code can be complicated: are you reverting multiple commits? if you revert a feature, should the next release instead be a patch?

Conventional Commits does not make an explicit effort to define revert behavior. Instead we leave it to tooling
authors to use the flexibility of _types_ and _footers_ to develop their logic for handling reverts.

One recommendation is to use the `revert` type, and a footer that references the commit SHAs that are being reverted:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## About

The Conventional Commits specification is inspired by, and based heavily on, the [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

The first draft of this specification has been written in collaboration with some of the folks contributing to:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): a set of tools for parsing Conventional Commits messages from git histories.
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): Extensible utilities for parsing, stringify and validating Conventional Commit messages.
* [bumped](https://bumped.github.io): a tool for releasing software that makes it easy to perform actions before and after releasing a new version of your software.
* [unleash](https://github.com/netflix/unleash): a tool for automating the software release and publishing lifecycle.
* [lerna](https://github.com/lerna/lerna): a tool for managing monorepos, which grew out of the Babel project.

## Tooling for Conventional Commits

* [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): Full Go powers to parse conventional commits
* [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit14): go library for parsing commit messages following the specification.
* [chglog](https://github.com/goreleaser/chglog): a tool for parsing Conventional Commits messages from git histories and turning them into templateable change logs.
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): follows the specification to manage versions and generate a changelog automatically
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): A Node.js tool to create commit messages following the Conventional Commits specs.
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): A tool written in Python to create commiting rules for projects, auto bump versions and auto changelog generation.
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): A PHP tool built to create commit messages following the Conventional Commits specs.
Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
* [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): a tool built to generate a changelog from a project's committing history messages and metadata and automate versioning with Semver, following Conventional Commits specs. Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
* [commitlint](https://github.com/conventional-changelog/commitlint): A linter to check that your commit messages meet the Conventional Commits format.
* [gitlint](https://github.com/jorisroovers/gitlint): Git commit message linter written in Python, which can be configured to [enforce Conventional Commits format](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits).
* [conform](https://github.com/autonomy/conform): a tool that can be used to enforce policies on git repositories, including Conventional Commits.
* [detect-next-version](https://npmjs.com/package/detect-next-version): Parse, detect and get more metadata about given Conventional Commits.
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calculcates the recommended version bump based on given Conventional Commits.
* [git-commits-since](https://www.npmjs.com/package/git-commits-since): Get all (raw) commits since period or (by default) from latest git SemVer tag, plus plugins support.
* [standard-version](https://github.com/conventional-changelog/standard-version): Automatic versioning and CHANGELOG management, using GitHub's new squash button and the recommended Conventional Commits workflow.
* [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): provides extensible context and template-based completion, and inspections, for Conventional Commits inside the VCS Commit dialog. Available for all [JetBrains IDEs](https://www.jetbrains.com/).
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Add Conventional Commits support to [JetBrains Editors](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
* [commitsar](https://github.com/commitsar-app/commitsar): Go tool for checking if commits on branch are Conventional Commits compliant. Comes with Docker image for CI uses.
* [semantic-release](https://github.com/semantic-release/semantic-release): A tool that automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Automatic Semantic Versioning for Python projects. This is a Python implementation of the [semantic-release](https://github.com/semantic-release/semantic-release) for Node.js.
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Add Conventional Commits supports for VSCode.
* [Pyhist](https://github.com/jgoodman8/pyhist): A Python utility to automagically update the package version from the git history and generate the Changelog.
* [git-mkver](https://github.com/idc101/git-mkver): A tool to automatically apply Semantic Versioning to git repositories based on _Conventional Commits_.
* [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): A tooling and language agnostic utility to calculate the next semantic version based on the _Conventional Commits_ since the prior version. Supports monorepos.
* [change](https://github.com/adamtabrams/change): A tool for generating and updating a changelog using Conventional Commits.
* [Turbogit](https://b4nst.github.io/turbogit): A command line tool to help you follow _Conventional Commits_ flow.
* [sv4git](https://github.com/bvieira/sv4git): A command line tool (CLI) to validate commit messages, bump versions, create tags and generate changelogs.
* [Versio](https://github.com/chaaz/versio): A monorepo-compatible tool that updates version numbers based on conventional commits and project dependencies. It can generate tags and changelogs, too.
* [Git Changelog Lib](https://github.com/tomasbjerre/git-changelog-lib): A Java library that supports rendering a changelog given a context derived from Git. Supports conventional commits with [Handlebars Helpers](https://github.com/tomasbjerre/git-changelog-lib#helpers). It is used in:
  * [Gradle](https://github.com/tomasbjerre/git-changelog-gradle-plugin)
  * [Maven](https://github.com/tomasbjerre/git-changelog-maven-plugin)
  * [Jenkins](https://github.com/jenkinsci/git-changelog-plugin)
  * [Command Line](https://github.com/tomasbjerre/git-changelog-command-line)

## Projects Using Conventional Commits

* [NFPM](https://github.com/goreleaser/nfpm): NFPM is Not FPM - a simple deb, rpm and apk packager written in Go
* [yargs](https://github.com/yargs/yargs): everyone's favorite pirate themed command line argument parser.
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): a collection of open-source tools and libraries for adding test coverage to your JavaScript tests.
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) and [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Optional supplemental user interface enhancing [Apereo uPortal](https://www.apereo.org/projects/uportal).
* [massive.js](https://github.com/dmfay/massive-js): A data access library for Node and PostgreSQL.
* [electron](https://github.com/electron/electron): Build cross-platform desktop apps with JavaScript, HTML, and CSS.
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): A simple to use scroll utility package for centering elements, and smooth animations
* [Blaze UI](https://github.com/BlazeUI/blaze): Framework-free open source UI toolkit.
* [Monica](https://github.com/monicahq/monica): An open source personal relationship management system.
* [mhy](https://mhy.js.org): A zero-config, out-of-the-box, multi-purpose toolbox and development environment.
* [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): Simple parser for Diff files (unified diff format).
* [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): Easy split of .diff & .patch into its files.
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Monorepo of ~100 TypeScript projects for data driven development
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 An enhanced Yii2 app template.
* [dcyou/resume](https://github.com/dcyou/resume): 😎 Template to easily and quickly create your online CV.
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Easily create dynamic online forms to capture and submit accurate and current data.
* [Tina CMS](https://tinacms.org): An open source toolkit for building front-end content-management into your website.
* [Belajarpython](https://github.com/belajarpythoncom/belajarpython.com) Open source Indonesian python programming tutorial site.
* [Uno Platform](https://platform.uno): Build Mobile, Desktop and WebAssembly apps with C# and XAML. Today. Open source and professionally supported.
* [Jenkins X](https://jenkins-x.io/): Jenkins X provides pipeline automation, built-in GitOps, and preview environments to help teams collaborate and accelerate their software delivery at any scale.
* [Changeloguru](https://github.com/haunt98/changeloguru): Auto-generate changelog from conventional commits, written in Go.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_want your project on this list?_ [send a pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
