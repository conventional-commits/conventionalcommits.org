---
draft: false
aliases: ["/id/"]
---

# Conventional Commits 1.0.0

## Ringkasan

Conventional Commits adalah perjanjian sederhana tentang cara menulis pesan komit.
Ini menjelaskan sekumpulan aturan sederhana untuk membuat riwayat komit yang jelas;
yang memudahkan untuk membuat alat automatis di atasnya.
Perjanjian ini cocok dengan [SemVer](http://semver.org/lang/id/),
dengan menjelaskan suatu fitur (features), perbaikan (fixes),  perubahan yang merusak (breaking changes) yang dimuat dalam pesan komit.

Pesan komit harus tersusun sebagai berikut:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
---

<br />
Komit berisi elemen struktural sebagai berikut, untuk menyampaikan maksud kepada konsumen perpustakaan anda:

1. **fix:** komit _tipe_ `fix` untuk perbaikan celah (bug) dalam kode anda (ini berkolerasi dengan [`PATCH`](http://semver.org/#summary) di Semantic Versioning).
1. **feat:** komit _tipe_ `feat` memperkenalkan suatu fitur (feature) baru dalam kode anda (ini berkolerasi dengan [`MINOR`](http://semver.org/#summary) di Semantic Versioning).
1. **BREAKING CHANGE:** komit yang berisi footer `BREAKING CHANGE:`, atau tambahkan `!` setelah type/scope, memperkenalkan perusakan perubahan API (ini berkolerasi dengan [`MAJOR`](http://semver.org/#summary) di Semantic Versioning). BREAKING CHANGE dapat menjadi bagian dari komit _type_ apapun.
1. _types_ daripada `fix:` dan `feat:` diperbolehkan, sebagai contoh [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (berdasarkan pada [the Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) direkomendasikan `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, dan lainya.
1. _footers_ daripada `BREAKING CHANGE: <description>` dapat disediakan dan mengikuti konvensi yang mirip dengan
  [format git trailer](https://git-scm.com/docs/git-interpret-trailers).

Tipe tambahan tidak di amanatkan oleh spesifikasi conventional commits, dan tidak ada efek implisit dalam Semantic Versioning (kecuali mereka termasuk BREAKING CHANGE).
<br /> < br/>
Cakupan dapat disediakan ke tipe komit. untuk memberikan informasi kontekstual tambahan dan terkandung dalam kurung, misalnya, `feat(parser): add ability to parse arrays`.

## Contoh

### Pesan komit dengan deskripsi dan breaking change di footer
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Pesan komit dengan `!` untuk menarik perhatian pada breaking change
```
feat!: send an email to the customer when a product is shipped
```

### Pesan komit dengan scope dan `!` untuk menarik perhatian pada breaking change
```
feat(api)!: send an email to the customer when a product is shipped
```

### Pesan komit dengan keduanya `!` dan footer BREAKING CHANGE
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Pesan komit tanpa body
```
docs: correct spelling of CHANGELOG
```

### Pesan komit dengan scope
```
feat(lang): add polish language
```

### Pesan komit dengan badan multi-paragraf dan multi-footer
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Spesifikasi

Kata kunci “HARUS”, “TIDAK BOLEH”, “DIBUTUHKAN”, “SEHARUSNYA”, “JANGAN SAMPAI”, “SEBAIKNYA”, “SEBAIKNYA TIDAK”, “DIREKOMENDASIKAN”, “BISA”, dan “OPSIONAL” di dokumen ini sesuai dengan [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).
 
1. Komit HARUS (MUST) diawali dengan tipe, yang terdiri dari kata benda, `feat`, `fix`, dll., diikuti dengan scope OPSIONAL (OPTIONAL) `!`, dan DIBUTUHKAN (REQUIRED) terminal colon dan spasi.
1. Tipe `feat` HARUS (MUST) digunakan ketika komit menambahkan fitur baru ke aplikasi atau pustaka Anda.
1. Tipe `fix` HARUS (MUST) digunakan ketika komit merepresentasikan perbaikan bug untuk aplikasi Anda.
1. Scope BISA (MAY) dicantumkan setelah tipe. Scope HARUS (MAY) terdiri dari kata benda yang menggambarkan bagian dari kode yang dikelilingi tanda kurung, misalnya, e.g., `fix(parser):`
1. Deskripsi HARUS (MUST) segera mengikuti spasi setelah awalan type/scope. Deskripsi adalah ringkasan singkat dari perubahan kode, misalnya, _fix: array parsing issue when multiple spaces were contained in string_.
1. Body yang lebih panjang BISA (MAY) disediakan setelah deskripsi singkat, memberikan informasi kontekstual tambahan tentang perubahan kode. Body HARUS (MUST) memulai satu baris kosong setelah deskripsi.
1. Body komit adalah bentuk bebas dan BISA (MAY) terdiri dari sejumlah paragraf terpisah baris baru.
1. Satu atau lebih footer BISA (MAY) disediakan satu baris kosong setelah badan. Setiap footer HARUS (MUST) terdiri dari token kata, diikuti oleh pemisah `:<space>` atau `<space>#`, diikuti oleh nilai string (ini terinspirasi oleh [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. Token footer HARUS (MUST) menggunakan `-` sebagai ganti karakter spasi putih, mis., `Acked-by` (ini membantu membedakan bagian footer dari badan multi-paragraf). Pengecualian dibuat untuk `BREAKING CHANGE`, yang BISA (MAY) juga digunakan sebagai token.
1. Nilai footer BISA (MAY) berisi spasi dan baris baru, dan penguraian HARUS (MUST) berakhir ketika pasangan token/pemisah footer yang berlaku berikutnya diamati.
1. Melanggar perubahan HARUS (MUST) ditunjukkan dalam tipe / lingkup awalan dari komit, atau sebagai entri dalam catatan kaki.
1. Jika dimasukkan sebagai footer, perubahan yang melanggar HARUS (MUST) terdiri dari teks huruf besar BREAKING CHANGE, diikuti oleh titik dua, spasi, dan deskripsi, mis., _BREAKING CHANGE: variabel lingkungan sekarang diutamakan daripada file konfigurasi_.
1. Jika termasuk dalam 

awalan, memecah perubahan HARUS (MUST) ditunjukkan oleh `!` Segera sebelum `:`. Jika `!` Digunakan, `BREAKING CHANGE:` BISA (MAY) dihapus dari bagian footer, dan deskripsi commit HARUS (MUST) digunakan untuk menjelaskan perubahan yang melanggar.
1. Jenis selain `feat` dan `fix` BISA (MAY) digunakan dalam pesan komit Anda, mis., _docs: updated ref docs._
1. Unit-unit informasi yang membentuk konvensional melakukan TIDAK BOLEH (MUST NOT) diperlakukan sebagai case sensitif oleh implementor, dengan pengecualian BREAKING CHANGE yang HARUS (MUST) huruf besar.
1. BREAKING-CHANGE HARUS (MUST) identik dengan BREAKING CHANGE, bila digunakan sebagai token di footer.

## Mengapa menggunakan Conventional Konvensional

* Secara automatis menghasilkan CHANGELOGs.
* Secara automatis menentukan versi semantic (Berdasarkan tipe komit yang dilakukan).
* Mengkomunikasikan sifat perubahan kepada rekan setim, publik, dan pemangku kepentingan lainnya.
* Memicu proses pembuatan dan publikasi.
* Mempermudah orang untuk berkontribusi pada proyek Anda, dengan memungkinkan mereka untuk menjelajah riwayat komit yang lebih terstruktur.

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

Tidak! Jika Anda menggunakan alur kerja berbasis squash di pengelola Git dapat membersihkan pesan komit saat mereka digabung — menambahkan tidak ada beban kerja ke committers biasa.
Alur kerja umum untuk ini adalah membuat sistem git Anda secara otomatis squash melakukan dari permintaan tarikan dan menyajikan formulir bagi pengelola utama untuk memasukkan pesan git commit yang tepat untuk penggabungan.

### Bagaimana Komit Konvensional menangani komit balik?

Mengembalikan kode bisa rumit: apakah Anda mengembalikan banyak komit? jika Anda mengembalikan fitur, haruskah rilis berikutnya sebagai tambalan?

Conventional Commits tidak membuat upaya eksplisit untuk mendefinisikan perilaku kembalikan. Alih-alih, kami menyerahkannya kepada perkakas penulis untuk menggunakan fleksibilitas _type_ dan _footers_ untuk mengembangkan logika mereka untuk menangani orang yang kembali.

Satu rekomendasi adalah menggunakan tipe `revert`, dan _footer_ yang merujuk komit SHA yang sedang dikembalikan:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
