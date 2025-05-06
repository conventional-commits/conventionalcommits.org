---
draft: false
aliases: ["/pl/"]
---

# Conventional Commits 1.0.0

## Podsumowanie

Specyfikacja Conventional Commits to lekka konwencja dotycząca wiadomości commitów.
Zapewnia prosty zestaw reguł do tworzenia przejrzystej historii commitów;
co ułatwia budowanie narzędzi automatyzujących na jej podstawie.
Ta konwencja współgra z [SemVer](http://semver.org),
opisując funkcje, poprawki i breaking changes w wiadomościach commitów.

Wiadomość commita powinna być zbudowana w następujący sposób:

---

```
<type>[opcjonalny scope (zakres)]: <opis>

[opcjonalny body (treść)]

[opcjonalny footer (stopka)]
```

---

<br />
Commit zawiera następujące elementy strukturalne, aby przekazać intencję
otrzymującym Twoją bibliotekę:

1. **fix:** commit _typu_ `fix`  naprawia błąd w Twojej bazie kodu (odpowiada [`PATCH`](http://semver.org/#summary) w Semantic Versioning).
2. **feat:** commit _typu_ `feat`  wprowadza nową funkcjonalność do bazy kodu (odpowiada [`MINOR`](http://semver.org/#summary) w Semantic Versioning).
3. **BREAKING CHANGE:** commit, który posiada footer (stopkę) `BREAKING CHANGE:`, lub dodaje `!` po typie/scope (zakres), wprowadza breaking change w API (odpowiada [`MAJOR`](http://semver.org/#summary) w Semantic Versioning). BREAKING CHANGE może być częścią commita dowolnego _typu_.
4. Dozwolone są _typy_ inne niż `fix:` i `feat:`, np. [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (bazujący na [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) zaleca `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` i inne.
5. Dozwolone są footery (stopki) inne niż `BREAKING CHANGE: <opis>`, zgodne z [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Dodatkowe typy nie są wspierane przez specyfikację Conventional Commits i nie mają wpływu na Semantic Versioning (chyba że zawierają BREAKING CHANGE).
<br /><br />
Scope (zakres) może być dodany do typu commita, aby przekazać dodatkowy kontekst i jest umieszczany w nawiasach, np. `feat(parser): add ability to parse arrays`.

## Przykłady

### Commit message z opisem i footerm (stopką) BREAKING CHANGE

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit message z `!` zwracającym uwagę na breaking change

```
feat!: send an email to the customer when a product is shipped
```

### Commit message ze scope (zakresem) i `!` zwracającym uwagę na breaking change

```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit message z `!` i footerm (stopką) BREAKING CHANGE

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit message bez body (treści)

```
docs: correct spelling of CHANGELOG
```

### Commit message ze scope (zakresem)

```
feat(lang): add Polish language
```

### Commit message z wielo-paragrafowym body (treścią) i wieloma footerami (stopkami)

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specyfikacja

Słowa kluczowe „MUSI” („MUST”), „NIE MOŻE” („MUST NOT”), „WYMAGANY” („REQUIRED”), „BĘDZIE” („SHALL”), „NIE BĘDZIE” („SHALL NOT”), „POWINIEN” („SHOULD”), „NIE POWINIEN” („SHOULD NOT”), „ZALECANY” („RECOMMENDED”), „MOŻE” („MAY”) oraz „OPCJONALNY” („OPTIONAL”) w tym dokumencie należy interpretować zgodnie z [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Commity MUSZĄ („MUST”) być poprzedzone typem, który składa się z rzeczownika, np. `feat`, `fix` itd., po którym może wystąpić OPCJONALNY („OPTIONAL”) scope, OPCJONALNY („OPTIONAL”) `!` oraz WYMAGANY („REQUIRED”) dwukropek i spacja.
2. Typ `feat` MUSI („MUST”) być używany, gdy commit dodaje nową funkcjonalność do aplikacji lub biblioteki.
3. Typ `fix` MUSI („MUST”) być używany, gdy commit reprezentuje poprawkę błędu w aplikacji.
4. Scope (zakres) MOŻE („MAY”) być podany po typie. Scope (zakres) MUSI („MUST”) być rzeczownikiem opisującym część bazy kodu, ujętym w nawiasy, np. `fix(parser):`
5. Opis MUSI („MUST”) natychmiast następować po dwukropku i spacji po prefiksie typu/scope (zakres). Opis to krótkie podsumowanie zmian w kodzie, np. _fix: array parsing issue when multiple spaces were contained in string_.
6. Dłuższy body (treść) commita MOŻE („MAY”) być podany po krótkim opisie, dostarczając dodatkowych informacji o zmianach. Body (treść) MUSI („MUST”) zaczynać się jedną pustą linią po opisie.
7. Body (treść) commita jest dowolne i MOŻE („MAY”) składać się z dowolnej liczby akapitów oddzielonych nową linią.
8. Jeden lub więcej footerów (stopek) MOŻE („MAY”) być podanych jedną pustą linią po body (treści). Każdy footer (stopka) MUSI („MUST”) składać się z tokena słownego, po którym następuje separator `:<spacja>` lub `<spacja>#`, a następnie wartość tekstowa (inspirowane [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
9. Token footera (stopki) MUSI („MUST”) używać `-` zamiast spacji, np. `Acked-by` (to pomaga odróżnić sekcję footerów (stopek) od wielo-paragrafowego body (treści)). Wyjątkiem jest `BREAKING CHANGE`, który MOŻE („MAY”) być również użyty jako token.
10. Wartość footera (stopki) MOŻE („MAY”) zawierać spacje i nowe linie, a parsowanie MUSI („MUST”) zakończyć się, gdy napotkany zostanie kolejny poprawny token/separator footera (stopki).
11. Breaking changes MUSZĄ („MUST”) być wskazane w prefiksie typu/scope commita lub jako wpis w footerze.
12. Jeśli breaking change jest podany jako footer, MUSI („MUST”) składać się z wielkich liter BREAKING CHANGE, po których następuje dwukropek, spacja i opis, np. _BREAKING CHANGE: environment variables now take precedence over config files_.
13. Jeśli breaking change jest podany w prefiksie typu/scope, MUSI („MUST”) być oznaczony przez `!` bezpośrednio przed `:`. Jeśli użyto `!`, `BREAKING CHANGE:` MOŻE („MAY”) być pominięty w sekcji footer, a opis commita POWINIEN („SHOULD”) opisywać breaking change.
14. Typy inne niż `feat` i `fix` MOGĄ („MAY”) być używane w wiadomościach commitów, np. _docs: update ref docs._
15. Jednostki informacji składające się na Conventional Commits NIE POWINNY („SHOULD NOT”) być traktowane jako rozróżniające wielkość liter przez implementatorów, z wyjątkiem BREAKING CHANGE, który MUSI („MUST”) być wielkimi literami.
16. BREAKING-CHANGE MUSI („MUST”) być synonimem BREAKING CHANGE, gdy jest używany jako token w footerze.

## Dlaczego warto używać Conventional Commits

* Automatyczne generowanie CHANGELOGów.
* Automatyczne określanie podbicia wersji semantycznej (na podstawie typów commitów).
* Komunikowanie charakteru zmian współpracownikom, społeczności i innym interesariuszom.
* Wyzwalanie procesów budowania i publikacji.
* Ułatwienie osobom z zewnątrz kontrybuowania do projektu poprzez bardziej uporządkowaną historię commitów.

## FAQ

### Jak postępować z wiadomościami commitów w fazie początkowego rozwoju?

Zalecamy traktować projekt tak, jakby był już publicznie wydany. Zazwyczaj _ktoś_ (nawet jeśli to tylko inni programiści) korzysta z Twojego oprogramowania i chce wiedzieć, co zostało naprawione, co się zmieniło, a co może nie działać.

### Czy typy w tytule commita powinny być pisane wielkimi czy małymi literami?

Możesz używać zarówno wielkich, jak i małych liter, ale najważniejsza jest konsekwencja.

### Co zrobić, jeśli commit pasuje do więcej niż jednego typu?

Jeśli to możliwe, rozdziel zmiany na osobne commity. Jedną z zalet Conventional Commits jest zachęcanie do bardziej uporządkowanej historii commitów i pull requestów.

### Czy to nie zniechęca do szybkiego rozwoju i iteracji?

To nie zniechęca do szybkiego rozwoju, ale do nieuporządkowanego działania. W dłuższej perspektywie ułatwia szybki rozwój projektów z wieloma współautorami.

### Czy Conventional Commits mogą ograniczać typy commitów, bo programiści będą myśleć tylko o podanych typach?

Conventional Commits zachęca do częstszego używania niektórych typów commitów, np. `fix`. Poza tym konwencja jest elastyczna – zespół może definiować własne typy commitów i zmieniać je w miarę potrzeb.

### Jaki to ma związek z SemVer?

Commity typu `fix` powinny skutkować wydaniem wersji `PATCH`, typu `feat` – wersji `MINOR`, a commity z `BREAKING CHANGE` (niezależnie od typu) – wersji `MAJOR`.

### Jak wersjonować własne rozszerzenia specyfikacji Conventional Commits?

Zalecamy używanie SemVer do wersjonowania własnych rozszerzeń tej specyfikacji (i zachęcamy do ich tworzenia!).

### Co zrobić, jeśli przez pomyłkę użyję złego typu commita?

* Jeśli użyłeś typu zgodnego ze specyfikacją, ale nieodpowiedniego (np. `fix` zamiast `feat`):  
  Przed mergem lub wydaniem zalecamy użycie `git rebase -i` do edycji historii commitów. Po wydaniu sposób poprawy zależy od używanych narzędzi i procesów.

* Jeśli użyłeś typu *nie*zgodnego ze specyfikacją (np. `feet` zamiast `feat`):  
  W najgorszym przypadku taki commit po prostu nie zostanie uwzględniony przez narzędzia korzystające ze specyfikacji Conventional Commits.

### Czy wszyscy kontrybutorzy muszą stosować Conventional Commits?

Nie! Jeśli korzystasz z workflow opartego na squashowaniu commitów, główni maintainerzy mogą poprawiać wiadomości commitów podczas mergowania – bez dodatkowego obciążenia dla okazjonalnych kontrybutorów. Często system git automatycznie squashuje commity z pull requesta i pozwala maintainerowi wpisać właściwą wiadomość commita podczas scalania.

### Jak Conventional Commits obsługuje commity typu revert?

Revertowanie kodu może być złożone: czy cofamy wiele commitów? Jeśli cofamy funkcję, czy następne wydanie powinno być patch?

Conventional Commits nie określa szczegółowo, jak obsługiwać commity typu revert – pozostawia to narzędziom i autorom logiki. Zalecamy użycie typu `revert` oraz stopki z referencją do SHA commitów, które są cofane:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## Podsumowanie

Specyfikacja Conventional Commits to lekka konwencja dotycząca wiadomości commitów, która zapewnia prosty zestaw reguł do tworzenia przejrzystej historii commitów i ułatwia budowanie narzędzi automatyzujących. Jest zgodna z SemVer, opisując funkcje, poprawki i breaking changes w commitach.
