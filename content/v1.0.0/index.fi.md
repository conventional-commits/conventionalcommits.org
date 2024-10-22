---
draft: false
aliases: ["/fi/"]
---

# Tavanmukaiset muutokset 1.0.0

## Tiivistelmä

Tavanmukaiset muutokset-ohjeistus on kevyt menettelytapa muutosviesteille.
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

Muita _tyyppejä_ ei ole laadittu Tavanmukaiset muutokset-menettelytavassa - eikä niillä ole välitöntä merkitystä kaavamaisessa versioinnisa, ellei ne sisällä särkevää muutosta.

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
1. Muitakin tyyppeja kuin `feat` ja `fix` SAA käyttää muutosviesteissä, esim., _docs: updated ref docs._
1. Toteuttajien EI PIDÄ pitää tietoa tavanmukaisissa muutoksissa merkkikokoriippuvaisina, poikkeuksena BREAKING CHANGE mikä PITÄÄ olla kirjoitettu isoilla kirjaimilla.
1. BREAKING-CHANGE PITÄÄ olla samanmerkityksinen BREAKING CHANGE kanssa, kun sitä käytetään merkkinä alatunnisteessa.

## Miksi Käyttää Tavanmukaisia Muutoksia

- Automaattisesti generoidut MUUTOSLOKIT
- Automaattisesti määritely SemVerin mukainen bump (muutosten tyypistä riippuen).
- Muutosten luonteen kommunikoiminen tiimitoverille, yleisölle, ja muille sidosryhmille.
- Luonti- ja julkaisuprosessien laukaiseminen.
- Helpottaa muiden osallistumista projektiisi, antamalla heidän tutustua
  hyvin organisoituun muutoshistoriaan.

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

#### Kun käytit spesifikaation mukaista, mutta väärää muutostyyppiä, kuten `fix` `feat`:in sijaan

Ennen virheen yhdistämistä tai vapauttamista, suosittelemme käyttämään git rebase -i-komentoa sitoumushistorian muokkaamiseen. Julkaisun jälkeen virheen korjaus on erilainen sen mukaan, mitä työkaluja ja prosesseja käytät.


#### Kun käytit muutostyyppiä, joka ei ole spesifikaation mukainen, kuten `feet` `feat`:in sijaan

Pahimmassakaan tapauksessa ei ole maailmanloppu, jos repositorioon päätyy kommentti, joka ei ole spesifikaation mukainen. Se vain tarkoittaa, että spesifikaatioon perustuvat työkalut eivät löydä kyseistä muutosta.

### Täytyykö kaikkien projektiin osallistuvien lehittäjien käyttää Tavanmukaisia muutoksia?

Ei! Jos käytät squash-pohjaista työnkulkua Gitissä, projektijohtajat voivat siistiä muutosviestit yhdistämisen (merge) yhteydessä. Näin vapaamuotoisemmille kehittäjile ei koidu ylimääräistä työtaakkaa.
Yleinen työnkulku tähän on määrittää git-systeemi suorittamaan automaattinen squash-toiminto vetopyynnön muutoksille, minkä jälkeen projektijohtajalle annetaan lomake, johon tämä voi kirjoittaa yhdistämiseen sopivan muutosviestin.

### Miten Tavanmukaiset muutokset käsittelevät muutosten peruutuksia (revert)?

Koodin peruuttaminen voi olla monimutkaista: peruutatko useita muutoksia? Jos peruutat ominaisuuden, tulisiko seuraavan julkaisun olla bugikorjaus ominaisuuden sijaan?

Tavanmukaiset muutokset ei määritä suoraan, miten peruutusten kanssa tulisi toimia. Sen sijaan annamme tooling (kehitystyökalujen?)-kehittäjien käyttää _tyyppien_ ja _alatunnisteiden_ joustavuutta peruutusten logiikan kehittämiseen.

Yksi suositus olisi käyttää `revert`-tyyppiä sekä alatunnistetta, joka viittaa peruutettavien muutosten SHA:han.

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
