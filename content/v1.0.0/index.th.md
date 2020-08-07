---
draft: false
aliases: ["/th/"]
---

# Conventional Commits 1.0.0

## ข้อสรุป

ข้อกำหนดของข้อตกลงในการ Commits (Conventional Commits) คือข้อตกลงอย่างง่ายที่สร้างขึ้นสำหรับข้อความที่ commit
ข้อกำหนดนี้จะรวมข้อกำหนดในการสร้างข้อความในการ commit อย่างชัดเจน
ซึ่งจะช่วยให้สามารถเขียนชุดเครื่องมืออัตโนมัติต่อยอดได้ง่ายขึ้น
ข้อตกลงนี้จะใช้รูปแบบเดียวกับ [SemVer](http://semver.org)
โดยมีการอธิบายถึงฟีเจอร์ การแก้ไขต่าง ๆ และการเปลี่ยนแปลงที่ขัดต่อเวอร์ชั่นก่อนหน้าลงไปในข้อความที่ commit

ข่้อความที่ commit ควรจะมีโครงสร้างตามนี้

---

```
<ชนิด>[ละได้ ขอบเขต]: <รายละเอียด>

[ละได้ เนื้อหา]

[ละได้ ข้อความลงท้าย]
```
---

<br />
โดย commit จะมีหน่วยโครงสร้างย่อย ๆ ตามนี้ เพื่อใช้ในการสื่อสารถึงความตั้งใจให้กับคนที่นำไลบรารี่ของคุณไปใช้งาน

1. **fix:** commit ที่มี _ชนิด_ `fix` หมายถึงมีการแก้ไขบักในโค้ดของคุณ (จะสอดคล้องกับ [`PATCH`](http://semver.org/#summary) ใน semantic versioning)
2. **feat:** commit ที่มี _ชนิด_ `feat` หมายถึงมีการเพิ่มฟีเจอร์ใหม่เข้าไปในโค้ด (จะสอดคล้องกับ [`MINOR`](http://semver.org/#summary) ใน semantic versioning)
3. **BREAKING CHANGE:** commit ที่ลงท้ายด้วย `BREAKING CHANGE:` ในข้อความลงท้าย หรือ ต่อท้ายด้วย `!` หลังจาก type หรือ scope จะหมายถึงมีการเพิ่มการเปลี่ยนแปลงที่กระทบกับ API เดิม (จะสอดคล้องกับ [`MAJOR`](http://semver.org/#summary) ใน semantic versioning)
โดยที่ BREAKING CHANGE สามารถเป็นส่วนหนึ่งของ commit _ชนิด_ ไหนก็ได้
1. _ชนิด_ อื่น ๆ ที่ไม่ใช่ `fix:` and `feat:` สามารถใช้ได้เช่นกัน เช่น [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (อ้างอิงจาก [ข้อตกลงของ Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) ได้แนะนำชนิด `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` และอื่น ๆ
1. _ข้อความลงท้าย_ ที่นอกเหนือจาก `BREAKING CHANGE: <รายละเอียด>` สามารถใช้ได้ และเขียนตามข้อตกลงเดียวกันกับ
  [git trailer format](https://git-scm.com/docs/git-interpret-trailers)

ชนิดอื่น ๆ เพิ่มเติมไม่ได้อยู่ในขอบเขตตามข้อกำหนดของข้อตกลงในการ Commits นี้ และไม่ได้มีผลกระทบอะไรใน semantic versioning (ถ้าไม่ได้ระบุใน BREAKING CHANGE)
<br /><br />
ขอบเขตอาจจะถูกระบุไปกับชนิดของ commit เพื่อบอกข้อมูลของบริบทเพิ่มเติม โดยจะระบุอยู่ในเครื่องหมายวงเล็บ เช่น `feat(parser): add ability to parse arrays`

## ตัวอย่าง

### ข้อความ commit ที่มีการระบุรายละเอียด และลงท้ายด้วย breaking change footer
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### ข้อความ commit ที่มี `!` เพื่อบ่งบอก breaking change
```
refactor!: drop support for Node 6
```

### ข้อความ commit ที่มีทั้ง `!` และ BREAKING CHANGE ลงท้าย
```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### ข้อความ commit ที่ไม่มีเนื้อหา
```
docs: correct spelling of CHANGELOG
```

### ข้อความ commit ที่ระบุขอบเขต
```
feat(lang): add polish language
```

### ข้อความ commit ที่มีเนื้อหาหลายย่อหน้า และมีข้อความลงท้ายหลายข้อความ
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## ข้อกำหนด

คำสำคัญ “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, และ “OPTIONAL” ในเอกสารฉบับนี้จะถูกแปลตามที่อธิบายไว้ใน [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)

1. Commits MUST be prefixed with a type, which consists of a noun, `feat`, `fix`, etc., followed
  by the OPTIONAL scope, OPTIONAL `!`, and REQUIRED terminal colon and space.
1. The type `feat` MUST be used when a commit adds a new feature to your application or library.
1. The type `fix` MUST be used when a commit represents a bug fix for your application.
1. A scope MAY be provided after a type. A scope MUST consist of a noun describing a
  section of the codebase surrounded by parenthesis, e.g., `fix(parser):`
1. A description MUST immediately follow the colon and space after the type/scope prefix.
The description is a short summary of the code changes, e.g., _fix: array parsing issue when multiple spaces were contained in string_.
1. A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
1. A commit body is free-form and MAY consist of any number of newline separated paragraphs.
1. One or more footers MAY be provided one blank line after the body. Each footer MUST consist of
 a word token, followed by either a `:<space>` or `<space>#` separator, followed by a string value (this is inspired by the
  [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. A footer's token MUST use `-` in place of whitespace characters, e.g., `Acked-by` (this helps differentiate
  the footer section from a multi-paragraph body). An exception is made for `BREAKING CHANGE`, which MAY also be used as a token.
1. A footer's value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer
  token/separator pair is observed.
1. Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the
  footer.
1. If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g.,
_BREAKING CHANGE: environment variables now take precedence over config files_.
1. If included in the type/scope prefix, breaking changes MUST be indicated by a
  `!` immediately before the `:`. If `!` is used, `BREAKING CHANGE:` MAY be omitted from the footer section,
  and the commit description SHALL be used to describe the breaking change.
1. Types other than `feat` and `fix` MAY be used in your commit messages, e.g., _docs: updated ref docs._
1. The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.
1. BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.

## Why Use Conventional Commits

* Automatically generating CHANGELOGs.
* Automatically determining a semantic version bump (based on the types of commits landed).
* Communicating the nature of changes to teammates, the public, and other stakeholders.
* Triggering build and publish processes.
* Making it easier for people to contribute to your projects, by allowing them to explore
  a more structured commit history.

## FAQ

### How should I deal with commit messages in the initial development phase?

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
authors to use the flexility of _types_ and _footers_ to develop their logic for handling reverts.

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

* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): follows the specification to manage versions and generate a changelog automatically
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): A Node.js tool to create commit messages following the Conventional Commits specs.
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): A tool written in Python to create commiting rules for projects, auto bump versions and auto changelog generation.
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): A PHP tool built to create commit messages following the Conventional Commits specs.
Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
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
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Automatic semantic versioning for Python projects. This is a Python implementation of the [semantic-release](https://github.com/semantic-release/semantic-release) for Node.js.
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Add Conventional Commits supports for VSCode.
* [Pyhist](https://github.com/jgoodman8/pyhist): A Python utility to automagically update the package version from the git history and generate the Changelog.

## Projects Using Conventional Commits

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
* [Uno Platform](https://platform.uno): Build Mobile, Desktop and WebAssembly apps with C# and XAML. Today. Open source and professionally supported.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_want your project on this list?_ [send a pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
