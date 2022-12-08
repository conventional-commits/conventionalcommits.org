---
draft: false
aliases: ["/fr/"]
---

# Commits Conventionnels 1.0.0

## Résumé

La spécification de Conventional Commits est une convention légère pour des messages de commit propre.
Il fournit un ensemble simple de règles pour créer un historique de commit explicite;
Ce qui facilite l'écriture d'outils automatisés.
Cette convention est liée à [SemVer](http://semver.org/lang/fr/),
en décrivant les fonctionnalités, les correctifs et les modifications importantes apportées aux messages de commit.

Le message du commit doit être structuré comme suit :

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
---

<br />
Le commit contient les éléments structurels suivants, permettant de communiquer à l’intention des
consommateurs de votre bibliothèque :

1. **fix:** un commit de _type_ `fix` corrige un bogue dans le code (cela est en corrélation avec [`PATCH`](http://semver.org/#summary) en versioning sémantique).
1. **feat:** un commit de _type_ `feat` introduit une nouvelle fonctionnalité dans le code (cela est en corrélation avec [`MINOR`](http://semver.org/#summary) en versioning sémantique).
1. **BREAKING CHANGE:** un commit qui a dans le pied de page le mot clef `BREAKING CHANGE:`, ou ajoute un `!` après le type/scope, introduit un changement cassant l'API (cela est en corrélation avec [`MAJOR`](http://semver.org/#summary) en versioning sémantique).
Un BREAKING CHANGE peut faire partie des commits de n'importe quel _type_.
1. Les _types_ autre que `fix:` et `feat:` sont autorisés, par exemple [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basé sur [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommande `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, etc.
1. Les _pieds de pages_ autre que `BREAKING CHANGE: <description>` peuvent être fourni et suivre une convention similaire à
  [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

Les types supplémentaires ne sont pas prescrits par la spécification de Conventional Commits et n'ont aucun effet implicite dans la gestion des versions sémantiques (à moins qu'ils ne comportent un BREAKING CHANGE).
<br /><br />
Un _scope_ peut être fournie au type d'un commit pour fournir des informations contextuelles supplémentaires. Il est contenu entre parenthèses, par exemple, `feat(parser): add ability to parse arrays`.

## Exemples

### Message du commit avec description et breaking change dans le pied de page
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Message du commit avec `!` attire l'attention sur un BREAKING CHANGE
```
feat!: send an email to the customer when a product is shipped
```

### Message du commit avec _scope_ et `!` attire l'attention sur un BREAKING CHANGE
```
feat(api)!: send an email to the customer when a product is shipped
```

### Message du commit avec `!` et BREAKING CHANGE dans le pied de page
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Message du commit sans corps de texte
```
docs: correct spelling of CHANGELOG
```

### Message du commit avec _scope_
```
feat(lang): add polish language
```

### Message du commit avec plusieurs paragraphes et plusieurs pieds de page
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Spécification

Les mots clés ”DOIT” (“MUST”), “NE DOIT PAS” (“MUST NOT”), “REQUIS” (“REQUIRED”), “DEVRA” (“SHALL”), “NE DEVRA PAS” (“SHALL NOT”), “DEVRAIT” (“SHOULD”), “NE DEVRAIT PAS” (“SHOULD NOT”), “RECOMMANDÉ” (“RECOMMENDED”), “PEUT” (“MAY”), et “FACULTATIF” (“OPTIONAL”) dans ce document doivent être interprétés comme décrit dans [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Un commit DOIT être préfixé par un type, qui consiste en un nom, `feat`, `fix`, etc., suivi
  par un FACULTATIF scope, FACULTATIF `!`, et REQUIS suivi de deux-points et d'un espace.
1. Le type `feat` DOIT être utilisé lorsqu'un commit ajoute une nouvelle fonctionnalité à votre application ou bibliothèque.
1. Le type `fix` DOIT être utilisé lorsqu'un commit représente un correctif pour votre application.
1. Un scope PEUT être fournie après un type. Un scope DOIT être une phrase décrivant
  une section du code et être encadrée par des parenthèses, par exemple, `fix(parser):`
1. Une description DOIT suivre immédiatement les deux-points et l'espace après le préfix type/scope.
La description est une brève description des modifications du code, par exemple, _fix: array parsing issue when multiple spaces were contained in string_.
1. Un long texte de commit PEUT être fourni après la description courte, fournissant des informations contextuelles supplémentaires sur les modifications du code. Le texte DOIT commencer par une ligne vide après la description.
1. Un texte de commit est libre et PEUT se composer d'un nombre quelconque de paragraphes séparés par une nouvelle ligne.
1. Un ou plusieurs pieds de page PEUT être fourni avec une ligne blanche après le corps. Chaque pied de page DOIT se composer d'un mot clef, suivi par `:<space>` ou `<space>#`, suivi d'une chaine de caractère (c'est inspiré de
  [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Un mot clef de pied de page DOIT utiliser `-` au lieu des espaces, par exemple, `Acked-by` (cela permet de différencier la section de pied de page d'un corps de plusieurs paragraphes). Une exception est faite pour `BREAKING CHANGE`, qui PEUT aussi être utilisé comme un mot clef.
1. La valeur d'un pied de page PEUT contenir des espaces et des nouvelles lignes, et l'analyse grammaticale DOIT se terminer lorsque la prochaine pair mot clef / séparateur de pied de page valide est observée.
1. BREAKING CHANGES DOIT être indiqué dans le préfix type/scope d'un commit, ou comme une entrée dans le pied de page.
1. Si inclus comme pied de page, un breaking change DOIT être écrit en majuscule BREAKING CHANGE, suivi par deux-points, espace, et une description, par exemple,
_BREAKING CHANGE: environment variables now take precedence over config files_.
1. Si inclus dans le préfix type/scope, breaking changes DOIT être indiqué par un
  `!` immédiatement avant le `:`. Si `!` est utilisé, `BREAKING CHANGE:` PEUT être omis de la section de pied de page,
  et la description du commit DEVRA être utilisé pour décrire le breaking change.
1. Un type autre que `feat` et `fix` PEUT être utilisé dans vos messages de commit, par exemple, _docs: updated ref docs._
1. Les unités d’information qui composent conventional commits NE DOIT PAS être traité comme sensible à la casse par les développeurs, à l'exception de BREAKING CHANGE qui DOIT être en majuscule.
1. BREAKING-CHANGE DOIT être synonyme de BREAKING CHANGE, lorsqu'il est utilisé comme mot clef dans un pied de page.

## Pourquoi utiliser Conventional Commits

* Génération automatique de CHANGELOGs.
* Déterminer automatiquement un changement de version sémantique (en fonction des types de commits inclus).
* Communiquer la nature des changements aux membres de l'équipe, au public et aux autres parties prenantes.
* Déclencher des processus de génération et de publication.
* Faciliter la contribution des personnes à vos projets en leur permettant d’explorer un historique de commit plus structurée.

## FAQ

### Comment dois-je gérer les messages de commit dans la phase de développement initiale ?

Nous vous recommandons de procéder comme si vous aviez déjà publié un produit. Généralement *quelqu'un*, même si ce sont vos collègues développeurs de logiciels, utilise votre logiciel. Ils voudront savoir ce qui est corrigé, ce qui casse, etc.

### Les types dans le titre des commits sont-ils en majuscules ou en minuscules ?

N'importe quelle casse (majuscule ou minuscule) peut être utilisée, mais il est préférable d'être cohérent.

### Que dois-je faire si le commit est conforme à plus d'un type de commit ?

Revenez en arrière et faites plusieurs commits autant que possible. Une partie des avantages de Conventional Commits réside dans sa capacité à nous inciter à créer des commits et des PR plus organisés.

### Est-ce que cela ne décourage pas le développement rapide et l’itération rapide ?

Cela décourage les commits rapides et désorganisée. Il vous aide à être en mesure d'évoluer rapidement et à long terme dans plusieurs projets avec des contributeurs variés.

### Les Conventional Commits pourraient-ils amener les développeurs à limiter le type d’engagements qu’ils effectuent car ils réfléchiront aux types fournis ?

Les Conventional Commits nous encouragent à utiliser davantage certains types de commits tels que les correctifs. En dehors de cela, la flexibilité des Conventional Commits permet à votre équipe de créer ses propres types et de les modifier au fil du temps.

### Quel est le lien avec SemVer ?

Les commits de type `fix` doivent être traduits en versions `PATCH`. Les commits de type `feat` doivent être traduits en versions `MINOR`. Les commits avec `BREAKING CHANGE` dans les commits, quel que soit leur type, doivent être traduits en versions `MAJOR`.

### Comment dois-je mettre à jour mes extensions de la spécification de Conventional Commits, par exemple `@jameswomack/conventionnel-commit-spec` ?

Nous vous recommandons d'utiliser SemVer pour publier vos propres extensions à cette spécification (et vous encourageons à les créer !)

### Que dois-je faire si j'utilise accidentellement le type de commit incorrect ?

#### Lorsque vous utilisez un type de commit incorrect, par exemple `fix` au lieu de `feat`

Avant de fusionner ou de publier l'erreur, nous vous recommandons d'utiliser `git rebase -i` pour éditer l'historique du commit. Après la publication, le nettoyage sera différent selon les outils et les processus que vous utilisez.

#### Lorsque vous utilisez un type qui n'est *pas* dans les spécifications, par exemple `feet` au lieu de` feat`

Dans le pire des cas, ce n'est pas la fin du monde si un commit atterrit sans respecter les spécifications de Conventional Commits. Cela signifie simplement que le commit sera ignoré par des outils basés sur les spécifications.

### Est-ce que tous mes contributeurs doivent utiliser les spécifications de Conventional Commits ?

Non ! Si vous utilisez un flux de travail basé sur squash sur Git, les responsables principaux peuvent nettoyer les messages de validation au fur et à mesure de leur fusion, ce qui permet de ne pas ajouter de charge de travail aux committers occasionnels.
Un processus courant consiste à ce que votre système git supprime automatiquement les validations d'une demande d'extraction et présente un formulaire permettant au responsable de la maintenance d'entrer le message de validation git approprié pour la fusion.

### Comment les Conventional Commits traitent-ils les annulations de commits ?

L'annulation de code peut être compliquée : est-ce une annulation de plusieurs commits ? Si vous annulez une fonctionnalité, la prochaine version devrait-elle être un correctif ?

Les Conventional Commits ne font pas un effort explicite pour définir le comportement d'annulation. Au lieu de cela, nous laissons les auteurs d’outils utiliser la flexibilité des _types_ et des _pieds de page_ pour développer leur logique de traitement des annulations.

Une recommandation consiste à utiliser le type `revert` et un pied de page qui fait référence aux SHA de validation qui sont annulés:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
