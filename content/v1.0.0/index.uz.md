---
draft: false
aliases: ["/uz/"]
---

# Conventional Commits 1.0.0

## Xulosa

Conventional Commits spetsifikatsiyasi - bu commit xabarlarni qanday yozish kerakligi haqidagi oddiy kelishuv. U tushunarli commitlar tarixini yaratish uchun oddiy qoidalar to'plamini taqdim etadi, shuningdek, commitlar tarixiga asoslangan avtomatlashtirish vositalarini ishlab chiqishni osonlashtiradi. Ushbu konventsiya [SemVer](http://semver.org) bilan bog'liq bo'lib, commit xabarlarida kiritilgan yangi xususiyatlar, tuzatishlar va o'zgarishlarni ifodalaydi.

Commit xabari quyidagi tarzda tuzilishi kerak:

---

```
<tur>[ixtiyoriy kontekst]: <tasnif>

[ixtiyoriy tana (body)]

[ixtiyoriy so'ngi qism(lar) (footer(s))]
```

---

<br />

Commit kutubxonangiz foydalanuvchilariga mohiyatni yetkazish uchun quyidagi tarkibiy elementlarni o'z ichiga olishi kerak:

1. **fix:** `fix` commit _turi_ - kodingizdagi xatoni tuzatadi (bu, Semantik Versiyalashtiruvdagi [`PATCH`](https://semver.org/#summary) bilan mos keladi).
2. **feat:** `feat` commit _turi_ - kodingizga yangi xususiyat qo'shadi. (bu, Semantik Versiyalashtiruvdagi [`MINOR`](https://semver.org/#summary) bilan mos keladi).
3. **BREAKING CHANGE:** `BREAKING CHANGE` nomli _footerga_ ega yoki `<tur>[ixtiyoriy kontekst]` dan so'ng undov belgisi (`!`) bilan tugallanadigan commit - amaldagi API ga nomutanosib o'zgartirish kiritadi (bu, Semantik Versiyalashtiruvdagi [`MAJOR`](https://semver.org/#summary) bilan mos keladi). `BREAKING CHANGE` har qanday _tur_ dagi commitlarning bir qismi bo'lishi mumkin.
4. Yuqorida ko'rsatilgan _tur_ lardan boshqalariga ham ruxsat beriladi, masalan [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ([Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) konventsiyasi asosida) `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` , va boshqalar.
5. `BREAKING CHANGE: <description>` dan boshqa muqobil footerlardan foydalanish, hamda [git trailer formatiga](https://git-scm.com/docs/git-interpret-trailers) amal qilish mumkin.

Boshqa _turlar_ `Conventional Commits` tomonidan talab qilinmaydi va Semantik versioning ga hech qanday aniq ta'sir ko'rsatmaydi (faqatgina `BREAKING CHANGE` ni o'z ichiga olishmasa). Commit turiga, qo'shimcha `kontext` qo'shish uchun _turdan_ so'ng qavsdan foydalaning, masalan, `feat(parser): add ability to parse arrays`

## Namunalar

### `BREAKING CHANGE` footer ga hamda ta'rifga ega commit xabarlari

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### `BREAKING CHANGE` ni ifodalovchi `!` belgisiga ega commit xabarlari

```
feat!: send an email to the customer when a product is shipped
```

### `BREAKING CHANGE` ni ifodalovchi `!` belgisi hamda _kontekstga_ ega commit xabarlari

```
feat(api)!: send an email to the customer when a product is shipped
```

### `BREAKING CHANGE` ni ifodalovchi `!` belgi va _footerga_ ega commit xabarlari

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### _tana(body)_ siz commit xabarlari

```
docs: correct spelling of CHANGELOG
```

### _kontekst_ ga ega commit xabarlari

```
feat(lang): add polish language
```

### Bir nechta paragrafli _tana(body)_ va bir nechta _footer_ ga ega commit xabalari

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Spesifikatsiya

Ushbu hujjatdagi «MUST», «MUST NOT», «REQUIRED», «SHALL», «MAY» и «OPTIONAL» kalit so'zlari [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) da ko'rsatilgandek talqin qilinishi kerak.

1. Commitlar ot so'z turkumiga oid, `feat`, `fix` va shunga o'xshash so'z bilan boshlanishi shart(MUST). Undan keyin ixtiyoriy kontekst (OPTIONAL), undov belgisi (`!`) (OPTIONAL), va undan so'ng ikki nuqta (`:`) hamda bo'sh joy (` `) joydan iborat bo'lishligi talab etiladi (REQUIRED).
2. Agar commit ilovangiz yoki kutubxonangizga yangi xususiyat qo'shsa, `feat:` _turidan_ foydalanishingiz shart (MUST).
3. Agar commit ilovangiz yoki kutubxonangizdagi muommoni bartaraf qilsa, `fix:` _turidan_ foydalanishingiz shart (MUST).
4. Turdan so'ng _kontekst_ kelishi mumkin (MAY). _Kontekst_ qavslar bilan o'ralgan, kutubxonangizdagi kodlarning bir qismini tavsiflovchi ot so'z turkumiga oid so'z bo'lishligi kerak, masalan `fix(parser)`.
5. Commit haqida tavsif darhol _tur_/_kontekst_ prefiksidan keyin ikki nuqta (`:`) va bo'sh joydan (` `)keyin bo'lishi kerak (MUST). Tavsif bu kod o'zgarishlarining qisqacha xulosasidir. Masalan, `fix: array parsing issue when multiple spaces were contained in string`
6. Qisqa tavsifdan so'ng kod o'zgarishlari haqida qo'shimcha kontekstual ma'lumotlarni taqdim etuvchi tana(body) qismi taqdim etilishi mumkin (MAY). Tana(body) qismi tavsifdan keyin bitta bo'sh qatordan so'ng boshlanishi kerak (MUST).
7. Commitning tana(body) qismi ixtiyoriy bo'lib, istalgan miqdordagi paragraflardan iborat bo'lishi mumkin. (MAY)
8. _Tana(body)_ qismidan keyin 1ta bo'sh qatordan so'ng, bir yoki bir nechta _footerlar_ bo'lishligi mumkin (MAY). Har bir _footer_ so'z belgisidan iborat bo'lishi, undan keyin `:<bo'sh joy>` yoki `<bo'sh joy>#` ajratuvchisi, keyin matn qiymatidan iborat bo'lishligi shart (MUST) ([git trailer format](https://git-scm.com/docs/git-interpret-trailers) asosida).
9. _Footer_ tokeni uchun (` `) bo'sh joy begilising o'rniga (`-`) dan foydalanish kerak (MUST). Masalan, `Acked-by` (bu _footer_ tokenini uning ko'p paragrafli _tana_ qismidan ajratishga yordam beradi). _BREAKING CHANGE_ bundan mustasno, undan token sifatida ham foydalanish mumkin (MAY).
10. _Footerning_ qiymati ya'ni tana qismida boʻshliqlar va yangi satrlar boʻlishi mumkin (MAY) va keyingi _footer_ token/ajratuvchi juftlik kuzatilganda avvalgi _footer_ tugatilishi kerak (MUST).
11. `BREAKING CHANGE` o'zgarishlar commit xabarining _tur/kontekst_ prefiksida yoki _footer_ token qismida ko'rsatilishi kerak (MUST).
12. Agar _footerda_ `BREAKING CHANGE` bo'lsa, u katta harflardan tashkil topgan `BREAKING CHANGE` so'zlari va undan so'ng ikki nuqta (`:`), bo'sh joy (` `) va tavsifdan iborat bo'lishi kerak (MUST). Masalan, `BREAKING CHANGE: environment variables now take precedence over config files.`
13. Agar _tur/kontekst_ prefiksida `BREAKING CHANGE` mavjud bo'lsa, u holda ikki nuqtadan (`:`) avval undov belgisi (`!`) bo'lishligi shart (MUST)! Agar undov belgisi (`!`) ishlatilgan bo'lsa, u holda _footer_ qismida emas (MAY), balki commit xabarining `tasnif` qismida `BREAKING CHANGE` haqida ma'lumot berilishi mumkin. (SHALL)
14. Commit xabarlarida `feat` va `fix`dan boshqa turlardan foydalanish mumkin (MAY). Masalan, `docs: updated ref docs`
15. "Conventional Commits" kelishuviga asosan ishlatilayotgan so'zlar, dasturchilar tomonidan `case sensitive` bo'lmasligi kerak (MUST NOT), lekin `BREAKING CHANGE` bundan mustasno, chunki bu katta harflarda yozilishi lozim (MUST).
16. `BREAKING-CHANGE`, _footerning_ tokeni sifatida ishlatilganda, `BREAKING CHANGE` bilan sinonim bo‘lishi kerak (MUST).

## Nima uchun «Conventional Commits» dan foydalanish kerak

- Avtomatik tarzda o'zgarishlar ro'yhati(CHANGELOG) yaratilishi.
- Semantik versiyani avtomatik ravishda aniqlash (qo'shilgan commitlarning _turlariga_ asoslanib).
- Jamoadoshlarni, ommani va boshqalarni o'zgarishlarning mohiyati haqida xabardor qilish.
- `Build` hamda `Publish` jarayonlarini ishga tushirish.
- Yaxshi tuzilgan commitlar tarixini o'rganish orqali, odamlarga sizning loyihalaringizga hissa qo'shishni osonlashtirish imkonini beradi.

## FAQ (Tez-tez so'raladigan savollar)

### Boshlang'ich rivojlantirish bosqichida commit xabarlari bilan qanday munosabatda bo'lish kerak?

Biz, siz mahsulotni allaqachon ishlab chiqarilgan deb davom etishingizni tavsiya qilamiz. Odatda _kimdir_, garchi u sizning dastur ishlab chiquvchi hamkasbingiz bo'lsa ham, sizning dasturingizdan foydalanadi. Ular, tuzatilgan narsalar, nimalar qo'shilganligi va h.k haqida xabardor bo'lishni istaydilar.

## Commit _turi_ katta yoki kichik harflarda bo'lishi kerakmi?

Sizga eng yoqqanini tanlang va unga qat'iy rioya qiling.

### Agar commit birdan ko'p commit turlariga mos keladigan bo'lsa nima qilish kerak?

Iloji bo'lsa, orqaga qayting va bir nechta commitlarni yarating. `Conventional Commits`ning afzalliklaridan biri bu bizni ko'proq tashkillashtirilgan commitlar va PR (Pull Request) qilishga undash qobiliyatidir.

### Bu tez rivojlanish va tez iteratsiyaga to'sqinlik qilmaydimi?

Bu tez, tartibsiz harakatni oldini oladi. Bu sizga turli hissa qo'shuvchilar bilan bir nechta loyihalar bo'ylab tez uzoq muddatli harakat qilish imkonini beradi.

### `«Conventional Commits»` dasturchilarni o'zlari bajaradigan commitlar _turlarini_ cheklashga olib kelishi mumkinmi, chunki ular tavsiya etilgan _turlarga_ ko'ra o'ylashadi?

`Conventional Commits` bizni tuzatishlar (`fix: `) kabi muayyan turdagi commitlarni ko'proq qilishga undaydi. Bundan tashqari, `Conventional Commits`ning moslashuvchanligi sizning jamoangizga o'z _turlarini_ ishlab chiqishga va vaqt o'tishi bilan bu _turlarni_ o'zgartirishga imkon beradi.

### Buni Semantik versiyaga qanday aloqasi bor?

`fix` _turidagi_ commitlar `PATCH` relizlariga, `feat` - `MINOR`-ga, `BREAKING CANGE` - _turidan_ qat'iy nazar - `MAJOR`-ga tarjima qilinishi kerak.

### Qanday qilib kengaytmalarimni(extensions) «Conventional Commits» spetsifikatsiyasiga moslashtirishim kerak, masalan. `@jameswomack/conventional-commit-spec`?

Ushbu spetsifikatsiyaga o'z kengaytmalaringizni chiqarish uchun Semantik versiyadan foydalanishni tavsiya etamiz (va sizni ushbu kengaytmalarni yaratishga undaymiz!).

### Agar tasodifan noto'g'ri commit _turidan_ foydalansam nima qilishim kerak?

#### Siz spetsifikatsiyaga tegishli, lekin to'g'ri _turdan_ foydalanmaganingizda, masalan. `feat` o'rniga `fix`

Xatoni `push` yoki `releasing` qilishdan oldin, biz commitlar tarixini tahrirlash uchun `git rebase -i` dan foydalanishni tavsiya qilamiz. `Release` so'ng, tahrirlash qaysi vositalar va jarayonlardan foydalanganingizga qarab o'zgaradi.

#### Spetsifikatsiyada ko'rsatilmagan _turdan_ foydalanganda. Misol uchun, `feat` o'rniga `feet`

Eng yomon holatga ko'ra, agar commit `Conventional Commits` spetsifikatsiyasiga to'g'ri kelmasa, bu qiyomat degani emas. Bu shunchaki spetsifikatsiyaga asoslangan vositalar tomonidan commit o'tkazib yuborilishini anglatadi.

### Mening barcha kontributorlarim `Conventional Commits` spetsifikatsiyasidan foydalanishlari kerakmi?

Yo'q! Agar siz `Git`da commitlarni birlashtirish (`squash`) usulidan foydalansangiz, loyiha maintainerlari birlashtirilgan, oddiy commit qiluvchilarning ish yukini qo'shmasdan birlashtirishi, topshiriq xabarlarini tartibga solishi mumkin. Buning uchun umumiy ish jarayoni sizning git tizimingiz avtomatik ravishda `PR` soʻrovi boʻyicha commitlarni `squash` qilish va maintainerga birlashtirish uchun tegishli git commit xabarini kiritadigan formani taqdim qilishi kerak.

### «Conventional Commits» orqali qanday qilib bekor qilingan commitlarni uzatish mumkin?

Kod o'zgarishlarini bekor qilish qiyin bo'lishi mumkin:

- Bir nechta commitlarni bekor qilyabsizmi?
- Agar siz yangi xususiyat o'zgarishlarini bekor qilsangiz, keyingi versiya `PATCH` bo'lishi kerakmi?

`Conventional Commits` bekor qilish xatti-harakatini aniqlash uchun aniq tarzda ta'riflashga urinmaydi. Buning o'rniga, biz o'zgarishlarni bekor qilish uchun o'z mantig'ini ishlab chiqishda _turlar_ va _footerlarning_ moslashuvchanligidan foydalanishni vosita mualliflariga qoldiramiz.

Tavsiyalardan biri `revert` turi va qaytarilayotgan majburiyat xeshlariga (`SHA`) ishora qiluvchi _footerdan_ foydalanishdir. Masalan:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
