---
draft: false
aliases: ["/it/"]
---

# Commit Convenzionali 1.0.0-beta.4

## Riepilogo

La specifica Conventional Commits è una convenzione semplice da implementare per i messaggi dei commit.
Fornisce un insieme di semplici regole per la creazione di una cronologia di commit esplicita;
il che rende più facile utilizzare strumenti per automare processi.
Questa convenzione si completa con [SemVer](http://semver.org),
descrivendo le funzionalità, la risoluzione di errori e l'introduzione di breaking changes fatte dei commit.


I messaggi dei commit dovrebbero seguire la seguente struttura:

---

```
<tipo>[contesto opzionale]: <descrizione>

[corpo opzionale]

[piè di pagina opzionale]
```
---

<br />
Il commit contiene i seguenti elementi strutturali, allo scopo di comunicare l'intento al consumatore della libreria:

1. **fix:** un commit di _tipo_ `fix` risolve un errore nel codice (correlato al [`PATCH`](http://semver.org/#summary) in un versionamento semver).
1. **feat:**  un commit di _tipo_ `feat` introduce una nuova funzionalità al codice (correlato al [`MINOR`](http://semver.org/#summary) in un versionamento semver).
1. **BREAKING CHANGE:** un commit che contiene il testo `BREAKING CHANGE:` all'inizio delle sezioni opzionali _corpo_ o _piè di pagina_, introduce una breaking API change (correlato al [`MAJOR`](http://semver.org/#summary) in un versionamento semver).
Una _BREAKING CHANGE_ può essere parte di un commit di qualsiasi _tipo_.
1. Extra: sono ammessi ulteriori _tipi_ oltre `fix:` e`feat:`, per esempio [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (che si basa sulla [convenzione Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)) raccomanda `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, ed altri.
Raccomandiamo anche `improvement` per commit che migliorano un'implementazione esistente senza aggiungere nuove funzionalità o risolvere un errore.
Notare che questi _tipi_ non sono mantenuti da questa specifica, e non hanno un effetto sul versionamento semver (a meno che non introducano una _BREAKING CHANGE_).
<br />
Un _contesto_ potrebbe essere aggiunto al _tipo_ di commit, al fine di offrire ulteriori informazioni contestuali.
Da aggiungere tra delle parentesi tonde, Es: `feat(parser): add ability to parse arrays`.

## Esempi

### Messaggio di un commit con una _descrizione_ e una breaking change nel _corpo_
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Messaggio di un commit con un opzionale `!` per attirare l'attenzione su una breaking change
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### Messaggio di un commit senza una _descrizione_
```
docs: correct spelling of CHANGELOG
```

### Messaggio di un commit con uno _contesto_
```
feat(lang): added polish language
```

### Messaggio di un commit per un `fix` utilizzando il numero della issue (opzionale)
```
fix: minor typos in code

see the issue for details on the typos fixed

fixes issue #12
```

## Specifica

Le parole “DEVE”, “NON DEVE”, “RICHIESTO”, “DOVRÀ”, “NON DOVRÀ”, “DOVREBBE”, “NON DOVREBBE”, “RACCOMANDATO”, “POTREBBE” e “OPZIONALE” devo essere interpretata come da specifica [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Un commit DEVE iniziare con un _tipo_, il quale consiste in un sostantivo, `feat`, `fix`, etc., e DEVE essere seguito dai due punti ed uno spazio.
1. Il _tipo_ `feat` DEVE essere usato quando un commit aggiunge una funzionalità all'applicazione o libreria.
1. Il _tipo_ `fix` DEVE essere usato quando un commit corregge un errore all'applicazione o libreria.
1. Un _contesto_ opzionale POTREBBE essere fornito dopo il _tipo_.
   Un _contesto_ rappresenta una sezione dell'applicazione o della libreria, il contenuto va racchiuso tra parentesi.
   Es: `fix(parser):`
1. Una _descrizione_ DEVE seguire immediatamente il _tipo_ (con eventuale _contesto_).
   Per _descrizione_ si intende una breve spiegazione riguardo la modifica al codice.
   Es: _fix: array parsing issue when multiple spaces were contained in string._
1. Un _corpo_ del commit più lungo POTREBBE essere aggiunto dopo una breve _descrizione_, aggiungendo ulteriori informazioni contestuali riguardo le modifiche apportate al codice.
   Il _corpo_ DEVE iniziare dopo una linea vuota dalla _descrizione_.
1. Un _piè di pagina_ POTREBBE essere aggiunto inserendo una linea vuota dopo il _corpo_.
   Il _piè di pagina_ DOVREBBE contenere ulteriori informazioni riguardo le modifiche apportate al codice (come le issue che risolve,
   Es: `fixes #13, #5`).
1. Una _breaking changes_ DEVE essere indicata all'inizio delle sezioni _piè di pagina_ o del _corpo_ del commit.
   Una _breaking change_ DEVE essere scritta in maiuscolo `BREAKING CHANGE`, seguita dai due punti ed uno spazio.
1. Una descrizione DEVE essere aggiunta dopo il testo `BREAKING CHANGE: `, descrivendo il cambiamento delle API.
   Es: _BREAKING CHANGE: environment variables now take precedence over config files._
1. Il _piè di pagina_ DEVE solo contenere `BREAKING CHANGE`, collegamenti esterni, riferimenti alle issueed ulteriori meta-informazioni.
1. Un commit POTREBBE utilizzare altri _tipi_ al di fuori di `feat` e `fix` nel messaggio.
1. La convenzione NON DEVE tener conto del maiuscolo o minuscolo, ad eccezione di `BREAKING CHANGE` che DEVE sempre essere maiuscolo.
1. Un `!` POTREBBE essere aggiunti prima del prefisso`:` nel _tipo_/_contesto_, per attirare notificare l'introduzione di una breaking change. `BREAKING CHANGE: description` DEVE essere aggiungto nel _copro_ o _piè di pagina_ se un `!` è presente.

## Perchè utilizzare commit convenzionali

* CHANGELOG generati automaticamente.
* Determina automaticamente l'incremento di un versionamento semver (basandosi sui tipi di commit utilizzati).
* Comunica la natura dei cambiamenti a colleghi, pubblico, o altri parti interessate.
* Attiva build e processi di rilascio.
* Rendi più semplice alle persone contribuire al tuo progetto, dando la possibilità di esplorare una cronologia di commit più strutturata.

## FAQ

### Come dovrei comportarmi con i messaggi dei commit nella fase iniziale del progetto?

Raccomandiamo di procedere come se il tuo prodotto sia già stato rilasciato. Tipicamente *qualcuno*, anche i tuoi colleghi, stanno utilizzando il tuo software. Loro vorranno sapere cosa sia stato risolto, cosa si sia rotto etc.

### I _tipi_ devono essere in maiuscolo o minuscoli?

Si possono utilizzare entrambi, ma si raccomanda di essere consistenti ed utilizzarne solamente uno.

### Cosa faccio se il tipo di commit è conforme a più di un tipo?

Torna indietro e dividi in più commit dove puoi. Parte del beneficio di usare Commit Convenzionali è quello di spingerti a fare commit e pull request organizzate meglio.

### Non scoraggia sviluppo ed iterazioni rapidi?

Scoraggia a farlo in una maniere disorganizzata. Inoltre ti aiuterà a muoverti più velocemente su più progetti con diversi contributori.

### Potrebbe Commit Convenzionali limitare gli sviluppatori a fare solamente alcuni tipi commit perchè penseranno nei tipi forniti dalla specifica?

Commit Convenzionali ti incoraggia nel fare più di certi tipi di commit. Inoltre la flessibilità di Commit Convenzionali consente al tuo team di inventare i propri tipi e cambiarli nel tempo.

### Come si collega a SemVer?

I commit di tipo `fix` dovrebbero essere traducibili ai rilasci `PATCH`.
I commit di tipo `feat` dovrebbero essere traducibili ai rilasci `MINOR`.
I commit con `BREAKING CHANGE`, indipendentemente dal tipo, dovrebbero essere traducibili ai rilasci `MAJOR`.

### Come dovrei versionare le mie estensioni per la specifica Commit Convenzionali? (Es: `@jameswomack/conventional-commit-spec`)

Raccomandiamo l'utilizzo di SemVer per rilasciare la tua estensione (crea delle estensioni!)

### Cosa faccio se accidentalmente utilizzo un tipo di commit sbagliato?

#### Quando usi un tipo della specifica ma non quello giusto (Es: `fix` invece di `feat`)

Se ancora devi creare il merge o il rilascio dell'errore, raccomandiamo l'utilizzo di `git rebase -i` per riscrivere la cronologia dei commit. Nel caso ti abbia già rilasciato questa correzione dipende dai tool e processi che usi.

#### Quando usi un tipo *non* della specifica (Es: `feet` invece di `feat`)

Non è la fine del mondo se un commit non segue la specifica Commit Convenzionali. Semplicemente il commit verrà ignorato dai tool che sono basati su questa specifica.

### Devono tutti i contributori seguire la specifica Commit Convenzionali?

No. Se usi un workflow basato sugli squash di Git, i mantenitori possono pulire i messaggi dei commit mentre vengono inseriti nel branch principale (merge), non aggiungendo alcun carico di lavoro ai committer occasionali. Un workflow comune è quello di unire (con lo squash) automaticamente i commit dalle pull request e far utilizzare un form ai mantenitori per riscrivere un messaggio più adeguato.
