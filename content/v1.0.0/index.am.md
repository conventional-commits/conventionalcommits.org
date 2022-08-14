---
draft: false
aliases: ["/am/"]
---

# Conventional Commits 1.0.0

## Ամփոփում

The Conventional Commits specification is a lightweight convention on top of commit messages.
It provides an easy set of rules for creating an explicit commit history;
which makes it easier to write automated tools on top of.
This convention dovetails with [SemVer](http://semver.org),
by describing the features, fixes, and breaking changes made in commit messages.

Commit հաղորդագրությունները պետք է ունենան հետևյալ կառուցվածքը․

---

```
<տիպ>[ոչ պարտադիր շրջանակ]: <նկարագրություն>

[ոչ պարտադիր մարմին]

[ոչ պարտադիր վերջավորություն(ներ)]
```
---

<br />
Commit-ը պարունակում է հետևյալ կառուցվածքային տարրերը՝ ձեր փոփոխությունների մտադրությունը հաղորդելու համար.

1. **fix:** a commit of the _type_ `fix` patches a bug in your codebase (this correlates with [`PATCH`](http://semver.org/#summary) in Semantic Versioning).
1. **feat:** a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with [`MINOR`](http://semver.org/#summary) in Semantic Versioning).
1. **BREAKING CHANGE:** a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with [`MAJOR`](http://semver.org/#summary) in Semantic Versioning).
A BREAKING CHANGE can be part of commits of any _type_.
1. _types_ other than `fix:` and `feat:` are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (based on the [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommends `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
1. _footers_ other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to
  [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE).
<br /><br />
A scope may be provided to a commit's type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

## Օրինակներ

### Commit հաղորդագրություն՝ նկարագրով և breaking change վերջավորությունով
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit հաղորդագրություն՝ `!` նշանով, որպեսզի ուշադրություն գրավենք կատարված կարևոր փոփոխությունների համար
```
feat!: send an email to the customer when a product is shipped
```

### Commit հաղորդագրություն՝ շրջանակով և `!` նշանով, որպեսզի ուշադրություն գրավենք կատարված կարևոր փոփոխությունների համար
```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit հաղորդագրություն՝ միաժամանակ և՛ `!` նշանով, և՛ BREAKING CHANGE վերջավորությունով
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit հաղորդագրություն՝ առանց մարմնի
```
docs: correct spelling of CHANGELOG
```

### Commit հաղորդագրություն՝ շրջանակով
```
feat(lang): add Polish language
```

### Commit հաղորդագրություն՝ մի քանի պարագրաֆ մարմնով և մի քանի վերջավորություններով
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

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

## Ինչ՞ու օգտագործել Conventional Commit-ները

* Ավտոմատ կերպով գեներացնում են CHANGELOG-ներ։
* Ավտոմատ կերպով կատարում են տարբերակների բարձրացում (հիմնվելով կատարված commit-ների տեսակի վրա)։
* Փոփոխությունների բնույթի հաղորդում թիմակիցներին, հանրությանը և այլ շահագրգիռ կողմերին:
* Ստեղծման և հրապարակման գործընթացների ակտիվացում:
* Առավել հեշտացնում է նպաստումը Ձեր նախագծին այլ մարդկանց կողմից՝ թույլ տալով նրանց ուսումնասիրել ավելի ընթեռնելի commit-ների պատմություն:

## ՀՏՀ

### Ինչպե՞ս պետք է վարվեմ commit հաղորդագրությունների հետ նախնական զարգացման փուլում:

We recommend that you proceed as if you've already released the product. Typically *somebody*, even if it's your fellow software developers, is using your software. They'll want to know what's fixed, what breaks etc.

### Commit-ների վերնագրի տեսակները մեծատառե՞ն են, թե՞ փոքրատառ:

Any casing may be used, but it's best to be consistent.

### Ի՞նչ անել, եթե commit-ը համապատասխանում է commit-ների մեկից ավելի տեսակներին:

Go back and make multiple commits whenever possible. Part of the benefit of Conventional Commits is its ability to drive us to make more organized commits and PRs.

### Արդյո՞ք սա չի խանգարում պրոյեկտի արագ զարգացմանը և արագ կրկնմանը:

It discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.

### Հնարավո՞ր է, որ Conventional Commit-ները ծրագրավորողներին սահմանափակի իրենց կատարած commit-ների տեսակը, քանի որ նրանք կմտածեն տրամադրված տեսակների վրա:

Conventional Commits encourages us to make more of certain types of commits such as fixes. Other than that, the flexibility of Conventional Commits allows your team to come up with their own types and change those types over time.

### Ինչպե՞ս է դա կապված SemVer-ի հետ:

`fix` type commits should be translated to `PATCH` releases. `feat` type commits should be translated to `MINOR` releases. Commits with `BREAKING CHANGE` in the commits, regardless of type, should be translated to `MAJOR` releases.

### Ինչպես պետք է տարբերակեմ իմ ընդլայնումները Conventional Commit-ների սպեցիֆիկացիայի համար (օրինակ ՝@jameswomack/conventional-commit-spec՝):

We recommend using SemVer to release your own extensions to this specification (and
encourage you to make these extensions!)

### Ի՞նչ անեմ, եթե պատահաբար օգտագործեմ սխալ commit-ի տեսակը:

#### Երբ դուք օգտագործում եք այնպիսի տեսակ, որը համապատասխանում է բնութագրին, բայց ոչ ճիշտ, օրինակ. `fix`` `feat`-ի փոխարեն

Prior to merging or releasing the mistake, we recommend using `git rebase -i` to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.

#### Երբ դուք օգտագործում եք հատուկ *ոչ* տեսակ, օրինակ. `feet`` `feat`-ի փոխարեն

In a worst case scenario, it's not the end of the world if a commit lands that does not meet the Conventional Commits specification. It simply means that commit will be missed by tools that are based on the spec.

### Արդյո՞ք իմ բոլոր մասնակիցները պետք է օգտագործեն Conventional Commit-ների հստակեցումը:

No! If you use a squash based workflow on Git lead maintainers can clean up the commit messages as they're merged—adding no workload to casual committers.
A common workflow for this is to have your git system automatically squash commits from a pull request and present a form for the lead maintainer to enter the proper git commit message for the merge.

### Ինչպե՞ս են Conventional Commit-ները վերաբերվում վերադարձի(revert) commit-ներին:

Reverting code can be complicated: are you reverting multiple commits? if you revert a feature, should the next release instead be a patch?

Conventional Commits does not make an explicit effort to define revert behavior. Instead we leave it to tooling
authors to use the flexibility of _types_ and _footers_ to develop their logic for handling reverts.

One recommendation is to use the `revert` type, and a footer that references the commit SHAs that are being reverted:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
