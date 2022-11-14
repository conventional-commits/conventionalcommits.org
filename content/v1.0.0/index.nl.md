---
draft: false
aliases: ["/nl/"]
---

# Conventionele Commits 1.0.0

## Samenvatting

De Conventionele Commits-specificatie is een eenvoudige conventie gebaseerd op commit-berichten.
Het biedt een eenvoudige set regels voor het maken van een gestructureerde commit-geschiedenis;
waardoor het gemakkelijker wordt om er geautomatiseerde tools op te baseren.
Deze conventie sluit naadloos aan bij [SemVer](http://semver.org)
door nieuwe functies, correcties en wijzigingen in commit-berichten te beschrijven.

Het commit-bericht moet als volgt zijn gestructureerd:

---

```
<type>[optioneel domein]: <omschrijving>

[optioneel uitgebreide omschrijving]

[optioneel voettekst(en)]
```

---

<br />
Het commit-bericht bevat de volgende structurele elementen om de uitwerking te communiceren met de
gebruikers van de applicatie/bibliotheek:

1. **fix:** een commit met _type_ `fix` patcht een bug in de codebase (dit correleert
   met [`PATCH`](http://semver.org/#summary) in Semantic Versioning).
2. **feat:** een commit met _type_ `feat` introduceert een nieuwe functie in de codebase (dit correleert
   met [`MINOR`](http://semver.org/#summary) in Semantic Versioning).
3. **BREAKING CHANGE:** een commit met de voettekst `BREAKING CHANGE:`, of met een `!` direct na type/domein,
   introduceert een brekende API-wijziging (correlerend met [`MAJOR`](http://semver.org/#summary) in Semantic
   Versioning).
   Een BREAKING CHANGE kan altijd onderdeel van een commit-bericht, ongeacht het _type_.
4. _typen_ anders dan `fix:` en `feat:` zijn toegestaan. Zo
   adviseert [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
   (gebaseerd op
   de [de Angular-conventie](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines))
   het gebruik van `build:`, `chore: `,
   `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` en meer.
5. _voettekst(en)_ anders dan `BREAKING CHANGE: <omschrijving>` kunnen worden toegepast volgens een conventie
   vergelijkbaar met die van
   [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Additionele typen zijn niet verplicht volgens de Conventionele Commits-specificatie en hebben geen direct effect in
Semantic Versioning (tenzij ze een BREAKING CHANGE bevatten).
<br /><br />
Een domein kan worden meegegeven aan het _type_ van een commit om aanvullende contextuele informatie te verschaffen en
dient, direct achter het _type_ en tussen haakjes, geplaatst te worden,
bijv. `feat(parser): add ability to parse arrays`.

## Voorbeelden

### Commit-bericht met omschrijving en BREAKING CHANGE als voettekst

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit-bericht met `!` om een breaking change uit te lichten

```
feat!: send an email to the customer when a product is shipped
```

### Commit-bericht inclusief domein en een `!` om een breaking change uit te lichten

```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit-bericht met zowel een `!` als BREAKING CHANGE in de voettekst

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit-bericht zonder uitgebreide omschrijving

```
docs: correct spelling of CHANGELOG
```

### Commit-bericht inclusief domein

```
feat(lang): add Polish language
```

### Commit-bericht met meerdere paragrafen in de uitgebreide omschrijving en meerdere voetteksten

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specificatie

De woorden "MOET", "MOGEN NIET", "VEREIST", "ZAL", "ZAL NIET", "ZOU", "ZOU NIET", "AANBEVOLEN", "MAG" en "OPTIONEEL" in
dit document zijn te interpreteren zoals beschreven in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Een commit-bericht MOET starten met het type, dat bestaat uit een zelfstandig naamwoord, `feat`, `fix`, enz., gevolgd
   door een OPTIONEEL domein, OPTIONEEL `!` en VEREIST een dubbele punt en spatie.
2. Het type `feat` MOET gebruikt worden wanneer een commit een nieuwe functie toevoegt aan de applicatie/bibliotheek.
3. Het type `fix` MOET worden gebruikt wanneer een commit een bugfix in de codebase vertegenwoordigt.
4. Een domein MAG na een type worden opgegeven. Een domein MOET bestaan uit een zelfstandig naamwoord dat een
   gedeelte van de codebase, omgeven door haakjes, bijv. `fix(parser):` omvat.
5. Een omschrijving MOET opgegeven worden direct na de dubbele punt + spatie na het type/domein.
   De omschrijving is een korte samenvatting van de wijzigingen, bijv. _fix: array parsing issue when multiple spaces
   were contained in string_.
6. Een uitgebreide omschrijving MAG worden opgegeven voor aanvullende contextuele informatie over de wijzigingen. De
   uitgebreide omschrijving MOET één lege regel laten tussen de regel met het type/domein en de (korte) omschrijving.
7. De uitgbreide omschrijving is een veld dat MAG bestaan uit een willekeurig aantal, door lege regels gescheiden,
   alinea's.
8. Een voettekst (meedere toegestaan) MAG, na één lege regel achter de uitgebreide omschrijving, worden opgegeven. Elke
   voettekst MOET bestaan uit
   een kenmerk, gevolgd door `:<spatie>` of `<spatie>#`, gevolgd door een tekenreeks (dit is geïnspireerd op de
   [git trailer-convention](https://git-scm.com/docs/git-interpret-trailers)).
9. Een kenmerk van een voettekst MOET `-` gebruiken in plaats van spatie, bijv. `Acked-by` (dit helpt bij het
   onderscheiden
   het voettekstgedeelte en een uitgebreide omschrijving met meerdere alinea's). Een uitzondering wordt gemaakt
   voor `BREAKING CHANGE`, dat ook als kenmerk MAG worden gebruikt.
10. De tekenreeks van een voettekst MAG spaties en nieuwe regels bevatten en d.m.v. parsing MOET de volgende geldige
    voettekst (kenmerk/tekenrekens combinatie) worden waargenomen.
11. Brekende wijzigingen MOETEN worden opgegeven in het type/domein-voorvoegsel van een commit-bericht of als een
    geldige regel in de voettekst.
12. Indien opgegeven in de voettekst, MOET een brekende wijziging bestaan uit de tekst BREAKING CHANGE in hoofdletters,
    gevolgd door een dubbele punt, spatie en een omschrijving, bijv.
    _BREAKING CHANGE: environment variables now take precedence over config files_.
13. Indien opgegeven in het type/domein-voorvoegsel, MOET een brekende wijziging worden aangegeven met een `!` direct
    voor de `:`. Als `!` wordt gebruikt, MAG `BREAKING CHANGE:` worden weggelaten uit het voettekstgedeelte
    en de uigebreide omschrijving MOET worden gebruikt om de brekende wijziging te beschrijven.
14. Een ander type dan `feat` of `fix` MAG worden gebruikt in het commit-bericht, bijv. _docs: updated ref docs._
15. De elementen waaruit Conventionele Commits is opgebouwd, MOGEN NIET worden beschouwd als hoofdlettergevoelig,
    met uitzondering van BREAKING CHANGE, dat in hoofdletters geschreven MOET worden.
16. BREAKING-CHANGE MOET een synoniem zijn voor BREAKING CHANGE wanneer gebruikt als een kenmerk in een voettekst.

## Waarom Conventionele Commits gebruiken

* Automatisch CHANGELOG's genereren.
* Automatisch bepalen van een semantic version bump (gebaseerd op typen van commits).
* Communiceren van veranderingen aan collega's, het publiek en andere belanghebbenden.
* Activeren van build- en publish-processen.
* Het voor andere mensen gemakkelijker maken om bij te dragen aan projecten d.m.v. inzage in een gestructureerdere
  commit-geschiedenis.

## Veel gestelde vragen

### Hoe moet ik omgaan met commit-berichten in de initiële ontwikkelingsfase?

We raden aan te werk te gaan alsof het product al is uitgebracht. Doorgaans gebruikt *iemand*, al zijn het slechts
collega's, de software al. Zij willen weten wat er is aangepast, wat (nog) niet werkt, enz.

### Zijn de typen in de titel van een commit-bericht hoofdletters of kleine letters?

Elke vorm kan worden gebruikt, al het is verstandig om hier consistent in te zijn.

### Wat moet ik doen als een commit valt onder meer dan een van de commit-typen?

Ga terug en maak waar mogelijk meerdere commits. Het voordeel van het gebruik van Conventionele Commits is het vermogen
om ons ertoe aan te zetten meer georganiseerde commits en PR's te maken.

### Ontmoedigt dit snelle ontwikkeling en snelle iteratie niet?

Het ontmoedigt snel te ontwikkelen op een ongeorganiseerde manier. Het helpt juist om op lange termijn snel over
meerdere
projecten, met verschillende bijdragers, te ontwikkelen.

### Kunnen Conventionele Commits ertoe kunnen leiden dat ontwikkelaars beperkte type commits maken omdat ze zullen denken in de beschikbare typen?

Conventionele Commits moedigt aan om meer van bepaalde typen commits te maken, zoals fixes. Afgezien daarvan stelt
de flexibiliteit van Conventionele Commits een team in staat om eigen typen te bedenken en deze in de loop van de tijd
te veranderen.

### Hoe verhoudt dit zich tot SemVer?

Commits van het type `fix` moeten worden vertaald naar `PATCH`-releases. Commits van het type `feat` moeten worden
vertaald naar releases van het type `MINOR`. Commits met `BREAKING CHANGE` in het commit-bericht, ongeacht het type,
moeten worden
vertaald naar `MAJOR`-releases.

### Hoe moet ik mijn extensies aanpassen aan de Conventionele Commits-specificatie, bijv. `@jameswomack/conventional-commit-spec`?

We raden aan om SemVer te gebruiken om eigen extensies voor deze specificatie uit te brengen (en
moedigen je aan om deze extensies te maken!)

### Wat moet ik doen als ik per ongeluk het verkeerde type commit gebruik?

#### Als je een type hebt gebruikt dat voldoet aan de specificaties, maar niet het juiste type, bijv. `fix` in plaats van `feat`

Voor het mergen of openbaar maken van deze foutieve commit, raden we aan om `git rebase -i` te gebruiken om de
commit-geschiedenis te bewerken.

#### Wanneer je een type gebruikt hebt dat *niet* tot de specificatie behoort, bijv. `feet` in plaats van `feat`

Het is niet het einde van de wereld als een commit niet volledig voldoet aan de Conventionele Commit-specificatie.
Dit kan echter wel betekenen dat commits worden gemist door (automatische) tools die zijn gebaseerd op de specificatie.

### Moeten al mijn bijdragers de Conventionele Commit-specificatie gebruiken?

Nee! Als je een op squash gebaseerde workflow van git gebruikt, kunnen maintainers de commit-berichten opschonen
wanneer ze deze mergen. Dit vereist geen aanpassing en/of extra werk van bijdragers.
Een veelgebruikte workflow hiervoor is om het git-systeem automatisch commits te laten squashen bij een pull request en
de maintainers een formulier te bieden om het gewenste commit-bericht op te geven om zo de merge te beschrijven.

### Hoe gaat de Conventionele Commits-specificatie om met teruggedraaide commits?

Het terugdraaien van code kan ingewikkeld zijn: draai je meerdere commits terug? Als je een feature terugdraait, moet de
volgende release dan een patch zijn?

De Conventionele Commits-specificatie heeft geen vaste regels m.b.t. het terugdaaien van commits. In plaats daarvan
laten we tooling auteurs vrij om de flexibiliteit van _typen_ en _voettekst(en)_ te gebruiken om eigen regels te ontwikkelen m.b.t. het
terugdraaien van commits.

Een aanbeveling is om het `revert`-type te gebruiken i.c.m. een voettekst die verwijst naar de commit SHA's die worden
teruggedraaid:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
