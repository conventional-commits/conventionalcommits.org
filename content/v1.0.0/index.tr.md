---
draft: false
aliases:
- "/tr/"
---

# Conventional Commits 1.0.0

## Özet

Conventional Commits şartnamesi, commit mesajları hakkında kolayca takip edilebilecek bir sözleşmedir.
Otomatik araçlar yazılarak anlaşılabilecek açık bir commit geçmişi oluşturmak için kolay bir dizi kural sağlar.
Bu sözleşme [SemVer](http://semver.org) ile uyumludur ve commit mesajlarında yeni özellik ekleme (features), hata düzeltme (fixes) ve yıkıcı değişiklik (breaking change) tanımlamalarını yapar.

Commit mesajı aşağıdaki gibi yapılandırılmalıdır:

---

```
<tip>[kapsam, zorunlu değil]: <açıklama>

[zorunlu olmayan mesaj metni]

[zorunlu olmayan alt metin(ler)]
```

---


<br>
Commit mesajı kütüphanenizin kullanıcılarına niyet belirtmek için aşağıdaki yapısal unsurları içerir:

1. **fix:** `fix` *tipi* bir commit kodunuzdaki bir hatayı düzeltir (Semantik versiyonlamadaki [`PATCH`](http://semver.org/#summary) ile paraleldir).
2. **feat:** `feat` *tipi* commit kodunuza yeni bir özellik ekler (Semantik versiyonlamadaki [`MINOR`](http://semver.org/#summary) ile paraleldir).
3. **BREAKING CHANGE:** `BREAKING CHANGE:` ile başlayan bir alt metin ya da tip/kapsam sonuna eklenmiş bir `!` içeren commit yıkıcı bir değişiklik getiriyordur (Semantik versiyonlamadaki [`MAJOR`](http://semver.org/#summary) ile paraleldir). Bir BREAKING CHANGE harhangi bir *tip* commit içinde olabilir.
4. `fix:` ve `feat:` dışında *tipler* de kullanılabilir. Örneğin [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, ve birkaç başka tipi de tavsiye eder (bu [the Angular sözleşmesinden](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) esinlenmiştir).
5. `BREAKING CHANGE: <description>` dışında *alt metinler* de kullanılabilir ve [git trailer format](https://git-scm.com/docs/git-interpret-trailers) takip edilebilir.

Ek tipler Conventional Commits sözleşmesi tarafından zorunlu kılınmaz ve semantik versiyon oluşturmada örtülü bir etkisi yoktur (tabiki BREAKING CHANGE içermedikçe).
<br><br>
Ek bağlamsal bilgi sağlamak için bir commit türüne bir kapsam eklenebilir ve parantez içinde yer alır, Örneğin, `feat(parser): add ability to parse arrays`.

## Örnekler

### Açıklama ve yıkıcı değişiklik içeren alt metin sahibi bir commit mesajı

```
feat: config neslelerinin birbirinden türetilmesi sağlandı

BREAKING CHANGE: `extends` artık başka bir ayar dosyasından türetildiğini belirtiyor
```

### Yıkıcı bir değişikliğe dikkat çeken `!` içeren commit mesajı

```
refactor!: Node 6 desteği kaldırıldı
```

### Kapsamı belirtilen ve `!` ile yıkıcı değişikliğe dikkat çeken commit mesajı

```
refactor(runtime)!: Node 6 desteği kaldırıldı
```

### `!` ve BREAKING CHANGE alt metni içeren commit mesajı

```
refactor!: Node 6 desteği kaldırıldı

BREAKING CHANGE: Sadece Node 6 içinde olan Javascript özellikleri kullanan yerler yeniden yazılmalı.
```

### Mesaj metni olamayan commit

```
docs: CHANGELOG'daki yazım hataları düzeltildi
```

### Kapsam içeren commit mesajı

```
feat(lang): Türkçe çeviri eklendi
```

### Çok paragraflı mesaj metni ve birden çok alt metin içeren commit

```
fix: bazı küçük yazım hataları düzeltildi

Detaylar için ilgili issue'ya bakabilirsiniz.

Daha detaylı bakılması da gerekebilir.

Reviewed-by: Z
Refs #133
```

## Şartname

Bu belgedeki “-MALI”, “-MAMALI”, “ZORUNLU”, “YAPALIM”, “YAPMAYALIM”, “-SAM IYI OLUR”, “-MASAM IYI OLUR”, “TAVSIYE EDILIR”, “-ABİLİRİM” ve “SEÇMELİ” kalıpları [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)'da açıklandığı gibi yorumlanmalıdır.

1. Her commit mesajı bir `feat`, `fix`, vs.  gibi bir tip ile başlaMALI, SEÇMELİ bir kapsam, SEÇMELİ bir `!` işareti ve ZORUNLU bir iki nokta üst üste işareti ve bir adet boşluk ile devam eder.
2. `feat` tipi eğer commit uygulamaya ya da kütüphaneye yeni bir özellik ekliyorsa kullanılMALI.
3. `fix` tipi eğer commit uygulamadaki bir hatayı düzeltiyorsa kullanılMALI.
4. Tip bilgisinden sonra bir kapsam belirtilEBİLİR. Kapsam bilgisi parantez içerisinde kodun hangi bölümün değiştiğine açıklayan bir isimden oluşur. Örneğin `fix(parser):`.
5. Açıklama tip/kapsam ön bilgilerinden sonraki iki nokta ve boşluktan hemen sonra yazılMALIdır. Yapılan değişikliği anlatan kısa bir özettir. Örneğin *fix: array parsing issue when multiple spaces were contained in string*.
6. Kısa açıklamadan sonra, kod değişiklikleri hakkında ek bağlamsal bilgiler sağlayan daha uzun bir commit mesajı metni yazılABİLİR. Mesaj metni açıklamadan sonra boş bir satıra başlaMALIDIR.
7. Bir commit mesaj metni serbest şekildedir ve boş bir satırla ayrılan herhangi bir sayıda paragraftan oluşABİLİR.
8. Bir ya da birden fazla alt metin mesaj metninden bir boş satır sonra koyulABİLİR. Her alt metin bir anahtar kelime ile başlaMALI, anahtar kelime ya `:<boşluk>` ile ya da `<boşluk>#` ayraçları ile bir metine bağlanmalı (bu [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)'dan ilham almıştır).
9. Alt metin anahtar kelimesi boşluk karakteri yerine `-` kullanmalı. Örneğin `Acked-by` (bu alt metnin çok paragraflı mesaj metinlerinden ayırılmasına yardımcı olur). Buna sadece istisna olarak sadece `BREAKING CHANGE` kalıbını anahtar kelime olarak kullanımına izin verilmiştir.
10. Alt metin birden fazla boşluk ve satır içerEBİLİR, ve bir sonraki geçerli anahtar kelimeye ulaştığında bitmiş demektir.
11. Yıkıcı değişiklikler ya tip/kapsam içinde ya da alt metin olarak belirtilMELİDİR.
12. Eğer alt metin içinde belirtiliyorsa, yıkıcı değişiklik büyük harflerle BREAKING CHANGE ile başlaMALI, iki nokta işareti, boşluk ve açıklama ile devam etMELİDİR. Örneğin *BREAKING CHANGE: environment variables now take precedence over config files* gibi.
13. Eğer tip/kapsam içinde belirtiliyorsa, yıkıcı değişiklikler `:` işaretinden önce `!` ile belirtilmelidir. Eğer `!` kullanılırsa altmetinde `BREAKING CHANGE:` kullanılMAYABİLİR ve commit açıklaması yıkıcı değişikliği tanımlamak için kullanılABİLİR.
14. `feat` ve `fix` dışındaki tipler de kullanılABİLİR. Örneğin *docs: updated ref docs.*.
15. Uygulamaya çalışanlar Conventional Commits'i oluştura kalıpları büyük/küçük harf duyarlı düşünMEMELİ. Buna tek istisna BREAKING CHANGE kalıbıdır çünkü her zaman büyük harfle yazılMALIdır.
16. Alt metinde anahtar olarak kullanılırken BREAKING CHANGE BREAKING-CHANGE şeklinde yazılMALI.

## Neden Conventional Commits'e Uymalıyız

- CHANGELOG'ları otomatik olarak oluşturma.
- Bir semantik version tümcesini otomatik olarak belirleme (commit işlemlerinin tiplerine göre).
- Değişikliklerin doğasını ekip arkadaşlarına, kamuya ve diğer paydaşlara iletmek.
- Derleme ve yayınlama işlemlerini tetikleme.
- İnsanların daha yapılandırılmış bir commit geçmişini kendi kendilerine keşfetmelerine imkan vererek projelerinize katkıda bulunmalarını kolaylaştırmak.

## SSS

### İlk geliştirme aşamasında commit mesajları ile nasıl başa çıkmalıyım?

Ürünü daha önce yayınlamış gibi devam etmenizi öneririz. Tipik olarak *birisi*, diğer yazılım geliştiricileriniz olsa bile, yazılımınızı kullanıyor demektir. Neyin düzeltildiğini, neyin bozulduğunu vb. bilmek isteyeceklerdir.

### Commit başlığındaki tip bilgisi büyük harf mi veya küçük harf mi yazılmalı?

Herhangi biri kullanılabilir, ancak tutarlı olmak en iyisidir.

### Yapacağım commit, commit tiplerinin birden fazlasına uygunsa ne yapmalıyım?

Geri dönün ve mümkün olduğunca çok commit yapın. Conventional Commits'in avantajlarından biri, bizi daha organize commit ve PR yapmaya teşvik etmesidir.

### Bu, hızlı gelişimi ve hızlı döngüyü yapma cesaretini kırmıyor mu?

Dağınıklık içinde hızlı bir şekilde hareket etmeyi önler. Uzun vadede çeşitli katkıda bulunanlar ile birden fazla projede daha hızlı bir şekilde ilerlemenize yardımcı olur.

### Conventional Commits, geliştiricileri sağlanan tipleri düşünecekleri için yaptıkları taahhütlerin tipini sınırlamaya yönlendirebilir mi?

Conventional Commits, hata düzeltmeleri gibi belirli commit tiplerinden daha fazlasını yapmamızı teşvik eder. Bunun dışında, Conventional Commits'in esnekliği, ekibinizin kendi tiplerini bulmasına ve zamanla bu tipleri değiştirmesine olanak tanır.

### Bunun SemVer ile ilişkisi nedir?

`fix` tipi commit `PATCH` sürüm olarak yayınlanabilir. `feat` tipinde commit `MINOR` sürüm olarak yayınlanabilir. `BREAKING CHANGE` içeren commit, tipi ne olursa olsun `MAJOR` olarak yayınlanabilir.

### Conventional Commits sözleşmesine yaptığım eklentiyi nasıl sürümlendirmeliyim, Örneğin `@jameswomack/conventional-commit-spec` şeklinde mi?

Bu sözleşmeye ait kendi uzantılarınızı yayınlamak için SemVer kullanmanızı öneririz (ve bu uzantıları oluşturmanızı teşvik ediyoruz!).

### Yanlışlıkla yanlış commit tipi kullanırsam ne yapmalıyım?

#### Sözleşemede olan ancak doğru olmayan bir tip kullandığınızda, örneğin `feat` yerine `fix`

Hatayı birleştirmeden veya yayınlamadan önce, commit geçmişini düzenlemek için `git rebase -i` kullanmanızı öneririz. Yayınlandıktan sonra temizleme, kullandığınız araç ve işlemlere göre farklı olacaktır.

#### Şözleşmede *olmayan* bir tür kullandığınızda, örneğin `feat` yerine `feet`

En kötü durumda, Conventional Commits şartnamesine uymayan bir commit tipi dünyanın sonu değildir. Bu sadece commit'in sözleşmeye dayalı araçlar tarafından kaçırılacağı anlamına gelir.

### Tüm proje katılımcılarının Conventional Commits şartnamesini kullanması gerekiyor mu?

Hayır! Git'te squash tabanlı bir iş akışı kullanırsanız, proje yürütücüleri birleştirme sırasında commit mesajlarını temizleyebilir; bu da dışardan katkı yapanlara iş yükü eklemez.
Bunun için yaygın bir iş akışı, git sisteminizin otomatik olarak bir PR isteğinden commit mesajlarını ayırmasını ve isteği kabul edecek kişinin için birleştirme için uygun git commit mesajını girmesi için bir form sunmasını sağlamaktır.

### Conventional Commits geri dönen commit'leri nasıl ele alır?

Eklenen bir kodu geri almak karmaşık olabilir: birden fazla işi geri mi alıyorsunuz? Bir özelliği geri alıyorsanız, bir sonraki sürüm belki de bir yama mı olmalı?

Conventional Commits, geri döndürme davranışını tanımlamak için açık bir çaba göstermez. Bunun yerine bu işi geliştiricilere bırakıyoruz, geliştiriciler geri dönüşleri ele almak için kendi yollarını geliştirmek üzere *tiplerin* ve *alt metinlerin* esnekliğini kullanabilirler.

Bir öneri şöyle olabilir, `revert` tipini ve geri döndürülen commit'in SHA bilgisini başvuran bir alt metinde belirtmektir:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
