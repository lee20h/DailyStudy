(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{457:function(t,a,n){"use strict";n.r(a);var s=n(25),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"names-bindings-and-scopes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#names-bindings-and-scopes"}},[t._v("#")]),t._v(" Names, Bindings, and Scopes")]),t._v(" "),n("p",[t._v("명령형언어는 폰노이만 아키텍쳐를 추상한다.")]),t._v(" "),n("ul",[n("li",[t._v("명령과 데이터는 메모리에 저장된다.")]),t._v(" "),n("li",[t._v("cpu에 의해서 필요한 연산이 실행된다.")])]),t._v(" "),n("p",[t._v("명령형의 언어 피연산자를 담당하는 memory cell이 variables(변수)다.")]),t._v(" "),n("h2",{attrs:{id:"변수의-여러-속성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#변수의-여러-속성"}},[t._v("#")]),t._v(" 변수의 여러 속성")]),t._v(" "),n("h3",{attrs:{id:"name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),n("p",[t._v("변수의 이름, 함수의 이름, 매개변수 이름, 구조체"),n("br"),t._v("\nIdentifier와 상호호환되게 사용")]),t._v(" "),n("ul",[n("li",[t._v("Length\n"),n("ul",[n("li",[t._v("자유도 증가")]),t._v(" "),n("li",[t._v("컴파일타임 ↓"),n("br"),t._v("\n∵ Symbol table에 넣음")]),t._v(" "),n("li",[t._v("메모리 ↑"),n("br"),t._v("\n∵ 런타임에 기록시 실행시간 ↓와 함께")])])]),t._v(" "),n("li",[t._v("Form\n"),n("ul",[n("li",[t._v("underscore ("),n("code",[t._v("_")]),t._v(")을 대체해서 Camel notation 사용"),n("br"),t._v("\nScoreValue instead of score_value")]),t._v(" "),n("li",[t._v("PHP"),n("br"),t._v(" "),n("code",[t._v("$")]),t._v(" 로 변수 선언"),n("br"),t._v("\ne.g. $scoreValue")]),t._v(" "),n("li",[t._v("Perl"),n("br"),t._v("\nScalar $"),n("br"),t._v("\nArray @"),n("br"),t._v("\nHash %"),n("br"),t._v("\n변수 선언")])])]),t._v(" "),n("li",[t._v("Case sensitivity\n"),n("ul",[n("li",[t._v("C기반 언어는 대소문자 구별한다. 이것은 가독성을 떨어트린다고 하는데 사람마다 다르다.")])])]),t._v(" "),n("li",[t._v("Special words\n"),n("ul",[n("li",[t._v("가독성을 높일 수 있지만 Reserved word(예약어)가 지정되있는 경우 피해야한다.")]),t._v(" "),n("li",[t._v("예약어가 많으면 유저가 예약어를 피해서 변수를 써야하지만 부족하다면 불편하다.")])])])]),t._v(" "),n("h3",{attrs:{id:"variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),n("p",[t._v("변수는 memory cell을 매핑한것이다."),n("br"),t._v("\n특성 : name, address, value, type, lifetime, scope")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Name"),n("br"),t._v("\n앞에서 정리한 것과 같다.")])]),t._v(" "),n("li",[n("p",[t._v("Address")]),t._v(" "),n("ul",[n("li",[t._v("C Pointer와 같이 변수와 연관된 메모리의 주소이다.")]),t._v(" "),n("li",[t._v("변수가 함수 속에서 다른 주소를 가질 수 있다. (10강에서 계속)")]),t._v(" "),n("li",[t._v("L-value(변수의 주소)와 같다.")]),t._v(" "),n("li",[t._v("Alias : 같은 주소에 다른 이름 (C 포인터 C++ 참조자) 가독성 저하")])])]),t._v(" "),n("li",[n("p",[t._v("Type")]),t._v(" "),n("ul",[n("li",[t._v("변수 값의 범위와 어떤 연산을 쓸지 결정한다.")])])]),t._v(" "),n("li",[n("p",[t._v("Value")]),t._v(" "),n("ul",[n("li",[n("em",[t._v("Abstract memory cell")]),t._v(" : 물리적 cell 이나 변수와 연관된 cell")]),t._v(" "),n("li",[t._v("l-value : address")]),t._v(" "),n("li",[t._v("r-value : value")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Binding")]),n("br"),t._v("\n권한과 속성 사이의 연관이다.")]),t._v(" "),n("ul",[n("li",[t._v("변수의 type과 value, operation과 symbol"),n("br"),t._v("\nbinding time에 따라 static과 dynamic으로 나뉘어진다."),n("br"),t._v("\nLanguage design time, implementation time, compile time은 static binding time"),n("br"),t._v("\n따라서, static binding은\n"),n("ol",[n("li",[t._v("런타임 전")]),t._v(" "),n("li",[t._v("프로그램 실행 중 바뀌지 않으면")])])])]),t._v(" "),n("p",[t._v("Load time과 Runtime, global은 dynamic binding time 은 dynamic binding time으로,")]),t._v(" "),n("ol",[n("li",[t._v("실행중에 처음 발생하거나")]),t._v(" "),n("li",[t._v("프로그램 실행 중에 바뀔 수 있으면\ndynamic binding이다.")])]),t._v(" "),n("p",[t._v("Type Binding은 변수가 프로그램에 참조되기전에 자료형이 바운딩되어야한다. 만약 static binding인 경우 explicit 혹은 implicit 선언이 있어야한다.")]),t._v(" "),n("p",[t._v("Static Type Binding")]),t._v(" "),n("ul",[n("li",[t._v("명시적 선언\n"),n("ul",[n("li",[t._v("프로그래머가 직접 명시해서 선언하는 경우")])])]),t._v(" "),n("li",[t._v("묵시적 선언\n"),n("ul",[n("li",[t._v("컴파일러가 자동으로 타입을 찾아내는 묵시적 선언")]),t._v(" "),n("li",[t._v("default convention"),n("br"),t._v("\n지정하지 않으면 자동으로 default에 들어감\n"),n("ol",[n("li",[t._v("naming convention"),n("br"),t._v("\nFotran에서 사용, 타이핑시에 잘못 치는 경우 잘못된 자료형이 바인딩되어 에러가 일어날 수 있다.")]),t._v(" "),n("li",[t._v("Using context"),n("br"),t._v("\n타입을 추론하는 방식 ex) var 타입 초기화 값을 보고 추정함 (컴파일 시간에 결정되므로 static)")])])])])])]),t._v(" "),n("p",[t._v("Dynamic Type Binding"),n("br"),t._v("\n바인딩된 자료형 외의 다른 자료형으로 바뀌는 경우 (주소와 메모리셀이 바뀔 수 있음)")]),t._v(" "),n("p",[t._v("장점 : 프로그래밍 유연성 ↑"),n("br"),t._v("\ntype명시로 인한 재사용률 ↑"),n("br"),t._v("\n단점 : 신뢰성 ↓"),n("br"),t._v("\n변수들이 런타임에 새로운 자료형을 가질 수 있어서 메모리 ↑"),n("br"),t._v("\n타입체크를 해야하므로 속도 ↓")])])]),t._v(" "),n("h3",{attrs:{id:"lifetime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lifetime"}},[t._v("#")]),t._v(" Lifetime")]),t._v(" "),n("ul",[n("li",[t._v("어떤 메모리 셀에 바운딩되냐에 따라 다르다.")]),t._v(" "),n("li",[t._v("static (data)\n"),n("ul",[n("li",[t._v("실행 전 메모리 셀에 바운딩")]),t._v(" "),n("li",[t._v("실행 이후에 값 바뀌지 않음.")]),t._v(" "),n("li",[t._v("재귀x")])])]),t._v(" "),n("li",[t._v("dynamic (heap, stack)\n"),n("ul",[n("li",[t._v("stack-dynamic (stack)\n"),n("ul",[n("li",[t._v("재귀 허용")]),t._v(" "),n("li",[t._v("할당과 해지시의 오버헤드 존재")]),t._v(" "),n("li",[t._v("Subprogram이 history senstive하지 않다.")]),t._v(" "),n("li",[t._v("비효율적인 참조(간접 주소)")])])]),t._v(" "),n("li",[t._v("explicit heap-dynamic(heap) 명시적 동적할당\n"),n("ul",[n("li",[t._v("자료형은 컴파일 시간에 바운드 되지만 메모리에 적재는 런타임에 일어난다.")]),t._v(" "),n("li",[t._v("new delete")]),t._v(" "),n("li",[t._v("동적으로 저장공간관리")]),t._v(" "),n("li",[t._v("복잡하거나 어렵다.")])])]),t._v(" "),n("li",[t._v("implicit head-dynamic(heap) 컴파일러가 할당 및 해제\n"),n("ul",[n("li",[t._v("선언된 자료형과 다른 자료형으로 할당이 가능하다.")]),t._v(" "),n("li",[t._v("높은 유연성")]),t._v(" "),n("li",[t._v("런타임 오버헤드")]),t._v(" "),n("li",[t._v("컴파일러가 오류 탐색기능 손실")])])])])])]),t._v(" "),n("h3",{attrs:{id:"scope"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" Scope")]),t._v(" "),n("p",[t._v("scope란 쓰이고 읽히는 범위"),n("br"),t._v("\n지역변수는 선언된 프로그램 유닛의 한정된다.")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("nonlocal 변수")]),t._v(" "),n("ul",[n("li",[t._v("전역변수")])])]),t._v(" "),n("li",[n("p",[t._v("Scope rules")]),t._v(" "),n("ul",[n("li",[t._v("nonlocal 변수에 대해서만 적용됨")])])]),t._v(" "),n("li",[n("p",[t._v("Static Scope"),n("br"),t._v("\n사람이나 컴파일러가 실행 전에 소스만 보고 알 수 있으면 Static한 변수")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("subprogram can be nested")]),t._v("\nsubprogram 중첩 가능\n속도 ↓")])]),t._v(" "),n("li",[n("p",[t._v("subprogram cannot be nested"),n("br"),t._v("\nsubprogram 중첩 불가능\n속도 ↑ (C기반언어)")])])])])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("func "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("big")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    func "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        var x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    func "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        var y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x nonlocal 변수 (static scope일 때는 big의 x)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    var x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("big에 의해서 sub1에 "),n("code",[t._v("x")]),t._v("가 가려진 걸 "),n("code",[t._v("hidden")]),t._v(" or "),n("code",[t._v("closer")]),t._v("변수라고 한다.")]),t._v(" "),n("h3",{attrs:{id:"block"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[t._v("#")]),t._v(" Block")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        count"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("C와 C++에서는 허용하나, JAVA와 C#은 허용하지 않는다. 속도면에서는 좋지 않다. 할당과 해지 반복을 한다.")]),t._v(" "),n("p",[t._v("함수형 언어는 "),n("code",[t._v("let")]),t._v("키워드로 블록을 구성한다."),n("br"),t._v("\nScheme")]),t._v(" "),n("div",{staticClass:"language-s extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("(LET (\n    (top (+ a b))\n    (bottom (- c d))/ top bottom)\n)\n")])])]),n("p",[t._v("ML")]),t._v(" "),n("div",{staticClass:"language-m extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let\n    val top = a + b\n    val bottom = c -d\nin\n    top / bottom\nend\n")])])]),n("p",[t._v("추가적으로 함수언어는 매번 변수를 만들어서 사용한다.")]),t._v(" "),n("p",[t._v("Blcok의 Scope는 선언부터 Block 끝까지")]),t._v(" "),n("h3",{attrs:{id:"global-scope"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#global-scope"}},[t._v("#")]),t._v(" Global Scope")]),t._v(" "),n("p",[t._v("블록 밖에서 전역변수로 정의되면 어디서든 사용할 수 있다."),n("br"),t._v("\nC언어에서는 오직 한번만 정의해야한다.\nextern으로 다른 파일에서 특정한 변수를 받아와서 사용하는 것도 전역변수로 사용할 수 있다.")]),t._v(" "),n("p",[t._v("PHP의 경우에 전역변수를 사용할 때는 global로 선언하거나 $GLOBALS로 사용해야한다.")]),t._v(" "),n("p",[t._v("Python 또한, 전역변수와 지역변수가 이름이 같은 경우에는 명시적으로 global로 선언해주어야한다.")]),t._v(" "),n("h3",{attrs:{id:"dynamic-scope"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-scope"}},[t._v("#")]),t._v(" Dynamic Scope")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("non-local 변수에 대해서는 실행시간에 콜체인을 따라가서 호출한 caller를 확인해야한다.\n")])])]),n("h2",{attrs:{id:"scope-정리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scope-정리"}},[t._v("#")]),t._v(" "),n("strong",[t._v("Scope 정리")])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("func "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("big")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfunc "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tvar x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfunc "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tvar y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tvar x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Static Scoping인 경우엔 sub2의 x를 big의 x를 참조한다."),n("br"),t._v("\nDynamic Scoping인 경우엔 sub2의 x를 sub1의 x를 참조한다.")]),t._v(" "),n("p",[t._v("Dynamic Scoping")]),t._v(" "),n("ul",[n("li",[t._v("장점 : 편리함")]),t._v(" "),n("li",[t._v("단점 : 구현 힘듬, 정적인 타입체크가 불가능, 가독성 저하")])]),t._v(" "),n("p",[t._v("Scope와 Lifetime은 관련이 있지만 다른 개념이다.")]),t._v(" "),n("p",[n("em",[t._v("referencing environment")]),t._v(" : statement에서 보이는 모든 이름의 집합체")]),t._v(" "),n("ul",[n("li",[t._v("static-scoped : 콜스택 전체")]),t._v(" "),n("li",[t._v("dynamic-scoped : 콜체인")])]),t._v(" "),n("p",[n("em",[t._v("active")]),t._v(" : subprogram이 콜 후 리턴 전")]),t._v(" "),n("ul",[n("li",[t._v("Named Constants"),n("br"),t._v("\n상수들은 처음에 한번 값을 바운딩해주고 계속 사용된다."),n("br"),t._v("\n가독성과 변경하는데 용이하다는 장점이 있다."),n("br"),t._v("\nAda, C++, JAVA는 동적으로 바운딩"),n("br"),t._v("\nC#은 readonly(동적으로 바운딩), const(컴파일 시간에 바운딩) 두개 사용\n"),n("ul",[n("li",[t._v("초기화 :"),n("br"),t._v("\nstatic : 제한O"),n("br"),t._v("\ndynamic : 제한X")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);