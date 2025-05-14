---
draft: false
aliases: ["/ar/"]
---

# رسائل الإيداع commits الاصطلاحية المتفق عليها في نظام التحكم في الإصدارات

يعرض هذا المقال مواصفات لجعل رسائل الإيداع commit messages مقروءة للبشر ولبرامج الأتمتة على حد سواء.

## مقدمة

رسائل الإيداع الاصطلاحية هي مواصفات يسيرة تلتزم بها الرسائل كي تحقق شروطها، إذ توفر مجموعةً من القواعد لإنشاء سجل رسائل إيداع واضحة وصريحة، مما يجعلها أسهل لكي تستخدمها أدوات الأتمتة مباشرة.

هذا الاصطلاح متوافق مع [الإدارة الدلالية لنُسخ البرمجيات SemVer](https://semver.org/lang/ar)، عن طريق وصف المميزات features، والإصلاحات fixes، والتغييرات الجذرية breaking changes في رسائل الإيداع.

يجب أن تكون هيكلية رسائل الإيداع كما يلي:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

تحتوي رسالة الإيداع العناصر التالية في هيكليتها، وذلك لإيصال المعنى بدقة مع مستخدم المكتبة سواء كان بشريًا أو أداة برمجية:

1. **إصلاح `:fix`** رسالة إيداع من نوع `fix` تصلح أو ترقع patch الخطأ في الشيفرة البرمجية، وهذا مرتبط بمصطلح الترقيع [`PATCH`](http://semver.org/#summary) في إدارة النسخ الدلالية Semantic Versioning.
2. **ميزة `:feat`** رسالة إيداع من نوع `feat` تضيف ميزة جديدة للشيفرة البرمجية، وهذا مرتبط بمصطلح الترقيم البسيط [`MINOR`](http://semver.org/#summary) في إدارة النسخ الدلالية.
3. **تغيير جذري `:BREAKING CHANGE`** رسالة إيداع بتذييل `BREAKING CHANGE:` أو بإضافة `!` بعد كتابة النوع `type` أو النطاق `scope`، والتي تعرض تغييرًا جذريًا في الواجهة البرمجية. هذا مرتبط بمصطلح الترقيم الجذري [`MAJOR`](http://semver.org/#summary) في إدارة النسخ الدلالية. يمكن أن تكون `BREAKING CHANGE` جزءًا من أي نوع في رسائل الإيداع.
4. تعد الأنواع المختلفة عن `:fix` أو `:feat` مسموح بها، مثلًا، [commitlint/config-conventional@](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) بناءً على [رسائل الإيداع الاصطلاحية في Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) التي تقترح هذه الأنواع: للبناء `:build` والعمل الروتيني `:chore`والتكامل المستمر`:ci`والتوثيقات `:docs`ومتعلقات التصميم `:style`وإعادة الهيكلية`:refactor`والأداء `:perf`والاختبار`:test` وغيرها.
5. قد تتبع التذييلات -بخلاف التغييرات الجذرية `<BREAKING CHANGE: <description` مواصفات شبيهة بتنسيقات [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

لا تعد بقية الأنواع متوافقة مع "رسائل الإيداع الاصطلاحية"، وليس لها أي تأثير ضمني في "إدارة النسخ الدلالية" إلا إذا احتوت على عبارة `BREAKING CHANGE`.

قد يُضاف النطاق scope، إلى نوع الإيداع لإضافة معلومات سياق contextual، وتُضّمن بين قوسين. مثلًا:

```
feat(parser): add ability to parse arrays
```

## أمثلة

### رسالة إيداع مع الوصف `description` وتغيير جذري مكتوب في التذييل

```
feat: allow provided config object to extend other configs
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### رسالة إيداع مع ! للفت الانتباه بوجود تغيير جذري

```
feat!: send an email to the customer when a product is shipped
```

### رسالة إيداع مع نطاق و ! للفت الانتباه بوجود تغيير جذري

```
feat(api)!: send an email to the customer when a product is shipped
```

### رسالة إيداع مع ! ونص BREAKING CHANGE في التذييل

```
chore!: drop support for Node 6
BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### رسالة إيداع دون متن body

```
docs: correct spelling of CHANGELOG
```

### رسالة إيداع مع نطاق

```
feat(lang): add polish language
```

### رسالة إيداع مع متن مكون من عدة فقرات وعدة تذييلات

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## المواصفات Specification

الكلمات الرئيسية مثل "يجب"، و"يجب ألا"، و"مطلوب"، و"يتوجب"، و"يتوجب ألا"، و"ينبغي"، و"لا ينبغي"، و"موصى به"، و"قد"، و"اختياري" في هذا المقال مفسّرة كما هو موضح في [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. **يجب** أن تُسبق رسائل الإيداع بالنوع، والذي يحتوي على اسم مثل: feat`أو`fix`، أو غيرها، متبوعة بالنطاق (اختياريًا)، أو علامة التعجب `!` اختياريًا. وبعدها النقطتين`:` وبعدها مسافة.
2. يجب استخدام النوع `feat` عندما تُضاف ميزة جديدة للتطبيق أو المكتبة.
3. يجب استخدام النوع `fix` عندما تُحل مشكلة في مشروعك.
4. قد يُضاف النطاق بعد النوع، ويجب أن يحتوي النطاق على اسم يصف جزءًا من الشيفرة البرمجية محاطة بقوسين، مثل `:fix(parse)‎`.
5. **يجب** أن يكون الوصف description مسبوقًا بالنطاق أو النوع التي تتبعهما النقطتان `:`. الوصف هو خلاصة قصيرة للتغييرات في الشيفرة البرمجية، مثل:

```
array parsing issue when multiple spaces were contained in string
```

6. قد يُضاف متن طويل لرسالة الإيداع بعد الوصف القصير، مضيفًا المزيد من المعلومات لهذا السياق المتعلق بتغييرات الشيفرة البرمجية، ويجب أن يبدأ المتن بسطر فارغ بعد الوصف.
7. ليس لمتن رسالة الإيداع شكل معيّن مفروض، وقد تحتوي على فراغات من أسطر متعددة
8. قد يحتوي تذييل واحد أو أكثر سطرًا فارغًا بعد المتن، ويجب على كل تذييل أن يحتوي رمزًا token متبوعًا إما بفراغ أو فراغ وعلامة "#"، ثم بعدها قيمة. وهذا مستلهم من [git trailer convention](https://git-scm.com/docs/git-interpret-trailers).
9. يجب أن يستخدم رمز التذييل `-` بديلًا عن الفراغات بين الكلمات، مثل: `Acked-by`، وهذا يساعد في التفريق بين التذييل عن المتن ذي الأسطر المتعددة. الاستثناء الوحيد هو للتغييرات الجذرية `BREAKING CHANGE`، والتي قد تُستخدم رمزًا للتذييل.
10. قد يحتوي محتوى التذييل (وهو ما يأتي بعد الرمز) على فراغات وأسطر فارغة، ويجب أن ينتهي عند وجود الزوج الثاني الصالح من الرمز/الفاصل.
11. يجب أن تُوضّح التغييرات الجذرية في بادئة النوع والنطاق لرسالة الإيداع، أو أن تحل محل الرمز في التذييل.
12. إذا ذكرت التغييرات الجذرية في التذييل، يجب على التغيير الجذري أن يحتوي النص بالأحرف الكبيرة `BREAKING CHANGE` متبوعًا بالنقطتين `:` فالفراغ، والوصف. مثًلا:

```
BREAKING CHANGE: environment variables now take precedence over config files
```

13. لو ضُمّنت التغييرات الجذرية في بداية النوع أو النطاق، فيجب توضيح وجود تغيرات جذرية عن طريق علامة التعجب `!` مباشرةً بعد النقطتين `:`. لو استخدمت علامة التعجب، فيمكن مسح `BREAKING CHANGE:` من التذييل، ويتوجب أن يحتوي الوصف على وصف هذه التغييرات الجذرية.
14. قد تُستخدم الأنواع -بخلاف `feat` أو `fix`- في رسائل الإيداع، مثل: `docs: update ref docs`
15. يجب ألا يُتعامل مع وحدات المعلومات في رسائل الإيداع الاصطلاحية على أنها حساسة لحالة الأحرف case sensitive من قبل من يستخدم باستثناء التغيير الجذري الذي يجب أن يبقى بأحرفه الكبيرة.
16. يجب أن يكون BREAKING-CHANGE مساويًا إلى BREAKING CHANGE، عند استخدامه رمزًا في التذييل.

## لماذا يُعتمد نظام رسائل الإيداع الاصطلاحية؟

- إنشاء سجلات التغيير CHANGELOGs تلقائيًا.
- تحديد الإصدارات الدلالية لنُسخ البرمجيات semantic version bump تلقائيًا، استنادًا إلى أنواع رسائل الإيداع المكتوبة.
- إيصال طبيعة التغييرات إلى الزملاء في الفريق، والعامة، وكل من له علاقة بالمشروع.
- تفعيل عمليات البناء والنشر.
- تسهيل مشاركة الآخرين في مشاريعك، من خلال إعطائهم سجل تغييرات أكثر تنظيمًا.

## الأسئلة الأكثر شيوعا

### كيف يجب أن أتعامل مع رسائل الإيداع في مرحلة التطوير الأولية؟

نوصي بالمتابعة كما لو كنت قد أصدرت المنتج فعلًا، إذ يستخدم شخص ماعادةً برنامجك، ومن الممكن أن يكون أحد زملائك أثناء تطوير البرنامج، وسيرغبون في معرفة ما قد جرى إصلاحه وما الذي تعطل وما إلى ذلك.

### هل الأنواع الموجودة في عنوان رسالة الإيداع ذات أحرف كبيرة أم صغيرة؟

يمكن استخدام أي منها ولكن من الأفضل أن يكون متسقًا.

### ماذا أفعل إذا كانت رسالة الإيداعات تحتوي على تغييرات من أكثر من نوع؟

ارجع واكتب رسائل إيداع متعددة كلما أمكن ذلك؛ فجزءٌ من فائدة رسائل الإيداع الاصطلاحية هو قدرتها على دفعنا إلى كتابة رسائل إيداع وطلبات منظمة أكثر.

### هل تثبط النقطة السابقة التطوير والانتقال السريع؟

لا تشجع على التحرك بسرعة غير منظمة، ولكنها تساعدك على التحرك بسرعة على المدى الطويل في مشاريع متعددة مع مساهمين متنوعين.

### هل يمكن أن تؤدي رسائل الإيداع الاصطلاحية إلى دفع المطورين بتقييد نوع الإيداعات التي يعملونها لأنهم سيفكرون في الأنواع المقدمة؟

تشجعنا رسائل الإيداعات الاصطلاحية على المزيد من أنواع أخرى مثل الإصلاحات `fixes`. بخلاف ذلك، تسمح مرونة رسائل الإيداعات الاصطلاحية لفريقك بالتوصل إلى أنواع خاصة بهم وتغيير تلك الأنواع بمرور الوقت.

### كيف يرتبط هذا بالإدارة الدلالية لنسخ البرمجيات SemVer؟

يجب ترجمة عمليات الإيداع إلى التالي من النسخ الدلالية SemVer:

- يُترجم النوع `fix` إلى إصدارات `PATCH`.
- يُترجم النوع `feat` إلى إصدارات `MINOR`.

يجب ترجمة `BREAKING CHANGE` إلى إصدارات `MAJOR`، بغض النظر عن نوع رسالة الإيداع.

### كيف يمكنني إصدار الامتدادات وفقا لمواصفات رسائل الإيداعات الاصطلاحية، مثلا `jameswomack/conventional-commit-spec@`؟

نوصي باستخدام الإدارة الدلالية لنُسخ البرمجيات SemVer لإصدار الامتدادات لهذه المواصفات ونشجعك على إنشاء هذه الامتدادات.

### ماذا أفعل إذا استخدمت نوع الإيداع الخاطئ دون قصد؟

#### عند استخدام نوع اصطلاحي ولكن ليس النوع الصحيح مثل fix بدلا من feat

قبل دمج الخطأ أو تحريره، نوصي باستخدام `git rebase -i` لتحرير سجل الإيداعات. ستكون عملية التنظيف بعد الإصدار مختلفة وفقًا للأدوات والعمليات التي تستخدمها.

#### عند استخدام نوع ليس من المواصفات مثل feet بدلا من feat

في أسوأ الأحوال، لن تكون نهاية العالم إذا كانت منطقة الالتزام لا تفي بمواصفات الإيداع التقليدية، فهذا يعني ببساطة أن الإيداع سيفوّت missed بالأدوات المستندة إلى المواصفات.

### هل يحتاج جميع المساهمين إلى استخدام رسائل الإيداع الاصطلاحية؟

لا، إذا كنت تستخدم سير عمل قائم على `squash` على [غيت Git](https://academy.hsoub.com/programming/workflow/git/)، فيمكن للمشرفين الرئيسيين تنظيف رسائل الإيداع أثناء دمجها مما لا يضيف أي عبء عمل على مرسلي رسائل الإيداعات العاديين.

يتمثل سير العمل الشائع common workflow في جعل نظام [غيت git](https://academy.hsoub.com/programming/workflow/git/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%B1%D8%AC%D8%B9%D9%8A-%D9%84%D9%84%D8%B9%D9%85%D9%84-%D8%B9%D9%84%D9%89-%D9%86%D8%B8%D8%A7%D9%85-%D8%BA%D9%8A%D8%AA-git-r1587/) يسحق squash رسائل الإيداع تلقائيًا من [طلب سحب pull request](https://academy.hsoub.com/programming/workflow/git/%D8%A5%D9%86%D8%B4%D8%A7%D8%A1-%D8%B7%D9%84%D8%A8-%D8%B3%D8%AD%D8%A8-%D8%B9%D9%84%D9%89-github-r1581/) ويقدم نموذجًا للمشرف الرئيسي لإدخال رسالة إيداع git المناسبة للدمج.

### كيف تتعامل الإيداعات الاصطلاحية مع الإيداعات العكسية revert commits؟

يمكن أن يكون عكس الشيفرة البرمجية معقدًا. هل تعكس عن إيداعات متعددة؟ إذا عكست إحدى الميزات، فهل يجب أن يكون الإصدار التالي patch بدلًا من ذلك؟

لا تبذل رسائل الإيداع الاصطلاحية جهدًا واضحًا لتحديد سلوك عكس الإيداع revert behavior، بل تترك لأدوات المطورين لكي يستخدموا مرونة الأنواع والتذييلات لتطوير منطقهم في التعامل مع عمليات عكس الإيداعات.

إحدى التوصيات هي استخدام النوع `revert`، والتذييل الذي يشير إلى إيداعات ترميز SHA المعكوسة:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

### ما شكل الكتابة الذي يجب أن أستخدمه؟

نوصي بكتابة وصف رسائل الإيداع: وصفها ومتنها بصيغة [الأمر
Imperative mood](https://en.wikipedia.org/wiki/Imperative_mood).
يوجد عدد كبير من الأمثلة على أسلوب الكتابة هذا لرسائل الإيداع
[1](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) و [2](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#subject) و [3](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project) و [4](https://medium.com/@danielfeelfine/commit-verbs-101-why-i-like-to-use-this-and-why-you-should-also-like-it-d3ed2689ef70) و [5](https://chris.beams.io/posts/git-commit/)

## حول رسائل الإيداع الاصطلاحية

مواصفات رسائل الإيداع الاصطلاحية مستوحاة من [إرشادات Angular لرسائل الإيداع] (https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) وتعتمد عليها اعتمادًا كبيرًا.

كتبت المسودة الأولى لهذه المواصفات بالتعاون مع بعض الأشخاص الذين ساهموا في:

- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog): مجموعة من الأدوات لتحليل رسائل الإيداع الاصطلاحية من سجلات git.
- [bumped](https://bumped.github.io): أداة لإصدار البرامج التي تسهل تنفيذ الإجراءات قبل وبعد إطلاق إصدار جديد من برنامجك.
- [unleash](https://github.com/netflix/unleash): أداة لأتمتة إصدار البرنامج والنشر.
- [lerna](https://github.com/lerna/lerna): أداة لإدارة المشاريع ذات المستودع الواحد، والتي انبثقت من مشروع Babel.

## أدوات لرسائل الإيداعات الاصطلاحات

- [go-conventionalcommits](https://github.com/leodido/go-conventionalcommits): قوة [لغة غو](https://academy.hsoub.com/programming/go/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-go-r222/) الكاملة لتحليل رسائل الإيداعات الاصطلاحية.
- [go-conventional-commit](https://gitlab.com/digitalxero/go-conventional-commit): مكتبة لغة غو لتحليل رسائل الإيداعات الاصطلاحية وفقًا للمواصفات.
- [chglog](https://github.com/goreleaser/chglog): أداة لتحليل رسائل الإيداعات الاصطلاحية من سجلات git وتحويلها إلى نماذج سجلات تغيير CHANGELOGS.
- [fastlane-plugin](https://github.com/xotahal/fastlane-plugin-semantic_release): إضافة تتبع المواصفات لإدارة النسخ وتوليد سجل التغييرات تلقائيًا.
- [php-commitizen](https://github.com/damianopetrungaro/php-commitizen): أداة مصممة لإنشاء رسائل إيداع وفقًا لمواصفات رسائل الإيداع الاصطلاحية، وهي قابلة للتكوين وللاستخدام لمشاريع [PHP](https://academy.hsoub.com/programming/php/) لأنها تابعة للمؤلف أو قابلة للاستخدام عالميًا لمشاريع غير PHP.
- [php-conventional-changelog](https://github.com/marcocesarato/php-conventional-changelog): أداة صممت لإنشاء سجل التغيير من رسائل محفوظات رسائل الإيداع الخاصة بالمشروع وبيانات التعريف وأتمتة الإصدار باستخدام Semver، باتباع مواصفات الالتزامات التقليدية، وهي قابلة للتكوين وقابلة للاستخدام لمشاريع PHP إذ أنها تابعة للمؤلف أو قابلة للاستخدام عالميًا لمشاريع غير PHP.
- [conform](https://github.com/autonomy/conform): أداة يمكن استخدامها لفرض السياسات على مستودعات غيت، بما في ذلك رسائل الإيداع الاصطلاحية.
- [standard-version](https://github.com/conventional-changelog/standard-version): تصدير تلقائي للنسخ وإدارة سجل التغييرات، باستخدام زر GitHub لـ squash وسير عمل رسائل الإيداع الاصطلاحية الموصى به.
- [Git Commit Template](https://plugins.jetbrains.com/plugin/9861-git-commit-template): يضيف دعم رسائل الإيداع الاصطلاحية [لمحررات JetBrains](https://www.jetbrains.com/) (IntelliJ IDEA و PyCharm و PhpStorm...).
- [commitsar](https://github.com/commitsar-app/commitsar): أداة لغة غو للتحقق ما إذا كانت رسائل الإيداع على الفرع متوافقة مع رسائل الإيداع الاصطلاحية، وتأتي بنسخة دوكر للتكامل المستمر.
- [semantic-release](https://github.com/semantic-release/semantic-release): أداة تعمل على أتمتة سير عمل إصدار الحزمة بالكامل بما في ذلك: تحديد رقم الإصدار التالي وإنشاء ملاحظات الإصدار ونشر الحزمة.
- [ngx-semantic-version](https://github.com/d-koppenhagen/ngx-semantic-version): يؤتمت رسائل إيداع مشروع Angular وسير عمل الالتزام عن طريق تكامل _commitizen_, _commitlint_, _husky_ and _standard-version_ في مشروعك وتكوينها لاستخدام _رسائل الإيداع الاصطلاحية_.
- [Pyhist](https://github.com/jgoodman8/pyhist): أداة مساعدة من [لغة بايثون](https://academy.hsoub.com/python/) لتحديث إصدار الباقة من سجل git وإنشاء سجل التغيير CHANGELOG.
- [commitizen-tools/commitizen](https://github.com/commitizen-tools/commitizen): أداة للغة بايثون مصممة لإنشاء قواعد رسائل الإيداع الاصطلاحية للمشاريع، ورفع إصدارات المشروع، وإنشاء سجل التغيير. قابلة للتكوين وقابلة للاستخدام لكل من مشروع بايثون وغير بايثون، وقابلة للتوسيع توسعًا كبيرًا من خلال بايثون.
- [git-mkver](https://github.com/idc101/git-mkver):أداة لتطبيق الإصدار الدلالي تلقائيًا على مستودعات git استنادًا إلى رسائل الإيداع الاصطلاحية.
- [Conventional Commits Next Version](https://gitlab.com/DeveloperC/conventional_commits_next_version): أداة مساعدة حيادية للأدوات واللغات لحساب الإصدار الدلالي التالي استنادًا إلى رسائل الإيداعات الاصطلاحية منذ الإصدار السابق في المشاريع ذات المستودع الواحد.
- [change](https://github.com/adamtabrams/change): أداة لتوليد وتحديث سجل التغيير باستخدام رسائل الإيداع الاصطلاحية.
- [sv4git](https://github.com/bvieira/sv4git): أداة سطر الأوامر للتحقق من صحة رسائل الإيداع الاصطلاحية، ونسخ الإصدارات وإنشاء الوسوم وسجلات التغيير.
- [semantic-gitlog](https://github.com/semantic-gitlog) أداة بسيطة لإدارة الإصدار الدلالي تعتمد على رسائل الإيداع الاصطلاحية. يشتق تلقائيًا أرقام الإصدارات وإدارتها وتوليد سجلات التغيير ذات نمط إطار عمل Angular.
  دعم [Maven](https://github.com/semantic-gitlog/maven-semantic-gitlog) و [Gradle](https://github.com/semantic-gitlog/gradle-semantic-gitlog).
- [idea-conventional-commit](https://github.com/lppedd/idea-conventional-commit) الإكمال التلقائي للسياق والقوالب، لرسائل الإيداع الاصطلاحية ورسائل النسخ الدلالية.
- [Versio](https://github.com/chaaz/versio): أداة متوافقة مع المشاريع ذات المستودع الواحد (monorepos) التي تحدّث أرقام الإصدارات بناءً على رسائل الإيداع الاصطلاحية، واعتماديات المشروع، ويمكنه توليد الوسوم وسجلات التغيير أيضًا.
- [Git Changelog Lib](https://github.com/tomasbjerre/git-changelog-lib): مكتبة [جافا Java](https://academy.hsoub.com/programming/java/) تدعم عرض سجل التغيير في سياق مشتق من Git. تدعم رسائل الإيداع الاصطلاحية مع [Handlebars Helpers](https://github.com/tomasbjerre/git-changelog-lib#helpers)، ومُستخدمة في المشاريع التالية:
  - [Gradle](https://github.com/tomasbjerre/git-changelog-gradle-plugin)
  - [Maven](https://github.com/tomasbjerre/git-changelog-maven-plugin)
  - [Jenkins](https://github.com/jenkinsci/git-changelog-plugin)
  - [Command Line](https://github.com/tomasbjerre/git-changelog-command-line)
- [Cocogitto](https://github.com/oknozor/cocogitto): مجموعة من أدوات سطر الأوامر لرسائل الإيداعات الاصطلاحية ومواصفات الإدارة الدلالية لنُسخ البرمجيات semver.
- [منقّح صياغة رسائل الإيداع الاصطلاحية](https://gitlab.com/DeveloperC/conventional_commits_linter): أداة تنقيح صياغة رسائل الإيداع الاصطلاحية، وهي أداة محايدة للغات والأدوات الأخرى.
- [Uplift](https://github.com/gembaadvantage/uplift): الإصدار الدلالي بطريقة سهلة. مدعوم من رسائل الإيداع الاصطلاحية. مصمم لكي يستخدم مع التكامل المستمر.

## المشاريع التي تستخدم رسائل الإيداع الاصطلاحية

- [NFPM](https://github.com/goreleaser/nfpm): NFPM is Not FPM -أداة تجميع بسيطة لـ deb و rpm و apk مكتوبة بلغة غو
- [yargs](https://github.com/yargs/yargs): محلل وسيطات سطر الأوامر المفضل لدى الجميع.
- [istanbuljs](https://github.com/istanbuljs/istanbuljs): مجموعة أدوات مفتوحة المصدر ومكتبات برمجية لإضافة الاختبارات الآلية للغة [جافا سكريبت](https://academy.hsoub.com/programming/javascript/).
- [uPortal-home](https://github.com/UW-Madison-DoIT/angularjs-portal) و [uPortal-application-framework](https://github.com/UW-Madison-DoIT/uw-frame):محسن اختياري لواجهة الاستخدام [Apereo uPortal](https://www.apereo.org/projects/uportal).
- [massive.js](https://github.com/dmfay/massive-js): مكتبة وصول للبيانات لـ Node و PostgreSQL.
- [electron](https://github.com/electron/electron): بناء تطبيقات تعمل على أكثر من نظام تشغيل باستخدام جافا سكريبت و [HTML](https://academy.hsoub.com/programming/html/) و [CSS](https://academy.hsoub.com/programming/css/).
- [scroll-utility](https://github.com/LeDDGroup/scroll-utility): أداة بسيطة لتسهيل التمرير للعناصر المتوسطة مع حركيات سلسلة.
- [Blaze UI](https://github.com/BlazeUI/blaze): أدوات واجهة استخدام غير مرتبط بإطار عمل معين.
- [Monica](https://github.com/monicahq/monica): نظام إدارة العلاقات الشخصية مفتوح المصدر.
- [mhy](https://mhy.js.org): بيئة عمل معدة بالأدوات ومتعددة الاستخدامات ولا تحتاج إلى إعداد مسبق.
- [‎@tandil/diffparse](https://github.com/danielduarte/diffparse#readme): محلل بسيط للتغييرات بين الملفات في نظام إدارة التحكم في الإصدارات.
- [‎@tandil/diffsplit](https://github.com/danielduarte/diffsplit#readme): يسهل تقسيم ملفات التغييرات من نوع .diff و .patch إلى ملفات من نوعها.
- [‎@thi.ng/umbrella](https://github.com/thi-ng/umbrella): مستودع لقرابة مئة مشروع TypeScript التي تتخذ منهجية التطوير المقادة بالبيانات Data Driven Development ذات المستودع الواحد.
- [yii2-basic-firestarter](https://github.com/HunWalk/yii2-basic-firestarter): قالب تطبيق Yii2 محسّن.
- [Nintex Forms](https://www.nintex.com/workflow-automation/modern-forms/): إنشاء نماذج إدخال ديناميكية سهلة لإرسال واستقبال بيانات دقيقة وآنية.
- [Tina CMS](https://tinacms.org): مجموعة أدوات لبناء إدارة محتوى واجهات الاستخدام في موقعك.
- [Uno Platform](https://platform.uno): منصة بناء تطبيقات جوال وسطح مكتب وتقنية ويب أسمبلي عن طريق لغة برمجة #C و XAML، وتدعم البرمجيات مفتوحة المصدر والاحترافية.
- [AutoSort.NetCore](https://www.nuget.org/packages/AutoSort.NetCore/): استخدام سمات الكائن للترتيب الافتراضي.
- [Undercut](https://github.com/the-spyke/undercut): خطوط إمداد وأدوات لمعالجة البيانات المؤجلة في لغة جافا سكريبت.
- [Stats Builder](https://github.com/MarkFChavez/blox_piece_stats_builder): باني إحصائيات لـ [Blox Fruits](https://www.roblox.com/games/2753915549/UPDATE-11-Blox-Fruits)
- [Jenkins X](https://jenkins-x.io/): يوفر Jenkins X خطوط إمداد الأتمتة، وتطوير عمليات Git، وعرض بيئة التشغيل لمساعدة التعاون بين فريق العمل وتسريع نشر البرمجيات مهما كان حجمها.
- [GearLock](https://github.com/axonasif/gearlock): بديل مخصص لاستعادة Android-x86..
- [rsql-querydsl](https://github.com/ymind/rsql-querydsl): تكامل لغة الاستعلامات RSQL وإطار عمل Querydsl.
- [Changeloguru](https://github.com/haunt98/changeloguru): توليد سجل التغييرات آليًا من رسائل الإيداع الاصطلاحية، مكتوبة بلغة غو.

ترجمة -وبتصرف- للدليل [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) لصاحبه Damiano Petrungaro وكل المساهمين.

## اقرأ أيضًا

- [بدء العمل مع نظام إدارة الإصدارات جيت Git](https://academy.hsoub.com/programming/workflow/git/%D8%A8%D8%AF%D8%A1-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%85%D8%B9-%D9%86%D8%B8%D8%A7%D9%85-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AC%D9%8A%D8%AA-git-r1593/)
- [استخدامات متقدمة لنظام التحكم بالإصدار Git لإدارة مشاريع بايثون](https://academy.hsoub.com/programming/python/%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85%D8%A7%D8%AA-%D9%85%D8%AA%D9%82%D8%AF%D9%85%D8%A9-%D9%84%D9%86%D8%B8%D8%A7%D9%85-%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85-%D8%A8%D8%A7%D9%84%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1-git-%D9%84%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9-%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86-r2047/)
- [أدوات رسومية للأداة سطر الأوامر جيت Git](https://academy.hsoub.com/programming/workflow/git/%D8%A3%D8%AF%D9%88%D8%A7%D8%AA-%D8%B1%D8%B3%D9%88%D9%85%D9%8A%D8%A9-%D9%84%D9%84%D8%A3%D8%AF%D8%A7%D8%A9-%D8%B3%D8%B7%D8%B1-%D8%A7%D9%84%D8%A3%D9%88%D8%A7%D9%85%D8%B1-%D8%AC%D9%8A%D8%AA-git-r1604/)
