---
draft: false
aliases: ["/id/"]
---

# Conventional Commits 1.0.0-beta.4

## Ringkasan

Conventional Commits adalah perjanjian sederhana tentang cara menulis pesat komit.
Ini menjelaskan sekumpulan aturan sederhana untuk membuat riwayat komit yang jelas;
yang memudahkan untuk membuat alat automatis di atasnya.
Perjanjian ini cocok dengan [SemVer](http://semver.org),
dengan menjelaskan suatu fitur (features), perbaikan (fixes), merusak perubahan (breaking changes) yang dimuat dalam pesan komit.

Pesan komit harus tersusun sebagai berikut:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```
---

<br />
Komit berisi elemen struktural sebagai berikut, untuk menyampaikan maksud kepada
konsumen perpustakaan anda:

1. **fix:** komit _tipe_ `fix` untuk perbaikan celah (bug) dalam kode anda (ini berkolerasi dengan [`PATCH`](http://semver.org/#summary) di semantic versioning).
1. **feat:** komit _tipe_ `feat` memperkenalkan suatu fitur (feature) baru dalam kode anda (ini berkolerasi dengan [`MINOR`](http://semver.org/#summary) di semantic versioning).
1. **BREAKING CHANGE:** komit yang berisi teks `BREAKING CHANGE:` di awal bagian opsi badan atau kaki mengenalkan merusak perubahan API (ini berkolerasi dengan [`MAJOR`](http://semver.org/#summary) di semantic versioning).
BREAKING CHANGE dapat menjadi bagian dari komit _tipe_ apapun.
1. Lainya: komit dengan _tipe-tipe_ selain dari `fix:` and `feat:` diperbolehkan, misalnya [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (berdasarkan pada [Angular convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)) direkomendasikan `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, dan lainya.

Kami juga merekomendasikan `improvement` untuk komit yang meningkatkan implementasi saat ini tanpa menambahkan fitur baru atau memperbaiki celah (bug).
Perhatikan bahwa tipe-tipe ini tidak di amanatkan oleh spesifikasi conventional commits, dan tidak ada efek implisit dalam semantic versioning (kecuali mereka termasuk BREAKING CHANGE).
<br />
Cakupan dapat disediakan ke tipe komit. untuk memberikan informasi kontekstual tambahan dan terkandung dalam kurung, misalnya, `feat(parser): add ability to parse arrays`.

## Examples

### Pesan komit dengan deskripsi dan breaking change di badan
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Pesan komit dengan opsi `!` untuk menarik perhatian pada breaking change
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### Pesan komit tanpa badan
```
docs: correct spelling of CHANGELOG
```

### Pesan komit dengan cakupan
```
feat(lang): add polish language
```

### Pesan komit untuk perbaikan menggunakan (opsi) nomor masalah.
```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## Spesifikasi

Kata “HARUS”, “TIDAK BOLEH”, “DIBUTUHKAN”, “SEHARUSNYA”, “JANGAN SAMPAI”, “SEBAIKNYA”, “SEBAIKNYA TIDAK”, “DIREKOMENDASIKAN”, “BISA”, dan “OPSIONAL” di dokumen ini sesuai dengan [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Komit HARUS (MUST) diawali dengan tipe, yang terdiri dari kata benda, `feat`, `fix`, dll., diikuti
 dengan OPSIONAL (OPTIONAL) cakupan, dan DIBUTUHKAN terminal colon dan spasi.
1. tipe `feat` HARUS (MUST) digunakan ketika komit menambahkan fitur baru ke apilkasi atau perpustakaan anda.
1. tipe `fix` HARUS (MUST) digunakan ketika komit mewakili perbaikan celah (bug) untuk aplikasi anda.
1. Cakupan BISA (MAY) disediakan setelah tipe. Cakupan HARUS terdiri dari kata benda yang menggambarkan
 bagian dari kode yang dikelilingi tanda kurung, misalnya, `fix(parser):`
1. Deskripsi HARUS (MUST) segera mengikuti spasi setelah awalan tipe/cakupan.
Deskripsi adalah ringkasan singkat dari perubahan kode, misalnya, _fix: array parsing issue when multiple spaces were contained in string._
1. Komit badan yang leibh panjang BISA (MAY) disediakan setelah deskripsi pendek, memberikan informasi kontekstual tambahan tentang perubahan kode. Badan HARUS (MUST) diawalin dengan satu barus kosong setelah deskripsi.
1. Kaki satu atau lebih baris BISA (MAY) disediakan satu baris kosong setelah badan. kaki HARUS (MUST) berisi tentang meta-informasi
tentang perubahan, misalnya, related pull-requests, reviewers, breaking changes, dengan satu informasi meta
per baris.
1. Breaking changes HARUS (MUST) di tunjukan di bagian paling awal dari bagian tubuh, atau di awal baris di bagian kaki. Breaking change HARUS terdiri dari huruf besar BREAKING CHANGE, diikuti dengan colon dan spasi.
1. Deskripsi HARUS (MUST) disediakan setelah `BREAKING CHANGE: `, menggambarkan apa yang telah berubah tentang API, misalnya,  _BREAKING CHANGE: environment variables now take precedence over config files._
1. Tipe selain `feat` dan `fix` BISA (MAY) digunakan dalam pesan komit anda.
1. Unit-unit informasi yang membentuk conventional commits TIDAK BOLEH (MUST NOT) diperlakukan case sensitif oleh pelaksana, dengan pengecualian BREAKING CHANGE yang HARUS (MUST) huruf besar.
1. `!` BISA (MAY) ditambakan sebelum `:` dalam awalan tipe/cakupan, untuk menarik perhatian pada breaking changes. `BREAKING CHANGE: description` HARUS (MUST) dimasukan kedalam badan
atau kaki,bersama dengan `!` di awalan.

## Mengapa menggunakan Conventional Commits

* Secara automatis menghasilkan CHANGELOGs.
* Secara automatis menentukan versi semantic (Berdasarkan tipe komit yang dilakukan).
* Mengkomunikasikan sifat perubahan kepada rekan setim, publik, dan pemangku kepentingan lainnya.
* Memicu proses pembuatan dan publikasi.
* Mempermudah orang untuk berkontribusi pada proyek Anda, dengan memungkinkan mereka untuk menjelajah
  riwayat komit yang lebih terstruktur.

## FAQ

### Bagaimana saya harus berurusan dengan pesan komit pada fase pengembangan awal?

Kami menyarankan Anda melanjutkan seolah-olah Anda sudah merilis produk. Biasanya *seseorang*, bahkan jika itu sesama pengembang perangkat lunak Anda, menggunakan perangkat lunak Anda. Mereka ingin tahu apa yang diperbaiki, apa yang rusak, dll.

### Apakah tipe dalam komit judul huruf besar atau kecil?

Casing apa pun dapat digunakan, tetapi yang terbaik adalah konsisten.

### Apa yang harus saya lakukan jika komit sesuai dengan lebih dari satu tipe komit?

Kembalilah dan buat beberapa komit kapan pun memungkinkan. Bagian dari manfaat Conventional Commits adalah kemampuannya mendorong kami untuk membuat komitmen dan PR yang lebih terorganisir.

### Tidakkah ini menghambat pengembangan yang cepat dan iterasi yang cepat?

Ini mencegah bergerak cepat dengan cara yang tidak teratur. Ini membantu Anda dapat bergerak cepat jangka panjang di berbagai proyek dengan kontributor yang bervariasi.

### Mungkinkah Komitmen Konvensional membuat pengembang membatasi jenis komitmen yang mereka buat karena mereka akan memikirkan jenis yang disediakan?

Komitmen Konvensional mendorong kita untuk membuat lebih banyak jenis komitmen tertentu seperti perbaikan. Selain itu, fleksibilitas Komitmen Konvensional memungkinkan tim Anda untuk membuat tipe mereka sendiri dan mengubah tipe-tipe itu seiring waktu.

### Bagaimana ini berhubungan dengan SemVer?

Komit tipe `fix` harus diterjemahkan ke rilis `PATCH`. Komit tipe `feat` harus diterjemahkan ke rilis `MINOR`. Komit dengan `BREAKING CHANGE` dalam komit, apa pun jenisnya, harus diterjemahkan ke rilis `MAJOR`.

### Bagaimana cara saya memberi versi ekstensi saya ke Spesifikasi Komitmen Konvensional, mis. `@jameswomack/commit-spec-konvensional`?

Kami sarankan menggunakan SemVer untuk merilis ekstensi Anda sendiri ke spesifikasi ini (dan
mendorong Anda untuk membuat ekstensi ini!)

### Apa yang harus saya lakukan jika saya secara tidak sengaja menggunakan tipe komit yang salah?

#### Saat Anda menggunakan jenis yang memiliki spesifikasi tetapi bukan jenis yang benar, misalnya, `fix` bukan `feat`

Sebelum menggabungkan atau merilis kesalahan, sebaiknya gunakan `git rebase -i` untuk mengedit riwayat komit. Setelah rilis, pembersihan akan berbeda sesuai dengan alat dan proses apa yang Anda gunakan.

#### Saat Anda menggunakan jenis *bukan* spesifikasi, mis. `feet` bukannya `feat`

Dalam skenario terburuk, ini bukan akhir dunia jika komit mendarat yang tidak memenuhi spesifikasi conventional commit. Ini berarti komit akan dilewatkan oleh alat yang didasarkan pada spesifikasi.

### Apakah semua kontributor saya perlu menggunakan spesifikasi commit konvensional?

Tidak! Jika Anda menggunakan alur kerja berbasis squash di pengelola Git dapat membersihkan pesan komit saat mereka digabung — menambahkan tidak ada beban kerja ke komuter biasa.
Alur kerja umum untuk ini adalah membuat sistem git Anda secara otomatis squash melakukan dari permintaan tarikan dan menyajikan formulir bagi pengelola utama untuk memasukkan pesan git commit yang tepat untuk penggabungan.
