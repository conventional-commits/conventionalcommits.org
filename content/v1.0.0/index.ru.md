---
draft: false
aliases: ["/ru/"]
---

# Соглашение о коммитах 1.0.0

## Главное

Спецификация «Соглашение о коммитах» — простое соглашение о том, как нужно
писать сообщения коммитов.  Оно описывает простой набор правил для создания
понятной истории коммитов, а также позволяет проще разрабатывать инструменты
автоматизации, основанные на истории коммитов.  Данное соглашение совместимо с
[семантическим версионированием][semver], описывая новые функции, исправления и
изменения, нарушающие обратную совместимость в сообщениях коммитов.

Сообщения коммитов должны быть следующей структуры:

---

```
<тип>[необязательный контекст]: <описание>

[необязательное тело]

[необязательная(ые) сноска(и)]
```
---

<br />
Коммит содержит следующие структурные элементы для передачи намерений
пользователям вашей библиотеки:

1. **fix:** коммит _типа_ `fix` исправляет баг в вашем коде (соответствует
   `PATCH` в [семантическом версионировании][semver]).
1. **feat:** коммит _типа_ `feat` добавляет новую функцию в ваш код
   (соответствует `MINOR` в [семантическом версионировании][semver]).
1. **BREAKING CHANGE:** коммит, который имеет _сноску_ `BREAKING CHANGE` или
   коммит, заканчивающийся восклицательным знаком (`!`) после _типа_ или
   _контекста_, вводящий изменение(я), нарушающие обратную совместимость
   (соответствует `MAJOR` в [семантическом версионировании][semver]).
   `BREAKING CHANGE` может быть частью коммита любого _типа_.
1. Другие _типы_ коммитов разрешены.  Например,
   [@commitlint/config-conventional][@commitlint/config-conventional] (основан
   на [соглашении Angular][angular-convention]) рекоммендует `build`, `chore`,
   `ci`, `docs`, `style`, `refactor`, `perf`, `test` и другие.
1. Другие _сноски_ коммитов могут быть аналогичны соглашению [git trailer
   format][git-trailer-format].

Дополнительные _типы_ не требуются «Соглашению о коммитах» и не имеют неявного
эффекта в [семантическом версионировании][semver] (если только они не включают
`BREAKING CHANGE`).
<br /><br />
_Контекст_ может быть добавлен к _типу_ коммита, чтобы предоставить
дополнительную контекстную информацию; она содержится в скобках.  Например,
`feat(parser): add ability to parse arrays`.

## Примеры

### Сообщение коммита с _описанием_ и _сноской_ `BREAKING CHANGE`
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Чтобы привлечь внимание к критическим изменением, к сообщению коммита добавляется `!`
```
refactor!: drop support for Node 6
```

## Сообщение коммита с _контекстом_ и `!` для привлечения внимания к `BREAKING CHANGE`
```
refactor(runtime)!: drop support for Node 6
```

### Сообщение коммита вместе с `!` и _сноской_ `BREAKING CHANGE`.
```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

### Сообщение коммита без _тела_
```
docs: correct spelling of CHANGELOG
```

### Сообщение коммита с _контекстом_.
```
feat(lang): add polish language
```

### Сообщение коммита с _телом_ из нескольких абзацев и несколькими _сносками_
```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

## Спецификация

Слова «MUST», «MUST NOT», «REQUIRED», «SHALL», «MAY» и «OPTIONAL» в данном
документе должны интерпретироваться как в [RFC 2119][rfc-2119].

1. Коммиты должны (MUST) начинатся с _типа_, который является существительным:
   `feat`, `fix` и т. д.  За ним следует необязательный (OPTIONAL) _контекст_,
   необязательный (OPTIONAL) восклицательный знак (`!`) и обязательные
   (REQUIRED) двоеточие (`:`) и пробел (` `).
1. _Тип_ `feat` должен (MUST) использоваться, когда коммит добавляет новый
   функционал в ваше приложение или вашу библиотеку.
1. _Тип_ `fix` должен (MUST) использоваться, когда коммит исправляет баг в
   вашем приложении или вашей библиотеке.
1. _Контекст_ может (MAY) следовать после _типа_.  _Контекст_ должен (MUST)
   быть существительным, заключённым в круглые скобки, описывающий часть
   кодовой базы, которую затронул коммит.  Например, `fix(parser)`.
1. _Описание_ должно (MUST) следовать сразу за двоеточием (`:`) и пробелом
   (` `) после _типа_ или _контекста_.  _Описание_ представляет собой краткое
   изложение изменений кода.  Например, `fix: array parsing issue when multiple
   spaces were contained in string`.
1. _Тело_ коммита может (MAY) следовать после короткого _описания_, добавляя
   дополнительную контекстную информацию об изменениях в коде.  _Тело_ должно
   (MUST) отделяться от _описания_ одной пустой строкой.
1. _Тело_ коммита имеет произвольную форму и может (MAY) состоять из любого
   количества абзацев, разделённых новой строкой.
1. В одной или нескольких _сносках_ может (MAY) быть одна пустая строка после
   _тела_.  Каждая _сноска_ должна (MUST) состоять из токена слова, за которым
   следует разделитель `:<пробел>` или `<пробел>#`, за которым следует
   строковое значение (основано на [git trailer format][git-trailer-format]).
1. Токен _сноски_ должен (MUST) использовать `-` вместо пробельных символов.
   Например, `Acked-by` (это помогает отличить раздел _сноски_ от его _тела_,
   состоящего из нескольких абзацев).  Исключение составляет `BREAKING CHANGE`,
   которое может (MAY) также использоваться как токен.
1. _Сноска_ может (MAY) содержать пробелы и символы новой строки, а парсер
   должен (MUST) завершаться при обнаружении следующей допустимой пары
   токен-разделитель _сноски_.
1. Критические изменения должны (MUST) быть указаны в _типе_, _контесте_ или
   _сноске_ коммита.
1. Если `BREAKING CHANGE` включено в _сноску_, то оно должно (MUST) состоять из
   прописного текста `BREAKING CHANGE`, за которым следует двоеточие (`:`),
   пробел (` `) и _описание_.  Например, `BREAKING CHANGE: environment
   variables now take precedence over config files`.
1. Если критические изменения находятся в _типе_ или _контексте_, то они должны
   (MUST) быть обозначены восклицательным знаком (`!`), непосредственно перед
   двоеточием (`:`).  Если используется восклицательный знак (`!`), то
   `BREAKING CHANGE` может (MAY) быть опущен в _сноске_, а _описание_ коммита
   должно (SHALL) использоваться для описания критического изменения.
1. В ваших сообщениях коммитов могут (MAY) использоваться _типы_, отличные от
   `feat` и `fix`.  Например, `docs: updated ref docs`.
1. Единицы информации, которые составляют «Соглашение о коммитах», не должны
   (MUST NOT) обрабатываться разработчиками как чувствительные к регистру, за
   исключением `BREAKING CHANGE`, которое должно (MUST) быть прописными.
1. `BREAKING-CHANGE` должен (MUST) быть синонимом `BREAKING CHANGE` при
   использовании в качестве токена в _сноске_.

## Зачем использовать «Соглашение о коммитах»

* Автоматическое создание списков изменения.
* Автоматическое определение семантического повышения версии (на основе _типов_
  совершённых коммитов).
* Информирование товарищей по команде, общественности и других заинтересованных
  сторон о характере изменений.
* Запуск процессов сборки и публикации.
* Упростите людям участие в ваших проектах, позволив им изучить более
  структурированную историю коммитов.

## FAQ (часто задаваемые вопросы)

### Как мне поступать с сообщениями коммитов на начальном этапе разработки?

Мы рекомендуем действовать так, как если бы вы уже выпустили продукт.  Обычно
*кто-то*, даже если это ваши коллеги-разработчики программного обеспечения,
использует ваше программное обеспечение.  Они захотят знать, что исправлено,
что ломается и т. д.

### _Типы_ в заголовке коммита должны быть прописными или строчными?

Выберите тот, который больше всего вам нравится, и строго ему следуйте.

### Что мне делать, если коммит соответствует более чем одному _типу_?

По возможности вернитесь назад и сделайте несколько коммитов.  Частью
преимущества «Соглашения о коммитах» является способность побуждать нас делать
более организованные коммиты и PRs (pull requests, или пулл-реквесты, или
запросы на вытягивание).

### Разве это не препятствует интенсивной разработке и быстрой итерации?

Это препятствует быстрому неорганизованному движению.  Это поможет вам быстро
продвигаться в долгосрочной перспективе в нескольких проектах с разными
участниками.

### Может ли «Соглашение о коммитах» привести разработчиков к ограничению _типов_ совершаемых ими коммитов, потому что они будут думать в соответствии с предоставленными _типами_?

«Соглашение о коммитах» побуждают нас делать больше определённых _типов_
коммитов, таких как `fix`.  Помимо этого, гибкость «Соглашения о коммитах»
позволяет вашей команде придумывать свои собственные _типы_ и со временем
изменять их.

### Как это связано с [семантическим версионированием][semver]?

Коммиты _типа_ `fix` должны быть переведены в выпуски `PATCH`, `feat` — в
`MINOR`, `BREAKING CHANGE`, независимо от _типа_, — в `MAJOR`.

### Как мне довести свои расширения до спецификации «Соглашение о коммитах».  Например, `@jameswomack/standard-commit-spec`?

Мы рекомендуем использовать [семантическое версионирование][semver] для выпуска
ваших собственных расширений для этой спецификации (и призываем вас создавать
эти расширения!).

### Что мне делать, если я случайно использовал неправильный _тип_ коммита?

#### Когда вы использовали _тип_, соответствующий спецификации, но неправильный.  Например, `fix` вместо `feat`

Перед объединением или выпуском ошибки мы рекомендуем использовать `git rebase
-i` для редактирования истории коммитов.  После выпуска редактирование будет
отличаться в зависимости от того, какие инструменты и процессы вы используете.

#### Когда вы использовали _тип_, не указанный в спецификации.  Например, `feet` вместо `feat`

В худшем случае это ещё не конец света, если коммит не соответствует
спецификации «Соглашения о коммитах».  Это просто означает, что коммит будет
пропущен инструментами, основанными на спецификации.

### Все ли мои участники должны использовать спецификацию «Соглашения о коммитах»?

Нет!  Если вы используете рабочий процесс на основе соединения (squash)
коммитов в Git, то ведущие специалисты по сопровождению могут приводить в
порядок сообщения коммитов по мере их слияния (merge), не добавляя нагрузки для
обычных коммиттеров.  Обычный рабочий процесс для этого состоит в том, чтобы
ваша система Git автоматически соединяла коммиты из PR и представляла форму для
ведущего сопровождающего, чтобы ввести более подходящее сообщение коммита для
слияния.

### Как «Соглашение о коммитах» обрабатывает отмену коммитов?

Отмена изменений кода может быть сложным:
- Вы отменяете изменения нескольких коммитов?
- Если вы отмените изменения новых функций, должен ли следующий выпуск быть
  патчем?

«Соглашение о коммитах» не делает явных попыток определить поведение отмены
изменений.  Вместо этого мы оставляем авторам инструментов использовать
гибкость _типов_ и _сносок_ для разработки своей логики для обработки отмены
изменений.

Одна из рекомендаций — использовать _тип_ `revert` и _сноску_, которая
ссылается на отменяемые хэш-суммы коммитов.  Например:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

## Об «Соглашении о коммитах»

Спецификация «Соглашения о коммитах» вдохновлена и в значительной степени
основана на [руководстве коммитов Angular][angular-commit-guidelines].

Первый вариант этой спецификации был написан в сотрудничестве с некоторыми
людьми, внёсшими свой вклад в:

* [conventional-changelog][conventional-changelog] — набор инструментов для
  анализа сообщений «Соглашения о коммитах» из историй Git.
* [parse-commit-message][parse-commit-message] — расширяемые утилиты для
  парсера, преобразования и проверки сообщений «Соглашения о коммитах».
* [bumped][bumped] — инструмент для выпуска программного обеспечения, который
  позволяет легко выполнять действия до и после выпуска новой версии вашего
  программного обеспечения.
* [unleash][unleash] — инструмент для автоматизации выпуска программного
  обеспечения и публикации жизненного цикла.
* [lerna][lerna] — инструмент для управления монорепозиториями, выросший из
  проекта Babel.

## Инструменты для «Соглашения о коммитах»

* [go-conventional-commit][go-conventional-commit] — библиотека Go для парсинга
  сообщений коммитов в соответствии со спецификацией.
* [chglog][chglog] — инструмент для парсинга сообщений «Соглашения о коммитах»
  из историй Git и превращения их в шаблоны списков изменений.
* [fastlane-plugin][fastlane-plugin] — следует спецификации для управления
  версиями и автоматического создания списка изменений.
* [commitizen/cz-cli][commitizen/cz-cli] — инструмент Node.js для создания
  сообщений коммитов в соответствии со спецификацией «Соглашение о коммитах».
* [commitizen-tools/commitizen][commitizen-tools/commitizen] — инструмент,
  написанный на Python, для создания правил коммитов для проектов,
  автоматического повышения версий и автоматического создания списка изменений.
* [php-commitizen][php-commitizen] — инструмент PHP, созданный для создания
  сообщений коммитов в соответствии со спецификацией «Соглашение о коммитах».
  Настраиваемый и может использоваться для проектов PHP по усмотрению автора в
  качестве зависимости или использоваться глобально для проектов, отличных от
  PHP.
* [commitlint][commitlint] — линтер для проверки соответствия ваших сообщений
  коммитов формату «Соглашения о коммитах».
* [gitlint][gitlint] — линтер сообщений коммитов Git, написанный на Python,
  который можно настроить для [принудительного применения формата «Соглашения о
  коммитах»][enforce-conventional-commits-format].
* [conform][conform] — инструмент, который можно использовать для обеспечения
  соблюдения политик в репозиториях Git, включая «Соглашение о коммитах».
* [detect-next-version][detect-next-version] — анализируйте, обнаруживайте и
  получайте больше метаданных о заданном «Соглашении о коммитах».
* [recommended-bump][recommended-bump] — вычисляет рекомендуемую версию на
  основе заданном «Соглашении о коммитах».
* [git-commits-since][git-commits-since] — получает все (необработанные)
  коммиты с периода или (по умолчанию) из последнего тега Git [семантического
  версионирования][semver], плюс поддерживает плагины.
* [standard-version][standard-version] — автоматическое управление версиями и
  списками изменений с помощью новой кнопки squash в GitHub и рекомендованного
  рабочего процесса «Соглашения о коммитах».
* [Conventional Commit][conventional-commit] — предоставляет расширяемый
  контекст и завершение на основе шаблонов, а также проверки для «Соглашения о
  коммитах» в диалоговом окне коммитов VCS.  Доступно для всех [IDE
  (интегрированных сред разработки) от JetBrains][jetbrains].
* [Git Commit Template][git-commit-template] — добавьте поддержку «Соглашения о
  коммитах» в [редакторы JetBrains][jetbrains] (IntelliJ IDEA, PyCharm,
  PhpStorm и т. д.).
* [commitsar][commitsar] — инструмент Go для проверки совместимости коммитов в
  ветке с «Соглашением о коммитах».  Поставляется с образом Docker для
  использования в CI.
* [semantic-release][semantic-release] — инструмент, который автоматизирует
  весь рабочий процесс выпуска пакета, включая: определение номера следующей
  версии, создание примечаний к выпуску и публикацию пакета.
* [python-semantic-release][python-semantic-release] — автоматическое
  семантическое управление версиями для проектов Python.  Это реализация
  [semantic-release][semantic-release] на Python для Node.js.
* [VSCode Conventional Commits][vscode-conventional-commits] — добавляет
  поддержку «Соглашения о коммитах» в VSCode.
* [Pyhist][pyhist] — утилита Python для автоматического обновления версии
  пакета из истории Git и создания списка изменений.
* [git-mkver][git-mkver] — инструмент для автоматического применения
  семантического управления версиями к репозиториям Git на основе «Соглашения о
  коммитах».
* [Conventional Commits Next Version][conventional-commits-next-version] —
  инструментальная и языковая независимая утилита для расчёта следующей
  семантической версии на основе «Соглашения о коммитах» с учётом предыдущей
  версии.  Поддерживает монорепозитории.
* [change][change] — инструмент для создания и обновления списка изменений с
  помощью «Соглашения о коммитах».
* [Turbogit][turbogit] — инструмент командной строки, который поможет вам
  следовать процессу «Соглашения о коммитах».

## Проекты, которые используют «Соглашение о коммитах»

* [NFPM][nfpm] — простой упаковщик deb, rpm и apk, написанный на Go.
* [yargs][yargs] — всеми любимый парсер аргументов командной строки в пиратской
  тематике.
* [istanbuljs][istanbuljs] — набор инструментов и библиотек с открытым исходным
  кодом для добавления тестового покрытия к вашим тестам JavaScript.
* [uPortal-home][uportal-home] и
  [uPortal-application-framework][uportal-application-framework] —
  необязательный дополнительный пользовательский интерфейс, улучшающий [Apereo
  uPortal][apereo-uportal].
* [massive.js][massive.js] — библиотека доступа к данным для Node.js и
  PostgreSQL.
* [electron][electron] — создавайте кроссплатформенные настольные приложения с
  помощью JavaScript, HTML и CSS.
* [scroll-utility][scroll-utility] — простой в использовании пакет служебных
  программ прокрутки для центрирования элементов и плавной анимации.
* [Blaze UI][blaze-ui] — свободный от фреймворков набор инструментов
  пользовательского интерфейса с открытым исходным кодом.
* [Monica][monica] — система управления личными отношениями с открытым исходным
  кодом.
* [mhy][mhy] — готовый к использованию универсальный набор инструментов и среда
  разработки с нулевой конфигурацией.
* [@tandil/diffparse][@tandil/diffparse] — простой парсер файлов Diff
  (унифицированный формат diff).
* [@tandil/diffsplit][@tandil/diffsplit] — простое разделение .diff и .patch на
  файлы.
* [@thi.ng/umbrella][@thi.ng/umbrella] — экосистема с широким охватом и
  монорепозиторий из 148+ проектов TypeScript для функциональной разработки на
  основе данных.
* [yii2-basic-firestarter][yii2-basic-firestarter] — 🔥 улучшенный шаблон
  приложения Yii2.
* [dcyou/resume][dcyou/resume] — 😎 шаблон для простого и быстрого создания
  онлайн-резюме.
* [Nintex Forms][nintex-forms] — легко создавайте динамические онлайн-формы для
  сбора и отправки точных и актуальных данных.
* [Tina CMS][tina-cms] — набор инструментов с открытым исходным кодом для
  встраивания интерфейсного управления контентом на ваш веб-сайт.
* [Belajarpython][belajarpython] — индонезийский сайт с открытым исходным кодом
  по обучению программирования на Python.
* [Uno Platform][uno-platform] — создавайте мобильные, настольные и WebAssembly
  приложения с помощью C# и XAML.  Сегодня.  Открытый исходный код и
  профессиональная поддержка.
* [Jenkins X][jenkins-x] — обеспечивает автоматизацию конвейера, встроенный
  GitOps и среды предварительного просмотра, чтобы помочь командам сотрудничать
  и ускорить доставку своего программного обеспечения в любом масштабе.

[![Соглашение о коммитах][conventional-commits-img]][conventional-commits]

_Хотите, чтобы ваш проект был в этом списке?_ [Отправьте PR][conventional-commits-pr]!


[semver]: https://semver.org/lang/ru
[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
[angular-convention]: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
[git-trailer-format]: https://git-scm.com/docs/git-interpret-trailers
[rfc-2119]: https://www.ietf.org/rfc/rfc2119.txt
[angular-commit-guidelines]: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[parse-commit-message]: https://npmjs.com/package/parse-commit-message
[bumped]: https://bumped.github.io
[unleash]: https://github.com/netflix/unleash
[lerna]: https://github.com/lerna/lerna
[go-conventional-commit]: https://gitlab.com/digitalxero/go-conventional-commit14
[chglog]: https://github.com/goreleaser/chglog
[fastlane-plugin]: https://github.com/xotahal/fastlane-plugin-semantic_release
[commitizen/cz-cli]: https://github.com/commitizen/cz-cli
[commitizen-tools/commitizen]: https://github.com/commitizen-tools/commitizen
[php-commitizen]: https://github.com/damianopetrungaro/php-commitizen
[commitlint]: https://github.com/conventional-changelog/commitlint
[gitlint]: https://github.com/jorisroovers/gitlint
[enforce-conventional-commits-format]: https://jorisroovers.com/gitlint/contrib_rules/#ct1-contrib-title-conventional-commits
[conform]: https://github.com/autonomy/conform
[detect-next-version]: https://npmjs.com/package/detect-next-version
[recommended-bump]: https://www.npmjs.com/package/recommended-bump
[git-commits-since]: https://www.npmjs.com/package/git-commits-since
[standard-version]: https://github.com/conventional-changelog/standard-version
[conventional-commit]: https://github.com/lppedd/idea-conventional-commit
[jetbrains]: https://www.jetbrains.com
[git-commit-template]: https://plugins.jetbrains.com/plugin/9861-git-commit-template
[commitsar]: https://github.com/commitsar-app/commitsar
[semantic-release]: https://github.com/semantic-release/semantic-release
[python-semantic-release]: https://github.com/relekang/python-semantic-release
[vscode-conventional-commits]: https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits
[pyhist]: https://github.com/jgoodman8/pyhist
[git-mkver]: https://github.com/idc101/git-mkver
[conventional-commits-next-version]: https://gitlab.com/DeveloperC/conventional_commits_next_version
[change]: https://github.com/adamtabrams/change
[turbogit]: https://b4nst.github.io/turbogit
[nfpm]: https://github.com/goreleaser/nfpm
[yargs]: https://github.com/yargs/yargs
[istanbuljs]: https://github.com/istanbuljs/istanbuljs
[uportal-home]: https://github.com/UW-Madison-DoIT/angularjs-portal
[uportal-application-framework]: https://github.com/UW-Madison-DoIT/uw-frame
[apereo-uportal]: https://www.apereo.org/projects/uportal
[massive.js]: https://gitlab.com/dmfay/massive-js
[electron]: https://github.com/electron/electron
[scroll-utility]: https://github.com/LeDDGroup/scroll-utility
[blaze-ui]: https://github.com/BlazeUI/blaze
[monica]: https://github.com/monicahq/monica
[mhy]: https://mhy.js.org
[@tandil/diffparse]: https://github.com/danielduarte/diffparse#readme
[@tandil/diffsplit]: https://github.com/danielduarte/diffsplit#readme
[@thi.ng/umbrella]: https://github.com/thi-ng/umbrella
[yii2-basic-firestarter]: https://github.com/HunWalk/yii2-basic-firestarter
[dcyou/resume]: https://github.com/dcyou/resume
[nintex-forms]: https://www.nintex.com/workflow-automation/modern-forms
[tina-cms]: https://tinacms.org
[belajarpython]: https://github.com/belajarpythoncom/belajarpython.com
[uno-platform]: https://platform.uno
[jenkins-x]: https://jenkins-x.io
[conventional-commits-img]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits]: https://conventionalcommits.org/ru
[conventional-commits-pr]: https://github.com/conventional-changelog/conventionalcommit.org/pulls
