---
draft: false
aliases: ["/vi/"]
---

# Conventional Commits 1.0.0

## Tóm tắt

Conventional Commits là một bộ quy tắc được áp dụng trong các commit message.
Nó cung cấp một bộ quy tắc để có lịch sử commit rõ ràng và dễ đọc;
giúp việc viết code, phát triển tiếp từ codebase dễ dàng hơn.
Quy tắc này tương thích với [SemVer](http://semver.org),
bằng cách mô tả các tính năng (features), các bản sửa lỗi (fixes), và các thay đổi lớn (breaking changes) ngay trong commit message.

Commit message nên được cấu trúc như sau:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
---

<br />
Cấu trúc của commit message chứa các thành phần sau để truyền đạt ý định đến người khác:

1. **fix:** một commit thuộc _type_ `fix` sửa một bug trong codebase của bạn (tương ứng với [`PATCH`](http://semver.org/#summary) trong Semantic Versioning).

1. **feat:** một commit thuộc _type_ `feat` giới thiệu một tính năng mới (tương ứng với [`MINOR`](http://semver.org/#summary) trong Semantic Versioning).

1. **BREAKING CHANGE:** một commit có phần footer `BREAKING CHANGE:`, hoặc thêm ký tự `!` ngay sau type/scope, nhằm giới thiệu một thay đổi lớn (tương ứng với [`MAJOR`](http://semver.org/#summary) trong Semantic Versioning). Một BREAKING CHANGE có thể là một phần của commit thuộc bất kỳ _type_nào.

1. Các _type_ khác ngoài `fix:` và `feat:` đều được cho phép, ví dụ như [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) (dựa trên [quy ước Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)) khuyến nghị sử dụng `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, và các kiểu khác.

1. _footers_ khác ngoài `BREAKING CHANGE: <description>` có thể được cung cấp và tuân theo một quy ước tương tự như [định dạng git trailer](https://git-scm.com/docs/git-interpret-trailers).

Các kiểu bổ sung khác không bắt buộc theo Conventional Commits, và không có tác động ngầm trong Semantic Versioning (trừ khi chúng chứa BREAKING CHANGE).
<br /><br />
Một scope có thể được cung cấp cùng với kiểu của commit để cung cấp thêm thông tin ngữ cảnh và được đặt trong dấu ngoặc đơn, ví dụ: `feat(parser): add ability to parse arrays`.

## Các ví dụ

### Commit message có description và footer chứa breaking change
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit message sử dụng ký tự `!` để gây chú ý đến thay đổi lớn
```
feat!: send an email to the customer when a product is shipped
```

### Commit message có scope và ký tự `!` để gây chú ý đến thay đổi lớn
```
feat(api)!: send an email to the customer when a product is shipped
```

### Commit message chứa cả ký tự `!` và footer BREAKING CHANGE
```
feat!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit message không có body
```
docs: correct spelling of CHANGELOG
```

### Commit message có scope
```
feat(lang): add Polish language
```

### Commit message có body nhiều đoạn và nhiều footer
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## Đặc tả

Các từ khóa "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED" (KHUYẾN NGHỊ), "MAY", và "OPTIONAL" trong tài liệu này được diễn giải như mô tả trong [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

1. Các commit PHẢI bắt đầu bằng một tiền tố chỉ type, bao gồm một danh từ, `feat`, `fix`, v.v., theo sau bởi scope (TÙY CHỌN), ký tự `!` (TÙY CHỌN), và dấu hai chấm kèm theo khoảng trắng (BẮT BUỘC).

1. Kiểu `feat` PHẢI được sử dụng khi commit thêm một tính năng mới.

1. Kiểu `fix` PHẢI được sử dụng khi commit đại diện cho bản sửa lỗi.

1. Một scope CÓ THỂ được cung cấp sau type. Scope PHẢI gồm một danh từ mô tả một phần của codebase và được bao quanh bởi dấu ngoặc đơn, ví dụ: `fix(parser):`

1. Description PHẢI đi liền ngay sau dấu hai chấm và khoảng trắng của tiền tố type/scope. Description là một tóm tắt ngắn gọn về các thay đổi trong codebase, ví dụ: _fix: array parsing issue when multiple spaces were contained in string_.

1. Body CÓ THỂ được cung cấp sau phần description, nhằm bổ sung thông tin ngữ cảnh liên quan đến các thay đổi. Body PHẢI bắt đầu sau phần description một dòng trống.

1. Body có định dạng tự do và CÓ THỂ bao gồm bất kỳ số lượng đoạn văn nào phân cách bởi dòng trống.

1. Một hoặc nhiều phần footer CÓ THỂ được cung cấp sau phần thân một dòng trống. Mỗi footer PHẢI bao gồm một mã định danh (word token), theo sau bởi ký tự phân tách `:<space>` hoặc `<space>#`, tiếp theo là giá trị chuỗi (Dựa vào [quy ước git trailer](https://git-scm.com/docs/git-interpret-trailers)).

1. Mã định danh của footer PHẢI sử dụng ký tự `-` thay cho khoảng trắng, ví dụ: `Acked-by` (điều này giúp phân biệt phần footer với phần thân nhiều đoạn). Một ngoại lệ dành cho `BREAKING CHANGE`, từ này cũng CÓ THỂ được sử dụng làm mã định danh.

1. Giá trị của footer CÓ THỂ chứa khoảng trắng và dòng mới, và việc phân tách PHẢI kết thúc khi phát hiện mã định danh footer/cặp phân tách hợp lệ tiếp theo.

1. Các thay đổi lớn PHẢI được biểu thị trong tiền tố type/scope của commit, hoặc dưới dạng một mục ở footer.

1. Nếu đưa vào footer, thay đổi lớn PHẢI bắt đầu bằng cụm từ viết hoa BREAKING CHANGE, theo sau bởi dấu hai chấm, khoảng trắng, và mô tả chi tiết, ví dụ:
_BREAKING CHANGE: environment variables now take precedence over config files_.

1. Nếu đưa vào tiền tố type/scope, thay đổi lớn PHẢI được biểu thị bằng ký tự `!` ngay trước dấu `:`. Nếu sử dụng `!`, phần footer CÓ THỂ bỏ qua `BREAKING CHANGE:`, và mô tả của commit SẼ được dùng để diễn tả thay đổi lớn này.

1. Các type khác ngoài `feat` và `fix` CÓ THỂ được sử dụng trong Commit message của bạn, ví dụ: _docs: update ref docs._

1. Các đơn vị thông tin cấu thành nên Conventional Commits KHÔNG ĐƯỢC phân biệt chữ hoa chữ thường bởi các công cụ phân tích, ngoại trừ `BREAKING CHANGE` bắt buộc PHẢI viết hoa.

1. `BREAKING-CHANGE` PHẢI đồng nghĩa với `BREAKING CHANGE` khi được sử dụng làm mã định danh ở footer.

## Tại sao nên sử dụng Conventional Commits

* Tự động tạo tệp nhật ký thay đổi (CHANGELOG).
* Tự động xác định phiên bản SemVer (dựa trên các kiểu commit được áp dụng).
* Giao tiếp và truyền tải bản chất của các thay đổi tới đồng nghiệp, cộng đồng và các bên liên quan khác.
* Kích hoạt các quy trình build và phát hành.
* Giúp mọi người dễ dàng đóng góp vào dự án của bạn hơn, bằng cách cho phép họ khám phá lịch sử commit có cấu trúc rõ ràng hơn.

## Câu hỏi thường gặp (FAQ)

### Tôi nên xử lý Commit message như thế nào trong giai đoạn phát triển ban đầu?

Chúng tôi khuyến nghị bạn nên thực hiện như thể sản phẩm đã được phát hành. Thông thường sẽ luôn có *ai đó* đang sử dụng phần mềm của bạn, ngay cả khi đó chỉ là những đồng nghiệp phát triển phần mềm của bạn. Họ sẽ muốn biết lỗi nào đã được sửa, thay đổi nào gây hỏng ứng dụng, v.v.

### Các kiểu trong tiêu đề commit viết hoa hay viết thường?

Bạn có thể viết hoa hoặc viết thường, nhưng tốt nhất là nên thống nhất nhất quán.

### Tôi phải làm gì nếu commit phù hợp với nhiều kiểu commit khác nhau?

Hãy quay lại và chia nhỏ thành nhiều commit bất cứ khi nào có thể. Một phần lợi ích của Conventional Commits là thúc đẩy chúng ta thực hiện các commit và PR có tổ chức hơn.

### Việc này có cản trở quá trình phát triển nhanh và lặp lại liên tục không?

Nó chỉ cản trở việc di chuyển nhanh một cách thiếu tổ chức. Nó giúp bạn có thể duy trì tốc độ phát triển nhanh về mặt dài hạn trên nhiều dự án với các cộng tác viên khác nhau.

### Liệu Conventional Commits có giới hạn các kiểu commit mà lập trình viên tạo ra vì họ bị gò bó trong các kiểu đã cung cấp không?

Conventional Commits khuyến khích chúng ta tạo nhiều commit thuộc một số kiểu nhất định như sửa lỗi (fixes). Bên cạnh đó, tính linh hoạt của Conventional Commits cho phép đội ngũ của bạn tự định nghĩa ra các kiểu của riêng mình và thay đổi chúng theo thời gian.

### Quy chuẩn này liên quan thế nào đến SemVer?

Các commit kiểu `fix` nên được chuyển đổi thành các phiên bản phát hành `PATCH`. Các commit kiểu `feat` nên được chuyển đổi thành các phiên bản phát hành `MINOR`. Các commit chứa `BREAKING CHANGE`, bất kể thuộc kiểu nào, nên được chuyển đổi thành các phiên bản phát hành `MAJOR`.

### Tôi nên định phiên bản như thế nào cho các phần mở rộng của mình đối với đặc tả Conventional Commits, ví dụ: `@jameswomack/conventional-commit-spec`?

Chúng tôi khuyến nghị sử dụng SemVer để phát hành các phần mở rộng của riêng bạn cho đặc tả này (và khuyến khích bạn thực hiện các phần mở rộng đó!)

### Tôi phải làm gì nếu vô tình sử dụng sai kiểu commit?

#### Khi sử dụng một kiểu có trong đặc tả nhưng sai ngữ cảnh, ví dụ: sử dụng `fix` thay vì `feat`

Trước khi gộp (merge) hoặc phát hành lỗi sai đó, chúng tôi khuyên bạn nên sử dụng `git rebase -i` để chỉnh sửa lịch sử commit. Sau khi phát hành, việc dọn dẹp sẽ khác nhau tùy thuộc vào các công cụ và quy trình bạn đang sử dụng.

#### Khi sử dụng một kiểu không nằm trong đặc tả, ví dụ: sử dụng `feet` thay vì `feat`

Trong trường hợp xấu nhất, đó không phải là ngày tận thế nếu một commit không đáp ứng đúng đặc tả Conventional Commits được đẩy lên. Điều đó chỉ đơn giản là commit đó sẽ bị bỏ qua bởi các công cụ tự động dựa trên đặc tả.

### Có phải tất cả người đóng góp của tôi đều cần sử dụng đặc tả Conventional Commits không?

Không! Nếu bạn sử dụng quy trình làm việc dựa trên squash (gộp nhánh) trên Git, người duy trì dự án (maintainer) có thể dọn dẹp và chuẩn hóa Commit message khi gộp nhánh — không làm tăng khối lượng công việc cho các cộng tác viên vãng lai.
Một quy trình làm việc phổ biến cho việc này là hệ thống git tự động squash các commit từ một pull request và hiển thị một biểu mẫu để maintainer nhập thông điệp git commit chuẩn xác cho lượt gộp đó.

### Conventional Commits xử lý các commit revert (hoàn tác) như thế nào?

Hoàn tác code có thể rất phức tạp: bạn đang hoàn tác nhiều commit? nếu bạn hoàn tác một tính năng, phiên bản phát hành tiếp theo có nên là patch hay không?

Conventional Commits không định nghĩa rõ ràng hành vi hoàn tác. Thay vào đó, chúng tôi để các tác giả phát triển công cụ tự quyết định logic xử lý hoàn tác bằng cách tận dụng tính linh hoạt của các _type_và _footer_.

Một khuyến nghị là sử dụng kiểu `revert` và một phần footer tham chiếu đến mã SHA của các commit bị hoàn tác:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
