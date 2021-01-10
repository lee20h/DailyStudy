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

- 1038. 감소하는 수

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

- 1747. 소수&팰린드롬

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
