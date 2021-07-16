---
draft: false
---

# Commit Convenzionali 1.0.0-beta

## Riepilogo

Da maintainer di codice open source, devo poter scrivere messaggi standardizzati per i commit
ed eseguire lo squash dei feature branch nel `master`.

I messaggi dei commit dovrebbero seguire la seguente struttura:

---

```
<tipo>[contesto opzionale]: <descrizione>

[corpo opzionale]

[piè di pagina opzionale]
```
---

<br />
Il commit contiene i seguenti elementi strutturali, allo scopo di comunicarne
l'intento al consumatore della libreria:

1. **fix:** un commit di _tipo_ `fix` risolve un errore nel codice (correlato al [`PATCH`](http://semver.org/#summary) in un versionamento semver).
1. **feat:**  un commit di _tipo_ `feat` introduce una nuova funzionalità al codice (correlato al [`MINOR`](http://semver.org/#summary) in un versionamento semver).
1. **BREAKING CHANGE:** un commit che contiente il testo `BREAKING CHANGE:` all'inizio delle sezioni opzionali _corpo_ o _piè di pagina_, introduce una breaking API change (correlato al [`MAJOR`](http://semver.org/#summary) in un versionamento semver).
Una _breaking change_ può essere parte di entrambi i _tipi_ `fix:` w `feat:`.
<br />
Un _contesto_ potrebbe essere aggiunto al _tipo_ di commit, al fine di offrire ulteriori informazioni contestuali.
Da aggiungere tra delle parentesi tonde, Es: `feat(parser): add ability to parse arrays`.

Sono ammessi altri _tipi_ oltre `fix:` e `feat:`, ad esempio [la convenzione Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) raccomanda `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`, ma questi non sono coperti da questa specifica.

## Introduzione

Nello sviluppo software, secondo la mia esperienza, gli errori sono spesso introdotti ai limiti tra le applicazioni.

I test unitari vanno benissimo per le interazioni che i mantenitori open source conoscono,
ma non fanno un ottimo lavoro nel catturare tutti i modi interessanti, spesso inaspettati, con i quali la comunità utilizza una libreria.

Solamente chi ha visto la propria applicazione restituire errori 500
dopo aver aggiornato una dipendenza ad una nuova versione patch,
sa quanto sia importante una cronologia di commit facilmente leggibile
(e nel migliore dei casi [un changlelog ben mantenuto](http://keepachangelog.com/en/0.3.0/))
per il processo di investigazione che dovrà affrontare.

La specifica per commit convenzionali propone l'introduzione di una convenzione
facilmente applicabile ai messaggi dei commit.
Questa convenzione legata al [SemVer](http://semver.org), chiede ai sviluppatori software
di descrivere nei messaggi dei commit qualsiasi feature, fix e breaking change loro abbiano fatto.

Introducendo questa convenzione, si crea un linguaggio comune che rende più semplice
rimuovere errori tra progetti.

## Specifica

Le parole “DEVE”, “NON DEVE”, “RICHIESTO”, “DOVRÀ”, “NON DOVRÀ”, “DOVREBBE”, “NON DOVREBBE”, “RACCOMANDATO”, “POTREBBE” e “OPZIONALE” devo essere interpretata come da specifica [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Un commit DEVE iniziare con un _tipo_, il quale consiste in un sostantivo, `feat`, `fix`, etc.,
   seguito dai due punti ed uno spazio.
1. Il _tipo_ `feat` DEVE essere usato quando un commit aggiunge una funzionalità
   all'applicazione o libreria.
1. Il _tipo_ `fix` DEVE essere usato quando un commit corregge un errore all'applicazione o libreria.
1. Un _contesto_ opzionale POTREBBE essere fornito dopo il _tipo_.
   Un _contesto_ rappresenta una sezione dell'applicazione o libreria, il contentuo va racchiusa tra delle parentesi.
   Es: `fix(parser):`
1. Una _descrizione_ DEVE seguire immediatamente il _tipo_ (con eventuale _contesto_).
   Per _descrizione_ si intende una breve spiegazione della pull request.
   Es: _fix: array parsing issue when multiple spaces were contained in string._
1. Un _corpo_ del commit più lungo POTREBBE essere aggiunto dopo una breve _descrizione_.
   Il _corpo_ DEVE inizare dopo una linea vuota dalla _descrizione_.
1. Un _piè di pagina_ POTREBBE essere aggiunto inserendo una linea vuota dopo il _corpo_.
   Il _piè di pagina_ DOVREBBE contenere ulteriori informazioni riguardo la pull request (come le issue che risolve,
   Es: `fixes #13, #5`).
1. Una _breaking changes_ DEVE essere indicata all'inizio delle sezioni _piè di pagina_ o del _corpo_ del commit.
   Una _breaking change_ DEVE essere scritta in maiuscolo `BREAKING CHANGE`, seguita dai due punti ed uno spazio.
1. Una descrizione DEVE essere aggiunta dopo il testo `BREAKING CHANGE: `, descrivendo il cambiamento delle API.
   Es: _BREAKING CHANGE: environment variables now take precedence over config files._
1. Un commit POTREBBE utilizzare altri _tipi_ al di fuori di `feat` e `fix` nel messagio.

## Perchè utilizzare commit convenzionali

* CHANGELOG generati automaticamente.
* Determina automaticamente l'incremento di un versionamento semver (basandosi sui tipi di commit utilizzati).
* Comunica la natura dei cambiamenti a colleghi, pubblico, o altri parti interessate.
* Attiva build e processi di rilascio.
* Rendi più semplice alle persone contribuire al tuo progetto, dando la possibilità di espolrare una cronologia di commit più strutturata.

## FAQ

### Come dovrei comportarmi con i messaggi dei commit nella fase iniziale del progetto?

Raccomandiamo di procedere come se il tuo prodotto sia già stato rilasciato. Tipicamente *qualcuno*, anche i tuoi colleghi, stanno utilizzando il tuo software. Loro vorranno sapere cosa sia stato risolto, cosa si sia rotto etc.

### Cosa faccio se il tipo di commit è conforme a più di un tipo?

Torna indietro e dividi in più commit dove puoi.
Parte del beneficio di usare Commit Convenzionali è quello di spingerti a fare commit e pull request più organizzati.

### Non disincoraggia sviluppo ed iterazioni rapidi?

Disingoraggia farlo in una maniere disorgaizzata. Inoltre ti aiuterà a muoverti più velocemente su più progetti con diversi contributori.

### Potrebbe Commit Convenzionali limitare gli sviluppatori a fare solamente alcuni tipi commit perchè penseranno nei tipi forniti dalla specifica?

Commit Convenzionali ti incoraggia nel fare più di certi tipi di commit.
Inoltre la flessibilità di Commit Convenzionali consente al tuo team di inventare i propri tipi e cambiarli nel tempo.

### Come si collega a SemVer?

I commit di tipo `fix` dovrebbero essere traducibili ai rilasci `PATCH`.
I commit di tipo `feat` dovrebbero essere traducibili ai rilasci `MINOR`.
I commit con `BREAKING CHANGE`, indipentemente dal tipo, dovrebbero essere traducibili ai rilasci `MAJOR`.

### Come dovrei versionare le mie estensioni per la specifica Commit Convenzionali? (Es: `@jameswomack/conventional-commit-spec`)

Raccomandiamo l'utilizzo di SemVer per rilasciare la tua estensione (crea delle estensioni!)

### Cosa faccio se accidentalmente utilizzo un tipo di commit sbagliato?

#### Quando usi un tipo della specifica ma non quello giusto (Es: `fix` invece di `feat`)

Se ancora devi creare il merge o il rilascio dell'errore, raccomandiamo l'utilizzo di `git rebase -i` per riscrivere la cronologia dei commit.
Nel caso ti abbia già rilasciato questa correzzione dipende dai tool e processi che usi.

#### Quando usi un tipo *non* della specifica (Es: `feet` invece di `feat`)

Non è la fine del mondo se un commit non segue la specifica Commit Convenzionali.
Semplicemente il commit verrà ignorato dai tool che sono basati su questa specifica.

### Devono tutti i contributori seguire la specifica Commit Convenzionali?

No. Se usi un workflow basato sugli squash di Git, i mantenitori possono pulire i messaggi dei commit mentre vengono inseriti nel branch principale (merge), non aggiungendo alcun carico di lavoro ai committer occasionali.
Un workflow comune è quello di unire (con lo squash) automaticamente i commit dalle pull request e far utilizzare un form ai mantenitori per riscrivere un messaggio più adeguato.
