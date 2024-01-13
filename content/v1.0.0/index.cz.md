---
draft: false
aliases: ["/cz/"]
---

# Conventional Commits 1.0.0

## Souhrn

Specifikace Konvenčních Změn je jednoduchá konvence založená na zprávách o změnách.
Poskytuje jednoduchou sadu pravidel pro vytváření strukturované historie změn;
což usnadňuje vytváření automatizovaných nástrojů na jejich základě.
Tato konvence se doplňuje s [SemVer](http://semver.org),
popisem nových funkcí, oprav a změn ve zprávách o revizi.

Zpráva o revizi by měla mít následující strukturu:

---

```
<typ>[volitelná oblast]: <popis>

[volitelné tělo]

[volitelná patička(y)]
```

---

<br />
Zpráva o změně obsahuje následující strukturální prvky, které slouží ke sdělení záměru
uživatelům vaší knihovny/aplikace:

1. **fix:** změna _typu_ `fix` opravuje chybu ve vašem zdrojovém kódu (to koresponduje s [`PATCH`](http://semver.org/#summary) v nástroji Sémantické verzování).
2. **feat:** změna _typu_ `feat` zavádí novou funkci do zdrojového kódu (to koresponduje s [`MINOR`](http://semver.org/#summary) v nástroji Sémantické verzování).
3. **BREAKING CHANGE:** revize, která má v zápatí `BREAKING CHANGE:`, nebo za typ/rozsah přidává `!`, představuje a přelomovou změnu API (to koresponduje s [`MAJOR`](http://semver.org/#summary) v nástroji Sémantické verzování).
   BREAKING CHANGE může být součástí revizí jakéhokoli _typu_.
4. _typy_ jiné než `fix:` a `feat:` jsou povoleny, například. [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (na základě [Angular konvencí](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) doporučuje `build:`, `chore:`,
   `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, a další.
5. _zápatí_ jiné než `BREAKING CHANGE: <description>` mohou být použity podle podobné knovence jako je
   [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Další typy nejsou vyžadovány Specifikací Konvenčních Změn a nemají přímý vliv na Sémantické verzování (pokud neobsahují BREAKING CHANGE).
<br /><br />
K _typu_ revize může být připojena oblast, která poskytuje další kontextové informace a měla by být umístěna přímo za _typem_ a v závorkách, např. `feat(parser): add ability to parse arrays`.

## Příklady

### Zpráva o změně s popisem a zápatím BREAKING CHANGE

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Zprává o změně s `!` upozorňuje na výraznou změnu

```
feat!: send an email to the customer when a product is shipped
```

### Zprává o změně se zaměřením a `!` upozorňuje na výraznou změnu

```
feat(api)!: send an email to the customer when a product is shipped
```

### Zprává o změně s `!` a s patičkou BREAKING CHANGE

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Zprává o změně bez těla

```
docs: correct spelling of CHANGELOG
```

### Zprává o změně se zaměřením

```
feat(lang): add Polish language
```

### Zpráva o změně s několika odstavci a několika patičkami

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specifikace

Klíčová slova “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, a “OPTIONAL” v tomto dokumentu je třeba vykládat tak, jak je popsáno v [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Zprávy o změnách MUSÍ začínat typem, který se skládá z podstatného jména, `feat`, `fix`, etc., následovaným
   VOLITELNÝM zaměřením, VOLITELNÝM `!`, a NUTNOU ukončující dvojtečkou a mezerou.
2. Typ `feat` MUSÍ být použit, pokud změna přidá novou funkci do vaší aplikace nebo knihovny.
3. Typ `fix` MUSÍ být použit, pokud změna opravuje chyby v aplikaci.
4. Zameření MŮŽE být uveden za typem. Zaměření se MUSÍ skládat z podstaného jména popisujícího sekci
   zdrojového kódu ohraničeného závorkami, např., `fix(parser):`
5. Popisek MUSÍ následovat bezprostředně po dvojtečce a mezeře za typem.
   Popisek je krátké shrnutí změn v kódu, např.., _fix: array parsing issue when multiple spaces were contained in string_.
6. Za krátkým popisem MŮŽE být uvedeno delší tělo změn, které poskytuje další kontextové informace o změnách kódu. Tělo MUSÍ začínat jedním prázdným řádkem za popisem.
7. Tělo změn je libovolně formátované a MŮŽE se skládat z libovolného počtu odstavců oddělených novým řádkem.
8. Jedna nebo více patiček MŮŽE být uvedeno za jedním prázndým řádkem za tělem. Každá patička MUSÍ obsahovat
   slovní token, za kterým je buď oddělovač `:<space>` nebo `<space>#`, za kterým sáleduje string hodnota (toto je inspirován
   [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
9. Token zápatí MUSÍ používat `-` místo prázdných symbolů, např., `Acked-by` (to pomáhá rozlišit
   sekci zápatí od víceodstavcového textu). Výjimku tvoří `BREAKING CHANGE`, které MŮŽE být použito i jako token.
10. Hodnota zápatí MŮŽE obsahovat mezery a nové řádky a zpracování MUSÍ být ukončeno, jakmile se objeví další
    platný token/oddělovač zápatí.
11. Přelomové změny MUSÍ být uvedeny v typu/zaměru na začátku změny, nebo jako
    součást v zápatí.
12. Pokud je přelomová změna v patičce, MUSÍ se skládat z velkých písmen BREAKING CHANGE, za nimiž následuje dvojtečka, mezera a popis, např.,
    _BREAKING CHANGE: environment variables now take precedence over config files_.
13. Pokud je přelomová změna na začátku v typu, MUSÍ být označena
    `!` těsně před `:`. Pokud je použit `!`, `BREAKING CHANGE:` MŮŽE být vynechána v části zápatí,
    a popisek změny by MĚL popisovat přelomovou změnu.
14. Jiné typy než `feat` a `fix` MOHOU být použity ve zprávách o změnách, např. _docs: update ref docs._
15. Jednotky informací, které tvoří Konvenční Změny, NESMÍ být implementátory považovány za jednotky rozlišující velká a malá písmena, s výjimkou BREAKING CHANGE, která musí být psána velkými písmeny.
16. BREAKING-CHANGE MUSÍ být synonymem pro BREAKING CHANGE, pokud je použit jako token v zápatí.

## Proč používat Konvenční Změny

- Automatické generování CHANGELOGů.
- Automatické určení sémantického nárazu verze (na základě typů připsaných změn).
- Sdělování povahy změn členům týmu, veřejnosti a dalším zúčastněným stranám.
- Spouštění procesů sestavování a publikování.
- Usnadnění přispívání do vašich projektů tím, že jim umožníte prozkoumat.
  strukturovanější historii revizí.

## FAQ

### Jak se mám vypořádat se zprávami o změnách v počáteční fázi vývoje?

Doporučujeme postupovat tak, jako byste produkt již vydali. Typicky _někdo_, i když jsou to vaši kolegové vývojáři softwaru, používá váš software. Budou chtít vědět, co je opraveno, co se rozbíjí atd.

### Jsou v názvu změny velká nebo malá písmena?

Lze použít jak velká, tak malá písmena, ale je lepší být jednotný.

### Co mám dělat, pokud změna odpovídá více než jednomu z typů změn?

Vraťte se zpět a proveďte více změn, kdykoli je to možné. Součástí výhod Konvenčních Změn je jejich schopnost přimět nás k organizovanějšímu vytváření revizí a PR.

### Neodrazuje to od rychlého vývoje a rychlé iterace?

Odrazuje od rychlého a neorganizovaného pohybu. Pomáhá vám dlouhodobě se rychle pohybovat ve více projektech s různými přispěvateli.

### Mohou Konvenční Změny vést vývojáře k omezení typu revizí, které provádějí, protože budou přemýšlet ve stanovených typech?

Konvenční Změny nás vybízejí k tomu, abychom více prováděli určité typy revizí, například opravy. Kromě toho flexibilita Konvenčních Změn umožňuje vašemu týmu vymýšlet vlastní typy a časem je měnit.

### Jak to souvisí se SemVer?

Změny typu `fix` by měly být převedeny na verze typu `PATCH`. Změny typu `feat` by měly být překládány do verzí `MINOR`. Změny s označením `BREAKING CHANGE` v změny, bez ohledu na typ, by měly být překládány do verzí `MAJOR`.

### Jak mám verzovat svá rozšíření Specifikace Konvenčních Změn, např. `@jameswomack/conventional-commit-spec`?

Doporučujeme používat SemVer k vydávání vlastních rozšíření této specifikace (a
vás vyzýváme, abyste tato rozšíření vytvářeli!)

### Co mám dělat, když omylem použiji nesprávný typ změn?

#### Pokud jste použili typ, který je ve specifikaci, ale není správný, např. `fix` místo `feat`.

Před sloučením nebo vydáním chyby doporučujeme použít `git rebase -i` k úpravě historie změn. Po vydání se bude čištění lišit podle toho, jaké nástroje a procesy používáte.

#### Když jste použili typ který _není_ ve specifikaci, např. `feet` místo `feat`.

V nejhorším případě není konec světa, pokud dojde ke změně, která nesplňuje Specifikaci Konvenčních Změn. Znamená to pouze, že taková změna bude přehlédnuta nástroji, které jsou založeny na této specifikaci.

### Musí všichni moji přispěvatelé používat Specifikaci Konvenčních Změn?

Ne! Pokud používáte pracovní postup založený na squashi v systému Git, mohou vedoucí správci vyčistit zprávy o změnách při jejich slučování - což nepřidává práci příležitostným přispěvatelům.
Běžným pracovním postupem je, že systém git automaticky vymaže změny z požadavku na stažení a zobrazí formulář, do kterého hlavní správce zadá správnou zprávu o změně v gitu pro sloučení.

### Jak Konvenční Změny řeší zpětné změny?

Vracení kódu může být komplikované: vracíte více změn? pokud vracíte feature, měla by být příští verze patch?

Konvenční Změny se výslovně nesnaží definovat chování při vracení. Místo toho to necháváme na nástrojích
autorům, aby využili flexibilitu _typů_ a _zápatí_ a vytvořili svou logiku pro zacházení s reverty.

Jedním z doporučení je použít typ `revert` a zápatí, které odkazuje na revize SHA, které se vracejí:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
