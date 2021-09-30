(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{455:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"expressions-and-assignment-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expressions-and-assignment-statements"}},[t._v("#")]),t._v(" Expressions and Assignment Statements")]),t._v(" "),s("p",[t._v("들어가기 앞서, 명령형 언어는 assignment가 제일 중요하다. 하지만 이로인해 Side effect가 발생한다.")]),t._v(" "),s("h2",{attrs:{id:"side-effect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#side-effect"}},[t._v("#")]),t._v(" Side Effect")]),t._v(" "),s("p",[s("strong",[t._v("Side effect")]),t._v("란 함수가 자신이 선언된 범위 밖의 변수의 값을 변경시키는 것."),s("br"),t._v("\nex)")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" gCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tgCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("함수형 언어는 Side effect가 없다. 왜냐 "),s("strong",[t._v("assignment")]),t._v("가 없기 때문이다.")]),t._v(" "),s("h2",{attrs:{id:"arithmetic-expression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-expression"}},[t._v("#")]),t._v(" Arithmetic Expression")]),t._v(" "),s("p",[t._v("산술이 프로그래밍 언어 개발의 첫번째 동기라고 할 수 있다."),s("br"),t._v("\n연산자는 피연산자의 갯수로 분류할 수 있다.")]),t._v(" "),s("ol",[s("li",[t._v("Unary : -a")]),t._v(" "),s("li",[t._v("Binary : a+b")]),t._v(" "),s("li",[t._v("Ternary : a>b?a:b")])]),t._v(" "),s("p",[t._v("위치에 따라 분류할 수도 있다.")]),t._v(" "),s("ol",[s("li",[t._v("Prefix : 괄호 없이 산술이 가능하다.")]),t._v(" "),s("li",[t._v("Infix : 대부분 프로그래밍언어에서는 사람이 코딩하므로 infix을 주로 사용한다.")]),t._v(" "),s("li",[t._v("Postfix : stack이용하면 편하다.")])]),t._v(" "),s("h2",{attrs:{id:"arithmetic-operator-evalation-order"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arithmetic-operator-evalation-order"}},[t._v("#")]),t._v(" Arithmetic Operator Evalation Order")]),t._v(" "),s("ol",[s("li",[t._v("연산자 우선순위")]),t._v(" "),s("li",[t._v("associativity rule")])]),t._v(" "),s("p",[t._v("전형적인 우선순위는\n괄호 -> unary operator -> 제곱 -> *,/ -> +,-이다."),s("br"),t._v("\n보통 왼쪽에서 오른쪽으로 진행되나 제곱은 오른쪽에서 왼쪽으로 진행하면 된다."),s("br"),t._v("\n우선순위를 잘 모르겠으면 괄호로 묶으면 된다.")]),t._v(" "),s("p",[t._v("조건연산은 C나 C++의 경우에는 삼항연산을 이용한다.")]),t._v(" "),s("p",[t._v("피연산자 순서"),s("br"),t._v("\n변수나 상수는 순서가 크게 상관이 없다."),s("br"),t._v("\n괄호가 있거나 함수호출이 있는 경우에는 결과 값을 피연산자로 들어가야하기 때문에 먼저 결과 값을 얻어야한다.")]),t._v(" "),s("p",[t._v("만약에, a*b에 side effect가 존재한다면 순서가 달라진다."),s("br"),t._v("\nFunctional side effect는 함수 안에서 전역 변수나 매개변수의 값을 바꿀 때 side effect가 있다고 한다."),s("br"),t._v("\na = 10; b = a + func(a);"),s("br"),t._v("\n왼쪽을 먼저하면 변수 b에 20이 할당되지만, 오른쪽을 먼저하면 변수 b에 30이 할당된다.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("C언어의 경우에는 정의되어 있지 않다. 따라서 fun1을 먼저 하면 a = 20이 되고 왼쪽을 먼저 시작하면 8이 된다. 따라서 C언어에서 구현할 때는 피해야한다.")]),t._v(" "),s("p",[s("strong",[t._v("Referential Transparency")]),t._v("의 특징이란 Side effect가 없어야한다."),s("br"),t._v("\n예를 들어 "),s("code",[t._v("result1 = (fun(a) + b) / (fun(a) - c);")]),s("br"),t._v(" "),s("code",[t._v("temp = fun(a); result2 = (temp + b) / (temp -c);")]),s("br"),t._v("\n이때, result1과 result2가 같다면 Referential Transparency를 가지고 있다고 할 수 있다."),s("br"),t._v("\n이러한 특징을 보면 Assignment가 없는 pure functional language는 항상 Referential Transparency를 갖는다."),s("br"),t._v("\n장점 : 프로그램을 이해하기 쉬워진다.")]),t._v(" "),s("h2",{attrs:{id:"operator-overloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#operator-overloading"}},[t._v("#")]),t._v(" Operator Overloading")]),t._v(" "),s("p",[t._v("자료형 별로 연산을 다르게 정의해놓았다. 이 부분을 오버로딩했다고 할 수 있다. 프로그래머 입장에서는 익숙한 기호로 사용할 수 있다는 장점이 있다."),s("br"),t._v("\n하지만 C와 C++에서 "),s("code",[t._v("&, -, *")]),t._v("은 뜻이 애매해서 컴파일러가 오류를 검출하는데 있어서 문제가 생길 수 있다. 추가적으로 가독성에도 문제가 있을 수 있다."),s("br"),t._v("\n예를 들어서 x = &y인 경우 프로그래머의 실수로 x = x & y을 잘못 기입한 경우 오류를 탐지하지 못하는 문제가 생길 수 있다는 것이다."),s("br"),t._v("\nC++과 C#, F#에서 user-defined overloaded operator을 만들 수 있다."),s("br"),t._v("\n예를 들어 A * B + C * D(MatrixAdd(MatrixMult(A, B), MatrixMult(C, D))와 같이 배열 자료형끼리의 연산을 오버로딩하면 이러하게 편하게 코딩이 가능하며, 가독성이 증가한다."),s("br"),t._v("\n하지만 잠재적인 문제로 사용자가 센스없이 오버로딩하게 된다면 가독성도 떨어질 수 있다.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type Conversions")]),s("br"),t._v("\n만약 컴파일러가 자동으로 해준다면 "),s("code",[t._v("Coercion")]),t._v("이라고 한다.")])]),t._v(" "),s("h2",{attrs:{id:"narrowing-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#narrowing-conversion"}},[t._v("#")]),t._v(" Narrowing conversion")]),t._v(" "),s("p",[t._v("원본의 값을 변환 시 잃어버리는 값이 있으면 Narrowing conversion이라고 한다. ex) 1.2 -> 1 (float -> int)"),s("br"),t._v("\nWidening conversion"),s("br"),t._v("\n원본이 값을 변환 시 그대로 다 갖고 더 크게 변환 해주는 것이다."),s("br"),t._v("\n따라서 안정적이며, Coercion을 허용한다."),s("br"),t._v("\nex) 1 -> 1.0 (int -> float)")]),t._v(" "),s("p",[t._v("Mixed Mode operation일 경우 coercion이 묵시적으로 일어나게 된다. coercion이 일어나게 되면 컴파일러가 "),s("em",[t._v("타입 오류")]),t._v("를 탐지 못하는 경우가 있을 수 있다.")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (c를 써야하나 실수 한 경우)")]),t._v("\n")])])]),s("p",[t._v("추가적으로 C언어나 Java에서 integer보다 작은 타입의 경우에는 integer로 coercion하고 연산을 한뒤 다시 값에 coercion해준다.")]),t._v(" "),s("p",[t._v("C언어에서 프로그래머가 명시적으로 형변환하는 경우에는 변수 앞에 적어준다.")]),t._v(" "),s("p",[t._v("예외처리가 필요한 표현이 있다."),s("br"),t._v("\ndivison by zero"),s("br"),t._v("\noverflow")]),t._v(" "),s("p",[t._v("관계식"),s("br"),t._v(" "),s("code",[t._v("< > <= >= == != /= ~=")]),t._v("등 사용된다."),s("br"),t._v("\nJavascript와 PHP에서의 "),s("code",[t._v("==")]),t._v("와 "),s("code",[t._v("===")]),t._v("의 차이를 보자"),s("br"),t._v(" "),s("code",[t._v("==")]),t._v("은 coerced가 일어난 뒤 비교를 한다. 하지만 "),s("code",[t._v("===")]),t._v("은 coerced가 일어나지 않는다.")]),t._v(" "),s("p",[t._v("Boolean"),s("br"),t._v("\nC에서는 0이 거짓, 0이 아니면 참이다. 잘못된 표현중 하나는 "),s("code",[t._v("if(a<b<c)")]),t._v("이다. "),s("code",[t._v("a<b")]),t._v("을 먼저 실행한다음 1 혹은 0이랑 c를 비교한 값을 if 조건문에 넣게 된다."),s("br"),t._v("\n고치게되면 "),s("code",[t._v("if(a<b && b<c)")]),t._v("로 고쳐야한다.")]),t._v(" "),s("p",[s("strong",[t._v("Short Circuit Evaluation")]),s("br"),t._v("\n전체를 evaluation을 하지 않고도 일부분을 evaluation을 해도 값을 얻을 수 있는 경우를 Short Circuit Evaluation이라고 한다."),s("br"),t._v("\nex) (13 * a) * (b / 13 - 1)"),s("br"),t._v("\n만약 a가 0이라면 (b / 13 - 1)하면 된다."),s("br"),t._v("\n지원하지 않는 경우 일어나는 문제")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LIST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tindex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("만약 길이가 length와 같아진 경우 false가 반환되나, 뒤에도 evaluation을 해야하므로 LIST[length]가 들어가게 되어 세그먼트 폴트가 일어날 수 있다."),s("br"),t._v("\ne.g (a > b) || (b++ / 3)"),s("br"),t._v("\n여기서는 선조건인 (a>b)가 false여야 뒷조건을 실행하므로 b++가 무조건 일어나지는 않는다. 하지만 이렇게 side effect가 있도록 코딩하지 않도록 해야한다.")]),t._v(" "),s("h2",{attrs:{id:"assignment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assignment"}},[t._v("#")]),t._v(" Assignment")]),t._v(" "),s("h3",{attrs:{id:"general-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-syntax"}},[t._v("#")]),t._v(" general syntax")]),t._v(" "),s("p",[s("code",[t._v("<target_var> <assign_operator> <expression>")]),s("br"),t._v("\nassign_opeartor는 FOTRAN, BASIC, C기반 언어는 "),s("code",[t._v("=")]),t._v("을 사용한다. Ada같은 경우에는 "),s("code",[t._v(":=")]),t._v("을 사용한다.")]),t._v(" "),s("p",[t._v("compound assignment operator"),s("br"),t._v(" "),s("code",[t._v("a = a + b")]),t._v(" ==> "),s("code",[t._v("a += b")])]),t._v(" "),s("p",[t._v("Unary assignment operator"),s("br"),t._v(" "),s("code",[t._v("sum = ++count")]),t._v(" // count 연산 먼저"),s("br"),t._v(" "),s("code",[t._v("sum = count++")]),t._v(" // 할당 먼저\n"),s("code",[t._v("count++")]),s("br"),t._v(" "),s("code",[t._v("-count++")]),t._v("// count 연산 후 -붙인다.")]),t._v(" "),s("p",[t._v("Perl의 조건 할당"),s("br"),t._v(" "),s("code",[t._v("($flag ? $total : $subtotal) = 0")]),s("br"),t._v("\n이것은 밑에 코드와 같다.")]),t._v(" "),s("div",{staticClass:"language-perl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-perl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$flag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$total")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subtotal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("h3",{attrs:{id:"assignment-as-an-expreesion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assignment-as-an-expreesion"}},[t._v("#")]),t._v(" Assignment as an Expreesion")]),t._v(" "),s("p",[s("code",[t._v("whlie((ch = getchar()) != EOF)")]),t._v("\n상수랑 assignment statement와 비교하는 경우이다."),s("br"),t._v("\nside effect가 일어날 수 있다. 그로 인해 가독성이 떨어질 수 있다."),s("br"),t._v("\nE.g "),s("code",[t._v("a = b + (c = d / b) -1")]),s("br"),t._v("\n변수 c에 d/b 값을 할당 후 b + c - 1을 계산하여 변수 a에 할당한다.")]),t._v(" "),s("p",[t._v("Multiple Assignments"),s("br"),t._v("\nPerl, Ruby, Lua에서 Tuple을 사용하면 ($first, $second, $third) = (20, 30, 40);")]),t._v(" "),s("h3",{attrs:{id:"함수형-언어에서의-할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#함수형-언어에서의-할당"}},[t._v("#")]),t._v(" 함수형 언어에서의 할당")]),t._v(" "),s("p",[t._v("ML에서 "),s("code",[t._v("val fruit = apples + oranges;")]),s("br"),t._v("\n을 사용하게되면 fruit에 apples + oranges의 값이 바인딩되어 수정이 불가능하다. 따라서 변수들의 재사용이 불가능하다. 매번 변수들을 선언해서 사용해야 하므로 Cache을 사용하지 못하게된다. 따라서 속도가 느릴 수 밖에 없다.")])])}),[],!1,null,null,null);a.default=e.exports}}]);