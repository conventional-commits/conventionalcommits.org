---
draft: false
aliases: ['/ro/']
---

# Comiteri convenționale 1.0.0

## Rezumat

Specificația Comiteri convenționale este o convenție ușoară peste mesajele de comitere.
Oferă un set ușor de reguli pentru crearea unui istoric explicit de comitere;
ceea ce face mai ușor să scrii instrumente automate peste.
Această convenție se potrivește cu [SemVer](http://semver.org),
prin descrierea caracteristicilor, remedierilor și modificărilor finale făcute în mesajele de confirmare.

Mesajul de comitere ar trebui să fie structurat după cum urmează:

---

```
<tip>[domeniu de aplicare opțional]: <descriere>

[corp opțional]

[subsol opțional]
```

---

<br />
Mesajul de comitere conține următoarele elemente structurale, pentru a comunica intenția consumatorilor bibliotecii tale:

1. **fix:** o comitere de _tip_ `fix` corectează o eroare în codul tău de bază (aceasta se corelează cu [`PATCH`](http://semver.org/#summary) în Numerotarea Semantică).
1. **feat:** o comitere de _tip_ `feat` introduce o funcționalitate nouă în codul de bază (aceasta se corelează cu [`MINOR`](http://semver.org/#summary) în Numerotarea Semantică).
1. **BREAKING CHANGE:** o comitere care are un subsol `BREAKING CHANGE:`, sau adaugă un `!` după tip/domeniu de aplicare, introduce o modificare care afectează funcționalitatea API (se corelează cu [`MAJOR`](http://semver.org/#summary) în Numerotarea Semantică).
   O modificare BREAKING CHANGE poate face parte din comiteri de orice _tip_.
1. Sunt permise și alte _tipuri_ decât `fix:` și `feat:`, de exemplu [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (bazat pe [convenția Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recomandă `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, și altele.
1. Pot fi furnizate _subsoluri_, altele decât `BREAKING CHANGE: <descriere>` și urmăresc o convenție asemănătoare cu [formatul git trailer](https://git-scm.com/docs/git-interpret-trailers).

Tipurile suplimentare nu sunt impuse de specificația Comiteri convenționale și nu au niciun efect implicit în Numerotarea Semantică (cu excepția cazului în care includ o modificare BREAKING CHANGE).
<br /><br />
Un domeniu de aplicare poate fi furnizat unui tip de comitere, pentru a furniza informații contextuale suplimentare și este conținut în paranteză, de exemplu, `feat(parser): add ability to parse arrays`.

## Exemple

### Mesaj de comitere cu descriere și subsol de modificări care afectează funcționalitatea

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Mesaj de comitere cu `!` pentru pentru a atrage atenția asupra modificărilor care afectează funcționalitatea

```
feat!: send an email to the customer when a product is shipped
```

### Mesaj de comitere cu un domeniu de aplicare și `!` pentru a atrage atenția asupra modificărilor care afectează funcționalitatea

```
feat(api)!: send an email to the customer when a product is shipped
```

### Mesaj de comitere și cu `!` și cu subsol de modificări care afectează funcționalitatea

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Mesaj de comitere fără corp

```
docs: correct spelling of CHANGELOG
```

### Mesaj de comitere cu domeniu de aplicare

```
feat(lang): add Polish language
```

### Mesaj de comitere având corp cu paragrafe și subsoluri multiple

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Specificație

Cuvintele cheie „TREBUIE”, „NU TREBUIE”, „NECESAR”, „AR TREBUI”, „NU AR TREBUI”, „RECOMANDAT”, „POATE”, și „OPȚIONAL” din acest document sunt să fie interpretate așa cum sunt descrise în [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Comiterile TREBUIE prefixate cu un tip, care constă dintr-un substantiv, `feat`, `fix`, etc., urmat de un domeniu de aplicare OPȚIONAL, `!` OPȚIONAL
   și două puncte și spațiu NECESARE.
1. Tipul `feat` TREBUIE folosit când o comitere adaugă o nouă funcționalitate aplicației sau bibliotecii tale.
1. Tipul `fix` TREBUIE folosit când o comitere reprezintă o remediere a unei erori pentru aplicația ta.
1. Un domeniu de aplicare POATE fi furnizat după un tip. Un domeniu TREBUIE să fie format dintr-un substantiv care descrie o secțiune a codului de bază înconjurată în paranteze, de exemplu, `fix(parser):`
1. O descriere TREBUIE să urmeze imediat celor două puncte și spațiului după prefixul tip/domeniu de aplicare. Descrierea este un scurt rezumat al modificărilor codului, de exemplu, _fix: array parsing issue when multiple spaces were contained in string_.
1. Un corp de comitere mai lung POATE fi furnizat după scurta descriere, oferind informații contextuale suplimentare despre modificările codului. Corpul TREBUIE să înceapă un rând liber după descriere.
1. Un corp de commitere are o formă liberă și POATE consta din orice număr de paragrafe separate de linii noi.
1. Unul sau mai multe subsoluri POT fi furnizate cu o linie goală după corp. Fiecare subsol TREBUIE să conțină un simbol de cuvânt, urmat fie de un separator `:<spațiu>` sau `<spațiu>#`, urmat de o valoare șir (aceasta este inspirată de [convenția git trailer](https://git -scm.com/docs/git-interpret-trailers)).
1. Indicatorul unui subsol TREBUIE să folosească `-` în locul caracterelor cu spații albe, de exemplu, `Acked-by` (acest lucru ajută la diferențierea secțiunilor de subsol dintr-un corp cu mai multe paragrafe). Se face o excepție pentru `BREAKING CHANGE`, care POATE fi folosit și ca simbol.
1. Valoarea unui subsol POATE conține spații și linii noi, iar interpretarea TREBUIE să se termine atunci când este observată următoarea pereche validă de simbol de subsol/separator.
1. Modificările care afectează funcționalitatea TREBUIE să fie indicate în prefixul tip/domeniu de aplicare al unuei comiteri sau ca o intrare de subsol.
1. Dacă este inclusă ca subsol, o modificare care afectează funcționalitatea TREBUIE să conțină textul cu majuscule BREAKING CHANGE, urmat de două puncte, spațiu și descriere, de exemplu,
   _BREAKING CHANGE: environment variables now take precedence over config files_.
1. Dacă sunt incluse în prefixul tip/domeniu de aplicare, modificările care afectează funcționalitatea TREBUIE să fie indicate prin `!` imediat înainte de `:`. Dacă se folosește `!`, `BREAKING CHANGE:` POATE fi omis din secțiunea de subsol, iar descrierea de comitere TREBUIE folosită pentru a descrie modificarea care afectează funcționalitatea.
1. Alte tipuri decât `feat` și `fix` POT fi utilizate în mesajele tale de comitere, de exemplu, _docs: update ref docs._
1. Unitățile de informații care alcătuiesc Comiterile convenționale NU TREBUIE să fie tratate ca fiind sensibile la majuscule și minuscule de către implementatori, cu excepția BREAKING CHANGE care TREBUIE să fie majuscule.
1. BREAKING-CHANGE TREBUIE să fie sinonim cu BREAKING CHANGE, atunci când este folosit ca simbol într-un subsol.

## De ce să folosești Comiteri convenționale?

- Generarea automată a jurnalelor de modificări.
- Determinarea automată a unui bump semantic al versiunii (pe baza tipurilor de comiteri efectuate).
- Comunicarea naturii schimbărilor colegilor de echipă, publicului și altor părți interesate.
- Declanșarea proceselor de creare și publicare.
- Facilitarea contribuției cu ușurință a oamenilor la proiectele tale, permițându-le să exploreze o istorie mai structurată a comiterilor.

## Întrebări și răspunsuri

### Cum ar trebui să mă ocup de mesajele de comitere în faza inițială de dezvoltare?

Îți recomandăm să continui ca și cum ai fi lansat deja produsul. De obicei, _cineva_, chiar dacă este vorba de colegii tăi dezvoltatori de software, folosește software-ul tău. Vor dori să știe ce s-a reparat, ce se întrerupe etc.

### Titlurile tipurilor de comiteri sunt cu litere mari sau mici?

Poți folosi orice caz, dar cel mai bine este să păstrezi consecvența.

### Ce fac dacă comiterea este conformă cu mai mult de unul dintre tipurile de comiteri?

Revii și faci mai multe comiteri ori de câte ori este posibil. O parte a beneficiului Comiterilor convenționale este capacitatea lor de a ne determina să facem comiteri și PR-uri mai organizate.

### Nu descurajează acest lucru dezvoltarea și iterația rapidă?

Descurajează deplasarea rapidă într-un mod dezorganizat. Te ajută să te deplasezi rapid pe termen lung în mai multe proiecte cu diverși colaboratori.

### Comiterile convenționale ar putea determina dezvoltatorii să limiteze tipul de comiteri pe care le fac, deoarece se vor gândi la tipurile furnizate?

Comiterile convenționale ne încurajează să facem mai multe anumite tipuri de comiteri, cum ar fi remedieri. În afară de asta, flexibilitatea Comiterilor convenționale permite echipei tale să creeze propriile tipuri și să le schimbe în timp.

### Cum se leagă acest lucru de SemVer?

Comiterile de tip `fix` ar trebui traduse în versiuni `PATCH`. Comiterile de tip `feat` ar trebui traduse în versiuni `MINOR`. Comiterile cu `BREAKING CHANGE` în comitri, indiferent de tip, ar trebui traduse în versiuni `MAJOR`.

### Cum ar trebui să numerotez extensiile mele conform specificației de Comiteri convenționale, de ex. `@jameswomack/conventional-commit-spec`?

Îți recomandăm să utilizezi SemVer pentru a-ți lansa propriile extensii conform acestei specificații (și te încurajăm să faci aceste extensii!)

### Ce fac dacă folosesc accidental tipul de comitere greșit?

#### Când ai folosit un tip care corespunde specificațiilor, dar nu este cel corect, de ex. `fix` în loc de `feat`

Înainte de îmbinare sau lansare a greșelii, îți recomandăm să folosești `git rebase -i` pentru a edita istoricul de comitere. După lansare, curățarea va fi diferită în funcție de instrumentele și procesele pe care le utilizezi.

#### Când ai folosit un tip _din afara_ specificației, de ex. `feet` în loc de `feat`

În cel mai rău caz, nu este sfârșitul lumii dacă aterizează o comitere care nu îndeplinește specificația Comiteri convenționale. Înseamnă pur și simplu că acea comiterea va fi ratată de instrumentele care se bazează pe specificații.

### Trebuie ca toți colaboratorii mei să folosească specificația Comiteri convenționale?

Nu! Dacă pe Git utilizezi un flux de lucru bazat pe îmbinare, întreținătorii potențiali pot curăța mesajele de comitere pe măsură ce sunt îmbinate, neadăugând vreo sarcină de lucru pentru cei care fac comiteri ocazional.
Un flux de lucru obișnuit pentru aceasta este ca sistemul tău git să îmbine automat comiterile dintr-o cerere de extragere și să prezinte un formular pentru ca întreținătorul principal să introducă mesajul de comitere git corespunzător pentru îmbinare.

### Cum sunt gestionate comiterile de revenire de către Comiterile convenționale?

Revenirea codului poate fi complicată: revii la mai multe comiteri? dacă revii la o funcționalitate, următoarea versiune ar trebui să fie în schimb un patch?

Comiterile convenționale nu depun un efort explicit pentru a defini comportamentul invers. În schimb, lăsăm la latitudinea autorilor de instrumente să folosească flexibilitatea _tipurilor_ și _subsolurilor_ pentru a-și dezvolta logica pentru gestionarea reversurilor.

O recomandare este să folosești tipul `revert` și un subsol care face referire la SHA-urile de comitere care sunt inversate:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
