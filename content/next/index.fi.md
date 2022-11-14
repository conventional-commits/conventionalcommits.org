---
draft: true
---

# Tavanomaiset muutokset 1.0.0-next

## Tiivistelmä

Tavanomaiset muutokset-ohjeistus on kevyt menettelytapa muutosviesteille.
Se tarjoaa selkeät, helposti noudettavat säännöt täsmälliselle muutoshistorialle,
joka tekee niihin liittyvien automaattisten työkalujen käytöstä helppoa.
Tämä mahdollistaaa muutosviestien nivoutumisen [SemVerin](http://semver.org) kanssa
luetellen ominaisuudet, korjaukset ja särkevät muutokset.

Muutosviestin tulisi olla koostettu seuraavasti:

---

```
<tyyppi>[vaihtoehtoinen laajuus]: <kuvaus>

[vaihtoehtoinen sisältö]

[vaihtoehtoiset tunnisteet]
```

---

<br />
Muutosviestit sisältävät seuraavat rakenteelliset elementit, jotka kommunikoivat
niiden tarkoituksen tuotteesi käyttäjille:

1. **korjaus:** _tyyppi_ `fix` korjaa bugin koodikannassasi (korreloi [`PATCH`](http://semver.org/#summary) kaavamaisessa versioinnissa).
2. **ominaisuus:** _tyyppi_ `feat` tuo uuden ominaisuuden koodikantaan (korreloi [`MINOR`](http://semver.org/#summary) kaavamaisessa versioinnissa).
3. **SÄRKEVÄ MUUTOS:** on muutos, jonka alatunnisteessa on `BREAKING CHANGE:`, sisältää `!`-merkin tyypin/scopen jälkeen tai tuo särkevän API-muutoksen (korreloi with [`MAJOR`](http://semver.org/#summary) kaavamaisessa versioinnissa).
   SÄRKEVÄ MUUTOS voi olla tyypiltään mikä tahansa _tyyppi_.
4. _tyypit_ jotka ovat muita kuin `fix:` tai `feat:` ovat sallittuja, kuten esimerkiksi [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (pohjautuen [Angularin muutostyyliin](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) suosittelee `build:`, `chore:`,
   `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` jne.
5. Muita _alatunnisteita_, kuin `BREAKING CHANGE: <description>` voidaan lisätä ja ne pohjautuvat [git trailer formaattiin](https://git-scm.com/docs/git-interpret-trailers).

Muita _tyyppejä_ ei ole laadittu Tavanomaiset muutokset-menettelytavassa - eikä niillä ole välitöntä merkitystä kaavamaisessa versioinnisa, ellei ne sisällä särkevää muutosta.

<br /><br />
Tyypille voidaan määritellä laajuus, eli scope. Laajuudessa annetaan sisällölle konteksti ja se merkitään huomautuksena suluissa, esim. `feat(parser): lisää ominaisuus muuntaa kokoelmia`.

## Esimerkkejä

### Muutosviesti kuvauksella ja särkevä muutos-alatunnisteella

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Muutosviesti huutomerkillä `!` herättääkseen huomiota särkevään muutokseen

```
feat!: send an email to the customer when a product is shipped
```

### Muutosviesti laajuudella ja huutomerkillä `!` herättääkseen huomiota särkevään muutokseen

```
feat(api)!: send an email to the customer when a product is shipped
```

### Muutosviesti huutomerkillä `!` ja särkyvän muutoksen alatunnisteella

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Muutosviesti ilman vaihtoehtoista sisältöä

```
docs: correct spelling of CHANGELOG
```

### Muutosviesti laajuudella

```
feat(lang): add Finnish language
```

### Muutosviesti vaihtoehtoisella sisällä ja useammalla alatunnisteella

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Määritelmä

Avainsanat "PITÄÄ" (“MUST”), "EI PIDÄ" (“MUST NOT"), "PAKOLLINEN" (“REQUIRED”), "PITÄISI" (“SHOULD”), EI PITÄISI (“SHOULD NOT)”, "SAA" (“MAY”), ja "VAPAAEHTOINEN" (“OPTIONAL”, “RECOMMENDED”) tässä dokumentissa viittaavat [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)-määritelmään.

1. Muutoksissa PITÄÄ olla etuliitteenä tyyppi, mikä muodostuu substantiivista, `feat`, `fix`, jne., jota seuraa
   VAPAAEHTOINEN laajuus, VAPAAEHTOINEN `!`, ja PAKOLLINEN kaksoispiste ja välilyönti.
1. Typpiä `feat` PITÄÄ käyttää, kun muutos lisää uuden ominaisuuden sovelukseesi tai kirjastoosi.
1. Tyyppiä `fix` PITÄÄ käyttää, kun muutos esittää bugin korjauksen sovellukseesi.
1. Laajuuden SAA laittaa tyypin jälkeen. Laajuuden PITÄÄ sisältää substantiivi, joka kuvaa
   koodikanta osaa ympäröitynä sulkumerkeillä, esim., `fix(parser):`
1. Kuvauksen PITÄÄ välittömästi seurata kaksoispistettä ja välilyöntiä, tyyppi/laajuus etuliitteen jälkeen.
   Kuvaus on lyhyt tiivistelmä koodimuutoksista, esim., _fix: array parsing issue when multiple spaces were contained in string_.
1. Pidemmän muutostekstin SAA kirjoittaa lyhyen kuvauksen jälkeen, joka tarjoaa lisää kontekstuaalista tietoa koodimuunnoksista. Muutostekstin PITÄÄ alkaa yhdellä tyhjällä rivillä kuvauksen jälkeen.
1. Muutosteksti on vapaamuotoinen ja SAA sisältää minkä tahansa määrän rivinvaihdolla erotettuja kappaleita.
1. Yhden tai useamman alatunnisteen SAA sisältää yhden tyhjän tivin jälkeen muutostekstistä. Jokaisen alatunnisteen PITÄÄ sisältää
   sanamerkki, jonka jälkeen joko `:<space>` tai `<space>#` erottaja, jonka jälkeen merkkijono arvo (idea on saatu
   [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Alatunnisteen merkin PITÄÄ käyttää `-` välilyöntimerkkien tilalla, esim., `Acked-by` (tämä helpottaa erottamaan
   alatunnisteosion monen kappaleen muutostekstistä). Poikkes tehdään `BREAKING CHANGE` kanssa, jota SAA myös käyttää merkkinä.
1. Alatunniste VOI sisältää välilyöntejä ja rivinvaihtoja, ja jäsentämisen PITÄÄ loppua kun seuraava kelpaava alatunniste
   merkki/erottajapari huomataan.
1. Rikkovat muutokset PITÄÄ ilmaista muutoksen tyyppi/laajuus etuliitteessä, tai kirjauksena
   alatunnisteessa.
1. Jos se sisällytetään alatunnisteessa, rikkovan muutoksen PITÄÄ sisältää isoilla kirjaimillia BREAKING CHANGE, jota seuraa kaksoispiste, välilyönti, ja kuvaus, esim.,
   _BREAKING CHANGE: environment variables now take precedence over config files_.
1. Jos se sisällytetään tyyppi/laajuus etuliitteessä, rikkovat muutokset PITÄÄ ilmaista
   `!` heti `:` jälkeen. Jos `!` käytetään, `BREAKING CHANGE:` SAA jättää pois alatunnisteosiosta,
   ja muutoksen kuvausta PITÄÄ käyttää kuvailemaan rikkovaa muutosta.
1. Types other than `feat` and `fix` MAY be used in your commit messages, e.g., _docs: updated ref docs._
1. The units of information that make up conventional commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.
1. BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.

## Why Use Conventional Commits

- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them to explore
  a more structured commit history.

## UKK (Usein kysytyt kysymykset)

### Miten minun tulisi käyttää muutosviestejä kehityksen alkuvaiheessa?

Suosittelemme, että toimisit kuin olisit jo julkaissut tuotteen. Yleensä _joku_, vähintään toiset kehittäjät, käyttävät jo ohjelmaasi. He tahtovat tietää, mitä on korjattu, mikä rikkoo ohjelman, jne.

### Tulisiko muutosviestien tyypit kirjoittaa isoilla vai pienillä kirjaimilla?

Kirjainkoolla ei ole väliä, mutta on hyvä käyttää niitä johdonmukaisesti.

### Mitä jos muutoksessani on useamman kuin yhden tyyppisiä muutoksia?

Peruuta ja tee useampia muutoksia mikäli vain mahdollista. Osa Tavanmukaisten muutosten hyödystä on sen rakenne, joka ohjaa tekemään paremmin järjesteltyjä muutoksia ja liitospyyntöjä.

### Eikö tämä menetelmä hankaloita nopeaa kehitystä ja iterointia?

Se hankaloittaa huonosti järjesteltyä nopeaa etenemistä. Se helpottaa pitkän tähtäimen nopeaa etenemistä useissa projekteissa, joissa on eri kehittäjiä.

### Voiko Tavanmukaisten muutosten käyttäminen johtaa kehittäjät rajoittamaan tekemiensä muutosten tyyppejä, koska he ajattelevat vain projektissa määriteltyjen tyyppien mukaisesti?

Tavanmukaiset muutokset ohjaavat tekemään enemmän tietyn tyyppisiä muutoksia, kuten korjauksia. Tämän lisäksi Tavanmukaisten muutosten joustavuus sallii tiimien keksiä omat tyyppinsä ja muokata niitä ajan myötä.

### Miten tämä suhteutuu SemVeriin?

`fix`-tyypin muutokset tulisi kääntää `PATCH`-julkaisuiksi. `feat`-tyypin muutokset tulisi kääntää `MINOR`-julkaisuiksi. Muutokset joiden muutosviestissä on `BREAKING CHANGE`, tyypistä riippumatta, tulisi kääntää`MAJOR`-julkaisuksi.

### Miten minun tulisi versioida laajennukseni Tavanmukaiset muutokset -spesifikointiin, esim `@jameswomack/conventional-commit-spec`?

Suosittelemme käyttämään SemVeriä omissa laajennuksissa tähän spesifikaatioon (ja rohkaisemme tekemään laajennuksia!)

### Mitä jos käytän vahingossa väärää muutostyyppiä?

#### When you used a type that's of the spec but not the correct type, e.g. `fix` instead of `feat`

Prior to merging or releasing the mistake, we recommend using `git rebase -i` to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.

#### When you used a type _not_ of the spec, e.g. `feet` instead of `feat`

In a worst case scenario, it's not the end of the world if a commit lands that does not meet the conventional commit specification. It simply means that commit will be missed by tools that are based on the spec.

### Do all my contributors need to use the conventional commit specification?

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

### What writing form should I use?

We recommend writing a commit description and body using the [imperative](https://en.wikipedia.org/wiki/Imperative_mood) present tense writing form.

There are a significant number of examples of this writing form for commits [1](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)[2](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#subject)[3](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)[4](https://medium.com/@danielfeelfine/commit-verbs-101-why-i-like-to-use-this-and-why-you-should-also-like-it-d3ed2689ef70)[5](https://chris.beams.io/posts/git-commit/)

## About

The Conventional Commit specification is inspired by, and based heavily on, the [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

The first draft of this specification has been written in collaboration with some of the folks contributing to:

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): a set of tools for parsing conventional commit messages from git histories.
- [bumped](https://bumped.github.io): a tool for releasing software that makes it easy to perform actions before and after releasing a new version of your software.
- [unleash](https://github.com/netflix/unleash): a tool for automating the software release and publishing lifecycle.
- [lerna](https://github.com/lerna/lerna): a tool for managing monorepos, which grew out of the Babel project.

## Tooling for Conventional Commits

- [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): Full Go powers to parse conventional commits
- [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit): go library for parsing commit messages following the specification.
- [chglog](https://github.com/goreleaser/chglog): a tool for parsing Conventional Commits messages from git histories and turning them into templateable change logs.
- [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): follows the specification to manage versions and generate a changelog automatically.
- [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): a tool built to create commit messages following the Conventional Commit specs.
  Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
- [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): a tool built to generate a changelog from a project's committing history messages and metadata and automate versioning with Semver, following Conventional Commits specs. Configurable and usable for PHP projects as a composer dependency or usable globally for non-PHP projects.
- [conform](https://github.com/autonomy/conform): a tool that can be used to enforce policies on git repositories, including conventional commits.
- [standard-version](https://github.com/conventional-changelog/standard-version): Automatic versioning and CHANGELOG management, using GitHub's new squash button and the recommended Conventional Commits workflow.
- [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Add _Conventional Commits_ support to [JetBrains Editors](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
- [commitsar](https://github.com/commitsar-app/commitsar): Go tool for checking if commits on branch are conventional commit compliant. Comes with Docker image for CI uses.
- [semantic-release](https://github.com/semantic-release/semantic-release): A tool that automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.
- [ngx-semantic-version](https://github.com/d-koppenhagen/ngx-semantic-version): Automate your Angular app commit- and release-workflow by integrating _commitizen_, _commitlint_, _husky_ and _standard-version_ in your project and configuring it for using _Conventional Commits_.
- [Pyhist](https://github.com/jgoodman8/pyhist): Python apuväline joka päivittää automaattisesti pakettiversion gitin historiasta ja luo muutoslokin.
- [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): A Python tool built to create committing rules for projects (default: conventional commit), bump project versions, and generate changelog. Configurable and usable for both Python and non-Python project. It's highly extensible through Python.
- [git-mkver](https://github.com/idc101/git-mkver): A tool to automatically apply Semantic Versioning to git repositories based on _Conventional Commits_.
- [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): A tooling and language agnostic utility to calculate the next semantic version based on the _Conventional Commits_ since the prior version. Supports monorepos.
- [change](https://github.com/adamtabrams/change): A tool for generating and updating a changelog using Conventional Commits.
- [sv4git](https://github.com/bvieira/sv4git): A command line tool (CLI) to validate commit messages, bump versions, create tags and generate changelogs.
- [semantic-gitlog](https://github.com/semantic-gitlog) A simple Semantic Versioning management tool based on Conventional Commits. It automatically derives and manage version numbers and generate angular-style changelogs. supports [Maven](https://github.com/semantic-gitlog/maven-semantic-gitlog) and [Gradle](https://github.com/semantic-gitlog/gradle-semantic-gitlog).
- [idea-conventional-commit](https://github.com/lppedd/idea-conventional-commit) Context and template-based completion for conventional/semantic commits.
- [Versio](https://github.com/chaaz/versio): Monorepo-yhteensopiva työkalu joka päivittää versionumeroita kommitointipohjaisesti sekä projektiriippuvaisesti. Se luo myös omat merkinnät ja muutoslokit
- [Git Changelog Lib](https://github.com/tomasbjerre/git-changelog-lib): Javakirjasto joka tukee muutoslokin hahmontamista annetuilla konteksteilla juonnettuna Gitistä. Tukee tavanmukaisia kommitointeja [Handlebars Helpers](https://github.com/tomasbjerre/git-changelog-lib#helpers):lla. Se on käytössä seuraavissa:
  - [Gradle](https://github.com/tomasbjerre/git-changelog-gradle-plugin)
  - [Maven](https://github.com/tomasbjerre/git-changelog-maven-plugin)
  - [Jenkins](https://github.com/jenkinsci/git-changelog-plugin)
  - [Command Line](https://github.com/tomasbjerre/git-changelog-command-line)
- [Cocogitto](https://github.com/oknozor/cocogitto): Cocogitto on sarja CLI työkaluja tavanomaiseen muutostekstiin ja semver erikoistumiseen.
- [Conventional Commits Linter](https://gitlab.com/DeveloperC/conventional_commits_linter):Apuvälinöintiin ja kieliagnostiikkaan erikoistunut gitin kommittaus virheenkäsittelytyökalu _Conventional Commits_ :lle
- [Uplift](https://github.com/gembaadvantage/uplift): Tavanomainen kommitointi. Rakennettu käytettäväksi helpolla CI:llä.

## Projects Using Conventional Commits

- [NFPM](https://github.com/goreleaser/nfpm): Simppeli deb, rpm ja apk paketoija kirjoitettuna GO:lla
- [yargs](https://github.com/yargs/yargs): everyone's favorite pirate themed command line argument parser. Kaikkien suosikki merirosvo-teemainen komentokehoteargumenttijäsennin.
- [istanbuljs](https://github.com/istanbuljs/istanbuljs): Kokoelma avoimen lähdekoodin työkaluja ja kirjastoja Javascript testien näkyvyyden lisäämiseen.
- [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) and [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Vaihtoehtoinen lisä käyttäjärajapinnan parannukseen.[Apereo uPortal](https://www.apereo.org/projects/uportal).
- [massive.js](https://github.com/dmfay/massive-js): Datakäsittelykirjasto Node:lle ja PostGreSQL:lle.
- [electron](https://github.com/electron/electron): Rakenna ristikkäisalusta työpöytäsovelluksia JavaScriptillä, HTML:llä ja CSS:llä.
- [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Helposti käytettävä vieritys hyödykepakkaus elementtien keskittämiseen ja animaatioiden pehmentämiseen.
- [Blaze UI](https://github.com/BlazeUI/blaze): Kehitysalustavapaa avoimen lähdekoodin UI työkalu
- [Monica](https://github.com/monicahq/monica): Avoimen lähdekoodin henkilökohtainen relaatiosuhteiden hallintajärjestelmä. hallinnointisysteemi.
- [mhy](https://mhy.js.org): 🧩 Ilman konfiguraatiota, suoraa pakasta, moni-käyttöinen kirjasto sekä tuotantolusta.
- [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): Simppeli jäsenteli Diff tiedostoille (määrittelemättömille diff formaateille)
- [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): Helppo jakaminen .diff & .patch tiedostoihin.
- [@thi.ng/umbrella](https://github.com/thi-ng/umbrella):Monorepositorio ~100:sta TypeScript projekille data käyttöistä kehitystä varten.
- [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 Paranneltu Yii2 sovellusmalli.
- [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Tee helposti dynaamisia verkkolomakkeita kaappaamiseen ja toimita tarkkaa ja ajankohtaista dataa.
- [Tina CMS](https://tinacms.org): Avoimen lähdekoodin työkalut front-end ja sisällönhallinnan rakentamiseen verkkosivuillesi.
- [Uno Platform](https://platform.uno): Rakenna mobiili, pöytä ja Webassembly sovelluksia C# ja XAML:lla. Tänään. Avoin lähdekoodi ja ammattilaisten tukema.
- [AutoSort.NetCore](https://www.nuget.org/packages/AutoSort.NetCore/): Käytä itsenäisiä määritteitä oletuslajitteluun
- [Undercut](https://github.com/the-spyke/undercut): JavaScriptin ajoitetun datan prosessointipuskuriputkia ja apuväline.
- [Stats Builder](https://github.com/MarkFChavez/blox_piece_stats_builder): Statistiikkan rakentaja Blox Fruitsille [Blox Fruits](https://www.roblox.com/games/2753915549/UPDATE-11-Blox-Fruits)
- [Jenkins X](https://jenkins-x.io/): Jenkins X tarjoaa puskuriputki-automaation, sisäisen Gitopsin ja esikatselu ympäristöjä avustamaan tiimejä yhteistoimintaan ja nopettamaan ohjelmistojen tuotantoa kaikilla skaaloilla.
- [rsql-querydsl](https://github.com/ymind/rsql-querydsl): Sisäinen RSQL kyselykieli ja Quarydsl kehitysympäristö.
- [Changeloguru](https://github.com/haunt98/changeloguru): Luo automaattisesti muutoslokin tavanmukaisia muutoksia kirjoitettuna Go-ohjelmointikielellä.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_want your project on this list?_ [send a pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
