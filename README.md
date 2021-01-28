# 📙 Today I Learned

## 규칙

- 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
- Github Action으로 배포
- markdown으로 작성
- 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---

# 2020년

| [5월](./month/5월) | [6월](./month/6월) | [7월](./month/7월) | [8월](./month/8월) | [9월](./month/9월) | [10월](./month/10월) | [11월](./month/11월) | [12월](./month/12월) |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | -------------------- | -------------------- | -------------------- |

---

- 1 日

# 2020년 회고

2020년에는 정말 많은 일이 있었다.

1. 자바스크립트 접함
2. 프로젝트 진행 경험 (Nodejs, 해커톤)
3. 현장실습
4. SQLD
5. 코딩테스트 경험, PS
6. 학부생 3학년 마무리

2020년에는 전염병으로 인해 언택트로 진행되는 일들이 많았고, 온라인으로도 많은 경험을 할 수 있었다. 이러한 시대에 맞춰서 도움이 되는 애플리케이션을 만드는 개발자들이 대단해보였다. 많은 것들이 제한되고 위축된 것이 많으나, 여전히 해야할 일은 많고 세상은 돌아간다.

## 자바스크립트

자바스크립트를 올해 초에 접하게 되어 Vue.js 인강을 통해서 자바스크립트를 접한 뒤 Node.js를 프로젝트를 해보면서 공부를 시작하였다. 프로젝트를 진행하면서 느낀 점은 무엇이든 **기초가 제일 중요하다**라는 생각이다. 자바스크립트에 대해 기초를 확실하게 다지지 않고 프레임워크를 통해 결과물만 얻을려고 하고 여러 포스팅을 보면서 원리를 이해하지 않은 채 굴러가기만 하면 된다는 생각이 지배적이였다. 이후 다른 간단한 애플리케이션을 만들려는 시도도 안해보고 시간이 흐른 뒤에 접한 자바스크립트는 매우 어려웠다. 그래서 올해 중순에 처음부터 자바스크립트에 대해 공부를 시작하였고 지금도 완벽하진 않지만 조금은 이해하는 수준이 된 것 같다.

## 프로젝트

프로젝트의 경우에는 Node.js로 Express 프레임워크를 사용한 MVC패턴을 적용한 대학교 중고책방 사이트와 전북 해커톤 대회에서 만든 손주 프로그램이다. 중고책방의 경우에는 Model은 MySQL + Sequeilze, View는 Vue.js로 잡고 서버단을 코딩하였다. 서버단에서 REST API의 개념을 잡고 API를 만들거나 DB 공부를 겸하면서 코딩을 하였다. 이 때의 경험이 꽤 큰 역할을 해주었다. 하지만 코로나로 인해 제대로 서비스는 해보지 못하고 마무리가 되었다.

손주 프로그램의 경우에는 전북 해커톤에서 기획자로 참여하여 만들게 되었는데, 저시력자들을 위해서 읽어주는 기기를 목표로 제작하였다. 이 때 사용한 것은 라즈베리파이와 카메라, 스크린을 단 뒤 파이썬으로 코딩하여 ORM과 TTS를 불러들여서 사용하였다. 코딩에는 큰 관여를 하지 않았지만 기획하는 입장에서 꽤 신경 쓸 것이 많고 여러가지 관점에서 봐야한다는 것을 배울 수 있었다. 우수상으로 마무리할 수 있었다.

## 현장실습

여름방학에 진행한 현장실습은 크게 변화를 준 것이 없었다. 그 당시에 기업 자체가 바빠서 크게 관심을 써주지 못해 대부분이 공부하는 식으로 흘러가게 되었다. 현재 학교에서 서비스하는 사이트에 기능을 추가하면서 공부를 할 수 있을거라 생각했으나, 전혀 다른 점에서 깨달은 것이 있다. 바로, 리팩터링의 중요성이다. 개발이 된지 꽤 시간이 흐른 서비스라 코드들이 엄청 쌓여있고 소스마다 사용하는 컨벤션이나 라이브러리가 전부 달라서 통일이 되지 않은 것을 느꼈다. 그리고 이 부분에서 인수인계가 전혀 없어서 소스와 기능을 이해할려면 직접 소스들을 만져보면서 파악해야했다. 시간이 너무 많이 걸렸고 어떤 부분은 선임 개발자도 코딩이 왜 그렇게 했는지도 모르는 부분이 있었다. 소프트웨어공학에 대해서 배우기 전이였지만 리팩터링의 중요성을 직접 몸으로 부딪혀서 알게 된 계기였다. 이후에 클린 코드 책을 접하게 되기도 하였다.

## 데이터베이스

이번에 데이터베이스를 공부를 많이 한 해이기도 하다. SQLD를 취득하고 싶어서 SQL에 대해 공부를 하여 취득하고, 다른 프로젝트들이나 강의를 통해서 NoSQL인 MongoDB를 사용하기 위해서 여러 자료를 통해서 공부도 하고 ORM인 Mongoose와 Sequelize를 사용해보기도 했다. 학교에서 진행하는 강의보다도 직접 찾아보고 사용해보고 설계 해본 것이 가장 좋은 경험이였다.

## 알고리즘

알고리즘을 열심히 한 해이기도 한데, 그 중 ACM ICPC 참여와 코딩테스트 참여한 것이 가장 기억에 남는다. ACM ICPC 교내 은상도 받고 참여한 것에 큰 의의를 두지만 대회와 코딩테스트에서 원하는 알고리즘은 다른 것을 알게 되었다. 코딩테스트는 카카오 공채와 추천팀 인턴, 우아한테크코스 등에 참여했다. 전부 합격을 받진 못했지만 참여함으로써 2021년도에 지원할 때 도움이 될 것 같다.

## 3학년 마무리

2019년보다 더 길게 느껴진 2020년이였다. 학부생 3학년으로 전공 수업도 상당히 많고, 수강신청도 전공 위주로 신청하여 전공만 계속 공부한 한 해였다. 배운 것을 모두 기억에 남기고 사용할 수 있는 지식이 되었으면 좋겠다. 여름방학 이후에 공부량이 확 늘어서 2학기 수업에 해당하는 부분을 이미 공부하여 2학기에는 수업에 크게 집중을 하지 못했다. 대부분을 공부를 하고 다시 수업으로써 접하게 되어 PS와 Node, DB 공부를 주로 하게 된거 같다.

---

- 2 日

# Express Route Params

라우팅에 있어서 새롭게 알게 된 내용이 있어서 정리하려고 한다. 그 내용은 라우팅할 때 만약 ID와 같이 변동하는 숫자가 있다면 어떻게 할까라는 내용이다.

```js
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
```

보통 이런 식으로 라우팅하게 되는데 이 때 만약 유저의 ID를 구별해야 할 경우에는 막막하다. 보통 그 숫자는 가변형이고 어떤 형태로 들어올지 모른다. 숫자일수도 있고, 일련의 알파벳과 숫자의 조합일 수도 있다.

이런 부분을 해결하기 위해서 알아야하는 것은 바로 이것이다.

```js
const USERS = "/users";
const USER_DETAIL = "/:id";
```

user를 라우터에 연결하고 `user/id`와 같은 형태를 사용할 때 `/:id`와 같이 라우팅을 하면 된다. `/:`뒤에 들어오는 값은 req.params에 들어가는 값으로 http request를 받는 메소드에서 사용할 수 있다.

예를 들어서 `/users/:id`로 연결된 라우팅을 받는 메소드가 다음과 같이 있다

```js
userRouter.get("/:id", userController);
```

userRouter가 `/user`에 연결이 되어있다면 해당 get 요청은 `/user/:id`로 연결되게 된다. 이 때 id는 어떤 값이든 올 수 있고, express에서는 `콜론(:)`뒤에 들어오는 값을 신경쓰지 않는다. 그리고 id의 경우에는 `userController`라고 명시한 컨트롤러에 해당하는 함수에서 `req.params.id`와 같은 값으로 접근이 가능하다. 따라서 url에 들어간 id를 가지고 메소드에서 처리를 할 수 있다는 것을 알 수 있다.

---

- 3 日

# ESLint

ESLint란 ECMA에서 만든 Lint로, Lint란 소스 코드를 분석하여 프로그램, 문법 에러 혹은 코딩 스타일에 대해 에러를 표시해주는 가이드라인과 같다. ESLint는 자바스크립트 문법에 대해서 에러를 표시해준다.

즉, 협업시에 Lint를 통해서 코딩 컨벤션을 정한다면 마치 한 사람이 코딩한 것과 같이 일관적이게 코딩할 수 있다.

## Prettier

코드 정리 규칙을 세부적으로 설정해놓으면, 정해놓은 규칙에 맞게 자동으로 정렬해서 가독성을 높이고 코드 스타일을 통일할 수 있는 플러그인이다.

`ESLint`가 문법 오류를 체크해서 알려주는 역할이라면, `Prettier`은 문법과는 상관 없이 단순 코딩 스타일만을 체크해, 파일을 저장할 때마다 자동으로 정리해주는 역할이다.

## 적용하기

적용은 다음의 포스팅을 참고했다.

- [ESLint, Prettier 적용하기](https://velog.io/@recordboy/ESLint-Prettier-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

```
$ npm init -y
$ npm i -D eslint
$ node_modules/.bin/eslint --init
```

eslint init 과정에서 나오는 질문은 프로젝트에서 사용할 lint를 설정하는 과정이므로 읽어보고 정하면 된다.

- `.eslintrc.js`

```js
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {},
};
```

각각의 설정 값을 알아보자.

- 환경(env): 프로젝트의 사용 환경을 설정한다.
- 확장(extends): 다른 ESLint 설정을 확장해서 사용할때 설정한다. 위 파일에서는 ESLint가 추천하는 규칙을 적용하라는 설정이며, 실제 프로젝트에서는 위에서 언급한 airbnb나 prettier 등을 확장해서 사용한다.
- 파서 옵션(parserOptions): ESLint 사용을 위해 지원하려는 Javascript 언어 옵션을 설정할 수 있다.
- 규칙(rules): 프로젝트에서 자체적으로 덮어쓰고 싶은 규칙을 정의할 때 사용한다. [규칙 문서](https://eslint.org/docs/rules/)

이후엔 prettier를 적용해보자.

```
$ npm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

- eslint-config-prettier: ESLint의 formatting 관련 설정 중 Prettier와 충돌하는 부분을 비활성화 한다.
- eslint-plugin-prettier: Prettier를 ESLint 플러그인으로 추가한다. 즉, Prettier에서 인식하는 코드상의 포맷 오류를 ESLint 오류로 출력해준다.

- `.eslintrc.json`

```json
{
  "plugins": ["prettier"],
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

위의 파일을 생성하여 내용을 추가해주면 사용할 수 있다. 이 때 VSCode를 사용한다면 확장프로그램도 같이 설치해주자.

---

- 4 日

# Webpack

## Module

- 프로그램을 구성하는 구성 요소의 일부
- 관련된 데이터와 함수들이 묶여서 모듈을 형성하고 파일 단위로 나뉘는 것이 일반적이다.
- 모듈화 프로그래밍은 기능별로 파일을 나눠가며 프로그래밍을 하는 것으로 유지보수가 쉽다는 장점이 있다.

## Bundler

- 번들러는 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답으로 전달할 수 있는 환경을 만들어주는 역할을 한다.
- 번들러를 사용하면 소스 코드를 모듈별로 작성할 수 있고 모듈간 또는 외부 라이브러리의 의존성도 쉽게 관리할 수 있다.

## Webpack

- 웹팩(Webpack)은 자바스크립트 정적 모듈 번들러(Static Module Bundler)이다
- 웹팩에서 모든 것은 모듈이다. 자바스크립트, 스타일시트, 이미지 등 모든 것을 자바스크립트 모듈로 로딩해서 사용한다.
- 웹팩의 주요 네 가지 개념으로 Entry, Output, Loader, Plugin이 있다.

1. Entry:

   - 의존성 그래프의 시작점을 웹팩에서는 엔트리(Entry)라고 한다.
   - 웹팩은 엔트리를 통해서 필요한 모듈을 로딩하고 하나의 파일로 묶는다.
   - 여러개의 엔트리가 존재할 수 있다.

2. Output:

   - 엔트리에 설정한 자바스크립트 파일을 시작으로 하나로 묶는다. 그후 번들된 결과물을 처리할 위치를 output에 기록한다.

3. Loader

   - 웹팩은 오직 JavaScript와 Json만 이해할 수 있다.
   - 로더는 다른 Type의 파일(img, font, stylesheet 등)을 웹팩이 이해하고 처리 가능한 모듈로 변환 시키는 작업을 한다.

4. Plugin

   - 로더가 파일단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.
   - 로더가 변환하는 동안 플러그인은 bundle optimization, asset management and injection of environment과 같은 일을 진행할 수 있다.

## 레퍼런스

- [Webpack 기초](https://velog.io/@hih0327/Webpack-%EA%B8%B0%EC%B4%88)
- [Webpack이란?](https://nesoy.github.io/articles/2019-02/Webpack)

---

- 5 日

# Webpack

## SCSS 예제

```js
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      browsers: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    }),
  ],
};

module.exports = config;
```

`assets/js/main.js`를 Entry로 Static 폴더에 결과물을 작성한다. 이 때 main.js는 `import "../scss/style.scss";` 한 줄을 넣고 테스트를 해본다.

entry, mode, module, output, plugin을 설정하고 webpack을 실행하면 해당 부분이 static 폴더에 생성된다. 명령어는

```json
"dev:assets": "cross-env WEBPACK_ENV=development webpack",
"build:assets": "cross-env WEBPACK_ENV=production webpack"
```

이렇게 지정하였다. WEBPACK_ENV는 `webpack.config.js`의 MODE에 넣어준 문자열이고, cross-env는 문자열을 찾기 위해 도와주기 위해 설치한 패키지이다.

module에서 rule은 밑에서부터 위로 실행이 된다. 따라서 SCSS를 sass -> postcss -> css 순서로 해석하여 output PATH에 넣어준다.

---

# PS

- 머리 톡톡

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, size = 0;
	cin >> n;
	vector<int> v(n), num, ans(n);
	for (int i=0; i<n; i++) {
		cin >> v[i];
		size = max(size, v[i]);
	}
	num.resize(size+1);
	for (int i=0; i<n; i++)
		num[v[i]]++;

	for (int i=0; i<n; i++) {
		for (int j=1; j*j<=v[i]; j++) {
			if(v[i] % j == 0) {
				if(v[i] / j != j)
					ans[i] += num[v[i]/j];
				ans[i] += num[j];
			}
		}
	}
	for (int i=0; i<n; i++)
		cout << ans[i]-1 << '\n';
}
```

1번부터 N번 학생까지 한 명씩 차례대로 일어나 원을 돌면서 자신이 쓴 숫자가 다른 사람이 쓴 숫자의 배수이면 그 학생의 머리를 "톡톡" 친다. 자기가 총 몇 명의 학생의 머리를 치는지 구하는 문제이다.

배수를 구하기보다는 약수를 구해서 해결하는 방식을 택했다. 또한, 완전탐색의 경우 적어도 1,000,000 \* 500,000으로 제한시간인 2초를 넘을 것이므로, 약수를 구하는 알고리즘을 통해 약수 A, B의 곱은 v[i]를 만들 수 있으나 제곱수의 경우에는 그의 짝이 없으므로 해당 값만 더해준다. 따라서 다른 값들은 그의 짝도 더해준다.

이후 출력에는 자기 자신도 포함이 되므로 1을 제하여 출력해준다.

---

- 7 日

# Nodejs & MongoDB 로그인 구현

Nodejs로 구현된 애플리케이션에서 MongoDB를 사용한 유저 로그인 구현으로, Mongoose ODM과 Passport, connect-mongo, express-session과 같은 서드파티를 사용하여 구현하였다.

## 설정

### DB 설정 파일

```js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
```

### app 설정

```js
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
```

express-session을 이용하여 session을 정의하고 store 옵션의 경우에는 connect-mongo를 이용하여 서버가 재시작되더라도 쿠키 값을 저장할 수 있는 저장소로 마련했다. passport를 초기화하고 세션을 설정하여 로그인이 되면 쿠키 값을 브라우저에 저장할 수 있게 하였다.

### Model 구현

- User Model 구현

```js
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
```

mongoose를 이용하여 MongoDB 유저 스키마를 정의한 후 사용하게 되는데 이 때 플러그인으로 passport-local-mongoose를 사용하여 passport 서드파티 중 local 전략을 mongoose와 함께 사용하기 용이하게 하고, 유저를 구분하는 필드를 email로 지정해준다.

### Passport 설정

```js
import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

passport를 간단하게 사용하기 위해서 스키마의 전략을 자동으로 생성하게 한 후 serializeUser와 deserializeUser는 이미 정의된 스키마의 함수를 이용하여 간단하게 정의했다. 정의는 간단하지만 해당 부분을 설정함으로써 매우 편하게 유저 인증 과정을 진행할 수 있다.

## 회원가입

- 회원가입: post로 회원가입 요청이 온 경우 처리 하는 컨트롤러

```js
export const join = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};
```

user 객체를 만든 뒤 User 스키마에 `register()`를 이용하여 한번에 유저를 생성할 수 있다.

## 로그인

- 로그인: 회원가입 후 post로 로그인 요청시 처리하는 컨트롤러

```js
export const login = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});
```

passport 중 local 전략으로 인증을 하는 부분으로 성공시에는 홈, 실패시에는 로그인 화면으로 리다이렉트 하도록 컨트롤러를 짰다.

## 결과

서드파티들을 이용하여 이미 정의된 함수로 설정을 하게 되면, 훨씬 편하게 MongoDB를 이용하여 유저 로그인과 회원가입을 구현할 수 있다. 서드파티의 갯수가 많지만 여러 가지 기능을 기억하면 도움이 된다.

그 중 가장 도움이 된 것은 역시 passport와 express-session일 것 같다. session을 설정하려면 필요한 express-session과 인증 과정을 편하게 해주는 passport는 다른 DBMS를 사용하더라도 필요할 것 같다.

---

- 8 日

# PS

- `1038. 감소하는 수`

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	vector<long long> v;
	int n;
	cin >> n;

	for (int i=1; i<=1023; i++) {
		long long num = 0;
		int temp = i;
		for (int idx=9; idx>=0; idx--) {
			if(temp&1)
				num = 10*num + idx;
			temp /= 2;
		}
		v.push_back(num);
	}
	sort(v.begin(), v.end());

	if(n > 1022)
		cout << "-1";
	else
		cout << v[n];
}
```

0부터 백만까지의 자연수 중 자릿수가 거듭될 수록 작아지는 수를 감소하는 수라고 칭하고 주어진 값만큼의 순서의 감소하는 수를 구하는 문제이다. 이 문제에서는 백만까지라 했으나, 정확히는 2^10-1개인 1023개의 감소하는 수가 존재한다. 9876543210이 최댓값이므로 그렇다고 볼 수 있다. 따라서 해당하는 값을 모두 벡터에 집어 넣고 정렬한 뒤 원하는 순서의 숫자를 꺼내면 된다.

- `1747. 소수&팰린드롬`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6*2;

bool isPrime[MAX];

bool is_palindrome(string a, string b) {
	return a == b;
}

void primeInit() {
	for (int i=2; i*i<=MAX; i++) {
		if(!isPrime[i])
			for(int j=i*i; j<=MAX; j+=i)
				isPrime[j] = true;
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n;
	cin >> n;
	isPrime[1] = true;
	primeInit();

	while(1) {
		string s, r;

		s = to_string(n);
		r = to_string(n);
		reverse(r.begin(), r.end());
		if(is_palindrome(s, r)) {
			if(!isPrime[n])
				break;
		}
		n++;
	}
	cout << n;
}
```

이 문제는 팰린드롬이면서 소수인 수를 찾는 문제로, 주어진 수보다 크거나 같은 소수이면서 팰린드롬인 숫자를 찾으면 된다. 따라서 주어진 숫자부터 팰린드롬을 체크한 뒤 소수를 체크해서 조건에 부합하는 숫자를 출력하면 된다. 이 때 팰린드롬은 reverse 함수를 이용해서 뒤집은 값이 같은 숫자를 찾았고, 소수는 에라토스테네스의 체를 이용해서 찾았다.

---

# passport-Github

흔히들 사용하는 서비스 중에서 Github 아이디를 통해서 가입하거나 로그인하여 해당 서비스를 진행하는 것을 보았을 것이다. 그 부분을 도와주는 서드파티로, Passport 전략 중 Gtihub을 선택해서 사용할 때 매우 편한 기능을 가진 서드파티이다.

- [가이드라인](http://www.passportjs.org/packages/passport-github/)

## 설치

```
$ npm install passport-github
```

## 사용

먼저 Github에서 [Github Developer Applications 등록](https://github.com/settings/applications/new)하고 진행해야 한다.

```js
var GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
```

가이드라인에서는 위와 같이 안내하고 있는데 JS 버전에 맞춰서 변화를 줄 수 있다. clientID와 Secret의 경우에는 Github Oauth application setting에서 값을 확인할 수 있다. 이후에는 .env 파일을 통해서 접근하게 되면 보안에 용이하다. CallbackURL도 애플리케이션 등록할 때 정한 CallbackURL을 적으면 된다.

그 뒤 함수를 통해서 유저를 찾거나 생성할 수 있는데, 이 함수는 바꿔서 사용해도 좋다. 먼저 유저를 찾은 뒤 이메일 등을 비교하여 같다면, Github ID를 추가하는 식으로 진행하고 없다면 새로운 유저를 생성하는 식으로 진행해도 좋다. 또한 profile에는 id, email, name, avatar_URL 등 여러 가지 사용자 정보를 제공하므로, 자신의 데이터베이스 모델에 맞는 정보를 사용하면 된다.

cb의 경우에는 에러와 찾은 유저 혹은 생성한 유저를 파라미터로 넘기면 된다. 에러를 캐치하는 경우에는 `cb(error)` 등 에러만 넘기면 되며, 성공적으로 이뤄졌다면 찾은 유저 혹은 생성한 유저의 객체를 넣어주면 된다.

이 부분을 Express의 Route를 적용하여 Callback과 passport-github을 분리하고 사용하는 콜백함수도 분리하여서 모듈로 가져다가 사용할 수 있다. 추가적으로 로그아웃은 `req.logout()`함수를 사용하면 passport에서 알아서 쿠키와 로그인 정보를 없애고 로그아웃을 가능하게 한다.

---

- 9 日

# passport-facebook

passport로 facebook 아이디를 이용해서 인증을 할 수 있게 해주는 서드파티이다. 다른 서비스에 비해서 페이스북은 상당히 깐깐하다. 따라서 진행하면서 생긴 시행착오에 대해서 메모하려한다.

- [가이드라인](http://www.passportjs.org/packages/passport-facebook/)

## 설치

```
$ npm install passport-facebook
```

## 사용

먼저 [페이스북 개발자](https://developers.facebook.com/)에 등록한 뒤 애플리케이션을 생성해야한다. 그 이후에 다른 passport 서드파티와 마찬가지로 클라이언트 ID와 Secret을 받아서 애플리케이션에 기입해준다. 이후에 콜백함수까지 passport의 템플릿에 맞춰서 작성하는 것까지 동일하다.

```js
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
```

따라서 여기까진 이전에 github에서 작성한 내용을 참고하여 사용하면 된다. 페이스북이 다른 서비스와 다른 점은 바로 https 보안 연결만 받아준다는 것이다. 따라서 콜백함수에서 리다이렉트되는 URL이 https여야한다는 것이다. 이말은 즉, 개발한 앱 자체가 보안 연결로 이뤄져야 한다는 말이다.

테스트를 위해서 `localtunnel` 서드파티를 받아서 임시로 보안 연결 URL을 생성하여 페이스북 개발 앱 설정에 등록하였으나, 임시로 생성한 URL이라 그런건지 아니면 다른 이유인지는 확실치 않으나 악의가 있는 URL이라고 거절 당했다. 이외에도 애플리케이션을 라이브 모드로 바꿀려면 여러 URL을 기입해야하는데, 전부 https를 지원해야한다. 테스트를 위한 앱 외에 정식으로 출시한 후 보안 연결을 취득한 뒤 사용해야할 것 같다.

다른 서드파티와 마찬가지로 passport가 원하는 설정 값을 다 기입했으나, 이러한 문제로 성공적으로 완료하지 못했다. 허나, 다른 카카오나 네이버, 구글과 같은 서비스와의 연결은 깃허브를 사용한 연결과 매우 흡사하므로 가이드라인을 참고하여서 진행하면 된다.

- [passport-kakao](http://www.passportjs.org/packages/passport-kakao/)
- [passport-naver](http://www.passportjs.org/packages/passport-naver/)
- [passport-google](http://www.passportjs.org/packages/passport-google/)

추가적으로 passport에서 다른 서비스와 연결하여 인증하는 부분은 OAuth 2.0을 모두 이용하는 것 같다.

---

- 10 日

# Passport-local-mongoose를 이용한 ChangePassword

- [Passport-local-mongoose 레포지토리](https://github.com/saintedlama/passport-local-mongoose)

Passport-local-mongoose 서드파티를 이용하여 MongoDB에 등록된 사용자의 패스워드를 변경할 때 사용하는 함수에 대해 알아보자. 이미 서드파티에서 개발자가 편리하게 이용하게 함수로 구현되어 제공된다. 다음과 같은 설명을 통해 함수를 이해할 수 있다.

> changePassword(oldPassword, newPassword, [cb])
>
> > Changes a user's password hash and salt, resets the user's number of failed password attempts and saves the user object (everything only if oldPassword is correct). If no callback cb is provided a Promise is returned. If oldPassword does not match the user's old password, an IncorrectPasswordError is passed to cb or the Promise is rejected.

## 비밀번호 변경

사용자의 비밀번호를 변경하기 위해서는 먼저 현재 비밀번호와 새 비밀번호, 새 비밀번호 확인까지 3개의 필드에 값이 적힌다. 비밀번호는 저장될 때 Plain Text가 적히는게 아니라 Salt와 Hash에 의해 암호화된 텍스트로 변환된 값이 저장이 된다. 따라서 먼저, 현재 비밀번호를 받아 같은 Salt와 Hash에 의해서 암호화 시킨 뒤 비교를 하고 맞다면 변경을 하는 식으로 구현되어 있다. 만약 틀린다면 콜백함수에 의해서 처리되거나 콜백함수를 명시하지 않더라도 에러로 중단된다.

따라서 개발자가 해결해야 하는 부분은 3가지 필드에서 넘어온 값 중 새 비밀번호와 새 비밀번호 확인 필드의 값들을 먼저 같은지 체크하고 그 값을 `changePassword(oldPassword, newPassword, [cb])`에 넣어줘야 한다. 현재 비밀번호 필드의 값과 MongoDB의 저장된 값을 비교하는 것은 함수에서 구현되어 있으므로 훨씬 편하게 비밀번호 변경을 구현할 수 있다.

이 부분은 Passport 전략 중 local을 선택하여 MongoDB ODM 중 Mongoose를 사용할 때 편의를 주는 passport-local-mongoose 서드파티를 이용할 때로, passport의 다른 전략을 사용한다면 맞는 서드파티를 찾아서 API를 적용해야 한다.

---

- 11 日

# MongoDB ObjectId

NoSQL 데이터베이스인 MongoDB를 사용하다보면 관계형 데이터베이스의 Join 연산과 같이 다른 컬렉션의 특정 데이터를 참조할 필요가 생긴다. 이렇게 참조할 수 있는 자료형이 바로 ObjectId이며, Join과 같은 연산 기능을 가진 것이 populate라고 한다.

## ObjectId

ObjectId는 하나의 document 내에서 유일함이 보장되는 12 byte binary data로, MongoDB 자체에서 자동으로 기입되는 고유 값으로 다른 컬렉션에 있는 데이터를 참조할 수 있다.

MongoDB ODM인 Mongoose를 사용하여 스키마 중 ObjectId를 정의하는 코드를 예시로 보자

### 예시

비디오와 유저, 코멘트를 컬렉션을 가지고 스키마를 각각 정의할 때 유저는 비디오와 코멘트를 배열로 참조하여 가져야한다. 비디오는 코멘트를 배열로 갖고, 게시자로 유저 하나만 가질 수 있다. 코멘트는 게시자로 유저 하나만 가질 수 있다.

따라서 다음과 같이 스키마를 정의할 수 있다.

- Comment

```js
const CommentSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
```

- Video

```js
const VideoSchema = new mongoose.Schema({
  fileUrl: String,
  title: String,
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
```

- User

```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});
```

## Populate

- [Mongoose Populate DOCS](https://mongoosejs.com/docs/populate.html)

위에서 MongoDB에서 ObejctId에 경우에는 고유의 값을 적는다고 하였다. 이 고유의 값을 통해서 참조를 하게 된다. 참조 값 또한 고유의 값 ID가 그대로 적혀있으며 구체적인 스키마를 알 수가 없다. 이 부분을 해결해주는 것이 populate이다.

특징이라고 하면 populate의 경우에는 스키마로 이루어진 모델의 메소드이므로 인스턴스를 가지고 사용할 수는 없다. 바로 예시를 봐보자.

### 예시

```js
const {
    user: { id },
  } = req;
  try {
    const userVideo = await User.findById(id).populate("videos");
  } catch(error)
  ...
```

위에서 본 컬렉션들의 스키마를 그대로 가져와서 보면 유저는 자신이 올린 일련의 비디오들을 가지고 있다. 하지만 이 비디오들은 Video 컬렉션에서 참조한 ID만 저장되어서 보여준다.

여기서 `populate("videos")`를 함으로써 User 모델 중 id에 맞는 데이터를 찾은 뒤 그 중 videos 속성의 내용을 실제 객체로 치환해준다. 이후에 userVideo를 호출하면 가지고 있는 videos 속성의 내용을 실제로 확인할 수 있다.

### 성능 문제

populate는 $oid로 모두 조회를 해서 자바스크립트 단에서 합쳐주는 것이지 Join처럼 데이터베이스 자체에서 합쳐주는 것이 아니다. 따라서 성능이 그렇게 좋지 않다. 특히 populate가 중첩되면 성능 문제가 생길 확률이 커지므로 적재적소에 쓰여야한다.

---

# Chrome CSP

자바스크립트를 사용하여 간단한 프로젝트를 진행하다가 웹팩을 사용하면서 자바스크립트를 script로 불러들일 때 생긴 에러를 해결하기 위해서 찾은 포스팅과 함께 정리하려고 한다.

- [크롬 익스텐션의 컨텐트 보안 정책 (CSP)](https://ohgyun.com/542)

크롬에서 XXS 공격을 막기 위해서 Content Security Policy라는 보안정책을 가지고 있다. 이러한 정책은 manifest.json 파일에 정의될 수 있는데, 정의가 안되어있다면 기본값으로 다음을 갖는다.

> script-src 'self'; object-src 'self'

인라인 스크립트는 절대 허용하지 않으며, 외부의 스크립트의 경우에는 화이트 리스트 방식으로 소스의 오리진을 추가하여 처리할 수 있다. 하지만 여기서도 SSL이 적용되지 않은 HTTP 리소스는 허용되지 않는다.

나는 프로젝트 진행 중에 이 부분에 막혀서 진행이 되지 않았다. 웹팩으로 다른 디렉토리에 정의한 js파일을 script로 불러옴으로써 `eval()` 함수가 실행이 되야하는데 크롬에서는 CSP 정책에 의해 막혔었다.

> `eval()`이나 `setTimeout(String)`, `new Function(String)`과 같은 자바스크립트를 실행하도록 한다면,
> `unsafe-eval`을 추가하는 방법으로 허용할 수 있다.

따라서 다음과 같은 정책을 적어 실행이 가능하도록 하였다.

`"content_security_policy": "script-src 'self’ ‘unsafe-eval'; object-src 'self'"`

하지만 이러한 방법은 XSS 공격에 취약하므로 설정 시에는 취약한 곳이 없는지 잘 찾아봐야한다. manifest.json 파일을 이용하지 않고 node.js 프로젝트로, express 프레임워크를 사용했기 때문에 다음과 같이 미들웨어로 헤더를 설정하여 개발을 계속 이어나갔다.

```js
export const SetCSP = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval'; object-src 'self'"
  );
  return next();
};
```

---

- 12 日

# PS

- `1477. 휴게소 세우기`

```cpp
#include <bits/stdc++.h>
using namespace std;

int getMinDistance(vector<int> &v, int dist) {
	int cnt = 0;
	for (int i=1; i<v.size(); i++) {
		cnt += (v[i] - v[i-1] - 1) / dist;
	}
	return cnt;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, m, l;
	cin >> n >> m >> l;
	vector<int> v = {0, l};

	for (int i=0; i<n; i++) {
		int temp;
		cin >> temp;
		v.push_back(temp);
	}
	sort(v.begin(), v.end());

	int right = l;
	int left = 0;
	int mid;
	while(left <= right) {
		mid = (left + right) / 2;
		if(getMinDistance(v, mid) > m)
			left = mid + 1;
		else
			right = mid - 1;
	}
	cout << left;
}
```

n개의 휴게소가 주어지고 m개의 휴게소가 더 건설되어야 할 때 휴게소 사이의 거리의 최댓값을 최소로 하는 거리를 구해야 한다. 그래서 거리를 이분탐색으로 구할 변수로 두고 적합한 값을 찾았다. 이 때 휴게소의 갯수가 m개와 같아야 하므로 만약 많으면 거리를 늘리고 적으면 거리를 줄이는 식으로 하였다. 한 휴게소와 한 휴게소의 거리에 예측하는 거리를 나누게 되면 휴게소들 사이의 휴게소의 갯수를 알 수 있다. 이 부분을 사용하여 휴게소 사이의 거리를 일정하게 하였을 때 얻을 수 있는 휴게소의 갯수를 가지고 이분탐색의 조건으로 사용했다.

- `3020. 개똥벌레`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e9;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n, h, ans = MAX, cnt;
	cin >> n >> h;
	vector<int> top(n/2), bot(n/2);
	for (int i=0; i<n/2; i++) {
		cin >> bot[i] >> top[i];
	}
	sort(top.begin(), top.end());
	sort(bot.begin(), bot.end());

	for (int i=1; i<=h; i++) {
		int obstacle = bot.size() - (lower_bound(bot.begin(), bot.end(), i) - bot.begin());
		obstacle += top.size() - (upper_bound(top.begin(), top.end(), h - i) - top.begin());
		if(ans > obstacle) {
			ans = obstacle;
			cnt = 1;
		}
		else if (ans == obstacle)
			cnt++;
	}

	cout << ans << ' ' << cnt;
}
```

개똥벌레가 석주와 석순을 피해서 최소의 갯수를 깨고 도착하는 장애물 갯수와 루트가 몇 가지가 있는 지 찾는 문제이다. 이 문제도 이분탐색으로 해결할 수 있다. 조금 더 빠른 풀이를 위해서 이분탐색으로 만들어진 함수인 lower_bound와 upper_bound를 이용하여 해결하였다.

lower_bound 함수는 범위와 정수를 기입해야한다. 범위는 함수가 적용되는 벡터 컨테이너의 인덱스 범위이고 정수는 해당 범위에서 정수에 해당하는 값을 찾는 것이다. 이 때 해당하는 값이 만약 없다면 정수보다 큰 수 중 가장 작은 값의 iterator를 리턴해준다. 따라서 begin()과 같은 iterator와 뺄셈 연산을 하여 해당 값보다 작은 장애물들을 모두 구한 뒤 전체 장애물 갯수에서 제하여 준다. 즉, 개똥벌레가 지나가면서 부딪히는 석주들을 구한 것이다.

종유석 또한 마찬가지로 진행되지만 종유석은 위에서 자라나기 때문에 높이에서 현재 높이를 빼서 upper_bound로 같은 연산을 적용해주었다.

---

- 13 日

# Ajax

최초 웹의 목적은 정적 문서를 띄우는 것이었다. 따라서 내용이 변경된다면 새로고침을 통해서 정보를 받아야지 화면에 표시할 수 있었다. 이러한 내용은 당연했지만 Ajax의 개념이 도입되고 나서 모든 것이 바뀌었다.

Ajax는 **Asynchronous JavaScript and XML**의 약자다. 한국어로는 비동기적 자바스크립트와 XML 정도로 직역할 수 있는데 자바스크립트를 이용해서 비동기적으로 서버와 브라우저가 데이터를 주고 받는 방식을 의미한다. 이 때 사용하는 API가 XMLHttpRequest이며, JSON과 XML을 사용하여 통신한다.

또한 비동기적으로 서버와 브라우저가 데이터를 주고 받은 뒤 변경된 결과를 웹페이지에 프로그래밍적으로 반영하게 되어 웹페이지의 로딩 없이 변경된 내용을 받을 수 있다.

예를 들어 포털 서비스에서 제공하는 이메일 시스템을 보면 이메일이 오게 되면 새로고침이 필요 없이 바로 받은 메일함에 **1** 표시가 뜨고, 만약 메일함을 켜놨다면 방금 온 메일이 리스트 중 맨 위에 뜨는 것을 볼 수 있다. 다른 예시로는 유튜브에서 동영상을 시청하던 와중 동영상에 코멘트를 달아도 동영상이 끊기지 않고 댓글이 달리는 모습을 볼 수 있다. 이러한 서비스들에서 사용하는 기술이라고 할 수 있다.

## 장단점

- 장점

  - 페이지 이동없이 고속으로 화면을 전환할 수 있다.
  - 서버 처리를 기다리지 않고, 비동기 요청이 가능하다.
  - 수신하는 데이터 양을 줄일 수 있고, 클라이언트에게 처리를 위임할 수도 있다.
  - 플러그인 없이도 인터렉티브한 웹페이지 구현할 수 있다.

- 단점

  - Ajax를 쓸 수 없는 브라우저에 대한 문제가 있다.
  - HTTP 클라이언트의 기능이 한정되어 있다.
  - 페이지 이동없는 통신으로 인한 보안상의 문제
  - 지원하는 Charset이 한정되어 있다.
  - 스크립트로 작성되므로 디버깅이 용이하지 않다.
  - 요청을 남발하면 역으로 서버 부하가 늘 수 있음.
  - 동일-출처 정책으로 인해 다른 도메인과는 통신이 불가능하다.

(출처: 위키백과)

## Node js 예시

- script js파일

```js
$(document).ready(function(){

  $('#getMethod').click(function() {

      var get = 'GET METHOD CALL';

      //Ajax GET Method TEST
      $.ajax({
            url: '/api/get',
            dataType: 'json',
            type: 'GET',
            data: {data:get},
            success: function(result) {
                if (result) {
                  $('#get_output').html(result.result);
                }
            }
        });
  })
};
```

- node js

```js
app.get("/api/get", (req, res) => {
  var data = req.query.data;
  console.log("GET Parameter = " + data);

  var result = data + " Succese";
  console.log(result);
  res.send({ result: result });
});
```

---

- 14 日

# Javascript Iterator

ES6이 도입되면서 많은 개념들이 추가가 되었다. 그 중 다른 언어에서도 많이 사용되는 Iterator(반복자)에 대해 알아보자.

- 레퍼런스
  - [Javascript Iterator](https://medium.com/@la.place/javascript-iterator-b16ca3c51af2)
  - [Javascript와 Iterator](https://pks2974.medium.com/javascript%EC%99%80-iterator-cdee90b11c0f)

## for-of

자바스크립트는 원래 for-in을 통해 object를 순회하였다. 하지만 배열을 순회할 때는 불편한 점이 있고 forEach의 경우에도 프로그래머가 의도한 바로 사용하기 어렵다. 이러한 문제를 보완하기 위해서 ES6에서는 for-of를 도입했다.

for-of의 장점은 밑에서 이야기할 Iterable한 객체. 즉, 열거가능한 객체라면 모두 사용할 수 있다.

## Iterable

Iterable은 객체의 멤버를 반복할 수 있는 객체로, 반복할 object에 [@@iterator] 메소드가 있다면 사용할 수 있다.

다음과 같은 프로퍼티를 사용하면 된다.

`object[Symbol.iterator]`

위에서 이야기한 for-of가 바로 이 프로퍼티를 이용하여 순회하는 것이다.

### Iterable 가진 객체

- Array
- TypedArray
- String
- Map
- Set

### Spread 문법

Spread를 이용하면 iterable 객체를 쉽게 해체할 수 있다.

```js
let txt = "wow";
console.log([...txt]); // ['w', 'o', 'w']
```

## Iterator

Iterator는 객체를 `next()` 메소드로 순환 할 수 있다. 이 메소드의 반환자는 **{done: boolean, value: any}**를 포함해야 한다. 마지막 순서에서는 done을 true로 반환하게 된다.

### 응용

크기가 100이고 값이 모두 0인 초기화된 배열이 필요하다고 할 때, Iterator와 Spread를 이용해보자.

```js
const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(0);
}
console.log(arr);
```

```js
const arr = [...Array(100).keys()].map((i) => 0);
console.log(arr);
```

---

- 15 日

## JavaScript Generator

제너레이터는 코루틴(Co-Routine)과 유사하다. 코루틴은 다른 언어에서 접할 수 있는데, A와 B의 코루틴이 존재한다면 서로는 서로의 서브루틴이며, 발동될 때마다 이전에 자신의 마지막 실행지점에서 이어서 실행할 수 있다.

제너레이터도 마찬가지로, 함수 실행 중 멈췄다가 멈춘 위치에서 다시 시작할 수 있다. 또한 위에서 이야기한 Iterator를 가장 쉽게 구현할 수 있는 방법이 바로 제너레이터 객체를 이용하는 것이다.

### 사용

제너레이터는 `function*()` 키워드를 가지고 생성할 수 있으며, 호출시에는 함수가 실행된 뒤 반환값이 반환되는 것이 아니라, Iterator 객체가 반환이 된다. 따라서 `next()`메소드를 가지고 호출하게 되면 제너레이터가 실행이 되고, `yield`를 만나게 되면 해당 값을 `{value, done}` 중 value 프로퍼티에 저장을 하게 된다. 이후엔 제너레이터가 멈추고 현재까지의 컨텍스트는 저장되게 된다.

```js
function* increseNumber() {
  let number = 1;
  while (number <= 100) {
    yield number++;
  }
}

const generator = increseNumber();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4
console.log(generator.next().value); // 5
// ...
console.log(generator.next().value); // 99
console.log(generator.next().value); // 100
console.log(generator.next().value); // undefined
```

조금 더 응용하자면 컨텍스트를 저장하는 것을 이용하여 다이나믹 프로그래밍을 쉽게 할 수 있다. 다음은 피보나치 수열을 제너레이터를 가지고 만든 예제이다.

```js
function* fibonacci() {
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);

  if (n >= 1000) {
    break;
  }
}
```

다들 제너레이터를 사용하는 진면목은 비동기에서의 사용이라고 한다. 자바스크립트를 이용하여 코딩을 진행하다가 겪을 수 있는 콜백지옥을 프로미스와 제너레이터를 이용하면 수월하게 해결할 수 있다고 한다. 그러한 개념을 접목시킨 것이 바로 `async-await`이다. 자주 사용하게 되는 `async-await`은 별 다른 내용없이 명시만 한다면 비동기 프로그래밍을 매우 쉽게 만들어준다. 하지만 개념을 알 필요가 있다고 생각되기 때문에 밑의 링크를 참고하여 숙지하는 것이 좋아보인다.

- [ES6의 제너레이터를 사용한 비동기 프로그래밍](https://meetup.toast.com/posts/73)

---

- 16 日

# 2019 카카오 블라인드 공채 2차 오프라인 코딩 테스트

- [문제 및 서버 레포지토리](https://github.com/kakao-recruit/2019-blind-2nd-elevator)

엘리베이터 문제로, 빌딩마다 다른 승객 트래픽 모델링을 짠 뒤 승객을 전부 원하는 곳으로 보낼 때까지의 Timestamp를 측정하는 문제이다.

REST API로 엘리베이터의 정보와 승객의 정보를 받고 마지막으로 엘리베이터 객체에 정보를 넣어서 작동하게 하여 웹으로 결과를 볼 수 있는 문제이다.

Nodejs로 받아서 해볼 생각인데, 현재로썬 C++이 아닌 다른 언어를 가지고 문제를 해결해본 적이 없어 꽤 긴 시간이 걸릴거라고 예상된다.

이번 기회에 다른 언어로 풀이를 할 수 있을만큼 공부를 해봐도 좋을 것 같다.

---

- 17 日

# REST API를 이용한 문제 풀이

- Total Goals by a Team

```js
const axios = require("axios");

let pages = 1;
let goals = 0;

async function getAwayTeamGoals(team, year) {
  pages = 1;
  do {
    const result = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${pages}`
    );
    let per_page = result.data.per_page;
    const total_pages = result.data.total_pages;
    if (total_pages === 0) return;

    if (total_pages !== 1 && total_pages === pages) {
      per_page = result.data.total - (total_pages - 1) * per_page;
    } else if (total_pages === 1) {
      per_page = result.data.total;
    }
    let idx = 0;
    while (true) {
      if (idx == per_page) {
        break;
      }

      goals += result.data.data[idx++].team2goals * 1;
    }

    if (pages == result.data.total_pages) {
      break;
    }
    pages++;
  } while (true);
}

async function getHomeTeamGoals(team, year) {
  pages = 1;
  do {
    const result = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${pages}`
    );
    let per_page = result.data.per_page;
    const total_pages = result.data.total_pages;
    if (total_pages === 0) return;

    if (total_pages !== 1 && total_pages === pages) {
      per_page = result.data.total - (total_pages - 1) * per_page;
    } else if (total_pages === 1) {
      per_page = result.data.total;
    }
    let idx = 0;
    while (true) {
      if (idx == per_page) {
        break;
      }

      goals += result.data.data[idx++].team1goals * 1;
    }
    if (pages === result.data.total_pages) {
      break;
    }
    pages++;
  } while (true);
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const team = readLine();

  const year = parseInt(readLine().trim(), 10);

  await getHomeTeamGoals(team, year);
  await getAwayTeamGoals(team, year);
  ws.write(goals + "\n");

  ws.end();
}
```

주어진 문제의 목표는 파라미터로 축구 팀의 이름과 연도가 주어졌을 때, REST API로 정보를 받아와서 해당 팀이 주어진 연도에 골을 몇 번 넣었는지 세는 문제이다. request.js가 익숙치 않아서 axios를 사용하였고, Away일 때와 Home일 때 다른 url을 사용하므로 다른 함수로 구현하였다.

json으로 넘어온 정보는 다음과 같다.

- per_pages: 페이지마다 경기의 수
- total_pages: 총 페이지
- page: 현재 페이지
- total: 총 경기 수
- data[]
  - year
  - team1
  - team2
  - team1goals
  - team2goals

따라서 첫 페이지부터 마지막 페이지까지 반복하면서 REST API로 해당 팀의 Home일 때의 골 숫자와 Away일 때의 골 숫자를 각각 얻어와서 합쳐서 출력하도록 하였다.

- Drawn Team

```js
const axios = require("axios");

let cnt = 0;

async function getDrawnTeam(year) {
  let pages = 1;
  for (let team1 = 0, team2 = 0; team1 < 10; team1++, team2++) {
    const result = await axios.get(
      `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${team1}&team2goals=${team2}&page=${pages}`
    );
    cnt += result.data.total;
  }
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  await getDrawnTeam(year);
  ws.write(cnt + "\n");

  ws.end();
}
```

두번째 문제 역시 첫번째 문제와 같은 축구 경기를 이용한 문제였다. 이 문제에서는 연도만 주어지고, 해당 연도에 비긴 팀을 모두 찾는 문제이다. 처음에는 첫번째 문제와 같은 형식에서 url에서 team만 빼고 연도에 치뤄진 경기를 전부 받아서 골 수를 비교하려 했으나, 너무 많은 데이터의 양 때문에 시간초과 되었었다.

이후에는 API를 조금 더 살펴봐서 파라미터로 team1goals와 같이 홈팀의 골 숫자를 보낼 수 있었다. 이것을 이용하여 홈팀과 어웨이팀의 골 수를 같게하여 반복하게 하였다. 단순히 테스트케이스 하나만 가지고 비교해도 170번 반복할 부분을 10번만 반복할 수 있게 고친다는 것은 효율성이 크게 늘어난다는 것을 볼 수 있다.

여담으로 반복 횟수를 골 숫자 0~9까지 10번으로 가정한 이유는 처음에 문제를 접하고 데이터를 봤을 때, 가장 크게 넣은 골이 7~9골 사이로 봤기 때문에 10번으로 어림잡았다. 그리고 처음 풀었던 문제에서는 while문을 여러 번 사용하여 했으나, API로부터 받는 정보를 조금 더 이해한 뒤에는 for문을 통해서도 깔끔하게 구현할 수 있었다.

카카오 엘리베이터 문제를 해결할려 했으나, request는 익숙치 않아서 axios를 한번 더 연습하기 위해서 풀어 본 문제였다.

---

- 18 日

# 엘리베이터 문제 접근

이전과 이어서 카카오 엘리베이터 문제를 어떻게 접근할까 생각해보았다.

## 엘리베이터 갯수

엘리베이터 갯수는 1~4개로 정할 수 있다. 모든 문제를 해결하려면 엘리베이터는 4개 전부 사용해야할 것 같다. 엘리베이터들이 각자 일련의 알고리즘을 통해서 움직이게 될텐데, Action API를 통해서 한번에 명령을 줘야하므로 쓰레드는 하나로 이루어져야한다. 또한 각 엘리베이터들을 Call API로 넘어온 승객들의 요청에 맞춰서 움직여야하는 알고리즘을 짜야한다.

## 알고리즘

처음에는 엘리베이터 하나를 가지고 생각을 해보았다. Call에 맞춰서 한 승객을 태우고 원하는 도착지에 가서 내리고 STOP, OPEN, ENTER & EXIT, CLOSE, UP & DOWN 명령으로 이뤄질 것이다. 승객이 타거나 내리는 것은 문을 열고 닫는 행동도 무조건 포함되므로 묶어서 생각하더라도 상당한 timestamp가 걸린다고 생각이 되었다. 그렇더라도 0번 문제는 금방 해결이 되지만 1개의 엘리베이터에서 다수의 엘리베이터로 수정하는 것은 꽤 복잡할 것이라 생각되었다.

따라서 엘리베이터를 4개 다 사용하는데, 여러가지 방안을 생각했다. 먼저 엘리베이터마다 운행하는 구역을 만들어서 해당 범위에서의 요청이 오면, 맞는 엘리베이터가 운행하도록 한다. 만약 승객이 원하는 층이 자신의 영역보다 더 멀리 있다면 자기가 갈 수 있는 최대의 바운더리에 승객을 내리고 해당 영역의 엘리베이터가 승객을 원하는 층으로 옮기도록 하는 것이다. 어떤 데이터가 들어올지 모르지만 최악의 경우에는 1층에서 최고층까지 간다고 생각하면 모든 엘리베이터가 승객을 실러나르는 동작을 계속 하게 되어 각자 따로 움직일 때 보다 훨씬 많은 시간이 걸릴 수 있지만, 엘리베이터의 범위에서 크게 벗어나지 않은 위치에 출발점과 도착점이 있다면 빠르게 해결될 수 있다.

두번째로는, 범위와 비슷하지만 현실에서도 많이 볼 수 있는 홀짝 엘리베이터이다. 홀수층과 짝수층을 나눠서 운영한다면, 각각의 엘리베이터 부담을 나눌 수 있다고 생각되었다. 하지만 이 부분에 있어서는 어떠하게 짜야할지 명확히 떠오르지 않았다. 왜냐하면 출발층과 도착층이 모두 홀수나 짝수라면 명료하게 엘리베이터를 두개씩 나눠서 해결할 수 있지만, 출발층과 도착층이 홀수와 짝수층으로 엇갈려있다면 어떠한 엘리베이터에 할당할 것인가와 홀수층에서 태워서 짝수층에 도착했다고 가정시에 도착층에 승객이 대기하고 있다면 태울것인가 말것인가도 정해야한다. 이러한 내용을 전부 어떻게 행동할지 코딩했을 때의 비용을 생각하면 전부 완벽하게 나눠서 진행이 된다면 엘리베이터들의 부담을 분산시켜서 빠르게 진행될 수 있지만 코딩시간 까지 생각한다면 어떻게 해야할지 명확하게 모르겠다.

마지막으로는 엘리베이터 알고리즘을 그대로 적용하여 call이 들어오면 가까운 멈춰있거나 해당 층 방향으로 운행 중인 엘리베이터가 가고 엘리베이터가 만원이 되기 전까지는 진행 방향에 있다면 계속 탑승시키는 식으로 진행한다. 즉, 4개의 엘리베이터가 각자의 엘리베이터 알고리즘으로 가장 가까운 엘리베이터가 승객을 태우고 엘리베이터마다 승객 큐를 둬서 다른 엘리베이터 큐에 승객이 있다면 동시에 탑승하는 부분을 제거해야한다.

이러한 방법 중 하나를 채택해서 구현해볼 생각이다. timestamp를 가지고 점수를 낸다면, action api를 통해서 timestamp가 증가하므로 만약 calls api를 계속 호출해서 사람들이 어딜 갈지 정보를 모두 얻은 뒤 엘리베이터마다 최적의 수를 찾아서 action api를 호출한다면 가장 높은 득점을 할 수 있을 것 같다. 하지만 생각으로만 이뤄지고 직접 구현할 수 있을지 몰라서 일단 엘리베이터에 모두 적용할 수 있도록 짜봐야겠다.

---

- 19 日

# 엘리베이터 문제

엘리베이터 문제 구현 부분을 봐보자.

## 구현

먼저 엘리베이터 클래스를 구현해서 엘리베이터를 객체로 하나 하나 유지한다. 엘리베이터에는 프로퍼티로 id, 현재 층, 현재 상태, 승객들, 시작 층, 도착 층, calls 등을 가지고 있으며, 메소드로는 addCall(), updateAction(), 생성자를 가지고 있다.

생성자는 엘리베이터 객체를 총 4개 생성할 때 기본 값으로 설정해줬다.

addCall()은 onCalls API를 통해서 받아온 호출들 중 아직 진행하직 않은 호출을 엘리베이터 객체의 프로퍼티 중 calls에 넣어주며, 시작 층과 도착 층을 설정해준다.

- calls 예시

```js
[
  { id: 0, timestamp: 0, start: 4, end: 1 },
  { id: 1, timestamp: 0, start: 4, end: 3 },
];
```

updateAction()은 Action API를 호출할 때 같이 보내야하는 Commands 배열을 채우기 위해서 사용된다. 즉, 어떤 행동을 취할지를 정해주는 메소드로, 엘리베이터의 현재 상태, 타고 있는 승객, 다음 콜들을 고려해서 움직이도록 collective 알고리즘을 적용했다.

이후에는 지금까지 만든 객체와 API를 이용해서 흐름을 짜면 된다. 메인으로 사용할 함수를 하나 두고 엘리베이터 객체들과 호출들을 이미 한 것과 해야하는 것으로 나눠서 유지한 뒤 해결하려고 한다.

---

- 20 日

# 엘리베이터 문제

문제의 흐름과 전체적인 알고리즘을 전부 작성했다. 하지만 전부 작성한 뒤 부딪힌 에러에 대해서 정리해볼려고 한다.

## 에러

```js
if (this.status === `OPENED` && enter.length > 0) {
  // 탈 사람이 있다면
  let callId = [];
  this.passengers.push([...enter]);
  console.log(enter);
  for (enterCall of enter) {
    const idx = this.calls.findIndex(function (item) {
      console.log(item);
      return item === enterCall;
    });
    if (idx > -1) {
      this.calls.splice(idx, 1);
    }
  }

  callId.push("enter");
  for (enterCall of enter) {
    callId.push(enterCall.id);
  }
  return callId;
}
```

### 에러메시지

```
(node:4216) UnhandledPromiseRejectionWarning: ReferenceError: enterCall is not defined
    at Elevator.updateAction
```

enterCall이 정의가 되지 않았다는 내용인데, enter의 경우 array로 정의하고 for of로 접근하였는데 undefined가 처리 안되서 나는 에러일지도 몰라서 앞뒤로 undefined를 걸러주는 조건문을 삽입했었다.

결과는 계속 에러가 출력되었다. 메인함수에서 call들을 정리하는 함수에서 막힌거라 진행이 멈췄다. 이후에는 에러를 정리하기 위해 노력했으나 하지못하여 다음에 다시 이어서 하려한다.

---

- 21 日

# 엘리베이터 문제

## 에러 해결

변수에 있어서 undefined가 상당히 많이 뜨고 문제가 있었다. 이 부분은 내 코딩 컨벤션의 문제였었다. for-in문을 사용할 때 자료형을 썼었어야했는데 그 부분을 생략해버렸다. let이나 const의 부재로 당연히 undefined가 뜨는 것이였다. 멍청하게도 다른데서 이유를 찾으려하다보니 시간이 길어졌다.

## 다른 에러

Action API를 이용할 때 엘리베이터들의 up & down, stop, open까지는 잘 되나, enter를 넣은 명령에서 api에서 오류가 발생한다. 엘리베이터의 갯수에 상관없이 enter 명령을 넣을 때만 오류가 나는 것으로 보아 어떤 부분을 누락한 것으로 보인다.

---

- 22 日

# 엘리베이터 문제

영어 공부와 병행하여 시간이 꽤나 걸리고 있다. 남는 시간을 내서 풀어보고 있으나, 문제는 자바스크립트에 대한 이해도인 것 같다.

## 문제 발견

지금까지 발견된 문제는 다 해결되었으나, 그 다음으로 해결해야할 문제는 이미 처리한 요청에 대해서는 배열로써 둬서 onCalls API 요청 이후에 담겨진 배열과 이미 처리한 요청을 담은 배열을 비교하여 아직 처리되지 않은 요청을 가지고 구현한 내용이 돌아야한다. 하지만, 이 부분에서 필터가 제대로 되지 않아서 문제가 생겼다.

splice를 이용하여서 문제를 해결할려고 했으나 새로운 것을 알았다. 첫번째 원소부터 지울려면 `splice(0,1)`이 아닌 `splice(-1,0)`을 사용해야 첫 원소부터 지울 수 있다. 처음에 (0,1)을 이용하니 두번째 원소부터 지워져서 첫번째 원소만 남게되면 지워지지 않는 현상이 발생했다.

또한, 필터를 이용해서 지울려고 했으나, 객체 자체를 비교해서 filter()가 작동하지 않았었다.

```js
notProgress = result.data.calls.filter(function (item) {
  let flag = true;
  for (let already of progress) {
    if (already.id === item.id) flag = false;
  }
  return flag;
});
```

이 부분을 이렇게 해결해주었다. 더 좋은 방법이 생각나면 좋았을테지만 당장 여러번 시도를 해봐야 했기 때문에 이대로 진행을 해볼 생각이다. 진행 중에 더 좋은 방법이 생각나거나 발견하게 되면 고쳐서 최적화를 시켜야겠다.

---

# 엘리베이터 문제

에러를 해결하였는데 다른 에러에 부딪혔다. 현재 처리한 에러는 Action api를 호출했을 때 같이 보내는 데이터로 command를 보내는데 여기에 엘리베이터의 아이디와 취할 행동, 그리고 승하차하는 승객의 아이디를 옵션으로 가질 수 있다.

여기서 문제가 있었는데 다음과 같이 보내주었다.

```
commands: [
  elevator_id = interger
  command = string
  call_ids = integer
]
```

하지만 call_ids 부분은 array of integer로 보냈어야했다. 이 부분을 간과하고 단일로 보낼려고 했으나, 에러가 나왔다. 당연한게 엘리베이터가 한 층에서 승객을 한 명만 태운다는 근거는 없다. 그러므로 배열을 통해서 해결해야했다. 배열을 통해서 넘기자 바로 0번 문제인 어피치 맨션은 해결할 수 있었다.

이후에 이어진 다음 단계에서는 또 문제에 부딪혔다. 그 부분은 바로 배열로써 여러 명을 승하차 시키다보니 해결된 호출에 누락된 호출이 있어서 엘리베이터 두 개가 같은 손님을 태울려고 Action을 취하는 부분이 문제였다.

이렇게 자꾸 많은 에러를 겪어가면서 생각이 든 부분은 문제와 조건을 제일 먼저 숙지를 해야하고 전체적인 흐름을 짤 때 다 고려해서 짜야하는 능력이 필요하다는 것을 느꼈다. 그리고 구현 언어에 대한 이해도가 많이 필요하다는 것을 느꼈다. 자바스크립트에 대해서는 Node.js로 서버를 만들고 DB와 연결하여서 쿼리를 날리는 정도만 많이 해봐서 자료구조를 이용한 문제에서 파싱하고 데이터를 얻어내는데에 있어서 매우 미숙하다는 것을 알앗다.

---

- 24 日

# PS

- N진수 게임

```cpp
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

string solution(int n, int t, int m, int p) {
    string answer = "";
    vector<char> v;
    char c[16] = { '0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9', 'A', 'B', 'C', 'D', 'E', 'F'};
    int num = t*m;
    int su;
    string temp;
    for (int i=0; i<num; i++) {
    	su = i;
    	if(i==0) v.push_back('0');
    	if(i<n) {
    		while(su) {
    			v.push_back(c[su%n]);
    			su = su / n;
			}
		}
    	else {
    		while(su) {
    			temp = c[su%n] + temp;

    			su = su / n;
			}
			for (int j=0; j<temp.length(); j++)
				v.push_back(temp[j]);
		}
		temp.clear();
	}
	int cnt = 1;
	for (int i=0; i<num; i++) {
		if(cnt==m+1) cnt = 1;
		if(cnt==p) answer+=v[i];
		cnt++;
	}
    return answer;
}
```

예전에 풀었지만 다시 복습해볼려고 풀어본 문제이다. 하지만 많이 매끄럽지 않게 되서 다른 분의 포스팅을 보고 비교해볼려고 한다.

```cpp
// 진수 변환
string cal(int d, int n) {
    string res = "";
    char code[]= {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
    while (d/n != 0) {
        res = code[d%n] + res;
        d /=n;
    }
    res = code[d%n] + res;
    return res;
}
string solution(int n, int t, int m, int p) {
    string answer = "";
    string tmp = "";
    for (int i =0; i <t*m ; i++) {
         tmp += cal(i, n);
    }
    int cnt = 0;
    // 튜브의 순서가 p 일 때, 배열의 순서는 p-1이다.
    // m명의 사람이 있으므로, m 씩 더해야 한다.
    // cnt를 이용해 말해야 하는 숫자 t와 값을 비교한다.
    for (int i = p-1;  i < tmp.size(); i += m) {
        answer += tmp[i];
        if (cnt + 1 == t) break;
        cnt += 1;
    }
    return answer;
}
```

- [출처: DEV 황인태(intaehwang)](https://intaehwang.tistory.com/6)

진수 변환을 함수로 돌려서 모든 순서를 tmp 문자열에 진수 변환하여 저장한 뒤 tmp 문자열에서 튜브 순서에 맞는 값만 찾아서 리턴해준다.

내가 짠 코드는 다시 보면 상당히 이해하기 어려울 것 같다. 하지만 이 코드는 매우 명백하게 이해할 수 있어서 좋다. 따라서 이러한 코드를 짜도록 노력해야겠다. 다음에 이러한 문제를 봤을 때 시간도 줄이고 다른 사람들이 코드를 봐도 이해할 수 있게 작성하도록 공부를 더 해야한다.

---

- 25 日

# PS

- `1188. 음식 평론가`

```cpp
#include <bits/stdc++.h>
using namespace std;

int gcd(int n, int m) {
	return m ? gcd(m, n%m) : n;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, m;
	cin >> n >> m;
	cout << m - gcd(n, m);
}
```

소시지가 n개 평론가가 m명 있을 때 칼질을 몇 번해야 평론가들에게 모두 똑같은 양의 소시지를 줄 수 있는지 구하는 문제이다.

문제를 보자마자 최대공약수를 떠올렸다. 최대공약수를 어떻게 사용할지 생각하는 와중에 이런 생각을 해보았다. 만약 소시지는 1개, 평론가는 5명일 때 칼질은 총 몇번인가. 답은 4번이다. 즉 m-1번 했다고 할 수 있다.

또 다른 예시로는 소시지가 8개, 평론가가 4명일 때의 칼질은 몇번인지는 생각하지 않아도 바로 나온다. 칼질을 한번도 안해도 소시지를 균등하게 배분할 수 있다. 이말은 즉, 최선의 경우에는 0번. 최악의 경우에는 m-1번 이뤄지게 된다는 것이다. 이것들을 나누는 기준은 바로 최대공약수이다.

따라서 `m - gcd(n,m)`번 만큼 칼질이 이뤄진다.

---

- 26 日

# 엘리베이터 문제

### 풀이

- [풀이](https://github.com/lee20h/2019-kakao-blind-elevator)

풀이는 간단하게 말하자면 엘리베이터 알고리즘와 같이 구현하되 다른 조건이 없다면 FIFO와 같이 선입선출로 구현하였다. 엘리베이터 객체를 구현한 뒤 엘리베이터 알고리즘에 맞는 조건을 둬서 엘리베이터 객체마다 액션을 취하도록 API를 요청하였다.

### 한계점

다 구현한 뒤 문제에 제출하면서 생각이 든 부분은 바로, 엘리베이터가 콜이 정해진 뒤 움직이기 시작하면 A -> B로 간다하였을 때 A와 B사이에 출발층과 도착층이 있으면 그 승객도 같이 태우는데 만약 A와 B가 완전히 같은 승객의 경우에는 태우지 않고 단 한 명씩만 태우고 내리게 된다. 따라서 이러한 문제만 수정된다면 2번 문제인 라이언 타워의 timestamp를 훨씬 줄일 수 있을거라고 생각한다.

---

- 27 日

# PS

- `1600. 말이 되고픈 원숭이`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 200;

int k, w, h;
int arr[MAX][MAX];
bool visited[MAX][MAX][30+2];

int py[4] = {0, 0, 1, -1};
int px[4] = {1, -1, 0, 0};
int ky[8] = {-2, -1, 1, 2, 1, 2, -1 ,-2};
int kx[8] = {-1, -2, -2, -1, 2, 1, 2, 1};

int bfs(int y, int x) {
	queue<pair<pair<int ,int>, pair<int, int>>> q;
	q.push({{y,x},{0,0}});
	visited[y][x][0] = true;

	while(!q.empty()) {
		int curY = q.front().first.first;
		int curX = q.front().first.second;
		int knight = q.front().second.first;
		int cnt = q.front().second.second;
		q.pop();

		if(curY == h-1 && curX == w-1)
			return cnt;

		if(knight < k) {
			for (int i=0; i<8; i++) {
				int dy = curY + ky[i];
				int dx = curX + kx[i];

				if(0 > dy || 0 > dx || h <= dy || w <= dx)
					continue;
				if(visited[dy][dx][knight+1] || arr[dy][dx])
					continue;


				visited[dy][dx][knight+1] = true;
				q.push({{dy,dx},{knight+1, cnt+1}});
			}
		}

		for (int i=0; i<4; i++) {
			int dy = curY + py[i];
			int dx = curX + px[i];

			if(0 > dy || 0 > dx || h <= dy || w <= dx)
				continue;
			if(visited[dy][dx][knight] || arr[dy][dx])
				continue;

			visited[dy][dx][knight] = true;
			q.push({{dy,dx},{knight, cnt+1}});
		}
	}
	return -1;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cin >> k >> w >> h;

	for (int i=0; i<h; i++) {
		for (int j=0; j<w; j++) {
			cin >> arr[i][j];
		}
	}

	cout << bfs(0,0);
}
```

원숭이는 k번 체스의 나이트처럼 움직일 수 있고 나머지는 4방향으로 이동할 수 있다. 이 때 (0,0)에서 (w-1,h-1)까지 갈 수 있는 최소의 이동 수를 구하는 문제이다.

BFS로 간단하게 나이트와 같이 움직이는 행동 패턴 수를 세서 일정 이상 넘어가면 4방향으로만 이동하게 한다. 나이트와 같이 움직일 수 있을 때도 4방향으로 가는 좌표도 같이 넣어줘야한다. 그래야 최소 동작수 를 알 수 있다.

---

- 28 日

# PS

- `1405. 미친 로봇`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 30;

int py[4] = {0, 0, 1, -1};
int px[4] = {1, -1, 0, 0};

int n;
double prob[4], ans;
bool visited[MAX][MAX];


void dfs(int y, int x, double chance) {
	if(n == 0) {
		ans += chance;
		return;
	}

	visited[y][x] = true;
	for (int i=0; i<4; i++) {
		int dy = y + py[i];
		int dx = x + px[i];

		if(!visited[dy][dx]) {
			n--;
			dfs(dy, dx, chance * prob[i]);
			visited[dy][dx] = false;
			n++;
		}
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout << fixed << setprecision(10);
	cin >> n;

	for (int i=0; i<4; i++) {
		cin >> prob[i];
		prob[i] *= 0.01;
	}
	dfs(15, 15, 1.0);
	cout << ans;
}
```

로봇이 4방향으로 움직이되 이미 지나간 곳을 또 지나가는 것을 복잡한 경로라고 한다. 단순한 경로만을 찾아서 확률을 구하는 문제이다. 이 때 동서남북으로 가는 확률을 각각 주어지고 이동 횟수도 주어진다. 따라서 DFS로 백트래킹을 구현하여 해결하려고 하였다.

최대 14번 이동할 수 있으므로 한 방향으로만 움직일 수 있으니 배열의 크기를 30으로 주고 (15,15)에서 시작하도록 하였다. 또한 횟수 늘리고 줄임으로써 기저조건을 만들었다. 조건에 맞는다면 ans 변수에 다 더해줘서 확률을 구해주었다.

---
