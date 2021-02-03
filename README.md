# 📙 Today I Learned

## 규칙

- 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
- Github Action으로 배포
- markdown으로 작성
- 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---

# 2020년

| [5월](./years/2020/5월.md) | [6월](./years/2020/6월.md) | [7월](./years/2020/7월.md) | [8월](./years/2020/8월.md) | [9월](./years/2020/9월.md) | [10월](./years/2020/10월.md) | [11월](./years/2020/11월.md) | [12월](./years/2020/12월.md) |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |

---

# 2021년

| [1월](./years/2021/1월.md) |
| -------------------------- |

---

- 1 日

# C++ 정규 표현식

C++에서는 C++11부터 표준으로 추가된 정규 표현식에 대해서 알아볼려고 한다.

사용되는 객체는 다음과 같다.

- `std::regex`
- `std::smatch`, `std::cmatch`

regex는 사용할 정규 표현식을 지정하면 된다.  
smatch와 cmatch의 경우에는 매칭된 문자열을 `string` 혹은 `const char*`으로 반환해준다.

사용되는 함수는 다음과 같다.

- `std::regex_match`
- `std::regex_search`
- `std::regex_replace`

## 함수

- std::regex_match

```cpp
#include <iostream>
#include <string>
#include <regex>
using namespace std;

int main() {
  string str = "100100100110";
  regex reg("(100|110)+");
  smatch m;

  bool flag = regex_match(str, m, reg);
  flag ? cout << "YES" : cout << "NO";
}
```

reg 변수에 정규 표현식을 넣은 뒤 원하는 문자열과 smatch 혹은 cmatch 변수를 regex_match 함수에 파라미터로 넘겨주면 반환값이 boolean 값으로 받을 수 있다.

- std::regex_search

search는 match와 매우 유사하다. 다른 점은 match의 경우에는 모든 문자열이 다 정규 표현식에 일치해야하는데 search에 경우에는 패턴이 일부라도 들어가있다면 true를 반환하는 함수이다. 따라서 사용하는 예시는 match와 유사하다.

- std::regex_replace

replace 함수는 정규 표현식에 매칭되는 문자열을 원하는 표현식에 맞게 수정해주는 역할을 한다. 파라미터로는 문자열, 찾을 정규식, 대체할 정규식 이러한 순서로 3가지를 넣으면 된다.

## 문제 풀이

- `1013. Contact`

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	regex reg("(100+1+|01)+");
	smatch m;
	int n;
	cin >> n;
	for (int i=0; i<n; i++) {
		string str;
		cin >> str;
		bool flag = regex_match(str, m, reg);
		flag ? cout << "YES\n" : cout << "NO\n";
	}
}
```

## 레퍼런스

- [씹어먹는 C++](https://modoocode.com/303)

---

- 2 日

# PS

- `2023. 신기한 소수`

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> v;
int obj;

bool prime(int n) {
	if(n == 0 || n == 1)
		return false;

	for(int i=2; i*i<=n; i++) {
		if(n % i == 0)
			return false;
	}
	return true;
}

void dfs(int n, int cnt) {
	if(cnt == obj) {
		cout << n << '\n';
		return;
	}

	for (int i=1; i<10; i++) {
		if(prime(n*10+i))
			dfs(n*10+i, cnt+1);
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	cin >> obj;

	for (int i=1; i<=9; i++) {
		if(prime(i))
			dfs(i, 1);
	}
}
```

주어진 n의 숫자만큼 자릿수를 가진 숫자들 중 1~n자릿수가 전부 소수인 숫자를 출력하는 문제이다. 깊이우선탐색으로 숫자를 만들고 에라토스테네스의 체로 소수를 체크해줘서 n자리 숫자만큼 커지면 해당 값을 출력했다.

이 문제로 에라토스테네스의 체와 백트래킹을 다시 공부할 수 있었다.

---

- 3 日

# PS

- `2436. 공약수`

```cpp
#include <bits/stdc++.h>
using namespace std;

int gcd(int a, int b) {
	return b? gcd(b, a%b) : a;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int g, l, n;
	long long a, b;
	cin >> g >> l;

	int num = l / g;

	for (int i=1; i*i<=num; i++) {
		if(num%i == 0 && gcd(i, num/i) == 1) {
			n = i;
		}
	}

	a = g * n;
	b = g * (num/n);
	cout << a << ' ' << b;
}

```

최대 공약수와 최소 공배수가 주어졌을 때 해당 값을 구하기 위한 두 자연수를 구하는 문제이다. 최대 공약수란 두 수를 서로소가 나올 때 까지 나누었을 때 나온 공약수의 곱이며, 최소 공배수는 최대 공약수에 나머지 서로소의 값들을 곱해준 값이다. 따라서 두 값의 서로소들의 곱을 구한 뒤 그 값을 기준으로 약수를 구한다.

약수를 구할 때는 서로소들의 곱의 제곱근까지만 약수를 구하며, 약수이면서 서로소들의 곱과 또 서로소인 값들을 찾아서 최대 공약수와 곱해주면 원하는 값을 찾을 수 있다.

- `2589. 보물섬`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 50;

int py[4] = {0, 0, 1, -1};
int px[4] = {1, -1, 0, 0};

char arr[MAX][MAX];
int cache[MAX][MAX];
int w, h;

int bfs(int a, int b) {
	int ans = 0;
	queue<pair<int,int>> q;
	q.push({a,b});
	memset(cache, 0, sizeof(cache));
	cache[a][b] = 1;
	while(!q.empty()) {
		int y = q.front().first;
		int x = q.front().second;
		q.pop();

		for (int i=0; i<4; i++) {
			int dy = y + py[i];
			int dx = x + px[i];
			ans = max(ans, cache[y][x]);
			if(dy < 0 || dx < 0 || dy >= h || dx >= w)
				continue;
			if(arr[dy][dx] == 'W' || cache[dy][dx])
				continue;
			q.push({dy,dx});
			cache[dy][dx] = cache[y][x] + 1;
		}
	}

	return ans-1;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int ans = 0;
	cin >> h >> w;

	for (int i=0; i<h; i++) {
		for (int j=0; j<w; j++) {
			cin >> arr[i][j];
		}
	}

	for (int i=0; i<h; i++) {
		for (int j=0; j<w; j++) {
			if(arr[i][j] == 'L')
				ans = max(ans,bfs(i, j));
		}
	}

	cout << ans;
}

```

지도의 크기와 지도에 각 타일에 육지와 바다가 주어진 다음에 육지와 육지 거리 중에서 가장 긴 부분이 보물상자가 있는 곳이라고 한다. 이 문제의 풀이를 너비우선탐색을 하되 주어진 출발점이 없으므로 모든 육지 지점에서 너비우선탐색을 하며, 가장 긴 지점을 찾았다.

첫 시도는 boolean형 배열을 이용하여 매번 초기화를 시켜주면서 시간을 체크하고 queue 컨테이너에 좌표 뿐아니라 움직인 거리를 집어넣었었다. 하지만, 답은 나오나 시간초과였다.

다음 시도는 boolean형 배열이 아닌 int형 배열을 가지고 움직인 거리를 적도록 하였다. queue 컨테이너에서 좌표만 표시하며 함수의 반환형을 int로 바꿨다. 그 부분을 바꿨더니 해결할 수 있었다.

---
