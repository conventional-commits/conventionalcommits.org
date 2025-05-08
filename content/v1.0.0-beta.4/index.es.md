---
draft: false
aliases: ["/es/"]
---

# Commits Convencionales 1.0.0-beta.4

## Resumen

La estandarización de Commits Convencionales es una convención ligera sobre los commits.
Proporciona un conjunto sencillo de reglas para crear un historial de commits explícito;
lo que facilita la escritura de herramientas automatizadas encima.
Esta convención encaja con [SemVer](http://semver.org),
describiendo las funciones, las correcciones y los cambios importantes realizados en los commits.

El commit debe ser esctructurado de la siguiente manera:

---

```
<tipo>[ambito opcional]: <descripcion>

[cuerpo opcional]

[nota(s) al pie opcional(es)]
```
---

<br />
El commit contiene los siguientes elementos estructurales, para comunicar la intención
a los consumidores de su librería:

1. **fix:** un commit de _tipo_ `fix` corrige un error en la base del código (se correlaciona con [`PATCH`](http://semver.org/#summary) en el Versionado Semántico).
1. **feat:** un commit de _tipo_ `feat` introduce una nueva funcionalidad en la base del código (se correlaciona con [`MINOR`](http://semver.org/#summary) en el Versionado Semántico).
1. **BREAKING CHANGE:** un commit que contiene la nota al pie `BREAKING CHANGE:`, o que agrega un `!` después del tipo/ámbito, introduce un cambio de ruptura de API (se correlaciona con [`MAJOR`](http://semver.org/#summary) en el Versionado Semántico).
Un BREAKING CHANGE puede ser parte de commits de cualquier _tipo_.

1. Otros: se permiten commit _types_ que no sean `fix:` y `feat:`, por ejemplo [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/% 40commitlint/config-conventional) (basado en la [convención angular](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit)) recomienda `chore:`, `docs:`, ` style:`, `refactor:`, `perf:`, `test:` y otros.

También recomendamos `improvement` para compromisos que mejoran una implementación actual sin agregar una nueva función o corregir un error.
Tenga en cuenta que estos tipos no están obligados por la especificación de confirmación convencional y no tienen un efecto implícito en el control de versiones semántico (a menos que incluyan un CAMBIO IMPORTANTE).
<br />
Un ambito puede proporcionar un "alcance" al tipo de commit, para proporcionar información contextual adicional y este está contenido entre paréntesis, por ejemplo, `feat(parser): agregar capacidad para analizar matrices`.

## Ejemplos

### Mensaje de commit con descripción y cambio de ruptura en la nota al pie

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Mensaje de commit con `!` para llamar la atención al cambio de ruptura
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### Mensaje de commit sin cuerpo
```
docs: correct spelling of CHANGELOG
```

### Mensaje de commit con ambito (scope)
```
feat(lang): add polish language
```

### Mensaje de commit para un fix usando número de issue (opcional)
```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## Especificación

1. Los commits DEBEN iniciarse con un prefijo de tipo que consiste en un sustantivo, `feat`, `fix`, etc., seguido del ámbito OPCIONAL, `!`OPCIONAL, y dos puntos y un espacio REQUERIDO.
1. El tipo `feat` DEBE ser usado cuando un commit agrega una nueva funcionalidad a la aplicación o librería.
1. El tipo `fix` DEBE ser usado cuando el commit representa una corrección a un error en el código de la aplicación (bug).
1. Un ámbito PUEDE ser añadido después de un tipo. Un ámbito DEBE consistir en un sustantivo que describa una sección de la base del código encerrado entre paréntesis, ej., `fix(parser):`.
1. Una descripción DEBE ir inmediatamente después de los dos puntos y el espacio del prefijo de tipo/ámbito. La descripción es resúmen corto de los cambios realizados en el código, ej., _fix: array parsing issue when multiple spaces were contained in string._.
1. Un cuerpo de commit más extenso PUEDE agregarse después de la descripción corta, dando información contextual adicional acerca de los cambios en el código. El cuerpo DEBE iniciar después de una línea en blanco después de la descripción.
1. Una nota al pie (footer) PUEDE tener una línea en blanco después del cuerpo. Una nota al pie de página DEBE contener metainformación
sobre la confirmación, por ejemplo, solicitudes de extracción relacionadas, revisores, cambios importantes, con una pieza de metainformación
por línea.
1. Los cambios importantes DEBEN indicarse al comienzo de la sección del cuerpo o al comienzo de una línea en la sección del pie de página. Un cambio importante DEBE consistir en el texto en mayúsculas BREAKING CHANGE, seguido de dos puntos y un espacio.
1. DEBE proporcionarse una descripción después del `BREAKING CHANGE: `, que describa qué ha cambiado en la API, por ejemplo, _BREAKING CHANGE: las variables de entorno ahora tienen prioridad sobre los archivos de configuración._
1. Los tipos que no sean `feat` y `fix` PUEDEN usarse en sus mensajes de confirmación.
1. Los implementadores NO DEBEN tratar la información que componen los commits convencionales distinciones entre mayusculas y minusculas, con la excepción de BREAKING CHANGE, que DEBE estar en mayúsculas.
1. Se PUEDE agregar un `!` antes de `:` en el prefijo de tipo/ambito(scope), para llamar aún más la atención sobre los cambios importantes. `BREAKING CHANGE: descripción` también DEBE incluirse en el cuerpo
o pie de página, junto con `!` en el prefijo.

## ¿Por qué usar Commits Convencionales?

* Generación automática de CHANGELOGs.
* Determinación automática de un salto de versión semántico (basado en los tipos de commits utilizados).
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

¡No! Si usas un flujo de trabajo basado en `squash` los líderes del proyecto pueden limpiar el mensaje en el momento en que se incorpora, sin agregar cargas adicionales a quienes contribuyen casualmente. Un flujo de trabajo común para esto es configurar tu sistema de git para que haga el `squash` de manera automática de un pull request y presente al líder del proyecto un formulario para que ingrese el mensaje de commit correcto al momento de hacer el merge.
