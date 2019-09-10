---
draft: false
aliases: ["/fr/"]
---

# Conventional Commits 1.0.0-beta.4

## Résumé

La spécification de Conventional Commits est une convention légère pour des messages de commit au top.
Il fournit un ensemble simple de règles pour créer un historique de commit explicite;
Ce qui facilite l'écriture d'outils automatisés.
Cette convention est liée à [SemVer](http://semver.org),
en décrivant les fonctionnalités,
les correctifs et les modifications importantes apportées aux messages de commit.

Le message du commit doit être structuré comme suit:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```
---

<br />
Le commit contient les éléments structurels suivants, permettant de communiquer à l’intention des
consommateurs de votre bibliothèque:

1. **fix:** un commit de _type_ `fix` corrige un bogue dans le code (cela est en corrélation avec
[`PATCH`](http://semver.org/#summary) en versioning sémantique).
1. **feat:** un commit de _type_ `feat` introduit une nouvelle fonctionnalité dans le code (cela est en corrélation avec  [`MINOR`](http://semver.org/#summary) en versioning sémantique).
1. **BREAKING CHANGE:** un commit qui a le texte `BREAKING CHANGE:` qui est facultatif au début du texte ou section de pied de page introduit un changement cassant l'API (cela est en corrélation avec [`MAJOR`](http://semver.org/#summary) en versioning sémantique).
Un changement radical peut faire partie des commits de n'importe quel type.
1. Others: commit de _types_ autre que `fix:` et `feat:` sont autorisés, par exemple [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basé sur [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) recommande `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, et d'autres.

Nous recommandons également `improvement` pour les commits qui améliorent une implémentation en cours sans ajouter de nouvelle fonctionnalité ou correction de bogue. Remarquez que ces types ne sont pas prescrits par la spécification de Conventional Commits et n'ont aucun effet implicite dans la gestion des versions sémantiques (à moins qu'ils ne comportent un BREAKING CHANGE).
<br />
Un scope peut être fournie au type d'un commit, pour fournir des informations contextuelles supplémentaires et
le contenu entre parenthèses, par exemple, `feat (analyseur): ajout possibilité d'analyser des tableaux`.

## Exemples

### Message de commit avec description et changement radical dans le texte
```
feat: permet à l'objet de configuration fourni d'étendre d'autres configurations

BREAKING CHANGE: la clé `extends` dans le fichier de configuration est maintenant utilisée pour étendre d'autres fichiers de configuration
```

### Message du commit avec l'option `!` attire l'attention sur un changement radical
```
chore!: supprimer le nœud 6 de la matrice de test

BREAKING CHANGE: suppression du nœud 6 qui arrive en fin de vie en avril
```

### Message commit sans corps de texte
```
docs: correction d'orthographe dans CHANGELOG
```

### Message commit avec scope
```
feat(lang): ajout de la langue polonaise
```

### Message commit pour un correctif à l'aide d'un numéro d'un issue (facultatif).
```
fix: fautes de frappe mineures dans le code

voir le problème pour plus de détails sur les fautes de frappe corrigées

fixes issue #12
```

## Spécification

Les mots clés ”DOIT” (“MUST”), “NE DOIT PAS” (“MUST NOT”), “REQUIS” (“REQUIRED”), “NE DOIT” (“SHALL”), “NE DOIT PAS” (“SHALL NOT”), “NE DEVRAIT” (“SHOULD”), “NE DEVRAIT PAS” (“SHOULD NOT”), “RECOMMANDÉ” (“RECOMMENDED”), “PEUT” (“MAY”), et “FACULTATIF” (“OPTIONAL”) dans ce document doivent être interprétés comme décrit dans [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Les commits DOIT être préfixés par un type, qui consiste en un nom, `feat`,` fix`, etc.,
   suivi d'un côlon et d'un espace.
1. Le type `feat` DOIT être utilisé lorsqu'un commit ajoute une nouvelle fonctionnalité à votre application.
  ou bibliothèque.
1. Le type `fix` DOIT être utilisé lorsqu'un commit représente un correctif pour votre application.
1. Un scope facultative PEUT être fournie après un type. Un scope est une phrase décrivant
  une section du code encadrée par des parenthèses, par exemple, `fix (analyseur):`
1. Une description DOIT suivre immédiatement le préfixe type/scope.
  La description est une brève description des modifications du code, par exemple,
  _fix: problème d'analyse d'un tableau lorsque plusieurs espaces étaient contenus dans string._
1. Un texte plus long PEUT être fourni après la description courte, fournissant des informations contextuelles supplémentaires sur les modifications du code. Le texte DOIT commencer par une ligne vide après la description.
1. Un pied de page d'une ou plusieurs lignes PEUT être précédé d'une ligne blanche après le corps. Le pied de page DOIT contenir des méta-informations.
  À propos du commit, par exemple, demandes d'extraction associées, relecteurs, modifications importantes, avec une méta-information
par ligne.
1. Les changements de rupture DOIVENT être indiqués au tout début de la section corps, ou au début d’une ligne dans la section pied de page. Un changement radical DOIT être dans le texte en majuscule BREAKING CHANGE, suivi de deux points et d'un espace.
1. Une description DOIT être fournie après le `BREAKING CHANGE: `, décrivant
  la modification de l’API, par exemple, _BREAKING CHANGE: les variables d’environnement sont désormais prioritaires sur les fichiers de configuration._
1. Des types autres que `feat` et` fix` PEUVENT être utilisés dans vos messages de commit.
1. Les unités d'informations constituant les commits classiques NE DOIVENT PAS être considérées comme sensibles à la casse par les développeurs, à l'exception de BREAKING CHANGE, qui DOIT être en majuscule.
1. Un `!` PEUT être ajouté avant le `:` dans le préfixe type/scope, pour attirer davantage l'attention sur la modification des modifications. `BREAKING CHANGE: la description` DOIT également être incluse dans le corps
ou pied de page, avec le `!` dans le préfixe.

## Pourquoi Utiliser Conventional Commits

* Génération automatique de CHANGELOGs.
* Déterminer automatiquement un choc de version sémantique (en fonction des types de commits débarqués).
* Communiquer la nature des changements aux coéquipiers, au public et aux autres parties prenantes.
* Déclencher des processus de construction et de publication.
* Faciliter la contribution des personnes à vos projets en leur permettant d’explorer
   un historique de commit plus structurée.

## FAQ

### Comment dois-je gérer les messages de commit dans la phase de développement initiale ?

Nous vous recommandons de procéder comme si vous aviez déjà publié un produit. Généralement *quelqu'un*, même si ce sont vos collègues développeurs de logiciels, utilise votre logiciel. Ils voudront savoir ce qui est corrigé, ce qui casse, etc.

### Les types dans le titre des commits sont-ils en majuscules ou en minuscules?

N'importe quel taille peut être utilisé, mais il est préférable d'être cohérent.

### Que dois-je faire si le commit est conforme à plus d'un type de commit?

Revenez en arrière et faites plusieurs commits autant que possible. Une partie des avantages de Conventional Commits réside dans sa capacité à nous inciter à créer des commits et des PR plus organisés.

### Est-ce que cela ne décourage pas le développement rapide et l’itération rapide ?

Cela décourage les commits rapides de manière désorganisée. Il vous aide à être en mesure que vous commité rapidement à long terme dans plusieurs projets avec des contributeurs variés.

### Les engagements conventionnels peuvent-ils amener les développeurs à limiter le type d’engagements qu’ils font car ils penseront aux types fournis?

Conventional Commits nous encouragent à utiliser davantage certains types de commits tels que les correctifs. En dehors de cela, la flexibilité de Conventional Commits permet à votre équipe de créer ses propres types et de les modifier au fil du temps.

### Quel est le lien avec SemVer ?

Les corrections de type `fix` devraient être traduites en` PATCH`. Les commits de type `feat` devraient être traduits en versions` MINOR`. Les commits avec `BREAKING CHANGE` dans les commits, quel que soit leur type, doivent être traduits en versions` MAJOR`.

### Comment dois-je mettre à jour mes extensions de la spécification de Conventional Commits, par exemple `@jameswomack/conventionnel-commit-spec` ?

Nous vous recommandons d’utiliser SemVer pour publier vos propres extensions à cette spécification (et
vous encourage à faire ces extensions !)

### Que dois-je faire si j'utilise accidentellement le type de commit incorrect ?

#### Lorsque vous utilisez un type de commit incorrect, par exemple `fix` au lieu de` feat`

Avant de fusionner ou de libérer l'erreur, nous vous recommandons d'utiliser `git rebase -i` pour éditer l'historique du commit. Après la publication, le nettoyage sera différent selon les outils et les processus que vous utilisez.

#### Lorsque vous utilisez un type qui n'est *pas* dans les spécifications, par exemple `feet` au lieu de` feat`

Dans le pire des cas, ce n'est pas la fin du monde si un commit atterrit sans respecter les spécifications de Conventional Commits. Cela signifie simplement que l’engagement sera raté par des outils basés sur les spécifications.

### Est-ce que tous mes contributeurs doivent utiliser les spécifications de Conventional Commits ?

Non! Si vous utilisez un flux de travail basé sur squash sur Git, les responsables principaux peuvent nettoyer les messages des commits au fur et à mesure de leur fusion, ce qui permet de ne pas ajouter de charge de travail aux committers occasionnels.
Un processus courant consiste à ce que votre système git écrase automatiquement les commits d'une demande d'extraction et présente un formulaire permettant au responsable de la maintenance d'entrer le message du commit git approprié pour la fusion.

## À Propos

La spécification Conventional Commits s’inspire largement de [Angular Commit Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) et s’appuie fortement sur celles-ci.

La première version de cette spécification a été écrite en collaboration avec certaines personnes contribuant à:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): Un ensemble d'outils permettant d'analyser les messages des commits classiques à partir des historiques git.
* [bumped](https://bumped.github.io): Un outil de publication de logiciel qui facilite l'exécution d'actions avant et après la publication d'une nouvelle version de votre logiciel.
* [unleash](https://github.com/netflix/unleash): Un outil pour automatiser le versioning d'un logiciel et du cycle de publication.
* [lerna](https://github.com/lerna/lerna): Un outil de gestion de monorepos, qui a grandi du projet Babel.

## Outils pour Conventional Commits

* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Un outil conçu pour créer des messages de commit en suivant les spécifications de Conventional Commits.
Configurable et utilisable pour les projets PHP en tant que dépendance composer ou utilisable globalement pour les projets non-PHP.
* [conform](https://github.com/autonomy/conform): Un outil qui peut être utilisé pour appliquer des stratégies sur les référentiels git, y compris les commits classiques.
* [standard-version](https://github.com/conventional-changelog/standard-version): Le versioning automatique et la gestion de CHANGELOG, en utilisant le nouveau bouton squash de GitHub et le flux de travail Conventional Commits est recommandé.

## Projets Utilisant Conventional Commits

* [yargs](https://github.com/yargs/yargs): Le parseur d'arguments en ligne de commande sur le thème des pirates préféré de tous.
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): une collection d'outils open-source
 et bibliothèques pour ajouter une couverture de test à vos tests JavaScript.
* [standard-version](https://github.com/conventional-changelog/standard-version): Le versioning automatique et la gestion de CHANGELOG, en  utilisant le nouveau bouton squash de GitHub et le flux de travail Conventional Commits recommandé.
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) et [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Amélioration optionnelle de l'interface utilisateur [Apereo uPortal](https://www.apereo.org/projects/uportal).
* [massive.js](https://github.com/dmfay/massive-js): Une bibliothèque d'accès aux données pour Node et PostgreSQL.
* [electron](https://github.com/electron/electron): Créez des applications de bureau multiplates-formes avec JavaScript, HTML et CSS.
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Un utilitaire de défilement simple à utiliser pour le centrage des éléments et des animations fluides.
* [Blaze UI](https://github.com/BlazeUI/blaze): Framework-free d'outilsmodulaire open source.
* [Monica](https://github.com/monicahq/monica): Un système de gestion de relations personnelles open source.
* [mhy](https://mhy.js.org): 🧩 Une boîte à outils polyvalente et un environnement de développement prêts à l'emploi.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_envie d'avoir votre projet sur cette liste?_ [envoyer une pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
