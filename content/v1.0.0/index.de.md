---
draft: false
aliases: ["/de/"]
---

# Konventionelle Commits 1.0.0

## Zusammenfassung

Die Spezifikation für Konventionelle Commits ist eine einfache Konvention, die auf Commit-Nachrichten aufbaut.
Sie enthält einfache Regeln zum Erstellen einer expliziten Commit-Historie;
das macht es einfacher, darauf aufbauend automatisierte Tools zu schreiben.
Diese Konvention knüpft an [SemVer](http://semver.org/lang/de/) an,
indem sie die Funktionen, Fehlerbehebungen und Breaking Changes beschreibt, die in Commit-Nachrichten festgehalten werden.

Die Commit-Nachricht sollte wie folgt aufgebaut sein:

---

```
<Typ>[optionaler Gültigkeitsbereich]: <Beschreibung>

[optionaler Textkörper]

[optionale Fußzeilen]
```
---

<br />
Der Commit enthält die folgenden Strukturelemente, um den Benutzern Ihrer Bibliothek Ihre Absichten mitzuteilen:

1. **fix:** ein Commit des _Typs_ `fix` behebt einen Fehler in Ihrer Codebasis (dies entspricht einem [`PATCH`](http://semver.org/#summary) in der Semantischen Versionierung).
1. **feat:** ein Commit des _Typs_ `feat` führt eine neue Funktion in die Codebasis ein (dies entspricht einem [`MINOR`](http://semver.org/#summary) in der Semantischen Versionierung).
1. **BREAKING CHANGE:** ein Commit mit `BREAKING CHANGE:` in der Fußzeile oder einem angehängten `!` nach dem Typ/Gültigkeitsbereich führt tiefgreifende Änderungen an der API ein (dies entspricht einem [`MAJOR`](http://semver.org/#summary) in der Semantischen Versionierung).
Ein BREAKING CHANGE kann Teil eines Commits jeden _Typs_ sein.
1. Andere _Typen_ als `fix:` und `feat:` sind erlaubt, z. B. empfiehlt [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basierend auf der [Angular-Konvention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` und andere.
1. Andere _Fußzeilen_ als `BREAKING CHANGE: <Beschreibung>` können angegeben werden und folgen einer Konvention, die dem [git-Trailer-Format](https://git-scm.com/docs/git-interpret-trailers) ähnelt.

Zusätzliche Typen sind in der Spezifikation für Konventionelle Commits nicht vorgeschrieben und haben keine impliziten Auswirkungen auf die Semantische Versionierung (sofern sie keinen BREAKING CHANGE enthalten).
<br /><br />
Einem Commit-Typ kann ein Gültigkeitsbereich mitgegeben werden, um zusätzliche kontextbezogene Informationen zu liefern; er steht in Klammern, z. B. `feat(parser): add ability to parse arrays`.

## Beispiele

### Commit-Nachricht mit Beschreibung und Breaking-Change-Fußzeile
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit-Nachricht mit `!`, um auf einen Breaking Change aufmerksam zu machen
```
feat!: send an email to the customer when a product is shipped
```

### Commit-Nachricht mit Gültigkeitsbereich und `!`, um auf einen Breaking Change aufmerksam zu machen
```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit-Nachricht sowohl mit `!` als auch mit BREAKING-CHANGE-Fußzeile
```
feat!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit-Nachricht ohne Textkörper
```
docs: correct spelling of CHANGELOG
```

### Commit-Nachricht mit Gültigkeitsbereich
```
feat(lang): add Polish language
```

### Commit-Nachricht mit mehrteiligem Textkörper und mehreren Fußzeilen
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Spezifikation

Die Schlüsselwörter "MUSS", "DARF NICHT", "ERFORDERLICH", "SOLL", "SOLL NICHT", "SOLLTE", "SOLLTE NICHT", "EMPFOHLEN", "KANN" und "OPTIONAL" in diesem Dokument sind so zu interpretieren, wie in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) beschrieben.

1. Commits MUSS ein Typ vorangestellt werden, der aus einem Nomen besteht, `feat`, `fix` usw., gefolgt
  von einem OPTIONALEN Gültigkeitsbereich, einem OPTIONALEN `!` und einem ERFORDERLICHEN abschließenden Doppelpunkt mit Leerzeichen.
1. Der Typ `feat` MUSS benutzt werden, wenn ein Commit neue Funktionalität zur Applikation oder Bibliothek hinzufügt.
1. Der Typ `fix` MUSS benutzt werden, wenn ein Commit eine Fehlerbehebung für die Applikation darstellt.
1. Ein Gültigkeitsbereich KANN nach einem Typ angegeben werden. Ein Gültigkeitsbereich MUSS aus einem Nomen in Klammern bestehen, das die betroffene Stelle im Code beschreibt, z. B. `fix(parser):`
1. Eine Beschreibung MUSS direkt auf den Doppelpunkt und das Leerzeichen nach dem Typ-/Gültigkeitsbereichs-Präfix folgen.
Die Beschreibung ist eine kurze Zusammenfassung der Code-Änderungen, z. B. _fix: array parsing issue when multiple spaces were contained in string_.
1. Ein längerer Commit-Textkörper KANN nach der Kurzbeschreibung angegeben werden, um weitere kontextbezogene Informationen über die Code-Änderungen zu geben. Der Textkörper MUSS eine Leerzeile nach der Beschreibung beginnen.
1. Der Commit-Textkörper ist formlos und KANN aus einer beliebigen Anzahl an Absätzen bestehen, die durch Zeilenumbrüche getrennt sind.
1. Eine oder mehrere Fußzeilen KÖNNEN eine Leerzeile nach dem Textkörper angegeben werden. Jede Fußzeile MUSS aus
 einem Symbolwort bestehen, gefolgt von einem `:<space>`- oder `<space>#`-Trennzeichen und einem String-Wert (dies ist inspiriert von der
  [git-Trailer-Konvention](https://git-scm.com/docs/git-interpret-trailers)).
1. Das Symbolwort einer Fußzeile MUSS ein `-` anstelle von Leerraumzeichen verwenden, z. B. `Acked-by` (dies hilft,
  den Fußzeilenbereich von einem aus mehreren Absätzen bestehenden Textkörper zu unterscheiden). Eine Ausnahme bildet `BREAKING CHANGE`, das ebenfalls als Symbolwort benutzt werden KANN.
1. Der Wert einer Fußzeile KANN Leerzeichen und Zeilenumbrüche enthalten. Das Parsen MUSS beendet werden, wenn das nächste gültige Paar
  aus Fußzeilen-Symbolwort und Trennzeichen erkannt wird.
1. Breaking Changes MÜSSEN im Typ-/Gültigkeitsbereichs-Präfix eines Commits oder als Eintrag in der
  Fußzeile angegeben werden.
1. Wenn ein Breaking Change als Fußzeile eingefügt wird, MUSS er aus dem großgeschriebenen Text BREAKING CHANGE bestehen, gefolgt von einem Doppelpunkt, einem Leerzeichen und einer Beschreibung, z. B.
_BREAKING CHANGE: environment variables now take precedence over config files_.
1. Wenn ein Breaking Change im Typ-/Gültigkeitsbereichs-Präfix enthalten ist, MUSS er durch ein
  `!` direkt vor dem `:` angegeben werden. Wenn `!` benutzt wird, KANN `BREAKING CHANGE:` in der Fußzeile weggelassen werden,
  und die Commit-Beschreibung SOLL benutzt werden, um den Breaking Change zu beschreiben.
1. Andere Typen als `feat` und `fix` KÖNNEN in Ihren Commit-Nachrichten benutzt werden, z. B. _docs: update ref docs._
1. Bei den Informationseinheiten, aus denen Konventionelle Commits bestehen, DARF von Implementierern NICHT zwischen Groß- und Kleinschreibung unterschieden werden; eine Ausnahme bildet BREAKING CHANGE, das großgeschrieben werden MUSS.
1. BREAKING-CHANGE MUSS synonym zu BREAKING CHANGE sein, wenn es als Symbolwort in einer Fußzeile benutzt wird.

## Warum Konventionelle Commits?

* Automatisches Generieren von CHANGELOGs.
* Automatisches Ermitteln einer semantischen Versionserhöhung (basierend auf den Typen der eingegangenen Commits).
* Kommunikation der Art von Änderungen an Teamkollegen, die Öffentlichkeit und andere Stakeholder.
* Auslösen von Build- und Veröffentlichungsprozessen.
* Erleichterung von Beiträgen zu Ihren Projekten, indem Mitwirkenden ermöglicht wird,
  eine strukturiertere Commit-Historie zu erkunden.

## FAQ

### Wie soll ich in der ersten Entwicklungsphase mit Commit-Nachrichten umgehen?

Wir empfehlen, so zu verfahren, als ob Sie das Produkt bereits freigegeben hätten. In der Regel verwendet *jemand* Ihre Software, auch wenn es sich nur um Ihre Kollegen handelt. Diese werden wissen wollen, was behoben wurde, was nicht mehr funktioniert usw.

### Sind Typen im Commit-Titel in Groß- oder Kleinbuchstaben?

Jede Schreibweise ist möglich, es ist aber am besten, dabei konsistent zu sein.

### Was mache ich, wenn der Commit mehr als einem der Commit-Typen entspricht?

Gehen Sie zurück und führen Sie nach Möglichkeit mehrere Commits durch. Ein Teil des Nutzens von Konventionellen Commits liegt darin, dass sie uns zu besser organisierten Commits und Pull Requests anhalten.

### Hält dies nicht von rascher Entwicklung und schneller Iteration ab?

Es hält davon ab, sich auf unorganisierte Weise schnell zu bewegen. Es hilft Ihnen dabei, langfristig über mehrere Projekte mit unterschiedlichen Mitwirkenden hinweg schnell voranzukommen.

### Könnten Konventionelle Commits Entwickler dazu veranlassen, die Art der Commits zu begrenzen, die sie machen, weil sie in den zur Verfügung gestellten Typen denken werden?

Konventionelle Commits ermutigen uns, mehr Commits bestimmter Typen zu erstellen, z. B. Fehlerbehebungen. Abgesehen davon ermöglicht die Flexibilität der Konventionellen Commits Ihrem Team, eigene Typen zu entwickeln und diese Typen im Laufe der Zeit zu ändern.

### In welcher Beziehung steht dies zu SemVer?

Commits vom Typ `fix` sollten in `PATCH`-Releases übersetzt werden. Commits vom Typ `feat` sollten in `MINOR`-Releases übersetzt werden. Commits, die `BREAKING CHANGE` enthalten, sollten unabhängig vom Typ in `MAJOR`-Releases übersetzt werden.

### Wie soll ich meine Erweiterungen der Spezifikation für Konventionelle Commits versionieren, z. B. `@jameswomack/conventional-commit-spec`?

Wir empfehlen, SemVer zu verwenden, um Ihre eigenen Erweiterungen dieser Spezifikation zu veröffentlichen (und
ermutigen Sie dazu, solche Erweiterungen vorzunehmen!)

### Was mache ich, wenn ich versehentlich den falschen Commit-Typ verwende?

#### Wenn Sie einen Typ verwendet haben, der zwar zur Spezifikation gehört, aber nicht der richtige ist, z. B. `fix` statt `feat`

Vor dem Mergen oder Veröffentlichen des Fehlers empfehlen wir, mit `git rebase -i` die Commit-Historie zu bearbeiten. Nach der Veröffentlichung fällt die Bereinigung je nach den verwendeten Tools und Prozessen unterschiedlich aus.

#### Wenn Sie einen Typ verwendet haben, der *nicht* zur Spezifikation gehört, z. B. `feet` statt `feat`

Im schlimmsten Fall ist es nicht das Ende der Welt, wenn ein Commit nicht der Spezifikation für Konventionelle Commits entspricht. Es bedeutet lediglich, dass dieser Commit von Tools, die auf der Spezifikation basieren, nicht erfasst wird.

### Müssen alle meine Mitwirkenden die Spezifikation für Konventionelle Commits verwenden?

Nein! Wenn Sie in Git einen Squash-basierten Workflow benutzen, können Lead Maintainer die Commit-Nachrichten beim Mergen bereinigen, ohne gelegentlichen Committern zusätzliche Arbeit aufzubürden.
Ein üblicher Workflow hierfür ist, dass Ihr Git-System automatisch Commits aus einem Pull Request squasht und dem Lead Maintainer ein Formular vorlegt, in dem er die richtige Git-Commit-Nachricht für den Merge eingibt.

### Wie gehen Konventionelle Commits mit Revert-Commits um?

Das Zurücksetzen von Code kann kompliziert sein: Setzen Sie mehrere Commits zurück? Wenn Sie eine Funktion zurücksetzen, sollte das nächste Release stattdessen ein Patch sein?

Konventionelle Commits bemühen sich nicht explizit darum, das Verhalten beim Zurücksetzen zu definieren. Stattdessen überlassen wir es den Tool-Autoren,
die Flexibilität von _Typen_ und _Fußzeilen_ zu nutzen, um ihre eigene Logik für den Umgang mit Reverts zu entwickeln.

Eine Empfehlung ist, den Typ `revert` und eine Fußzeile zu verwenden, die auf die zurückgesetzten Commit-SHAs verweist:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

---