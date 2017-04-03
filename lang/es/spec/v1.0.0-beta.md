---
title: Conventional Commits 1.0.0-beta
language: es
---

# Conventional Commits 1.0.0-beta

## Summary

As an open-source maintainer, squash feature branches onto `master` and write
a standardized commit message while doing so.

The commit message should be structured as follows:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```
---

<br />
The commit contains the following structural elements, to communicate intent to the
consumers of your library:

1. **fix:** a commit of the _type_ `fix` patches a bug in your codebase (this correlates with [`PATCH`](http://semver.org/#summary) in semantic versioning).
2. **feat:** a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates
  with [`MINOR`](http://semver.org/#summary) in semantic versioning).
3. **BREAKING CHANGE:** a commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with [`Major`](http://semver.org/#summary) in semantic versioning). A breaking change can be
  part of either a `fix:` or `feat:` _type_ commit.

<br />
A scope may be provided to a commit's type, to provide additional contextual information and
is contained within parenthesis, e.g., `feat(parser): adds ability to parse arrays`.

Commit _types_ other than `fix:` and `feat:` are allowed, for example [the angular convention](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format) recommends `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`, but these tags are
not mandated by the conventional commits specification.

## Introduction

In software development, it's been my experience that bugs are most often introduced
at the boundaries between applications. Unit testing works great for testing the interactions
that an open-source maintainer knows about, but do a poor job of capturing all the
interesting, often unexpected, ways that a community puts a library to use.

Anyone who has upgraded to a new patch version of a dependency, only to watch their
application start throwing a steady stream of 500 errors, knows how important
a readable commit history (and [ideally a well maintained CHANGLOG](http://keepachangelog.com/en/0.3.0/)) is to the ensuing
forensic process.

The Conventional Commits specification proposes introducing a standardized lightweight
convention on top of commit messages. This convention dovetails with [semver](http://semver.org),
asking software developers to describe in commit messages, features, fixes, and breaking
changes that they make.

By introducing this convention, we create a common language that makes it easier to
debug issues across codebase boundaries.

## Conventional Commits Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. commits MUST be prefixed with a type, which consists of a verb, `feat`, `fix`, etc.,
   followed by a colon and a space.
2. the type `feat` MUST be used when a commit adds a new feature to your application
  or library.
3. the type `fix` MUST be used when a commit represents a bug fix for your application.
4. an optional scope MAY be provided after a type. A scope is a phrase describing
  a component of the codebase, enclosed in parenthesis, e.g., `fix(parser):`
5. A description MUST immediately follow the type and optional scope.
  The description is a short description of the pull request, e.g.,
  _fix: array parsing issue when multiple spaces were contained in string._
6. A longer commit body MAY be provided after the short description. The body MUST
   begin one blank line after the description.
7. A footer MAY be provided one blank line after the body. The footer SHOULD contain
   additional meta-information about the pull-request, such as the issues it fixes.
7. Breaking changes MUST be indicated at the very beginning of the footer or body section of a commit. A breaking change MUST consist of the uppercase text `BREAKING CHANGE`, followed by a colon and a space. A short
  description MUST be provided after `BREAKING CHANGE: `, describing why the change is
  breaking, e.g., _BREAKING CHANGE: I must now leave Earth for no raisin!_
8. types other than `feat` and `fix` MAY be used in your commit messages.

## Why Use Conventional Commits

* Automatically generating CHANGELOGs.
* Automatically determining a semantic version bump (based on the types of commits landed).
* Communicating the nature of changes to teammates, the public, and other stakeholders quickly.
* Triggering build and publish processes.
* Helping organize and analyze the nature of your own changes in a more productive fashion.
* Making it easier for people to contribute to your projects, by allowing them to explore
  a more structured commit history.

## FAQ

### How should I deal with commit messages in the initial development phase?

We recommend that you proceed as if you've an already released product. Typically *somebody*, even if its your fellow software developers, is using your software. They'll want to know what's fixed, what breaks etc.

### What do I do if the commit conforms to more than one of the commit types?

Go back and make multiple commits whenever possible. Part of the beautify of Conventional Commits is its ability to drive us to make more organized commits and PRs.

### Doesn’t this discourage rapid development and fast iteration?
It discourages moving fast in a disorganized way. It helps you be able to move fast long term and across more projects with more diverse teams.

### Might Conventional Commits lead developers to limit the type of commits they make because they'll be thinking in the types provided?
When used properly, Convential Commits encourages us to make more of certain types of commits such as fixes. Other than that, the flexibility of Conventional Commits allows your team to come up with their own types and change those types over time.

### How does this relate to SemVer?

we encourage you do use Conventional Commits in conjunction with semantic-versioning. When you publish a version of your library, if you've landed only `fix:` commits use a patch version, if you've landed a feature use a minor release, if you've landed a breaking change use a major release.

### What do I do if I accidentally use the wrong commit type?

Prior to merging or releasing the mistake, we recommend using `git rebase -i` to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.

### Do all my contributors need to use the conventional commit specification?

No, if you use a squash based workflow on Git lead maintainers can cleanup the commit messages as they're merged -- adding no workload to casual committers

## Who's Behind This/Inspired This?

The Conventional Commit standard is inspired by the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit), which
I was introduced to by the wondeful folks behind [semantic-release](https://github.com/semantic-release/semantic-release) (a tool
  that fully automates npm publishes).

The first draft of this specification has been written in collaboration with some of the
folks contributing to:

* [standard-version](https://github.com/conventional-changelog/standard-version): a tool
  for managing CHANGELOG generation, tagging, and version bumping, based on the
  Conventional Commit standard.
* [unlease](https://www.npmjs.com/package/unleash): a tool for automating the
  software release and publishing lifecycle.
* [lerna](https://github.com/lerna/lerna): a tool for managing monorepos, which grew out
  of the Babel project.
* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): a
  set of tools for parsing conventional commit messages from git histories.

## License

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
