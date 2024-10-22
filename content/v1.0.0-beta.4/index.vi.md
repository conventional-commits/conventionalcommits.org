---
draft: false
aliases: ["/vi/"]
---

# Conventional Commits 1.0.0-beta.4

## Tóm tắt nhanh

Quy ước **Conventional Commits** là một quy ước đơn giản áp dụng trên các thông điệp commit.
Nó cung cấp một bộ quy tắc dễ dàng để tạo ra lịch sử commit rõ ràng;
giúp việc viết các công cụ tự động dễ dàng hơn.
Quy ước này kết hợp tốt với [SemVer](http://semver.org),
bằng cách mô tả các tính năng, sửa lỗi và thay đổi đột phá `(breaking changes)` được thực hiện trong các thông điệp commit.

Thông điệp commit nên được cấu trúc như sau:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```
---

<br />
Commit chứa các yếu tố cấu trúc sau để truyền đạt ý định đến người tiêu dùng thư viện của bạn:

1. **fix:** một commit thuộc _type_ `fix` sửa một lỗi trong mã nguồn của bạn (liên quan đến [`PATCH`](http://semver.org/#summary) trong phiên bản semantic).
1. **feat:** một commit thuộc _type_ `feat` giới thiệu một tính năng mới vào mã nguồn (liên quan đến [`MINOR`](http://semver.org/#summary) trong phiên bản semantic).
1. **BREAKING CHANGE:** một commit có văn bản `BREAKING CHANGE:` ở đầu phần thân hoặc phần footer tùy chọn giới thiệu một thay đổi đột phá về API (liên quan đến [`MAJOR`](http://semver.org/#summary) trong phiên bản semantic).
   Một BREAKING CHANGE có thể là một phần của commit của bất kỳ _type_ nào.
1. Khác: các _type_ commit khác ngoài `fix:` và `feat:` đều được cho phép, ví dụ [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (dựa trên [quy ước Angular](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit)) khuyến nghị `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, và các loại khác.

Chúng tôi cũng khuyến nghị sử dụng `improvement` cho các commit cải thiện một triển khai hiện tại mà không thêm tính năng mới hoặc sửa lỗi.
Lưu ý rằng các loại này không được quy định bởi quy ước commit thông thường và không có hiệu ứng ngầm trong phiên bản semantic (trừ khi chúng bao gồm một BREAKING CHANGE).
<br />
Một phạm vi có thể được cung cấp cho loại commit, để cung cấp thông tin ngữ cảnh bổ sung và được chứa trong dấu ngoặc đơn, ví dụ, `feat(parser): add ability to parse arrays`.

## Ví dụ

### Thông điệp commit với mô tả và thay đổi đột phá trong phần thân
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Thông điệp commit với tùy chọn `!` để thu hút sự chú ý đến thay đổi đột phá
```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### Thông điệp commit không có phần thân
```
docs: correct spelling of CHANGELOG
```

### Thông điệp commit với phạm vi
```
feat(lang): add polish language
```

### Thông điệp commit cho một sửa lỗi sử dụng (tùy chọn) số vấn đề.
```
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

## Quy ước đầy đủ

Các từ khóa "PHẢI (MUST)", "KHÔNG ĐƯỢC (MUST NOT)", "BẮT BUỘC (REQUIRED)", "NÊN (SHALL)", "KHÔNG NÊN (SHALL NOT)", " NÊN (SHOULD)", "KHÔNG NÊN (SHOULD NOT)", "KHUYẾN NGHỊ (RECOMMENDED)", "CÓ THỂ (MAY)", và "TUỲ CHỌN (OPTIONAL)" trong tài liệu này được hiểu theo như mô tả trong [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Commit PHẢI sử dụng tiền tố type, bao gồm một danh từ, `feat`, `fix`, v.v., theo sau bởi một phạm vi TÙY CHỌN, và BẮT BUỘC là một dấu hai chấm (:) và một khoảng trắng.
1. Loại `feat` PHẢI được sử dụng khi một commit thêm một tính năng mới vào ứng dụng hoặc thư viện của bạn.
1. Loại `fix` PHẢI được sử dụng khi một commit đại diện cho một sửa lỗi trong ứng dụng của bạn.
1. Một phạm vi CÓ THỂ được cung cấp sau một loại. Phạm vi PHẢI bao gồm một danh từ mô tả một phần của mã nguồn được bao quanh bởi dấu ngoặc đơn, ví dụ, `fix(parser):`
1. Mô tả PHẢI theo ngay sau tiền tố type/phạm vi với một khoảng trắng. Mô tả là một tóm tắt ngắn về thay đổi trong code, ví dụ: fix: sửa lỗi phân tích cú pháp mảng khi có nhiều khoảng trắng trong chuỗi.
1. Một phần thân commit dài hơn CÓ THỂ được cung cấp sau mô tả ngắn, cung cấp thông tin ngữ cảnh bổ sung về các thay đổi mã. Phần thân PHẢI bắt đầu sau một dòng trống sau mô tả.
1. Một footer gồm một hoặc nhiều dòng CÓ THỂ được cung cấp sau một dòng trống sau phần thân. Footer PHẢI chứa thông tin meta về commit, ví dụ, các pull-requests liên quan, người xem xét, thay đổi đột phá `(breaking changes)`, với một mẩu thông tin meta trên mỗi dòng.
1. Các thay đổi đột phá PHẢI được chỉ ra ngay từ đầu phần thân, hoặc ở đầu một dòng trong phần footer. Một thay đổi đột phá PHẢI bao gồm văn bản viết hoa BREAKING CHANGE, theo sau bởi dấu hai chấm và khoảng cách.
1. Một mô tả PHẢI được cung cấp sau `BREAKING CHANGE: `, mô tả những gì đã thay đổi về API, ví dụ, *BREAKING CHANGE: các biến môi trường hiện tại sẽ ưu tiên hơn file cấu hình*.
1. Bạn có thể sử dụng các type commit khác ngoài `feat` và `fix`, ví dụ `docs`, `style`, `refactor`, `perf`, `test`, `chore`,...
1. Các đơn vị thông tin tạo nên commit thông thường KHÔNG ĐƯỢC coi là phân biệt chữ hoa chữ thường bởi các nhà thực hiện, ngoại trừ BREAKING CHANGE PHẢI viết hoa.
1. Một `!` CÓ THỂ được thêm trước `:` trong tiền tố type/phạm vi, để thu hút sự chú ý hơn đến các thay đổi đột phá. `BREAKING CHANGE: description` cũng PHẢI được bao gồm trong phần thân hoặc footer, cùng với `!` trong tiền tố.

## Tại sao sử dụng Conventional Commits

* Tự động tạo CHANGELOG.
* Tự động quyết định thay đổi phiên bản ngữ nghĩa dựa trên type của commit..
* Truyền đạt bản chất của các thay đổi cho đồng đội, cộng đồng người dùng, và các bên liên quan khác trong môi trường công nghệ, đặc biệt là khi sử dụng git và các nền tảng công cộng khác.
* Kích hoạt quy trình build và deploy.
* Giúp mọi người đóng góp vào các dự án của bạn dễ dàng hơn, bằng cách cho phép họ khám phá một lịch sử commit có cấu trúc hơn.

## Câu hỏi thường gặp

### Làm Thế Nào Để Xử Lý Thông Điệp Commit Trong Giai Đoạn Phát Triển Ban Đầu?

Chúng tôi khuyến nghị bạn xử lý chúng như thể bạn đã phát hành sản phẩm. Vì thường luôn có *ai đó* đang sử dụng phần mềm của bạn, ngay cả khi đó là những đồng nghiệp đang phát triển phần mềm với bạn. Họ sẽ muốn biết những thông tin như đã sửa những gì, có gì không tương thích, v.v.

### Type Trong Tiêu Đề Commit Là Viết Hoa Hay Thường?

Bất kỳ cách viết nào cũng có thể được sử dụng, nhưng tốt nhất là nên nhất quán.

### Nếu Một Commit Phù Hợp Với Nhiều Type Thì Sao?

Quay lại và tạo nhiều commit nếu có thể. Một trong những lợi ích của commit theo quy ước là giúp chúng ta tạo ra các commit và PR có tổ chức hơn.

### Điều này có làm hạn chế phát triển nhanh và lặp đi lặp lại nhanh chóng không?

Nó cản trở việc phát triển một cách lộn xộn không có tổ chức rõ ràng. Nó giúp bạn phát triển nhanh hơn trong dài hạn khi làm việc trên nhiều dự án và với nhiều người đóng góp.

### Commit Theo Quy Ước Có Hạn Chế Các Loại Commit Không (Vì Người Commit Sẽ Chỉ Nghĩ Đến Các Type Đã Cung Cấp)?

Commit theo quy ước khuyến khích chúng ta sử dụng một số loại commit nhất định, như fix. Ngoài ra, tính linh hoạt của commit theo quy ước cũng cho phép nhóm của bạn sử dụng các loại riêng và thay đổi chúng theo thời gian.

### Điều này liên quan thế nào đến SemVer?

Các commit loại `fix` nên được dịch thành các phát hành `PATCH`. Các commit loại `feat` nên được dịch thành các phát hành `MINOR`. Các commit có `BREAKING CHANGE` trong commit, bất kể loại nào, nên được dịch thành các phát hành `MAJOR`.

### Tôi nên phiên bản hóa các phần mở rộng của mình cho đặc tả Conventional Commits như thế nào, ví dụ: `@jameswomack/conventional-commit-spec`?

Chúng tôi khuyến nghị sử dụng SemVer để phát hành các phần mở rộng của riêng bạn cho đặc tả này (và khuyến khích bạn tạo ra các phần mở rộng này!)

#### Khi bạn sử dụng một loại thuộc đặc tả nhưng không đúng loại, ví dụ như `fix` thay vì `feat`

Trước khi hợp nhất hoặc phát hành lỗi lầm, chúng tôi khuyến nghị sử dụng `git rebase -i` để chỉnh sửa lịch sử commit. Sau khi phát hành, việc dọn dẹp sẽ khác nhau tùy theo các công cụ và quy trình bạn sử dụng.

#### Khi bạn sử dụng một loại *không* thuộc đặc tả, ví dụ như `feet` thay vì `feat`

Trong trường hợp xấu nhất, đó không phải là tận thế nếu một commit không tuân theo đặc tả Conventional Commits. Điều đó đơn giản có nghĩa là commit sẽ bị bỏ lỡ bởi các công cụ dựa trên đặc tả này.

Sure, let's continue with more content translated to Vietnamese:

### Làm Thế Nào Để Xử Lý Commit Thay Đổi Phá Vỡ?

Tạo commit riêng biệt cho mỗi thay đổi phá vỡ và ghi chú rõ ràng trong phần `BREAKING CHANGE` để người dùng thư viện của bạn biết được hành động cần thiết để cập nhật.

### Làm Thế Nào Để Sử Dụng Commit Theo Quy Ước Trong Các Dự Án Hiện Tại?

Bạn có thể bắt đầu sử dụng commit theo quy ước ngay lập tức. Đơn giản chỉ cần bắt đầu sử dụng các quy ước này trong các commit mới.

### Các Công Cụ Nào Hỗ Trợ Commit Theo Quy Ước?

- [commitlint](https://github.com/conventional-changelog/commitlint) là một công cụ linting cho thông điệp commit.
- [standard-version](https://github.com/conventional-changelog/standard-version) là một công cụ quản lý phiên bản và phát hành dựa trên commit theo quy ước.
- [semantic-release](https://github.com/semantic-release/semantic-release) tự động hóa toàn bộ quá trình phát hành phần mềm.

## Tài Nguyên

- [Conventional Commits](https://www.conventionalcommits.org)
- [Semantic Versioning](https://semver.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/68a6a07/CONTRIBUTING.md#commit)

## Kết Luận

Commit theo quy ước là một công cụ mạnh mẽ để duy trì lịch sử commit nhất quán và dễ đoán. Bằng cách tuân theo một tập hợp các quy tắc đơn giản, bạn có thể cải thiện hiệu quả của việc phát triển phần mềm và giao tiếp các thay đổi trong dự án của mình.

---

Hãy áp dụng commit theo quy ước trong dự án của bạn để tận dụng các lợi ích của một lịch sử commit rõ ràng và có cấu trúc. Điều này không chỉ giúp bạn mà còn giúp tất cả các cộng tác viên hiểu rõ về bản chất của các thay đổi và tác động của chúng.