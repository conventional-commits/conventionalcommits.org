---
draft: false
aliases: ["/de/"]
---

# Konventionelle Commits 1.0.0

## Zusammenfassung

Die Spezifikation für konventionelle Commits ist eine einfache Konvention, die auf Commit-Nachrichten aufbaut.
Sie enthält einfache Regeln zum Erstellen einer expliziten Commit-Historie;
das macht es einfacher, automatisierte Tools dazu zu schreiben.
Diese Konvention knüpft an [SemVer](http://semver.org) an,
indem sie die Funktionen, Korrekturen und Änderungen beschreibt, die in Commit-Nachrichten vorgenommen wurden.

Die Commit-Nachricht sollte wie folgt aufgebaut sein:

---

```
<Typ>[optionaler Gültigkeitsbereich]: <Beschreibung>

[optionaler Textkörper]

[optionale Fußnoten]
```
---

<br />
Der Commit enthält die folgenden Strukturelemente, um den Benutzern Ihrer Bibliothek Ihre Absichten mitzuteilen:

1. **fix:** ein Commit des _Typs_ `fix` behebt einen Fehler in Ihrer Codebasis (dies entsprich einem [`PATCH`](http://semver.org/#summary) in semantischer Versionierung).
1. **feat:** ein Commit des _Typs_ `feat` führt eine neue Funktion in Ihrer Codebasis ein (dies entspricht einem [`MINOR`](http://semver.org/#summary) in semantischer Versionierung).
1. **BREAKING CHANGE:** ein Commit mit `BREAKING CHANGE:` in der Fußzeile, oder einem angehängten `!` nach dem Typ/Gültigkeitsbereich, führt tiefgreifende Änderungen an der API ein (dies entspricht einem [`MAJOR`](http://semver.org/#summary) in semantischer Versionierung).
Ein BREAKING CHANGE kann Teil eines Commits jeden _Typs_ sein.
1. Andere _Typen_ als `fix:` und `feat:` sind erlaubt, z. B. erlaubt [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basierend auf [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, und andere.
1. Andere _Fußzeilen_ als `BREAKING CHANGE: <Beschreibung>` können angegeben werden und folgen der Konvention ähnlich zum [git Trailer Format](https://git-scm.com/docs/git-interpret-trailers).

Zusätzliche Typen sind in der konventionellen Commit-Spezifikation nicht vorgeschrieben und haben keine impliziten Auswirkungen auf die semantische Versionierung (sofern sie keinen BREAKING CHANGE enthalten).
<br /><br />
Ein Gültigkeitsbereich kann zusammen mit einem Commit Typen angegeben werden, um weitere kontextuelle Informationen in Klammern zu geben, z. B. `feat(parser): add ability to parse arrays`.

## Beispiele

### Commit-Nachricht mit Beschreibung und Breaking Change Fußzeile
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit-Nachricht mit `!` um auf einen Breaking Change aufmerksam zu machen
```
refactor!: drop support for Node 6
```

### Commit-Nachricht mit `!` als auch BREAKING CHANGE Fußzeile
```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### Commit-Nachricht ohne Textkörper
```
docs: correct spelling of CHANGELOG
```

### Commit-Nachricht mit Gültigkeitsbereich
```
feat(lang): add polish language
```

### Commit-Nachricht mit mehreren Absätzen und Fußzeilen
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Spezifikation

Die Schlüsselwörter "MUSS", "DARF NICHT", "ERFORDERLICH", "SOLL", "SOLL NICHT", "SOLLTE", "SOLLTE NICHT", "EMPFOHLEN", "KANN" und "OPTIONAL" dieses Dokuments werden wie in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) interpretiert.

1. Commits MÜSSEN einen Typen vorangestellt haben, der aus Nomen besteht, `feat`, `fix`, etc., gefolgt von einem OPTIONALEN Gültigkeitsbereich, OPTIONALEM `!` und einem ERFORDERLICHEN abschließenden Doppelpunkt und einem Leerzeichen.
1. Der Typ `feat` MUSS benutzt werden, wenn ein Commit neue Funktionalität zur Applikation oder Bibliothek hinzufügt.
1. Der Typ `fix` MUSS benutzt werden, wenn ein Commit eine Fehlerbehebung für die Applikation darstellt.
1. Ein Gültigkeitsbereich KANN nach einem Typen angegeben werden. Ein Gültigkeitsbereich MUSS aus einem Nomen in Klammern bestehen, das die betroffene Stelle im Code beschreibt, z. B. `fix(parser):`
1. Eine Beschreibung MUSS direkt auf den Doppelpunkt und ein Leerzeichen nach dem Typ/Gültigkeitsbereich folgen. Die Beschreibung ist eine kurze Zusammenfassung der Code-Änderungen, z. B. _fix: array parsing issue when multiple spaces were contained in string_.
1. Ein längerer Commit-Textkörper KANN nach der Kurzbeschreibung angegeben werden, um weitere kontextuelle Informationen über die Code-Änderungen zu geben. Der Textkörper MUSS nach eine Leerzeile nach der Beschreibung folgen.
1. Der Commit-Textkörper ist formlos und KANN aus einer beliebigen Anzahl an Absätzen bestehen, getrennt mit Zeilenumbrüchen.
1. Eine oder mehrere Fußzeilen KÖNNEN nach einer Leerzeile unter dem Textkörper angegeben werden. Jede Fußzeile MUSS aus einem Symbolwort bestehen, gefolgt von einem `:<leer>` oder `<leer>#` Trennzeichen und einem String-Wert (basierend auf der [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Symbolwörter MÜSSEN ein `-` statt eines Leerzeichens verwenden, z. B. `Acked-by` (dies hilft die Fußzeile von einem mehrzeiligen Textkörper zu unterscheiden). Eine Ausnahme bildet `BREAKING CHANGE`, was auch als Symbolwort benutzt werden KANN.
1. Der Wert einer Fußzeile KANN Leerzeichen und Zeilenumbrüche enthalten. Das Parsen MUSS beendet werden, wenn das nächste gültige Paar Fußzeilen-Symbolwort/Trennzeichen erkannt wird.
1. Breaking Changes MÜSSEN mit dem Typen-/Gültigkeitsbereichs-Präfix eines Commits angegeben werden oder als Eintrag in der Fußzeile.
1. Wenn ein Breaking Change als Fußzeile eingefügt wird, MUSS sie aus dem Großbuchstaben BREAKING CHANGE bestehen, gefolgt von einem Doppelpunkt, einem Leerzeichen und einer Beschreibung, z. B. _BREAKING CHANGE: environment variables now take precedence over config files_.
1. Wenn im Typen-/Gültigkeitsbereichs-Präfix enthalten, MÜSSEN Breaking Changes mit einem `!` direkt vor dem `:` angegeben werden. Wenn `!` benutzt wird KANN `BREAKING CHANGE:` aus der Fußzeile weggelassen werden und die Commit-Beschreibung SOLL benutzt werden um den Breaking Change zu beschreiben.
1. Andere Typen als `feat` und `fix` KÖNNEN in der Commit-Nachricht benutzt werden, z. B. _docs: updated ref docs._
1. Die Informationseinheiten, aus denen herkömmliche Commits bestehen, DÜRFEN von Implementierern NICHT mit Groß- und Kleinschreibung behandelt werden, mit Ausnahme von BREAKING CHANGE, bei dem es sich um Großbuchstaben handeln MUSS.
1. BREAKING-CHANGE MUSS mit BREAKING CHANGE synonym bleiben, wenn es als Symbolwort in der Fußzeile benutzt wird.

## Warum konventionelle Commits?

* Automatisch generierende CHANGELOGs.
* Automatisches Ermitteln einer semantischen Versionserhöhung (basierend auf den eingestellten Commit-Typen).
* Kommunikation der Art von Änderungen an Teamkollegen, die Öffentlichkeit und andere Stakeholder.
* Auslösen von Build- und Veröffentlichungsprozessen.
* Erleichtern Sie es Leuten, einen Beitrag zu Ihren Projekten zu leisten, indem Sie ihnen ermöglichen, einen strukturierteren Commit-Verlauf zu erkunden.

## FAQ

### Wie soll ich in der ersten Entwicklungsphase mit Commit-Nachrichten umgehen?

Wir empfehlen so zu verfahren, als ob Sie das Produkt bereits freigegeben hätten. In der Regel verwendet _jemand_ Ihre Software, auch wenn es sich nur um Ihre Kollegen handelt. Diese werden wissen wollen, was repariert ist, was kaputt geht usw.

### Sind Typen im Commit-Titel in Groß- oder Kleinbuchstaben?

Das ist ganz Ihnen überlassen, aber seien Sie dabei konsequent.

### Was mache ich, wenn der Commit mehr als einem der Commit-Typen entspricht?

Gehen Sie zurück und führen Sie nach Möglichkeit mehrere Commits durch. Ein Vorteil von konventionellen Commits ist, dass wir besser organisierte Commits und Pull Requests durchführen können.

### Verhindert dies nicht eine rasche Entwicklung und schnelle Iteration?

Es verhindert sich auf unorganisierte Weise schnell voranzubewegen. Es hilft Ihnen dabei, sich langfristig und schnell über mehrere Projekte mit unterschiedlichen Mitwirkenden hinweg zu bewegen.

### Könnten konventionelle Commits Entwickler dazu veranlassen, die Art der Commits zu begrenzen, die sie machen, weil sie in den zur Verfügung gestellten Typen denken werden?

Konventionelle Commits ermutigen uns, bestimmte Arten von Commits wie z. B. Fixes zu verwenden. Abgesehen davon ermöglicht die Flexibilität der konventionellen Commits Ihrem Team, eigene Typen zu entwickeln und diese Typen im Laufe der Zeit zu ändern.

### In welcher Beziehung steht dies zu SemVer?

Commits vom Typ `fix` sollten wie `PATCH` Releases behandelt werden. Commits vom Typ `feat` sollten wie `MINOR` Releases behandelt werden. Commits mit `BREAKING CHANGE` in den Commits sollten unabhängig vom Typ wie `MAJOR` Releases behandelt werden.

### Wie soll ich meine Erweiterungen der konventionellen Commit Spezifikation versionieren, z. B. `@jameswomack/conventional-commit-spec`?

Wir empfehlen die Verwendung von SemVer, um Ihre eigenen Erweiterungen für diese Spezifikation zu veröffentlichen (und begrüßen es, diese Erweiterungen vorzunehmen!)

### Was mache ich, wenn ich versehentlich den falschen Commit-Typ verwende?

#### Wenn Sie einen Typ verwendet haben, der der Spezifikation, aber nicht dem richtigen Typ entspricht, z. B. `fix` statt `feat`

Vor dem Mergen oder Freigeben des Fehlers wird empfohlen, mit `git rebase -i` die Commit Historie zu bearbeiten. Nach der Veröffentlichung ist die Bereinigung je nach den verwendeten Tools und Prozessen unterschiedlich.

#### Wenn Sie einen Typ verwendet haben, der *nicht* der Spezifikation entspricht, z. B. `feet` statt `feat`

Im schlimmsten Fall ist es nicht das Ende der Welt, wenn ein Commit nicht der konventionellen Commit Spezifikation entspricht. Dies bedeutet lediglich, dass der Commit nicht von Tools erfasst wird, die sich an die Spezifikation halten.

### Müssen alle meine Mitwirkenden die konventionelle Commit Spezifikation verwenden?

Nein! Wenn Sie einen Squash-basierten Workflow auf Git benutzen, können Lead Maintainer die Commit-Nachrichten beim Mergen bereinigen — ohne gelegentlichen Committern zusätzliche Arbeit aufzubürden.
Ein üblicher Workflow hierfür ist, dass Ihr Git-System automatisch Commits aus einem Pull Request squasht und dem Lead Maintainer ein Formular vorlegt, in dem er die richtige Git-Commit-Nachricht für den Merge eingibt.

### Wie geht Conventional Commits mit Revert Commits um?

Das Zurücksetzen von Code kann kompliziert sein: Setzen Sie mehrere Commits zurück? Wenn Sie ein Feature zurücksetzen, sollte die nächste Version stattdessen ein Patch sein?

Konventionelle Commits bemühen sich nicht explizit, das Wiederherstellungsverhalten zu definieren. Stattdessen überlassen wir es den Autoren, die Flexibilität von _Typen_ und _Fußzeilen_ zu nutzen, um ihre Logik für die Behandlung von Reverts zu entwickeln.

Eine Empfehlung wäre, den `revert` Typ und eine Fußzeile zu verwenden, die auf die zurückgesetzten Commit-SHAs verweist:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## Über

Die Spezifikation für konventionelle Commits ist von den [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) inspiriert und basiert stark auf diesen.

Der erste Entwurf dieser Spezifikation wurde in Zusammenarbeit mit einigen der folgenden Personen verfasst:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): Eine Reihe von Tools zum Parsen konventioneller Commits aus Git-Protokollen.
* [bumped](https://bumped.github.io): Ein Tool zum Freigeben von Software, mit dem Aktionen vor und nach dem Freigeben einer neuen Version Ihrer Software einfach ausgeführt werden können.
* [unleash](https://github.com/netflix/unleash): Ein Tool zur Automatisierung der Softwareversion und des Veröffentlichungslebenszyklus.
* [lerna](https://github.com/lerna/lerna): ein Tool zur Verwaltung von Monorepos, das aus dem Babel-Projekt hervorgegangen ist.

## Werkzeuge für konventionelle Commits

* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): folgt der Spezifikation, um Versionen zu verwalten und automatisch ein Changelog zu generieren
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Ein Tool, das entwickelt wurde, um Commit-Nachrichten gemäß den konventionellen Commit-Spezifikationen zu erstellen.
Konfigurierbar und verwendbar für PHP-Projekte als Composer-Abhängigkeit oder global für Nicht-PHP-Projekte
* [conform](https://github.com/autonomy/conform): Ein Tool, mit dem Richtlinien für Git-Repositories, einschließlich konventioneller Commits, durchgesetzt werden können.
* [standard-version](https://github.com/conventional-changelog/standard-version): Automatische Versionierung und CHANGELOG-Verwaltung mit der neuen Squash-Schaltfläche von GitHub und dem empfohlenen Workflow für konventionelle Commits.
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Unterstützung für _konventionelle Commits_ für [JetBrains-Editoren](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
* [commitsar](https://github.com/commitsar-app/commitsar): In Go geschriebenes Tool, um zu überprüfen, ob die Commits für einen Branch konventionellen Commits entsprechen. Kommt mit Docker-Image für CI-Anwendungen.
* [semantic-release](https://github.com/semantic-release/semantic-release): Ein Tool, das den gesamten Workflow für die Paketfreigabe automatisiert, einschließlich: Ermitteln der nächsten Versionsnummer, Generieren der Versionshinweise und Veröffentlichen des Pakets.
* [Semantic Commit Generator](https://jadsonlucena.github.io/semantic-commit-generator/): Ein praktischer Generator zum Erstellen standardisierter semantischer Commits.

## Projekte, die konventionelle Commits benutzen

* [yargs](https://github.com/yargs/yargs): Der allseits beliebte Piraten-Parser für Befehlszeilenargumente.
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): eine Sammlung von Open-Source-Tools und -Bibliotheken, mit denen Sie Ihren JavaScript-Tests Testabdeckung hinzufügen können.
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) und [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Optionale zusätzliche Benutzeroberfläche zur Verbesserung von [Apereo uPortal](https://www.apereo.org/projects/uportal).
* [massive.js](https://github.com/dmfay/massive-js): Eine Datenzugriffsbibliothek für Node und PostgreSQL.
* [electron](https://github.com/electron/electron): Erstellen Sie plattformübergreifende Desktop-Apps mit JavaScript, HTML und CSS.
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Ein einfach zu verwendendes Scroll-Utility-Paket zum Zentrieren von Elementen und für flüssige Animationen.
* [Blaze UI](https://github.com/BlazeUI/blaze): Framework-freies Open Source UI-Toolkit.
* [Monica](https://github.com/monicahq/monica): Ein Open Source Personal Relationship Management System.
* [mhy](https://mhy.js.org): Eine konfigurationsfreie, sofort einsatzbereite, Mehrzweck-Toolbox und Entwicklungsumgebung.
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Monorepo mit ~100 TypeScript-Projekten für die datengetriebene Entwicklung.
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 Eine verbesserte Yii2-App-Vorlage.
* [dcyou/resume](https://github.com/dcyou/resume): 😎 Vorlage zur einfachen und schnellen Erstellung Ihres Online-Lebenslaufs.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_Möchten Sie Ihr Projekt auf dieser Liste haben?_ [Senden Sie einen Pull Request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
