---
draft: false
aliases: ["/ko/"]
---

# Conventional Commits 1.0.0

## 개요

Conventional Commits 스펙은 커밋 메시지에 곁들여진 가벼운 컨벤션으로 명확한 커밋 히스토리를 생성하기 위한 간단한 규칙을 제공합니다. 이렇게 만들어진 커밋 히스토리를 이용하여 더 쉽게 자동화된 도구를 만들 수 있습니다.
이 컨벤션은 커밋 메시지에 신규 기능 추가, 문제 수정, 커다란 변화가 있음을 기술함으로써 [유의적 버전(Sementic Versioning)](https://semver.org/lang/ko/)과 일맥상통한 면이 있습니다.

커밋 메시지는 다음과 같은 구조가 되어야 합니다:

---

```
<타입>[적용 범위(선택 사항)]: <설명>

[본문(선택 사항)]

[꼬리말(선택 사항)]
```
---

<br />

커밋에는 라이브러리를 사용하는 사람들에게 의도를 전달하기 위해 다음과 같은 구조적 요소가 포함되어 있습니다.

1. **fix:** 코드베이스에서 버그를 패치하는 `fix` _타입_ 의 커밋 (이는 유의적 버전에서의 [`PATCH`](http://semver.org/#summary)와 관련이 있습니다).
1. **feat:** 코드베이스에서 새 기능이 추가되는 `feat` _타입_ 의 커밋 (이는 유의적 버전에서의 [`MINOR`](http://semver.org/#summary)와 관련이 있습니다).
1. **BREAKING CHANGE:** `BREAKING CHANGE:`이라는 꼬리말을 가지거나 타입/스코프 뒤에 !문자열을 붙인 커밋은 단절적 API 변경(breaking API change)이 있다는 것을 의미합니다 (이는 유의적 버전에서의 [`MAJOR`](http://semver.org/#summary)와 관련이 있습니다). 어떤 커밋 타입이라도 BREAKING CHANGE는 해당 커밋의 일부가 될 수 있습니다.
1. `fix:`와 `feat:` 이외의 다른 _타입_ 도 허용됩니다. 예를 들어 [앵귤러 컨벤션](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)을 기반으로 하는 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)에서는 `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:` 등의 타입을 사용할 것을 권고하고 있습니다.
1. `BREAKING CHANGE:<description>` 이외의 _꼬리말_ 을 규정 할 수 있으며 다음과 비슷한 컨벤션을 따를 수 있습니다. [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

추가 타입들은 컨벤션 커밋 규격에 의해 의무화되지 않으며, 유의적 버전에 잠재적인 영향을 주지 않습니다(그것이 BREAKING CHANGE를 포함하지 않는 한).
<br /><br />
추가적인 문맥 정보를 제공하기 위한 목적으로 사용되는 적용 범위는 커밋의 타입에 덧붙여질 수 있는데 괄호 안에 포함됩니다, 예를 들면, `feat(parser): add ability to parse arrays`.
<br />

## 예제

### 설명과 BREAKING CHANGE 꼬리말을 가지는 커밋 메시지
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 단절적 변경(breaking change)에 주의를 주기 위해 `!`를 포함한 커밋 메시지
```
feat!: send an email to the customer when a product is shipped
```

### 단절적 변경(breaking change)에 주의를 주기 위해 적용 범위와 `!` 를 포함한 커밋 메시지
```
feat(api)!: send an email to the customer when a product is shipped
```

### BREAKING CHANGE 꼬리말과 `!`를 함께 포함한 커밋 메시지
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### 본문이 없는 커밋 메시지
```
docs: correct spelling of CHANGELOG
```

### 적용 범위를 가지는 커밋 메시지
```
feat(lang): add polish language
```

### 다중-단락 본문과 다수의 꼬리말을 가진 커밋 메시지
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## 규격

이 문서에서 언급되는 주요 단어들인 “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, 그리고 “OPTIONAL”는 [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)에 기술된 그대로 해석해야 합니다.

1. 모든 커밋은 `feat`, `fix` 같은 명사로 된 접두어를 포함해야 하고 그 뒤로 선택 사항인 적용 범위, 선택 사항인 `!`, 그리고 필수인 `:`과 공백이 있어야 합니다.
1. `feat` 타입은 커밋에 애플리케이션이나 라이브러리에 새로운 기능이 추가될 때 사용되어야 합니다.
1. `fix` 타입은 커밋에 애플리케이션의 버그 수정을 하는 내용을 포함하는 경우에 사용되어야 합니다.
1. 적용 범위는 타입 다음에 기술하는데 이는 코드베이스가 적용되는 영역을 기술하는 명사로 괄호로 감싸져야 합니다, 예를 들어, `fix(parser):`
1. 설명은 타입/적용 범위 접두어 뒤에 있는 콜론(:)과 공백 다음에 작성되어야 합니다. 설명은 코드 변경 사항에 대한 짧은 요약입니다, 예를 들어, _fix: array parsing issue when multiple spaces were contained in string._
1. 더 긴 커밋 본문은 짧은 설명 다음에 위치할 수 있으며 코드 변경 사항에 대한 추가적인 문맥적인 정보를 제공합니다. 본문은 반드시 설명 다음에 빈 행으로 시작해야 합니다.
1. 커밋 본문은 형식이 자유로우며 새 줄로 분리된 많은 수의 단락들로 구성 될 수 있습니다.
1. 하나 또는 다수의 꼬리말들은 본문 다음 빈 행 다음에 위치합니다. 각각의 꼬리말은 반드시 단어 토큰, 그 뒤에 `:<space>` 또는 `<space>#` 구분자, 그 뒤에 문자열 값으로 구성되어야 합니다(이것은 다음에 영향을 받았습니다 [git trailer convention](https://git-scm.com/docs/git-interpret-trailers)).
1. 꼬리말의 토큰은 반드시 공백 문자 대신 `-` 를 사용해야 합니다. 예를 들면 `Acked-by` (이것은 다중-단락 본문과 꼬리말 섹션을 구분하는데 도움이 됩니다). `BREAKING CHANGE`는 예외적으로 토큰으로 사용될 수 있습니다. 
1. 꼬리말의 값은 공백이나 새 줄들을 포함할 수 있으며, 구문 분석기는 다음의 유효한 꼬리말 토큰/구분자 쌍을 관찰하면 반드시 종료해야 합니다.
1. 단절적 변경은 반드시 커밋의 타입/적용범위 접두어에 표시하거나 꼬리말에 기입되어야 합니다.
1. 꼬리말로 포함된 경우 단절적 변경은 반드시 대문자 문자열 BREAKING CHANGE과 뒤따르는 콜론(:), 공백, 그리고 설명으로 구성되어야 합니다. 예를 들면 _BREAKING CHANGE: environment variables now take precedence over config files._
1. 타입/범위 접두어에 포함된 경우, 단절적 변경은 반드시 `:` 바로 앞의 `!` 를 명시해야 합니다. 만약 `!` 가 사용되면, `BREAKING CHANGE:` 는 꼬리말 섹션에서 생략할 수 있으며, 커밋 설명은 단절적 변경을 설명하기 위해 사용되어야 합니다.
1. `feat`와 `fix` 이외의 타입이 커밋 메시지에 사용될 수 있습니다. 예: _docs: updated ref docs._
1. Conventional Commit을 구성하는 정보의 단위는 반드시 대문자여야 하는 BREAKING CHANGES를 제외하고 구현자에 의해 대소문자를 구분하는 것으로 처리되어서는 안됩니다.
1. BREAKING-CHANGE는 꼬리말에서 토큰으로 사용될 때 반드시 BREAKING CHANGE와 동의어야 합니다.

## 왜 Conventional Commits를 사용할까요?

* CHANGELOG를 자동으로 생성하기 위해서
* (포함된 커밋의 타입에 기반하여) 유의적 버전을 자동으로 변경하기 위해서
* 팀 동료, 타인, 그리고 기타 이해당사자에게 변화의 본질을 전달하기 위해서
* 빌드와 배포 프로세스를 수행하기 위해서
* 더 구조화된 커밋 히스토리를 보여줘서 사람들이 프로젝트에 기여하기 더 쉽도록 하기 위해서

## FAQ

### 초기 개발 단계에서 커밋 메시지를 어떻게 다루어야 하나요?

제품을 이미 출시한 것처럼 진행하세요. 일반적으로 *누군가* 는 여러분의 소프트웨어를 사용하고 있는데 그게 동료 개발자일 수도 있고 그들은 무엇이 고쳐졌는지, 무엇이 문제인지 등을 알고 싶어 할 것입니다.

### 커밋 제목에서 타입은 대문자로 쓰나요 소문자로 쓰나요?

대소문자 구분은 없지만 일관되게 사용하는 것이 좋습니다.

### 커밋이 커밋 타입 중 하나 이상에 해당하는 경우 어떻게 해야 하나요?

가능하면 돌아가서 여러 개의 커밋으로 쪼개세요. Conventional Commits의 이점 중 하나는 우리가 보다 조직화된 커밋과 PR을 만들도록 유도하는 능력입니다.

### Conventional Commits가 빠른 개발과 빠른 반복을 방해하지 않나요?

Conventional Commits는 무질서한 방법으로 빨리 움직이는 것을 지양하고 다양한 기여자들을 가진 여러 프로젝트에서 장기적으로 빠르게 이동할 수 있도록 도와줍니다.

### Conventional Commits가 개발자들로 하여금 제공된 타입 안에서 생각하게 되기 때문에 그들이 만든 커밋의 타입을 제한하도록 유도할 수 있을까요?

Conventional Commits는 fix 같은 특정 종류의 커밋 타입을 더 많이 만들도록 장려하고 있습니다. 그 외에도, Conventional Commits의 유연성은 여러분의 팀이 그들만의 타입을 고안하고 시간이 지남에 따라 그 타입을 바꿀 수 있게 해줍니다.

### 이것이 SemVer와 어떤 관련이 있나요?

`fix` 타입의 커밋은 `PATCH` 버전으로 번역해야 합니다. `feat` 형식 커밋은 `MINOR` 버전으로 번역해야 합니다. 타입과 관계없이 `BREAKING CHANGE`를 포함한 커밋은 `MAJOR`로 번역해야 합니다.

### Conventional Commit 스펙을 개인적으로 확장한 형태의 버전을 어떻게 사용할 수 있을까요? 예를 들어, `@jameswomack/conventional-commit-spec`

SemVer를 사용해서 이 규격에 대한 사용자 자신의 확장판을 릴리즈할 것을 추천합니다. (그리고 이러한 확장판을 만드는 것을 권장합니다!)

### 실수로 잘못된 커밋 타입을 사용하면 어떻게 해야 하나요?

#### 스펙에 맞는 타입을 사용하고 있지만 올바른 타입이 아닌 경우, 예를 들어, `feat` 대신 `fix`

실수를 병합 또는 리베이스하기 전에, `git rebase -i`를 사용하여 커밋 히스토리를 편집할 것을 권장합니다. 릴리즈 후에는 사용하는 툴과 프로세스에 따라 정리하는 방법이 다를 수 있습니다.

#### 스펙에 맞지 않은 타입을 사용하는 경우, 예를 들어, `feat` 대신 `feet`

최악의 경우, Conventional Commmit 규격을 충족하지 않는 커밋이 추가되었다고 해서 그것이 세계의 종말을 의미하지 않습니다. 이는 커밋이 단순히 규격을 기반으로 하는 툴에 의해 누락된다는 것을 의미합니다.

### 모든 기여자가 Conventional Commit 규격을 사용해야 하나요?

아니요! Git을 기반으로 스쿼시를 사용하는 경우, 리드 유지관리자는 커밋된 메시지를 병합할 때 정리할 수 있으므로 일반 커밋자에 작업량이 추가되지 않습니다.
이에 대한 일반적인 작업 흐름은 Git 시스템이 자동으로 풀 요청에서 커밋되도록 하고 리드 유지관리자가 병합에 대한 적절한 Git 커밋 메시지를 입력할 수 있는 양식을 제시하도록 하는 것입니다.

### Conventional Commits은 revert commits을 어떻게 다루어야 하나요?

코드를 되돌리는 것은 복잡해질 수 있습니다: 여러 개의 커밋을 되돌리고 있는가요? 기능을 되돌리는 경우 패치가 아니라 다음 릴리즈여야 하는가요?

Conventional Commits는 되돌리기 행동을 정의하기 위해 명확한 작업을 하지 않습니다. 툴 개발자에게 되돌리기를 다루는 로직 개발에 _타입_ 과 _꼬리말_ 의 유연함을 사용하도록 맡길 것입니다. 

한 가지 권장 사항은 `revert` 타입과 되돌려지는 커밋들의 SHA들을 참조하는 꼬리말를 사용하는 것입니다:

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```
