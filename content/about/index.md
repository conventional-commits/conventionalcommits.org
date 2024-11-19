---
type: about
draft: false
---

# About

The Conventional Commits specification is inspired by, and based heavily on, the [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

The first draft of this specification has been written in collaboration with some of the folks contributing to:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): a set of tools for parsing Conventional Commits messages from git histories.
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): Extensible utilities for parsing, stringify and validating Conventional Commit messages.
* [bumped](https://bumped.github.io): a tool for releasing software that makes it easy to perform actions before and after releasing a new version of your software.
* [unleash](https://github.com/netflix/unleash): a tool for automating the software release and publishing lifecycle.
* [lerna](https://github.com/lerna/lerna): a tool for managing monorepos, which grew out of the Babel project.


## Tooling for Conventional Commits

* [go-conventional-commits](https://github.com/joselitofilho/go-conventional-commits): A tool to parser your git commit messages into a change log message based on conventional commits specification.
* [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): Full Go powers to parse conventional commits.
* [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit): go library for parsing commit messages following the specification.
* [chglog](https://github.com/goreleaser/chglog): a tool for parsing Conventional Commits messages from git histories and turning them into templateable change logs.
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): follows the specification to manage versions and generate a changelog automatically.
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): A Node.js tool to create commit messages following the Conventional Commits specs.
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): A tool written in Python to create commiting rules for projects, auto bump versions and auto changelog generation.
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): A PHP tool built to create commit messages following the Conventional Commits specs.
  Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
* [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): a tool built to generate a changelog from a project's committing history messages and metadata and automate versioning with Semver, following Conventional Commits specs. Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
* [conventional-commits](https://github.com/ramsey/conventional-commits): A PHP library for creating and validating commit messages according to the Conventional Commits specification.
* [sh-conventional-commits](https://github.com/joaobsjunior/sh-conventional-commits) A hook that locally validates commit messages, checking if they follow the conventional commit pattern. The project also includes a shell script for generating semantic versions through conventional commits.
* [commitlint](https://github.com/conventional-changelog/commitlint): A linter to check that your commit messages meet the Conventional Commits format.
* [gitlint](https://github.com/jorisroovers/gitlint): Git commit message linter written in Python, which can be configured to [enforce Conventional Commits format](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits).
* [conform](https://github.com/autonomy/conform): a tool that can be used to enforce policies on git repositories, including Conventional Commits.
* [detect-next-version](https://npmjs.com/package/detect-next-version): Parse, detect and get more metadata about given Conventional Commits.
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calculates the recommended version bump based on given Conventional Commits.
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
* [git-semver](https://github.com/PSanetra/git-semver): A cli tool for calculating the next semantic version according to latest _Conventional Commits_ and printing changelogs to stdout.
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
    * [Docker](https://hub.docker.com/r/tomasbjerre/git-changelog-command-line)
    * [GitHub Action](https://github.com/tomasbjerre/git-changelog-github-release)
* [Cocogitto](https://github.com/oknozor/cocogitto): Cocogitto is a set of cli tools for the conventional commits and semver specifications.
* [Conventional Commits Linter](https://gitlab.com/DeveloperC/conventional_commits_linter): A tooling and language agnostic Git commit linter for the _Conventional Commits_ specification.
* [Uplift](https://github.com/gembaadvantage/uplift): Semantic versioning the easy way. Powered by Conventional Commits. Built for use with CI.
* [Monopub](https://github.com/thi-ng/monopub): Conventional Commits-driven release tool for monorepo releases, versioning & changelog generation.
* [git-cliff](https://git-cliff.org/): A highly customizable changelog generator written in Rust that can generate changelog files for any Git repository that follows the _Conventional Commits_ specification
* [cz-git](https://github.com/Zhengqbbb/cz-git): A customizable CLI tool for generating commit messages following Conventional Commits.
* [EasyBuild ecosystem](https://github.com/easybuild-org): A collection of tools for automating release using Conventional Commits.
    * [EasyBuild.CommitLinter](https://github.com/easybuild-org/EasyBuild.CommitLinter): A .NET CLI tool to lint your commit messages
    * [EasyBuild.ChangelogGen](https://github.com/easybuild-org/EasyBuild.ChangelogGen): A .NET CLI tool for generating changelog based on Git history following Conventional Commits.

## Projects Using Conventional Commits

* [NFPM](https://github.com/goreleaser/nfpm): NFPM is Not FPM - a simple deb, rpm and apk packager written in Go.
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
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Broadly scoped ecosystem & monorepo of ~185 TypeScript projects for general purpose, functional, data driven development
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 An enhanced Yii2 app template.
* [dcyou/resume](https://github.com/dcyou/resume): 😎 Template to easily and quickly create your online CV.
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Easily create dynamic online forms to capture and submit accurate and current data.
* [Tina CMS](https://tinacms.org): An open source toolkit for building front-end content-management into your website.
* [Belajarpython](https://github.com/belajarpythoncom/belajarpython.com) Open source Indonesian python programming tutorial site.
* [Uno Platform](https://platform.uno): Build Mobile, Desktop and WebAssembly apps with C# and XAML. Today. Open source and professionally supported.
* [Jenkins X](https://jenkins-x.io/): Jenkins X provides pipeline automation, built-in GitOps, and preview environments to help teams collaborate and accelerate their software delivery at any scale.
* [GearLock](https://github.com/axonasif/gearlock): Custom Recovery Replacement for Android-x86.
* [Changeloguru](https://github.com/haunt98/changeloguru): Auto-generate changelog from conventional commits, written in Go.
* [freeCodeCamp](https://www.freecodecamp.org): A nonprofit community that helps you learn to code by building projects.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_want your project on this list?_ [send a pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
