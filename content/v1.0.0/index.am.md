---
draft: false
aliases: ["/am/"]
---

# Conventional Commits 1.0.0 (Հայերեն)

## Ամփոփում

Conventional Commit-ները իրենցից ներկայացնում են թեթև կոնվենցիաներ՝ commit հաղորդագրությունների վրա։
Այն ապահովում է պարզ commit-ների պատմություն ստեղծելու հեշտ եղանակ, ինչը հեշտացնում է ավտոմատացման գործիքների օգտագործումը։
Այս կոնվենցիան համընկնում է [SemVer](http://semver.org)-ի հետ,
նկարագրելով commit հաղորդագրություններում կատարված առանձնահատկությունները, ուղղումները և փոփոխությունները:

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

## Հ․Տ․Հ․

### Ինչպե՞ս պետք է վարվեմ commit հաղորդագրությունների հետ նախնական զարգացման փուլում:

Մենք խորհուրդ ենք տալիս շարունակել այնպես, կարծես արդեն թողարկել եք պրոդուկտը: Սովորաբար *ինչ-որ մեկը*, նույնիսկ եթե դա ձեր գործընկեր ծրագրավորողներն են, օգտագործում է ձեր ծրագրաշարը: Նրանք կցանկանան իմանալ, թե ինչն է շտկված, ինչն է կոտրվում և այլն:

### Commit-ների վերնագրի տեսակները մեծատառե՞ն են, թե՞ փոքրատառ:

Ցանկացած միջոց կարող է օգտագործվել, բայց ավելի լավ է հետևողական լինել և օգտագործել դրանցից որևէ մեկը:

### Ի՞նչ անել, եթե commit-ը համապատասխանում է commit-ների մեկից ավելի տեսակներին:

Վերադարձեք և հնարավորության դեպքում մի քանի commit-ներ կատարեք: Conventional Commit-ներն օգտագործելու իմաստներից մեկը՝ մեր commit հաղորդագրություններն ու PR-ները ավելի կազմակերպված դարձնելն է:

### Արդյո՞ք սա չի խանգարում պրոյեկտի արագ զարգացմանը և արագ կրկնմանը:

Այն խանգարում է արագ շարժվել անկազմակերպ կերպով: Այն օգնում է Ձեզ երկարաժամկետ արագ շարժվել բազմաթիվ նախագծերի մեջ՝ տարբեր ներդրողների հետ:

### Հնարավո՞ր է, որ Conventional Commit-ները ծրագրավորողներին սահմանափակի իրենց կատարած commit-ների տեսակը, քանի որ նրանք կմտածեն տրամադրված տեսակների վրա:

Conventional Commit-ները մեզ խրախուսում է ավելի շատ կատարել որոշակի տեսակի commit-ներ, ինչպիսիք են ուղղումները: Բացի դրանից, Conventional Commit-ների ճկունությունը թույլ է տալիս Ձեր թիմին գտնել իրենց տեսակները և ժամանակի ընթացքում փոխել դրանք:

### Ինչպե՞ս է դա կապված SemVer-ի հետ:

`fix` տեսակի պարտավորությունները պետք է թարգմանվեն `PATCH` թողարկումներով: `feat` տեսակի պարտավորությունները պետք է թարգմանվեն `MINOR` թողարկումներով: Հանձնարարություններում `BREAKING CHANGE` ունեցող պարտավորությունները, անկախ տեսակից, պետք է թարգմանվեն `MAJOR` թողարկումներով:

### Ինչպես պետք է տարբերակեմ իմ ընդլայնումները Conventional Commit-ների սպեցիֆիկացիայի համար (օրինակ ՝@jameswomack/conventional-commit-spec՝):

Մենք խորհուրդ ենք տալիս օգտագործել SemVer-ը, որպեսզի թողարկեք ձեր սեփական ընդլայնումները այս բնութագրին (և
խրախուսում ենք ձեզ կատարել այս ընդլայնումները:)

### Ի՞նչ անեմ, եթե պատահաբար օգտագործեմ սխալ commit-ի տեսակը:

#### Երբ դուք օգտագործում եք այնպիսի տեսակ, որը համապատասխանում է բնութագրին, բայց ոչ ճիշտ, օրինակ. `fix`՝ `feat`-ի փոխարեն

Նախքան սխալը միաձուլելը կամ բաց թողնելը, մենք խորհուրդ ենք տալիս օգտագործել `git rebase -i`՝ կատարման պատմությունը խմբագրելու համար: Թողարկումից հետո մաքրումը կտարբերվի՝ կախված ձեր օգտագործած գործիքներից և գործընթացներից:

#### Երբ դուք օգտագործում եք հատուկ *ոչ* տեսակ, օրինակ. `feet`՝ `feat`-ի փոխարեն

Վատագույն սցենարի դեպքում աշխարհի վերջը չէ, եթե commit-ը վայրէջք կատարի, որը չի համապատասխանում Conventional Commit-ների պահանջներին: Դա պարզապես նշանակում է, որ commit-ը բաց կթողնի այն գործիքները, որոնք հիմնված են բնութագրերի վրա:

### Արդյո՞ք իմ բոլոր մասնակիցները պետք է օգտագործեն Conventional Commit-ների հստակեցումը:

Ո՛չ։ Եթե դուք օգտագործում եք squash-ի վրա հիմնված աշխատանքային հոսք Git-ի առաջատար սպասարկիչները կարող են մաքրել commit հաղորդագրությունները, քանի որ դրանք միաձուլվում են՝ առանց աշխատանքային ծանրաբեռնվածության ավելացման պատահական commiter-ին:
Սրա համար ընդհանուր աշխատանքային հոսքն այն է, որ ձեր git համակարգը ինքնաբերաբար PR-ը կմիաձուլի մեկ squash commit-ի մեջ, որպեսզի առաջատար սպասարկիչը մուտքագրի համապատասխան git commit հաղորդագրությունը միաձուլման համար:

### Ինչպե՞ս են Conventional Commit-ները վերաբերվում վերադարձի(revert) commit-ներին:

Կոդը վերադարձնելը կարող է բարդ լինել. դուք վերադարձնու՞մ եք մի քանի commit-ներ: եթե վերադարձնեք որևէ հատկանիշ(feature), հաջորդ թողարկումը դրա փոխարեն կարկատա՞կ պետք է լինի:

Conventional Commits-ը բացահայտ ջանքեր չի գործադրում հետադարձ վարքագիծը սահմանելու համար: Փոխարենը թողնում ենք
հեղինակներին օգտագործել _types_-ի և _footers_-ի ճկունությունը՝ զարգացնելու իրենց տրամաբանությունը հետադարձումների հետ աշխատելու համար:

Առաջարկություններից մեկն է օգտագործել `revert` տիպը և վերջավորություն, որը հղում է կատարում վերադարձվող SHA-ներին՝

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
