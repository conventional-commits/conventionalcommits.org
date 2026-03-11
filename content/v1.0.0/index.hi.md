---
draft: false
aliases: ["/hi/"]
---

# कन्वेंशनल कमिट्स 1.0.0

## Summary
## सारांश

कन्वेंशनल कमिट्स विनिर्देश कमिट संदेशों पर एक हल्का सम्मेलन है।
यह एक स्पष्ट कमिट इतिहास बनाने के लिए नियमों का एक आसान सेट प्रदान करता है;
जिससे स्वचालित उपकरण लिखना आसान हो जाता है।
यह सम्मेलन [SemVer](http://semver.org),
कमिट संदेशों में किए गए फीचर्स, फिक्सेस और ब्रेकिंग चेंजेस का वर्णन करके के साथ जुड़ता है।

कमिट संदेश को निम्नानुसार संरचित किया जाना चाहिए:

---

```
<type>[वैकल्पिक स्कोप]: <विवरण>

[वैकल्पिक बॉडी]

[वैकल्पिक फुटर(स)]
```
---

<br />
कमिट में निम्नलिखित संरचनात्मक तत्व होते हैं, आपके पुस्तकालय के उपभोक्ताओं को इरादा बताने के लिए:

1. **fix:** `fix` _टाइप_ का एक कमिट आपके कोडबेस में एक बग को पैच करता है (यह सेमैंटिक वर्जनिंग में [`PATCH`](http://semver.org/#summary) से संबंधित है)।
1. **feat:** `feat` _टाइप_ का एक कमिट कोडबेस में एक नई फीचर पेश करता है (यह सेमैंटिक वर्जनिंग में [`MINOR`](http://semver.org/#summary) से संबंधित है)।
1. **BREAKING CHANGE:** एक कमिट जिसमें `BREAKING CHANGE:` फुटर है, या टाइप/स्कोप के बाद `!` जोड़ता है, एक ब्रेकिंग API चेंज पेश करता है (सेमैंटिक वर्जनिंग में [`MAJOR`](http://semver.org/#summary) से संबंधित)।
एक BREAKING CHANGE किसी भी _टाइप_ के कमिट्स का हिस्सा हो सकता है।
1. `fix:` और `feat:` के अलावा अन्य _टाइप्स_ की अनुमति है, उदाहरण के लिए [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) ( [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) पर आधारित) `build:`, `chore:`,
  `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, और अन्य की सिफारिश करता है।
1. `BREAKING CHANGE: <विवरण>` के अलावा अन्य _फुटर_ प्रदान किए जा सकते हैं और [git trailer format](https://git-scm.com/docs/git-interpret-trailers) के समान सम्मेलन का पालन करते हैं।

अतिरिक्त टाइप्स कन्वेंशनल कमिट्स विनिर्देश द्वारा अनिवार्य नहीं हैं, और सेमैंटिक वर्जनिंग में कोई अंतर्निहित प्रभाव नहीं है (जब तक वे BREAKING CHANGE शामिल नहीं करते)।
<br /><br />
एक स्कोप कमिट के टाइप को प्रदान किया जा सकता है, अतिरिक्त संदर्भ जानकारी प्रदान करने के लिए और कोष्ठक में समाहित है, जैसे `feat(parser): arrays parse करने की क्षमता जोड़ें`।

## उदाहरण

### विवरण और ब्रेकिंग चेंज फुटर के साथ कमिट संदेश
```
feat: provided config object को अन्य configs को extend करने की अनुमति दें

BREAKING CHANGE: config file में `extends` key अब अन्य config files को extend करने के लिए इस्तेमाल किया जाता है
```

### ब्रेकिंग चेंज पर ध्यान आकर्षित करने के लिए `!` के साथ कमिट संदेश
```
feat!: जब कोई प्रोडक्ट शिप हो जाए तो कस्टमर को email भेजें
```

### स्कोप और `!` के साथ कमिट संदेश ब्रेकिंग चेंज पर ध्यान आकर्षित करने के लिए
```
feat(api)!: जब कोई प्रोडक्ट शिप हो जाए तो कस्टमर को email भेजें
```

### `!` और BREAKING CHANGE फुटर दोनों के साथ कमिट संदेश
```
chore!: Node 6 के लिए सपोर्ट छोड़ दें

BREAKING CHANGE: Node 6 में उपलब्ध नहीं होने वाले JavaScript features का इस्तेमाल करें।
```

### बॉडी के बिना कमिट संदेश
```
docs: CHANGELOG की spelling सही करें
```

### स्कोप के साथ कमिट संदेश
```
feat(lang): Polish language जोड़ें
```

### मल्टी-पैराग्राफ बॉडी और मल्टीपल फुटर के साथ कमिट संदेश
```
fix: requests के racing को रोकें

एक request id और latest request का reference पेश करें। latest request से अलावा आने वाले responses को खारिज करें।

timeouts को हटा दें जो racing issue को कम करने के लिए इस्तेमाल किए जाते थे लेकिन अब obsolete हैं।

Reviewed-by: Z
Refs: #123
```
## Specification
## पूरी विशिष्टता

इस दस्तावेज़ में “जरूरी”("MUST"), “आवश्यक नहीं”("MUST NOT"), “आवश्यक”("REQUIRED"), “साझा करें”("SHALL"), “नहीं होगा”("SHALL NOT"), “चाहिए”("SHOULD"), “नहीं होना चाहिए”("SHOULD NOT"), “अनुशंसित”("RECOMMENDED"), “मई”(MAY"), और “वैकल्पिक”("OPTIONAL") कीवर्ड को [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) में वर्णित अनुसार व्याख्या किया जाना चाहिए।

1. कमिट्स को एक टाइप से शुरू होना चाहिए, जिसमें एक noun, `feat`, `fix`, आदि शामिल है, इसके बाद OPTIONAL स्कोप, OPTIONAL `!`, और REQUIRED terminal colon और space।
2. टाइप `feat` का इस्तेमाल तब किया जाना चाहिए जब एक कमिट आपके एप्लिकेशन या लाइब्रेरी में एक नई फीचर जोड़ता है।
3. टाइप `fix` का इस्तेमाल तब किया जाना चाहिए जब एक कमिट आपके एप्लिकेशन के लिए एक बग फिक्स का प्रतिनिधित्व करता है।
4. एक स्कोप टाइप के बाद प्रदान किया जा सकता है। एक स्कोप को कोडबेस के एक सेक्शन का वर्णन करने वाले noun से मिलकर होना चाहिए, कोष्ठक में घिरा हुआ, जैसे `fix(parser):`
5. एक विवरण टाइप/स्कोप prefix के बाद colon और space के तुरंत बाद आना चाहिए।
विवरण कोड चेंजेस का एक छोटा सारांश है, जैसे _fix: array parsing issue जब string में multiple spaces थे_।
1. एक लंबा कमिट बॉडी विवरण के बाद प्रदान किया जा सकता है, कोड चेंजेस के बारे में अतिरिक्त संदर्भ जानकारी प्रदान करके। बॉडी को विवरण के बाद एक blank line से शुरू होना चाहिए।
2. एक कमिट बॉडी free-form है और किसी भी संख्या में newline separated paragraphs से मिलकर हो सकता है।
3. एक या अधिक फुटर बॉडी के बाद एक blank line के बाद प्रदान किए जा सकते हैं। प्रत्येक फुटर को एक word token से मिलकर होना चाहिए, इसके बाद या तो `:<space>` या `<space>#` separator, इसके बाद एक string value (यह [git trailer convention](https://git-scm.com/docs/git-interpret-trailers) से प्रेरित है)।
4. एक फुटर के token में whitespace characters की जगह `-` का इस्तेमाल करना चाहिए, जैसे `Acked-by` (यह फुटर सेक्शन को multi-paragraph बॉडी से अलग करने में मदद करता है)। `BREAKING CHANGE` के लिए एक अपवाद बनाया गया है, जो token के रूप में भी इस्तेमाल किया जा सकता है।
5. एक फुटर की value में spaces और newlines हो सकते हैं, और parsing तब समाप्त होना चाहिए जब अगला valid footer token/separator pair observed हो।
6. ब्रेकिंग चेंजेस को कमिट के टाइप/स्कोप prefix में या फुटर में entry के रूप में इंगित किया जाना चाहिए।
7. यदि फुटर के रूप में शामिल किया गया है, तो एक ब्रेकिंग चेंज uppercase text BREAKING CHANGE से मिलकर होना चाहिए, इसके बाद colon, space, और विवरण, जैसे _BREAKING CHANGE: environment variables अब config files पर precedence लेते हैं_।
8. यदि टाइप/स्कोप prefix में शामिल किया गया है, तो ब्रेकिंग चेंजेस को `!` से इंगित किया जाना चाहिए `:` से पहले। यदि `!` इस्तेमाल किया गया है, तो `BREAKING CHANGE:` फुटर सेक्शन से omitted किया जा सकता है, और कमिट विवरण ब्रेकिंग चेंज का वर्णन करने के लिए इस्तेमाल किया जाएगा।
9. `feat` और `fix` के अलावा अन्य टाइप्स आपके कमिट संदेशों में इस्तेमाल किए जा सकते हैं, जैसे _docs: update ref docs._।
10. कन्वेंशनल कमिट्स बनाने वाली information units को implementors द्वारा case sensitive नहीं माना जाना चाहिए, BREAKING CHANGE के अपवाद के साथ जो uppercase होना चाहिए।
11. BREAKING-CHANGE को BREAKING CHANGE के समानार्थी होना चाहिए, जब फुटर में token के रूप में इस्तेमाल किया जाए।

## कन्वेंशनल कमिट्स क्यों इस्तेमाल करें

* स्वचालित रूप से CHANGELOGs जनरेट करना।
* स्वचालित रूप से सेमैंटिक वर्जन bump निर्धारित करना (landed कमिट्स के टाइप्स पर आधारित)।
* चेंजेस की nature को teammates, the public, और अन्य stakeholders को बताना।
* बिल्ड और publish प्रोसेस ट्रिगर करना।
* लोगों को आपके प्रोजेक्ट्स में contribute करना आसान बनाना, उन्हें एक अधिक structured कमिट इतिहास explore करने की अनुमति देकर।

## FAQ
## सामान्य प्रश्न

### प्रारंभिक development phase में कमिट संदेशों से कैसे निपटें?

हम सिफारिश करते हैं कि आप ऐसा behave करें जैसे आपने पहले ही प्रोडक्ट रिलीज़ कर दिया हो। आमतौर पर *कोई*, भले ही यह आपके fellow software developers हों, आपके software का इस्तेमाल कर रहा है। वे जानना चाहेंगे कि क्या fixed है, क्या breaks है आदि।

### कमिट title में टाइप्स uppercase या lowercase हैं?

कोई भी casing इस्तेमाल की जा सकती है, लेकिन consistent रहना सबसे अच्छा है।

### क्या करें यदि कमिट एक से अधिक कमिट टाइप्स के अनुरूप है?

जब भी संभव हो, वापस जाकर multiple कमिट्स बनाएं। कन्वेंशनल कमिट्स के लाभों में से एक यह है कि यह हमें अधिक organized कमिट्स और PRs बनाने के लिए drive करता है।

### क्या यह rapid development और fast iteration को discourage नहीं करता?

यह disorganized तरीके से fast move करने को discourage करता है। यह आपको long term में multiple प्रोजेक्ट्स में fast move करने में मदद करता है varied contributors के साथ।

### क्या कन्वेंशनल कमिट्स developers को उनके द्वारा किए जाने वाले कमिट्स के टाइप को limit करने के लिए lead कर सकता है क्योंकि वे provided टाइप्स में सोच रहे होंगे?

कन्वेंशनल कमिट्स हमें fixes जैसे कुछ टाइप्स के अधिक कमिट्स बनाने के लिए encourage करता है। इसके अलावा, कन्वेंशनल कमिट्स की flexibility आपकी team को अपने own टाइप्स develop करने और समय के साथ उन टाइप्स को change करने की अनुमति देती है।

### यह SemVer से कैसे संबंधित है?

`fix` टाइप कमिट्स को `PATCH` रिलीज़ में translate किया जाना चाहिए। `feat` टाइप कमिट्स को `MINOR` रिलीज़ में translate किया जाना चाहिए। कमिट्स में `BREAKING CHANGE` के साथ, टाइप की परवाह किए बिना, को `MAJOR` रिलीज़ में translate किया जाना चाहिए।

### कन्वेंशनल कमिट्स विनिर्देश के अपने extensions को कैसे version करें, जैसे `@jameswomack/conventional-commit-spec`?

हम सिफारिश करते हैं कि इस विनिर्देश के अपने extensions को रिलीज़ करने के लिए SemVer का इस्तेमाल करें (और हम आपको ये extensions बनाने के लिए encourage करते हैं!)

### क्या करें यदि मैंने accidentally गलत कमिट टाइप इस्तेमाल किया?

#### जब आपने spec का टाइप इस्तेमाल किया लेकिन सही टाइप नहीं, जैसे `fix` instead of `feat`

मर्ज या रिलीज़ से पहले, हम `git rebase -i` का इस्तेमाल करके कमिट इतिहास edit करने की सिफारिश करते हैं। रिलीज़ के बाद, cleanup आपके द्वारा इस्तेमाल किए जाने वाले tools और processes के अनुसार अलग होगा。

#### जब आपने spec का टाइप *नहीं* इस्तेमाल किया, जैसे `feet` instead of `feat`

worst case scenario में, यह दुनिया का अंत नहीं है यदि एक कमिट land करता है जो कन्वेंशनल कमिट्स विनिर्देश को पूरा नहीं करता। इसका मतलब सिर्फ इतना है कि वह कमिट spec पर आधारित tools द्वारा missed हो जाएगा।

### क्या मेरे सभी contributors को कन्वेंशनल कमिट्स विनिर्देश इस्तेमाल करना जरूरी है?

नहीं! यदि आप Git पर squash based workflow इस्तेमाल करते हैं तो lead maintainers कमिट संदेशों को clean up कर सकते हैं जैसे वे merged होते हैं—casual committers पर कोई workload नहीं जोड़ते।
इसके लिए एक common workflow यह है कि आपका git system स्वचालित रूप से pull request से कमिट्स को squash करता है और lead maintainer को merge के लिए proper git कमिट संदेश enter करने के लिए एक form प्रस्तुत करता है।

### कन्वेंशनल कमिट्स revert कमिट्स को कैसे handle करता है?

कोड revert करना complicated हो सकता है: क्या आप multiple कमिट्स revert कर रहे हैं? यदि आप एक फीचर revert करते हैं, तो क्या अगली रिलीज़ instead एक patch होनी चाहिए?

कन्वेंशनल कमिट्स revert behavior को define करने के लिए explicit effort नहीं करता। इसके बजाय हम इसे tooling authors पर छोड़ते हैं कि वे reverts को handle करने के लिए _टाइप्स_ और _फुटर_ की flexibility का इस्तेमाल करें।

एक recommendation `revert` टाइप इस्तेमाल करना है, और एक फुटर जो revert किए जा रहे कमिट SHAs का reference देता है:

```
revert: आइए हम कभी भी noodle incident की बात न करें

Refs: 676104e, a215868
```
