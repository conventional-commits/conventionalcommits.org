---
draft: false
---

# Commits Convencionales 1.0.0

## Resumen

La especificación de Commits Convencionales es una convención ligera sobre los mensajes de commits.
Proporciona un conjunto sencillo de reglas para crear un historial de commits explícito;
lo que hace más fácil escribir herramientas automatizadas encima del historial.
Esta convención encaja con [SemVer](http://semver.org),
al describir en los mensajes de los commits las funcionalidades, arreglos, y cambios de ruptura hechos.

El mensaje del commit debe ser estructurado de la siguiente manera:

---

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[nota(s) al pie opcional(es)]
```
---

<br />
El commit contiene los siguientes elementos estructurales, para comunicar la intención
a los consumidores de tu librería:

1. **fix:** un commit de _tipo_ `fix` corrige un error en la base del código (se correlaciona con [`PATCH`](http://semver.org/#summary) en el Versionado Semántico).
1. **feat:** un commit de _tipo_ `feat` introduce una nueva funcionalidad en la base del código (se correlaciona con [`MINOR`](http://semver.org/#summary) en el Versionado Semántico).
1. **BREAKING CHANGE:** un commit que contiene la nota al pie `BREAKING CHANGE:`, o que agrega un `!` después del tipo/ámbito, introduce un cambio de ruptura de API (se correlaciona con [`MAJOR`](http://semver.org/#summary) en el Versionado Semántico).
Un BREAKING CHANGE puede ser parte de commits de cualquier _tipo_.
1. _tipos_ distintos a `fix:` y `feat:` están permitidos, por ejemplo [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (basados en [la convención de Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) que recomienda `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, y otros.
1. _notas al pie_ distintas de `BREAKING CHANGE: <descripción>` pueden ser añadidas y siguen una convención similar al [formato git trailer](https://git-scm.com/docs/git-interpret-trailers).

Tipos adicionales no son obligatorios en la especificación de Commits Convencionales,
y no tienen un efecto implícito en el Versionado Semántico (al menos que incluyan un BREAKING CHANGE).
<br /><br />
Un ámbito puede ser añadido al tipo de un commit, para proveer información adicional contextual y debe ser contenido entre paréntesis, ej., `feat(parser): add ability to parse arrays`.

## Ejemplos

### Mensaje de commit con descripción y cambio de ruptura en la nota al pie

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Mensaje de commit con `!` para llamar la atención al cambio de ruptura

```
refactor!: drop support for Node 6
```

### Mensaje de commit con ambos `!` y BREAKING CHANGE en la nota al pie

```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### Mensaje de commit sin cuerpo

```
docs: correct spelling of CHANGELOG
```

### Mensaje de commit con ámbito

```
feat(lang): added polish language
```

### Mensaje de commit con cuerpo multi-párrafo y múltiples notas al pie

```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Especificación

Las palabras clave “DEBE” (“MUST”), “NO DEBE” (“MUST NOT”), “REQUERIDO” (“REQUIRED”),
“DEBERÁ” (“SHALL”), “NO DEBERÁ” (“SHALL NOT”), “DEBERÍA” (“SHOULD”),
“NO DEBERÍA” (“SHOULD NOT”), “RECOMIENDA” (“RECOMMENDS”), “PUEDE” (“MAY”) y
“OPCIONAL” (“OPTIONAL”) en este documento se deben interpretar como se describe
en [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Los commits DEBEN iniciarse con un prefijo de tipo que consiste en un sustantivo, `feat`, `fix`, etc., seguido del ámbito OPCIONAL, `!`OPCIONAL, y dos puntos y un espacio REQUERIDO.
2. El tipo `feat` DEBE ser usado cuando un commit agrega una nueva funcionalidad a la aplicación o librería.
3. El tipo `fix` DEBE ser usado cuando el commit representa una corrección a un error en el código de la aplicación (bug).
4. Un ámbito PUEDE ser añadido después de un tipo. Un ámbito DEBE consistir en un sustantivo que describa una sección de la base del código encerrado entre paréntesis, ej., `fix(parser):`.
5. Una descripción DEBE ir inmediatamente después del punto y coma y espacio del prefijo de tipo/ámbito. La descripción es resúmen corto de los cambios realizados en el código, ej., _fix: array parsing issue when multiple spaces were contained in string._.
6. Un cuerpo de commit más extenso PUEDE agregarse después de la descripción corta, dando información contextual adicional acerca de los cambios en el código. El cuerpo DEBE iniciar después de una línea en blanco después de la descripción.
7. Un cuerpo de commit es de forma-libre y PUEDE consistir de cualquier número de párrafos separados por una nueva línea.
8. Una o más notas al pie PUEDEN ser añadidas una línea en blanco después del cuerpo. Cada nota al pie DEBE consistir de una palabra ficha, seguida ya sea por un separador `:<espacio>` o `<espacio>#`, seguido por un valor cadena (string) (esto está inspirado por la [convención git trailer](https://git-scm.com/docs/git-interpret-trailers)).
9. Una palabra ficha de una nota al pie DEBE usar `-` en lugar de caracteres de espacios en blanco, ej., `Acked-by` (esto ayuda a diferenciar la sección de la nota al pie de un cuerpo multi párrafo). Se hace una excepción para `BREAKING CHANGE`, que también PUEDE ser usada como palabra ficha.
10. Una nota al pie PUEDE contener espacios y líneas en blanco, y el parseo DEBE terminar cuando se observe el siguiente separador/ficha.
11. Los cambios de ruptura DEBEN ser indicados en el prefijo de tipo/ámbito de un commit, o como una entrada en la nota al pie.
12. Si se incluye como una nota al pie, un cambio de ruptura DEBE consistir del texto en mayúsculas BREAKING CHANGE, seguido de dos puntos, y una descripción, ej., _BREAKING CHANGE: environment variables now take precedence over config files_.
13. Si se incluye en el prefijo de tipo/ámbito, cambios de ruptura DEBEN ser indicados por un `!` inmediatamente después de `:`. Si `!` es usado, `BREAKING CHANGE:` PUEDE ser omitido de la sección de la nota al pie, y la descripción del commit DEBERÁ ser usada para describir el cambio de ruptura.
14. Tipos diferentes a `feat` y `fix` PUEDEN ser usados en los mensajes de commit, ej., _docs: updated ref docs._.
15. Las unidades de información que componen Commits Convencionales NO DEBEN ser tratados como implementadores sensitivos de caso, con la excepción de BREAKING CHANGE que DEBE ir en mayúsculas.
16. BREAKING-CHANGE DEBE ser sinónimo de BREAKING CHANGE, cuando se usa en una nota al pie.

## ¿Por qué usar Commits Convencionales?

* Generación automática de CHANGELOGs.
* Determinación automática de un salto de la versión semántica en los tipos de commits).
* Comunicar la naturaleza de los cambios a los demás integrantes del equipo, el público o cualquier otro interesado.
* Activar procesos de procesos y publicación.
* Hacer más fácil a otras personas contribuir al proyecto al permitirles explorar una historia de los commits más estructurada.

## FAQ (Preguntas Frecuentes)

### ¿Cómo puedo trabajar con los mensajes de los commits en la etapa inicial de desarrollo?

Recomendamos trabajar como si ya hubieras lanzado tu producto. Típicamente _alguien_, incluso si son tus compañeros desarrolladores, están usando tu software. Ellos querrán saber qué se ha arreglado, qué se ha dañado, etc.

### ¿Los tipos en los títulos de los commits están en mayúsculas o en minúsculas?

Se puede utilizar cualquiera, pero es mejor ser coherente.

### ¿Qué hago si el commit se ajusta a más de uno de los tipos de commit?

Regresa y haz múltiples commits de ser posible. Parte de los beneficios de los Commits Convencionales es la habilidad para hacer commits y PRs más organizados.

### ¿No desalienta esto el desarrollo y la iteración rápida?

Desalienta moverse rápido de una forma desorganizada. Te ayuda a ser capaz de moverte rápido a largo plazo a través de proyectos con una gran variedad de contribuidores.

### ¿Pueden los Commits Convencionales llevar a los desarrolladores a limitar el tipo de commits que hacen ya que estarán pensando en los tipos previstos?

Los Commits Convencionales nos animan a hacer más de ciertos tipos de commits como _fixes_. Adicionalmente, la flexibilidad de los Commits Convencionales le permite a tu equipo generar sus propios tipos y cambiarlos a lo largo del tiempo.

### ¿Cómo se relaciona esto con SemVer?

El tipo de commit `fix` se traduce a un cambio de versión `PATCH`. El tipo de commit `feat` se traduce a un cambio de versión `MINOR`. Commits con el texto `BREAKING CHANGE`, sin importar su tipo, se traducen a un cambio de versión `MAJOR`.

### ¿Cómo debo versionar mis extensiones a la especificación de Commits Convencionales, e.g. `@jameswomack/conventional-commit-spec`?

Recomendamos usar SemVer para liberar tu propia extensión a esta especificación (¡Y te animamos a hacer esta extensión!)

### ¿Qué debo hacer si por accidente uso un tipo de commit equivocado?

#### Cuando utilizaste un tipo que es de la especificación pero del tipo correcto, e.g. `fix` en lugar de `feat`

Antes de combinar o liberar el error, recomendamos usar `git rebase -i` para editar el historial de los commits. Después de que se ha liberado, la limpieza será distinta de acuerdo a las herramientas y procesos que hayas utilizado.

#### Cuando usas un tipo que no está en la especificación, ej. `feet` en lugar de `feat`

En el peor de los escenarios, no es el fin del mundo si aparece un commit que no cumple con las especificaciones de los Commits Convencionales. Simplemente significa que el commit será ignorado por las herramientas que se basen en esta especificación.

### ¿Deben todos los que contribuyen a mi proyecto usar esta especificación?

¡No! Si usas un flujo de trabajo basado en `squash` los líderes del proyecto
pueden limpiar el mensaje en el momento en que se incorpora, sin agregar cargas
adicionales a quienes contribuyen casualmente. Un flujo de trabajo común para
esto es configurar tu sistema de git para que haga el `squash` de manera
automática de un pull request y presente al líder del proyecto un formulario
para que ingrese el mensaje de commit correcto al momento de hacer el merge.

### ¿Cómo maneja Commits Convencionales el revertir código?

Revertir código puede ser complicado: ¿Estás revirtiendo múltiples commits? ¿Si reviertes una funcionalidad, debería ser la siguiente versión un _patch_?

Commits Convencionales no hace un esfuerzo explícito para definir el comportamiento al revertir. En lugar de eso le dejamos a los autores de las herramientas la flexibilidad de los _tipos_ y _notas al pie_ para desarrollar la lógica para manejar los _reverts_.

Una recomendación es usar el tipo `revert`, y una nota al pie que haga referencia a los commit SHAs que son revertidos:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## Acerca de

La especificación de Commits Convencionales está inspirada, y fuertemente
basada, en [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).

El primer borrador de esta especificación ha sido escrito en colaboración con
algunos de los colaboradores de:

* [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): una serie de herramientas para analizar los mensajes de los commits de los historiales de git.
* [parse-commit-message](https://npmjs.com/package/parse-commit-message): Utilidades extensibles para parsear, stringificar y validar mensajes de Commits Convencionales.
* [bumped](https://bumped.github.io): una herramienta para liberar software que hace fácil el realizar acciones antes y después de lanzar una nueva versión de tu software.
* [unleash](https://github.com/netflix/unleash): una herramienta para automatizar los ciclos de vida de liberación de software y publicación.
* [lerna](https://github.com/lerna/lerna): una herramienta para manejar mono-repositorios, que creció a partir del proyecto Babel.

## Herramientas para Commits Convencionales

* [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit14): libreria de go para parsear mensajes de commit siguiendo la especificación.
* [chglog](https://github.com/goreleaser/chglog): una herramienta para parsear mensajes de Commits Convencionales de los historiales de git y convertirlos en registros de cambios con plantillas.
* [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): sigue la especificación para manejar versiones y generar un registro de cambios automáticamente
* [commitizen/cz-cli](https://github.com/commitizen/cz-cli): Una herramienta de Node.js para crear mensajes de commit siguiendo los specs de Commits Convencionales.
* [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): Una herramienta escrita en Python para crear reglas de commits para proyectos, auto saltar versiones y auto generar registros de cambios.
* [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): Una herramienta de PHP construida para crear mensajes de commit siguiendo los specs de Commits Convencionales. Configurable y usable para proyectos PHP como una dependencia de composer o usable globalmente para proyectos no-PHP.
* [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): una herramienta construida para generar un registro de cambios desde el historial de mensajes de commits de un proyecto y metadata y automatizar versionado con Semver, siguiendo los specs de Commits Convencionales. Configurable y usable para proyectos PHP como una dependencia de composer o usable globalmente para proyectos no-PHP.
* [commitlint](https://github.com/conventional-changelog/commitlint): Un linter para checar que tus mensajes de commits cumplan el formato de Commits Convencionales.
* [gitlint](https://github.com/jorisroovers/gitlint): Linter de mensajes de commit de git escrito en Python, que puede ser configurado para [aplicar el formato de Commits Convencionales](https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits).
* [conform](https://github.com/autonomy/conform): una herramienta que puede ser usada para aplicar políticas en repositorios de git, incluyendo Commits Convencionales.
* [detect-next-version](https://npmjs.com/package/detect-next-version): Parsea, detecta y obten más metadata acerca de Commits Convencionales.
* [recommended-bump](https://www.npmjs.com/package/recommended-bump): Calcula el salto de versión recomendado basado en Commits Convencionales dados.
* [git-commits-since](https://www.npmjs.com/package/git-commits-since): Obten todos commits (crudos) desde un periodo or (por default) desde la última etiqueta SemVer de git, además de soporte para plugins.
* [standard-version](https://github.com/conventional-changelog/standard-version): Versionado automático y manejo de CHANGELOG, usando el nuevo botón squash de GitHub y el flujo de trabajo recomemdado de Commits Convencionales.
* [Conventional Commit](https://github.com/lppedd/idea-conventional-commit): proporciona una terminación extensible basada en el contexto y en las plantillas, así como inspecciones, para los Commits convencionales dentro del diálogo VCS Commit. Disponible para todos los [IDEs de JetBrains](https://www.jetbrains.com/).
* [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): Agrega soporte de Commits Convencionales a los [Editores de JetBrains](https://www.jetbrains.com/) (IntelliJ IDEA, PyCharm, PhpStorm...).
* [commitsar](https://github.com/commitsar-app/commitsar): Herramienta de Go para checar si commits de una rama cumplen con Commits Convencionales. Viene con una imagen de Docker para usos de CI.
* [semantic-release](https://github.com/semantic-release/semantic-release): Una herramienta que automatiza el paquete completo del flujo de trabajo del lanzanmiento incluyendo: determinar el siguiente número de versión, generar las notas de lanzamiento y publicar el paquete.
* [python-semantic-release](https://github.com/relekang/python-semantic-release): Versionado Semático automatizado para proyectos de Python. Esta es una implementación de Python para [semantic-release](https://github.com/semantic-release/semantic-release) para Node.js.
* [VSCode Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits): Agrega soporte de Commits Convencionales a VSCode.
* [Pyhist](https://github.com/jgoodman8/pyhist): Una utilidad de Python para automáticamente actualizar la versión del paquete desde el historial de git y generar el Changelog.
* [git-mkver](https://github.com/idc101/git-mkver): Una herramienta para automáticamente aplicar Versionado Semántico a repositorios de git basado en _Commits Convencionales_.
* [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): Una utilidad agnóstica de herramientas y lenguajes para calcular la siguiente versión semántica basada en los _Commits Convencionales_ desde la versión anterior. Soporta monorepos.
* [change](https://github.com/adamtabrams/change): Una herramienta para generar y actualizar un registro de cambios utilizando Commits Convencionales.
* [Turbogit](https://b4nst.github.io/turbogit): Una herramienta de la línea de comandos para ayudarte a seguir el flujo de _Commits Convencionales_.
* [sv4git](https://github.com/bvieira/sv4git): Una herramienta de la línea de comandos (CLI) para validar los mensajes de commit, saltar versiones, crear etiquetas y generar registros de cambios.
* [Versio](https://github.com/chaaz/versio): Una herramienta compatible con monorepos que actualiza los números de versión basada en commits convencionales y las dependencias del proyecto. También genera etiquetas y registros de cambio.

## Proyectos usando Commits Convencionales

* [NFPM](https://github.com/goreleaser/nfpm): NFPM no es FPM - un simple manejador de paquetes de deb, rpm y apk escrito en Go.
* [yargs](https://github.com/yargs/yargs): el analizador de argumentos de línea de comandos con temática pirata favorito de todos.
* [istanbuljs](https://github.com/istanbuljs/istanbuljs): una colección de herramientas y librerías open-source para agregar cobertura de pruebas a tus tests de JavaScript.
* [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) and [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame): Interfaz de usuario opcional suplementaria que mejora [Apereo uPortal](https://www.apereo.org/projects/uportal).
* [massive.js](https://github.com/dmfay/massive-js): Una librería de acceso a datos para Node y PostgreSQL.
* [electron](https://github.com/electron/electron): Construye app de escritorio multi-plataforma con JavaScript, HTML, y CSS.
* [scroll-utility](https://github.com/LeDDGroup/scroll-utility): Un paquete de utilidad simple de usar para centrar elementos, animaciones suaves.
* [Blaze UI](https://github.com/BlazeUI/blaze): kit de herramientas open-source para UI agnóstico a un Framework.
* [Monica](https://github.com/monicahq/monica): Un sistema open source para administrar relaciones personales.
* [mhy](https://mhy.js.org): Una caja de herramientas y ambiente de desarrollo, de cero configuración, out-of-the-box.
* [@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): Analizador simple de archivos Diff (formato diff unificado).
* [@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): Fácil división de .diff y .patch en sus archivos.
* [@thi.ng/umbrella](https://github.com/thi-ng/umbrella): Monorepo de ~100 proyectos de TypeScript para el desarrollo basado en datos.
* [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): 🔥 Una plantilla de aplicación Yii2 mejorada.
* [dcyou/resume](https://github.com/dcyou/resume): 😎  Plantilla para crear fácil y rápidamente tu CV en línea.
* [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): Crea fácilmente formas dinámicas en línea para capturar y enviar datos precisos y actuales.
* [Tina CMS](https://tinacms.org): Un conjunto de herramientas de código abierto para incorporar la administración de contenidos del front-end a tu sitio web.
* [Belajarpython](https://github.com/belajarpythoncom/belajarpython.com): Sitio indonesio de tutoriales de programación python open source.
* [Uno Platform](https://platform.uno): Construye aplicaciones móviles, de escritorio y WebAssembly con C# y XAML. Hoy. Open source y soporte profesional.
* [Jenkins X](https://jenkins-x.io/): Jenkins X ofrece automatización de pipelines, GitOps integrado y entornos de vista previa para ayudar a los equipos a colaborar y acelerar su entrega de software a cualquier escala.
* [Changeloguru](https://github.com/haunt98/changeloguru): Auto-genera registros de cambios a partir de commits convencionales, escrito en Go.

[![Commits Convencionales](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

_¿quieres tener tu proyecto en esta lista?_ [envía un pull request](https://github.com/conventional-changelog/conventionalcommits.org/pulls).
