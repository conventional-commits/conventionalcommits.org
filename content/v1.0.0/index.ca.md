---
draft: false
aliases: ["/ca/"]
---

# Commits Convencionals 1.0.0

## Resum

L'especificació de Commits Convencionals és una convenció lleugera sobre els missatges de commit.
Proporciona un conjunt senzill de regles per crear un historial de commits explícit,
cosa que facilita escriure eines automatitzades a sobre.
Aquesta convenció encaixa amb [SemVer](http://semver.org),
ja que descriu en els missatges de commit les funcionalitats, les correccions i els canvis incompatibles que s'hi fan.

El missatge de commit ha de tenir l'estructura següent:

---

```
<tipus>[àmbit opcional]: <descripció>

[cos opcional]

[peu(s) opcional(s)]
```
---

<br />
El commit conté els elements estructurals següents, per comunicar la intenció
als consumidors de la teua biblioteca:

1. **fix:** un commit del _tipus_ `fix` corregeix un error al teu codi (això es correspon amb [`PATCH`](http://semver.org/#summary) en el versionat semàntic).
1. **feat:** un commit del _tipus_ `feat` introdueix una funcionalitat nova al codi (això es correspon amb [`MINOR`](http://semver.org/#summary) en el versionat semàntic).
1. **BREAKING CHANGE:** un commit que té un peu `BREAKING CHANGE:`, o que afegeix un `!` després del tipus o de l'àmbit, introdueix un canvi incompatible a l'API (es correspon amb [`MAJOR`](http://semver.org/#summary) en el versionat semàntic).
Un BREAKING CHANGE pot formar part de commits de qualsevol _tipus_.
1. Es permeten _tipus_ diferents de `fix:` i `feat:`; per exemple, [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basat en la [convenció d'Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recomana `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` i altres.
1. Es poden proporcionar _peus_ diferents de `BREAKING CHANGE: <descripció>`, que segueixen una convenció similar al
  [format de tràiler de git](https://git-scm.com/docs/git-interpret-trailers).

L'especificació de Commits Convencionals no imposa tipus addicionals, i aquests no tenen cap efecte implícit en el versionat semàntic (llevat que incloguen un BREAKING CHANGE).
<br /><br />
Es pot afegir un àmbit al tipus d'un commit per aportar informació contextual addicional; va entre parèntesis, p. ex.: `feat(parser): add ability to parse arrays`.

## Exemples

### Missatge de commit amb descripció i peu de canvi incompatible
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Missatge de commit amb `!` per cridar l'atenció sobre un canvi incompatible
```
feat!: send an email to the customer when a product is shipped
```

### Missatge de commit amb àmbit i `!` per cridar l'atenció sobre un canvi incompatible
```
feat(api)!: send an email to the customer when a product is shipped
```

### Missatge de commit amb `!` i peu BREAKING CHANGE
```
feat!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Missatge de commit sense cos
```
docs: correct spelling of CHANGELOG
```

### Missatge de commit amb àmbit
```
feat(lang): add Polish language
```

### Missatge de commit amb cos de diversos paràgrafs i diversos peus
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Especificació

Les paraules clau «HA DE» (MUST), «NO HA DE» (MUST NOT), «OBLIGATORI» (REQUIRED), «HAURÀ DE» (SHALL), «NO HAURÀ DE» (SHALL NOT), «CAL» (SHOULD), «NO CAL» (SHOULD NOT), «RECOMANAT» (RECOMMENDED), «POT» (MAY) i «OPCIONAL» (OPTIONAL) d'aquest document s'han d'interpretar tal com es descriu a l'[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Els commits HAN DE portar un prefix amb un tipus, que consisteix en un nom, `feat`, `fix`, etc., seguit
  de l'àmbit OPCIONAL, el `!` OPCIONAL i els dos punts i l'espai finals OBLIGATORIS.
1. El tipus `feat` HA DE ser utilitzat quan un commit afegeix una funcionalitat nova a l'aplicació o a la biblioteca.
1. El tipus `fix` HA DE ser utilitzat quan un commit representa la correcció d'un error de l'aplicació.
1. POT proporcionar-se un àmbit després d'un tipus. Un àmbit HA DE consistir en un nom que descriga una
  secció del codi, envoltat de parèntesis, p. ex.: `fix(parser):`
1. HA DE haver-hi una descripció immediatament després dels dos punts i l'espai que segueixen el prefix de tipus/àmbit.
La descripció és un resum curt dels canvis al codi, p. ex.: _fix: array parsing issue when multiple spaces were contained in string_.
1. POT proporcionar-se un cos més llarg després de la descripció curta, amb informació contextual addicional sobre els canvis al codi. El cos HA DE començar una línia en blanc després de la descripció.
1. El cos d'un commit és de format lliure i POT constar de qualsevol nombre de paràgrafs separats per salts de línia.
1. POT proporcionar-se un o més peus una línia en blanc després del cos. Cada peu HA DE constar d'un
  token d'una sola paraula, seguit del separador `:<espai>` o `<espai>#`, seguit d'un valor de text (això s'inspira en la
  [convenció de tràilers de git](https://git-scm.com/docs/git-interpret-trailers)).
1. El token d'un peu HA D'UTILITZAR `-` en lloc dels espais en blanc, p. ex.: `Acked-by` (això ajuda a diferenciar
  la secció de peus d'un cos de diversos paràgrafs). Hi ha una excepció per a `BREAKING CHANGE`, que TAMBÉ POT utilitzar-se com a token.
1. El valor d'un peu POT contenir espais i salts de línia, i l'anàlisi HA DE acabar quan s'observe el parell
  token/separador vàlid següent.
1. Els canvis incompatibles HAN D'INDICAR-SE en el prefix de tipus/àmbit d'un commit, o com a entrada al
  peu.
1. Si s'inclou com a peu, un canvi incompatible HA DE consistir en el text en majúscules BREAKING CHANGE, seguit de dos punts, un espai i una descripció, p. ex.:
_BREAKING CHANGE: environment variables now take precedence over config files_.
1. Si s'inclou en el prefix de tipus/àmbit, els canvis incompatibles HAN D'INDICAR-SE amb un
  `!` immediatament abans de `:`. Si s'utilitza `!`, `BREAKING CHANGE:` POT ometre's de la secció de peus,
  i la descripció del commit HAURÀ DE utilitzar-se per descriure el canvi incompatible.
1. POT utilitzar-se en els missatges de commit qualsevol tipus diferent de `feat` i `fix`, p. ex.: _docs: update ref docs._
1. Els implementadors NO HAN DE tractar com a sensibles a majúscules i minúscules les unitats d'informació que componen els Commits Convencionals, amb l'excepció de BREAKING CHANGE, que HA DE anar en majúscules.
1. BREAKING-CHANGE HA DE ser sinònim de BREAKING CHANGE quan s'utilitze com a token en un peu.

## Per què utilitzar Commits Convencionals

* Generació automàtica de CHANGELOGs.
* Determinació automàtica de l'increment de la versió semàntica (a partir dels tipus dels commits integrats).
* Comunicació de la naturalesa dels canvis als companys d'equip, al públic i a altres parts interessades.
* Activació de processos de compilació i publicació.
* Facilitar que la gent contribuïsca als teus projectes, permetent-los explorar
  un historial de commits més estructurat.

## Preguntes freqüents

### Com he de tractar els missatges de commit durant la fase inicial de desenvolupament?

Recomanem que actues com si ja hagueres publicat el producte. Normalment *algú*, encara que siguen els teus companys desenvolupadors, està utilitzant el teu programari. Voldran saber què s'ha corregit, què deixa de funcionar, etc.

### Els tipus del títol del commit van en majúscules o en minúscules?

Es pot utilitzar qualsevol, però és millor ser consistent.

### Què faig si el commit s'ajusta a més d'un dels tipus de commit?

Torna enrere i fes diversos commits sempre que siga possible. Part del benefici dels Commits Convencionals és la capacitat d'empentar-nos a fer commits i PR més organitzats.

### Això no desincentiva el desenvolupament ràpid i la iteració veloç?

Desincentiva avançar ràpid de manera desorganitzada. T'ajuda a poder avançar ràpid a llarg termini en diversos projectes amb col·laboradors diversos.

### Poden els Commits Convencionals fer que els desenvolupadors limiten el tipus de commits que fan perquè pensaran en els tipus proporcionats?

Els Commits Convencionals ens animen a fer més commits d'alguns tipus, com ara correccions. A banda d'això, la flexibilitat dels Commits Convencionals permet que el teu equip definisca els seus propis tipus i els canvie amb el temps.

### Com es relaciona això amb SemVer?

Els commits de tipus `fix` s'han de traduir en versions `PATCH`. Els commits de tipus `feat` s'han de traduir en versions `MINOR`. Els commits amb `BREAKING CHANGE`, siga quin siga el tipus, s'han de traduir en versions `MAJOR`.

### Com he de versionar les meues extensions de l'especificació de Commits Convencionals, p. ex. `@jameswomack/conventional-commit-spec`?

Recomanem utilitzar SemVer per publicar les teues pròpies extensions d'aquesta especificació (i
t'animem a crear-ne!).

### Què faig si accidentalment he utilitzat un tipus de commit incorrecte?

#### Quan has utilitzat un tipus que és de l'especificació però no és el correcte, p. ex. `fix` en lloc de `feat`

Abans d'integrar o publicar l'error, recomanem utilitzar `git rebase -i` per editar l'historial de commits. Després de la publicació, la neteja serà diferent segons les eines i els processos que utilitzes.

#### Quan has utilitzat un tipus que *no* és de l'especificació, p. ex. `feet` en lloc de `feat`

En el pitjor dels casos, no és el final del món que s'integre un commit que no complisca l'especificació de Commits Convencionals. Simplement vol dir que les eines basades en l'especificació passaran aquest commit per alt.

### Han d'utilitzar tots els meus col·laboradors l'especificació de Commits Convencionals?

No! Si utilitzes un flux de treball basat en squash a Git, els responsables principals poden netejar els missatges de commit a mesura que s'integren, sense afegir càrrega de treball als qui fan commits ocasionalment.
Un flux de treball habitual és que el teu sistema git faça squash automàticament dels commits d'una pull request i presente un formulari perquè el responsable principal introduïsca el missatge de commit adequat per a la integració.

### Com gestionen els Commits Convencionals els commits de reversió?

Revertir codi pot ser complicat: estàs revertint diversos commits? Si reverteixes una funcionalitat, la versió següent hauria de ser un patch?

Els Commits Convencionals no fan cap esforç explícit per definir el comportament de les reversions. En lloc d'això, deixen que siguen els autors de les eines els qui aprofiten la flexibilitat dels _tipus_ i els _peus_ per desenvolupar la seua lògica de gestió de reversions.

Una recomanació és utilitzar el tipus `revert` i un peu que referencie els SHA dels commits que es reverteixen:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
