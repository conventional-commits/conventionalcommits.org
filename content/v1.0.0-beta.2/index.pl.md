---
draft: false
aliases: ["/pl/"]
---

# Konwencjonalne Commity 1.0.0-beta.2

## Streszczenie

Jako opiekun otwartych źródeł, spłaszczaj (squashuj) gałęzie funkcyjne (featurowe) do gałęzi głównej - `master`
oraz pisz ustandaryzowane opisy dostarczeń (commitów).

Opis dostarczenia powinien wyglądać następująco:

---

```
<typ>[opcjonalny zakres]: <opis>

[opcjonalne ciało wiadomości]

[opcjonalna stopka wiadomości]
```
---

<br />
Wiadomość zawiera następujące strukturalne elementy po to, aby zakomunikować intencje
do użytkowników Twojej biblioteki:

1. **fix:** dostarczenie _typu_ `fix` naprawia błąd obecny w Twoim kodzie (powiązane z [`PATCH`](http://semver.org/#summary) w wersjonowaniu semantycznym).
1. **feat:** dostarczenie _typu_ `feat` wprowadza nowe funkcje do Twojej biblioteki (powiązane z [`MINOR`](http://semver.org/#summary) w wersjonowaniu semantycznym).
1. **BREAKING CHANGE:** dostarczenie, które posiada tekst `BREAKING CHANGE:` na początku jego opcjonalnego ciała bądź stopki wprowadza zmianę łamiącą kompatybilność API (powiązane z [`MAJOR`](http://semver.org/#summary) w wersjonowaniu semantycznym). Zmiana łamiąca kompatybilność wsteczną może być elementem zmian każdego innego _typu_, np. `fix:`, `feat:` & `chore:` - wszystkie byłyby poprawne, w dodatku do każdego innego _typu_.
1. Inne: commity _typu_ innego niż `fix:` oraz `feat:` są dozwolone, np. [commitlint-config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional) (bazowano na [konwencji Angulara](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) poleca `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, oraz inne. My polecamy także `improvement` dla dostarczeń, które ulepszają obecną implementację bez dodawania nowych funkcjonalności lub naprawy błędów. Zauważ, że te typy nie są obowiązkowe według specyfikacji konwencjonalnych commitów i nie mają wpływu na wersjonowanie (chyba, że zawierają BREAKING CHANGE, co NIE JEST rekomendowane).
<br />
Przy typie dostarczenia może zostać podany zakres w celu dostarczenia dokładniejszej informacji o kontekście dostarczenia.
Zawiera się on w nawiasach następujących bezpośrednio po typie, np. `feat(parser): dodano możliwość parsowania list`.

## Przykłady

### Commit z opisem oraz zmianą niekomatybilną wstecz (BREAKING CHANGE)
```
feat: pozwól dostarczonemu obiektowi konfiguracyjnemu na rozszerzanie innych konfiguracji

BREAKING CHANGE: klucz `extends` w pliku konfiguracyjnym jest teraz używany do rozszerzania innych konfiguracji
```

### Commit bez ciała wiadomości
```
docs: poprawniono pisownię w CHANGELOG
```

### Commit z określonym zakresem
```
feat(lang): dodano język polski
```

### Commit dostarczenia naprawiającego buga określonego w raporcie błędu (issue) o (opcjonalnym) numerze
```
fix: kilka literówek w kodzie

po więcej szczegółów udaj się do raportu błędu

fixes issue #12
```

## Wprowadzenie

Podczas rozwoju oprogramowania zauważyłem, że błędy często występują na granicy
pomiędzy aplikacjami. Testy jednostkowe doskonale zdają egzamin w przypadkach, o których
opiekun biblioteki pomyślał, jednak sposoby, w jakich oprogramowanie zostanie użyte
przez społeczność często, choć interesujące mogą być nie do pomyślenia.
Tutaj testy jednostkowe niezbyt zdają egzamin.

Każdy, kto kiedykolwiek zaktualizował zależność swojej aplikacji, chociażby o jedną wersję _patch_,
tylko po to, aby zobaczyć, jak jego aplikacja zaczyna rzucać 500 błędami, wie,
jak ważną rolę stanowi czytelna historia dostarczeń (oraz dodatkowo [dobrze zarządzany DZIENNIK ZMIAN (CHANGELOG)](http://keepachangelog.com/en/0.3.0/))
podczas naprawy.

Specyfikacja Konwencjonalnych Commitów proponuje wprowadzenie ustandaryzowanej, lekkiej
konwencji wykorzystującej wiadomości w dostarczeniach. Konwencja ta łączy się z [SemVer](http://semver.org),
nakazując deweloperom opisywanie w wiadomościach podczas dostarczania jakie funkcje wprowadzają, co naprawiają
oraz jakie niekompatybilne wstecz zmiany wnoszą.

Wprowadzając tę konwencję, tworzymy powszechny język, który pozwala na dużo łatwiejsze
wyłapywanie błędów występujących na granicy projektu z jego zależnościami.

## Specyfikacja

Następujące terminy “MUSI” (“MUST”), “NIE MOŻE” (“MUST NOT”), “WYMAGANY” (“REQUIRED”), “MA BYĆ” (“SHALL”), “NIE BĘDZIE” (“SHALL NOT”), “POWINIEN” (“SHOULD”), “NIE POWINIEN” (“SHOULD NOT”), “ZALECANY” (“RECOMMENDED”), “MOŻE” (“MAY”) oraz “OPCJONALNY” (“OPTIONAL”) pojawiające się w tym dokumencie rozumiane są zgodnie z ich opisem na stronie: [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Dostarczenie MUSI być poprzedzone typem, który składa się z rzeczownika, np. `feat`, `fix`, itp.,
oraz następującymi bezpośrednio po nim dwukropka oraz spacji.
1. Typ `feat` MUSI być użyty, gdy dostarczenie dodaje nową funkcję do Twojej aplikacji bądź biblioteki.
1. Typ `fix` MUSI być użyty, kiedy dostarczenie naprawia błąd w Twojej aplikacji.
1. Opcjonalny zakres MOŻE być podany po typie. Zakres jest to fraza opisująca obszar kodu zawarta w nawiasach okrągłych, np., `fix(parser):`
1. Opis MUSI występować zaraz po przedrostku typu/zakresu.
Opis jest to krótka notka stanowiąca o treści dostarczenia, np.,
_fix: problem podczas parsowania listy, kiedy string zawierał wiele spacji._
1. Dłuższe ciało wiadomości MOŻE być podane po krótkim opisie. Ciało MUSI zaczynać się jedną pustą linię po opisie.
1. Stopka MOŻE być podane jedną linię za ciałem wiadomości. Stopka POWINNA zawierać dodatkowe informacje odnośnie zgłoszeń błędów lub propozycji funkcjonalności, które rozwiązuje, np. `fixes #13, #5`.
1. Zmiany niekompatybilne wstecz MUSZĄ być zaznaczone na samym początku sekcji ciała wiadomości lub stopki. Informacja o niekompatybilności MUSI zawierać tekst `BREAKING CHANGE`, wraz z następującymi po nim dwukropkiem oraz spacją.
1. Po tekście `BREAKING CHANGE: ` MUSI następować opis mówiący o tym, co zostało zmienione w kodzie w sposób, który niszczy kompatybilność wstecz,
np. _BREAKING CHANGE: zmienne środowiskowe mają teraz większy priorytet niż pliki konfiguracyjne._
1. Stopka powinna zawierać tylko i wyłącznie `BREAKING CHANGE`, linki zewnętrzne, odnośniki do raportów błędów oraz inne meta-informacje.
1. Typy inne niż `feat` oraz `fix` MOGĄ być użyte w wiadomościach Twoich dostarczeń.

## Dlaczego używać Konwencjonalnych Commitów

* Automatycznie generowany DZIENNIK ZMIAN.
* Automatycznie wykrywana zmiana semantycznej zmiany wersji (określana na podstawie typów dostarczonych zmian)
* Komunikowanie zmian członkom zespołu, publice, oraz innym zainteresowanym.
* Wyzwalanie procesów budowania oraz publikacji.
* Łatwiejsze włączenie się w rozwój kodu przez ludzi z zewnątrz poprzez pozwolenie im na przeglądanie
bardziej zorganizowanej historii dostarczeń.

## FAQ

### Jak powinienem radzić sobie z wiadomościami dostarczeń w fazie początkowej rozwoju kodu?

Polecamy, żebyś postępował tak, jakby Twój produkt już został wydany. Zazwyczaj *ktoś*, nawet jeśli jest to Twój kolega z zespołu, już
używa Twojego oprogramowania. Będzie chciał wiedzieć, co zostało naprawione, co nie działa itp.

### Co powinienem zrobić, jeśli dostarczenie pasuje do więcej niż jednego typu?

Wróć się i stwórz więcej dostarczeń, jeśli to tylko możliwe. Częściową korzyścią z Konwencjonalnych Commitów jest zdolność do tworzenia kodu
w bardziej zorganizowany sposób.

### Czy takie podejście nie zniechęca do szybkiego rozwoju oraz szybkich iteracji?

Zniechęca do szybkiego poruszania się do przodu w niezorganizowany sposób. Pozwala Ci na szybkie posuwanie się do przodu w wielu projektach oraz
różnorodnych deweloperów.

### Czy Konwencjonalne Commity mogą prowadzić do zmniejszenia ilości typów dostarczanych przez deweloperów, ponieważ będą myśleć w przestrzeni wymienionych typów?

Konwencjonalne Commity zachęcają do tworzenia większej ilości dostarczeń danego typu, np. napraw. Z innego punktu widzenia, elastyczność
Konwencjonalnych Commitów pozwala Twojemu zespołowi stworzyć własne typy oraz zmieniać je z biegiem czasu.

### Jak jest to powiązane z SemVer?

Wiadomości typu `fix` powinny być traktowane tak jak `PATCH`. Wiadomości typu `feat` tak jak `MINOR`, natomiast dostarczenia zawierające `BREAKING CHANGE`, bez względu na typ, powinny być traktowane jak `MAJOR`.

### Jak powinienem wersjonować moje rozszerzenia zgodnie ze specyfikacją Konwencjonalnych Commitów, np. `@jameswomack/conventional-commit-spec`?

Zalecamy używanie SemVer do wydawania własnych rozszerzeń do tej specyfikacji (oraz zachęcamy do tworzenia tych rozszerzeń!).

### Co powinienem zrobić, jeśli przypadkowo użyje błędnego typu dostarczenia?

#### Jeśli użyłeś typu, który znajduje się w specyfikacji, ale nie jest poprawny, np. `fix` zamiast `feat`

Przed dostarczeniem i wydaniem pomyłki, polecamy użyć `git rebase -i` w celu zmienienia historii dostarczeń. Zmiana po dostarczeniu zależy od narzędzi oraz procesów, których używasz.

#### Jeśli użyłeś typu, który *nie* znajduje się w specyfikacji, np. `feet` zamiast `feat`

W najgorszym przypadku - to nie koniec świata, jeśli dostarczenie niespełniające specyfikacji Konwencjonalnych Commitów zostanie wprowadzone.
Po prostu znaczy to, że będzie pominięty przez narzędzia bazujące na specyfikacji.

### Czy wszyscy moi kontrybutorzy muszą używać specyfikacji Konwencjonalnych Commitów?

Nie! Jeśli używasz trybu bazującego na spłaszczaniu historii dostarczeń, wtedy główni opiekunowie projektu mogą posprzątać wiadomości
podczas dostarczania. Takie podejście nie narzuca żadnego obowiązku na osoby dostarczające od czasu do czasu. Powszechnym podejściem
jest używanie automatycznego spłaszczania historii dostarczeń z prośby wciągnięcia (pull request) oraz wyświetlenie formularza osobie dostarczającej w celu wypełnienia wiadomości poprawną treścią.
