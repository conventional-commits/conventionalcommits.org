---
draft: false
aliases: ["/it/"]
---

# Commit Convenzionali 1.0.0

## Riepilogo

La specifica Conventional Commits è una convenzione semplice da implementare per i messaggi dei commit.
Fornisce un insieme di semplici regole per la creazione di una cronologia di commit esplicita;
il che rende più facile utilizzare strumenti per automatizzare processi.
Questa convenzione si completa con [SemVer](http://semver.org/lang/it/),
descrivendo le funzionalità, la risoluzione di errori e l'introduzione di breaking changes fatte dei messaggi dei commit.


Il messaggio del commit dovrebbe seguire la seguente struttura:

---

```
<tipo>[contesto opzionale]: <descrizione>

[corpo opzionale]

[piè di pagina opzionali]
```
---

<br />
Il commit contiene i seguenti elementi strutturali, allo scopo di comunicare l'intento al consumatore della tua libreria:

1. **fix:** un commit di _tipo_ `fix` risolve un errore nel codice (correlato al [`PATCH`](http://semver.org/#summary) in un Versionamento Semantico).
1. **feat:**  un commit di _tipo_ `feat` introduce una nuova funzionalità al codice (correlato al [`MINOR`](http://semver.org/#summary) in un Versionamento Semantico).
1. **BREAKING CHANGE:** un commit che contiene in un _piè di pagina_ `BREAKING CHANGE:`, o aggiunge un `!` subito dopo il _tipo_/_contesto_, introduce una breaking API change (correlato al [`MAJOR`](http://semver.org/#summary) in un Versionamento Semantico). Una _BREAKING CHANGE_ può essere parte di commit di qualsiasi _tipo_.
1. Sono ammessi ulteriori _tipi_ oltre `fix:` e `feat:`, per esempio [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (che si basa sulla [convenzione Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) 
raccomanda `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, ed altri.
1. Altri _piè di pagina_ oltre `BREAKING CHANGE: <description>` possono essere utilizzati e seguono una specifica simile a [git trailer format](https://git-scm.com/docs/git-interpret-trailers).
   
Altri  _tipi_ non sono mantenuti da questa specifica, e non hanno un effetto sul Versionamento Semantico (a meno che non introducano una _BREAKING CHANGE_).
<br />
Un _contesto_ potrebbe essere aggiunto al _tipo_ di commit, al fine di offrire informazioni contestuali aggiuntive ed è contenuto tra parentesi, es. `feat(parser): add ability to parse arrays`.

## Esempi

### Messaggio di un commit con una descrizione e una breaking change nel piè di pagina
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Messaggio di un commit con un `!` per attirare l'attenzione su una breaking change
```
feat!: send an email to the customer when a product is shipped
```

### Messaggio di un commit con un contesto e `!` per attirare l'attenzione su una breaking change
```
feat(api)!: send an email to the customer when a product is shipped
```

### Messaggio di un commit con entrambe `!` e BREAKING CHANGE a piè di pagina
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Messaggio di un commit senza una descrizione
```
docs: correct spelling of CHANGELOG
```

### Messaggio di un commit con un contesto
```
feat(lang): add Polish language
```

### Messaggio di un commit con una descrizione multi-paragrafo e piè di pagina multipli
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #133
```

## Specifica

Le parole chiave “DEVE”, “NON DEVE”, “RICHIESTO”, “DOVRÀ”, “NON DOVRÀ”, “DOVREBBE”, “NON DOVREBBE”, “RACCOMANDATO”, “POTREBBE” e “OPZIONALE” vanno interpretate come descritto in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. I commit DEVONO essere preceduti da un _tipo_, il quale consiste in un sostantivo, `feat`, `fix`, etc., seguito dal _contesto_ OPZIONALE, dal `!` OPZIONALE, e dai due punti ed uno spazio RICHIESTI.
1. Il _tipo_ `feat` DEVE essere usato quando un commit aggiunge una nuova funzionalità alla tua applicazione o libreria.
1. Il _tipo_ `fix` DEVE essere usato quando un commit corregge un errore per tua applicazione o libreria.
1. Un _contesto_ POTREBBE essere fornito dopo un _tipo_.
   Un _contesto_ DEVE consistere in un sostantivo che descrive una sezione dell'applicazione o della libreria, racchiuso tra parentesi, es. `fix(parser):`
1. Una _descrizione_ DEVE seguire immediatamente i due punti e lo spazio dopo il prefisso _tipo_/_contesto_.
   La _descrizione_ è un breve riassunto delle modifiche al codice, es. _fix: array parsing issue when multiple spaces were contained in string_.
1. Un _corpo_ del commit più lungo POTREBBE essere aggiunto dopo la breve _descrizione_, fornendo informazioni contestuali aggiuntive riguardo le modifiche apportate al codice.
   Il _corpo_ DEVE iniziare con una riga vuota dopo la _descrizione_.
1. Un _corpo_ può contenere qualsiasi contenuto e POTREBBE essere formato da qualsiasi numero di paragrafi separati da una nuova riga.
1. Uno o più _pié di pagina_ POTREBBERO essere forniti con una riga vuota dopo il _corpo_.
   Ogni _piè di pagina_ DEVE avere una parola chiave, seguita da un _separatore_ `:<space>` o `<space>#`, a sua volta seguito da un _token_ (ispirato a 
   [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Il _token_ di un _piè di pagina_ DEVE usare `-` al posto degli spazi bianchi, es. `Acked-by` (questo aiuta a distinguere la sezione del _piè di pagina_ da un _corpo_ multiparagrafo). 
   Un'eccezione è fatta per `BREAKING CHANGE`, che POTREBBE essere utilizzato anche come _token_.
1. Il valore di un _piè di pagina_ POTREBBE contenere spazi e linee vuote, e il parsing DEVE finire quando si osserva la prossima coppia _token_/_separatore_ di _piè di pagina_ valida.
1. Eventuali _breaking changes_ DEVONO essere indicate nel prefisso _tipo_/_contesto_ di un commit, o come voce nel _piè di pagina_.
1. Se inclusa nel _piè di pagina_, una _breaking change_ DEVE consistere nel testo maiuscolo `BREAKING CHANGE`, seguito dai due punti, spazio e descrizione, es. _BREAKING CHANGE: environment variables now take precedence over config files_.
1. Se inclusa nel prefisso _tipo_/_contesto_, una _breaking change_ DEVE essere indicata con un `!` immediatamente prima del `:`. Se viene usato `!`, `BREAKING CHANGE:` POTREBBE essere omesso dal _piè di pagina_, e la descrizione del commit DOVRÀ essere utilizzata per descrivere la _breaking change_.
1. Altri _tipi_ al di fuori di `feat` e `fix` POTREBBERO essere utilizzati nei tuoi messaggi di commit, es. _docs: update ref docs_.
1. Gli implementatori NON DEVONO tener conto del maiuscolo o minuscolo per le unità di informazione che compongono i Commit Convenzionali, ad eccezione di `BREAKING CHANGE` che DEVE essere maiuscolo.
1. `BREAKING-CHANGE` DEVE essere sinonimo di `BREAKING CHANGE`, quando usato come token in un _piè di pagina_.

## Perchè utilizzare i Commit Convenzionali

* Generazione automatica dei CHANGELOG.
* Determinazione automatica di un incremento di versione semantica (basata sui tipi di commit effettuati).
* Comunicazione della natura dei cambiamenti ai membri del team, al pubblico e altre parti interessate.
* Attivazione dei processi di build e rilascio.
* Facilitazione del contributo ai tuoi progetti, dando la possibilità alle persone di esplorare una cronologia dei commit più strutturata.

## FAQ

### Come dovrei gestire i messaggi di commit nella fase iniziale di sviluppo?

Raccomandiamo di procedere come se il tuo prodotto sia già stato rilasciato. Tipicamente *qualcuno*, anche solo i tuoi colleghi sviluppatori, sta già utilizzando il tuo software. Loro vorranno sapere cosa è stato risolto, cosa si è rotto etc.

### I tipi nel titolo del commit devono essere in maiuscolo o minuscolo?

Si possono utilizzare entrambi, ma si raccomanda di essere consistenti ed utilizzarne solamente uno.

### Cosa faccio se il tipo di commit è conforme a più di un tipo?

Torna indietro e dividi in più commit dove puoi. Parte del beneficio di usare Commit Convenzionali è quello di spingerti a fare commit e pull request organizzate meglio.

### Questo non scoraggia lo sviluppo rapido ed iterativo?

Scoraggia a farlo in una maniera disorganizzata. Sul lungo termine, aiuta a muoversi rapidamente su più progetti con diversi contributori.

### I Commit Convenzionali potrebbero limitare gli sviluppatori a fare solamente alcuni tipi commit perchè penseranno solo ai tipi forniti dalla specifica?

I Commit Convenzionali ci incoraggiano a fare più commit di certi tipi, come le correzioni. A parte questo, la flessibilità dei Commit Convenzionali consente al tuo team di inventare i propri tipi e di cambiarli nel tempo.

### Come si collega a SemVer?

I commit di tipo `fix` dovrebbero essere tradotti in rilasci di tipo `PATCH`.
I commit di tipo `feat` dovrebbero essere tradotti in rilasci di tipo `MINOR`.
I commit con `BREAKING CHANGE`, indipendentemente dal tipo, dovrebbero essere tradotti in rilasci di tipo `MAJOR`.

### Come dovrei versionare le mie estensioni per la specifica dei Commit Convenzionali, es. `@jameswomack/conventional-commit-spec`?

Raccomandiamo l'utilizzo di SemVer per rilasciare le tue estensioni (e ti incoraggiamo a creare queste estensioni!)

### Cosa faccio se utilizzo accidentalmente il tipo di commit sbagliato?

#### Quando hai utilizzato un tipo previsto dalla specifica ma non è quello giusto, es. `fix` invece di `feat`

Se ancora devi creare il merge o il rilascio dell'errore, raccomandiamo l'utilizzo di `git rebase -i` per riscrivere la cronologia dei commit. Nel caso tu abbia già rilasciato questa correzione, dipende dai tool e dai processi che usi.

#### Quando hai utilizzato un tipo *non* previsto dalla specifica, es. `feet` invece di `feat`

Nel peggiore dei casi, non è la fine del mondo se un commit non segue la specifica dei Commit Convenzionali. Significa semplicemente che il commit verrà ignorato dai tool che sono basati su tale specifica.

### Tutti i miei collaboratori devono usare la specifica dei Commit Convenzionali?

No! Se usi un workflow basato sugli squash di Git, i mantenitori possono pulire i messaggi dei commit mentre vengono inseriti nel branch principale (merge), senza aggiungere alcun carico di lavoro ai committer occasionali. Un workflow comune è quello di unire (con lo squash) automaticamente i commit da una pull request e far utilizzare un form ai mantenitori per riscrivere un messaggio di commit più adeguato.

### In che modo i Commit Convenzionali gestiscono i commit di revert?

Il revert del codice può essere complicato: stai ripristinando più commit? se ripristini una funzionalità, la prossima release dovrebbe essere una patch?

I Conventional Commits non fanno uno sforzo esplicito per definire il comportamento del revert.
Lasciano invece agli autori dei tool la libertà di usare i _tipi_ e i _piè di pagina_ per sviluppare la loro logica di gestione dei revert.

Una raccomandazione è usare il tipo `revert` e un _piè di pagina_ che faccia riferimento agli SHA dei commit ripristinati:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
