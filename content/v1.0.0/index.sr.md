---
draft: false
aliases: ["/sr/"]
---

# Conventional Commits 1.0.0

## Summary

Specifikacija Conventional Commits predstavlja laganu konvenciju zasnovanu na porukama commit-ova.
Ona obezbeđuje jednostavan skup pravila za kreiranje eksplicitne istorije commit-ova, što olakšava pisanje automatizovanih alata iznad nje.
Ova konvencija se prirodno uklapa sa [SemVer-om](http://semver.org), jer opisuje funkcionalnosti, ispravke i ključne promene uvedene u commit porukama.

Poruka commita treba da bude strukturirana na sledeći način:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
---

<br />
Commit sadrži sledeće strukturalne elemente, kako bi se jasno komunicirala namera korisnicima vaše biblioteke:

1. **fix:** commit _tipa_ `fix` ispravlja grešku u vašoj bazi koda (odgovara [`PATCH`](http://semver.org/#summary) nivou u Semantic Versioning-u).
2. **feat:** commit _tipa_ `feat` uvodi novu funkcionalnost u kod (odgovara [`MINOR`](http://semver.org/#summary) nivou u Semantic Versioning-u).
3. **BREAKING CHANGE:** commit koji ima fusnotu `BREAKING CHANGE:`, ili dodaje znak `!` nakon type/scope segmenta, uvodi „breaking“ promenu API-ja (odgovara [`MAJOR`](http://semver.org/#summary) nivou u Semantic Versioning-u). BREAKING CHANGE može postojati u commit-ovima bilo kog _tipa_.
4. _tipovi_ osim `fix:` i `feat:` su dozvoljeni; na primer [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (baziran na [Angular konvenciji](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) preporučuje tipove `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, itd.
5. _fusnote_ osim `BREAKING CHANGE: <opis>` su dozvoljene i slede konvenciju sličnu [git trailer formatu](https://git-scm.com/docs/git-interpret-trailers).

Dodatni tipovi nisu obavezni po ovoj specifikaciji i nemaju implicitno značenje u Semantic Versioning-u (osim ako sadrže BREAKING CHANGE).
<br /><br />
Opciona oblast (scope) može biti dodata tipu commit-a kako bi pružila dodatni kontekst, i piše se u zagradi, npr.: `feat(parser): add ability to parse arrays`.

## Primeri

### Commit sa opisom i BREAKING CHANGE fusnotom
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit poruka sa `!` znakom koji ukazuje na breaking promenu
```
feat!: send an email to the customer when a product is shipped
```

### Commit poruka sa scope-om i `!` znakom
```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit poruka sa `!` znakom i BREAKING CHANGE fusnotom
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit poruka bez tela poruke
```
docs: correct spelling of CHANGELOG
```

### Commit poruka sa scope-om
```
feat(lang): add Serbian language
```

### Commit poruka sa multi-paragraf telom i više fusnota
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specifikacija

Ključne reči “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY” i “OPTIONAL” u ovom dokumentu tumače se u skladu sa [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Commit-ovi MORAJU imati prefiks tipa (imenica), kao što su `feat`, `fix` itd., opcionim scope-om, opcionim `!`, i obaveznim dvotačkom i razmakom nakon toga.
2. Tip `feat` se MORA koristiti kada commit dodaje novu funkcionalnost.
3. Tip `fix` se MORA koristiti kada commit ispravlja grešku.
4. Scope MOŽE biti dodat posle tipa. Scope MORA biti imenica koja opisuje deo kodne baze i mora biti u zagradi, npr. `fix(parser):`
5. Opis MORA odmah slediti posle dvotačke i razmaka. Opis je kratak rezime promena koda npr.: _fix: array parsing issue when multiple spaces were contained in string_.
6. Duže telo commit-a MOŽE biti dato posle opisa, pružajući dodatne kontekstualne informacije o promenama koda. Telo MORA početi posle jednog praznog reda.
7. Telo commit-a je slobodnog formata i može sadržati proizvoljan broj pasusa.
8. Jedna ili više fusnota MOŽE biti dodata posle još jednog praznog reda. Svaka fusnota MORA imati token, zatim `:<space>` ili `<space>#`, pa vrednost stringa (inspirisano od strane [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
9. Token fusnota MORA koristiti crticu `-` umesto razmaka, npr., `Acked-by` (ovo pomaže u razlikovanju fusnota od tela koje se sastoji od više pasusa). Izuzetak je napravljen za `BREAKING CHANGE`, koji se takođe MOŽE koristiti kao token.
10. Vrednost fusnote MOŽE sadržati razmake i nove redove; parsiranje MORA da se završi kada se primeti sledeći važeći par tokena/separatora u fusnoti.
11. Breaking promene MORAJU biti naznačene u type/scope prefiksu ili kao fusnota.
12. Ako je uključena kao fusnota, ključna promena MORA da sadrži tekst napisan velikim slovima BREAKING CHANGE, nakon čega slede dvotačka, razmak i opis, npr. _BREAKING CHANGE: environment variables now take precedence over config files_.
13. Ako je u prefiksu (type/scope), ključne izmene MORAJU biti označene znakom `!` pre dvotačke `:`. Ako se koristi znak `!`, MOŽE se izostaviti `BREAKING CHANGE` iz fusnote, a opis izmene se MORA koristiti za opis ključne izmene.
14. Tipovi koji nisu `feat` i `fix` MOGU se koristiti u vašim commit porukama, npr. _docs: update ref docs._
15. Jedinice informacija koje čine konvencionalne commit-ove NE SMEJU biti tretirane kao osetljive na velika i mala slova od strane implementatora, sa izuzetkom BREAKING CHANGE koje MORA biti velikim slovima.
16. BREAKING-CHANGE MORA biti sinonim za BREAKING CHANGE, kada se koristi kao token u fusnoti.

## Zašto koristiti Conventional Commits

* Automatsko generisanje CHANGELOG-ova
* Automatsko određivanje semantičke nadogradnje verzije (na osnovu tipova commit-a).
* Saopštavanje promena kolegama, javnosti i drugim zainteresovanim stranama.
* Okidanje build i publish procesa
* Olakšava doprinos novim saradnicima i održava organizovan commit istorijat.

## Česta pitanja (FAQ)

### Kako da pristupim commit porukama u ranoj fazi razvoja?

Preporučujemo da se ponašate kao da je proizvod već objavljen. Neko već koristi vaš softver i želi da zna šta je ispravljeno i šta se menja.

### Da li tip commit-a u naslovu treba da bude malim ili velikim slovima?

Može bilo kako, ali je najbolje biti dosledan.

### Šta da radim ako commit odgovara više od jednog tipa commit-a?

Vratite se i napravite višestruke commit-ove kad god je to moguće. Deo prednosti Conventional Commits je njihova sposobnost da nas podstaknu da pravimo organizovanije commit-ove i PR-eve.

### Da li ovo usporava razvoj?

Sprečava samo haotično kretanje. Dugoročno ubrzava rad na više projekata sa različitim timovima.

### Da li ovo ograničava programere u izboru tipova?

Conventional Commits nas podstiče da pravimo više određenih vrsta commit-ova, kao što su ispravke. Osim toga, fleksibilnost Conventional Commits omogućava vašem timu da osmisli sopstvene tipove i da ih menja tokom vremena.

### Kako se ovo odnosi na SemVer?

Commit-ovi tipa `fix` treba da se prevedu na izdanja `PATCH`. Commit-ovi tipa `feat` treba da se prevedu na izdanja `MINOR`. Commit-ovi sa `BREAKING CHANGE` u commit-u, bez obzira na tip, treba da se prevedu na izdanja `MAJOR`.

### Kako treba da verzionišem svoje ekstenzije prema specifikaciji Conventional Commits-a, npr. `@jameswomack/conventional-commit-spec`?

Preporučujemo korišćenje SemVer-a za objavljivanje sopstvenih ekstenzija prema ovoj specifikaciji (i ohrabrujemo vas da ih napravite!).

### Šta da radim ako slučajno koristim pogrešan tip commit-a?

#### Kada ste koristili tip koji je iz specifikacije, ali nije ispravan tip, npr. `fix` umesto `feat`

Pre merge-a ili objavljivanja greške, preporučujemo da koristite `git rebase -i` za uređivanje istorije izmena. Nakon objavljivanja, čišćenje će biti drugačije u zavisnosti od alata i procesa koje koristite.

#### Kada ste koristili tip koji *nije* iz specifikacije, npr. `feet` umesto `feat`

U najgorem slučaju, nije kraj sveta ako se commit završi tako što ne ispunjava specifikaciju Conventional Commits-a. To jednostavno znači da će alati zasnovani na toj specifikaciji propustiti taj commit.

### Da li svi moji saradnici moraju da koriste specifikaciju konvencionalnih commit-a?

Ne! Ako koristite tok rada zasnovan na squash-u na Git-u, glavni održavaoci mogu da očiste poruke o commit-ovima dok se merge-uju - bez dodatnog opterećenja za povremene korisnike. Uobičajeni tok rada za ovo je da vaš Git sistem automatski squash-uje commit-ove iz zahteva za pull i predstavi obrazac glavnom održavaocu da unese odgovarajuću Git poruku o commit-ovima za merge.

### Kako Conventional Commits postupaju sa vraćanjem izmena?

Vraćanje koda može biti komplikovano: da li vraćate više izmena (commit)? Ako vraćate funkciju, da li bi sledeće izdanje trebalo da bude zakrpa (patch)?

Conventional Commits ne pokušava izričito da definiše ponašanje prilikom vraćanja izmena (revert). Umesto toga, prepuštamo autorima alata da iskoriste fleksibilnost _types_ i _footers_ kako bi razvili sopstvenu logiku za rukovanje vraćanjem commit‑ova.

Jedna od preporuka je da se koristi tip `revert` i fusnota koji referencira SHA oznake commit‑ova koji se vraćaju:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
