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

- 4 日

# 2021 카카오 추천팀 봄 인턴 코딩테스트

결론부터 말하자면 망했다. 해커랭크로 진행되며 총 5문제가 나왔다.

rest api 문제 1개, 객관식 1개, ps 문제 3개가 나왔는데 너무 어렵게 생각했다. 생각보다 쉽게 풀 수 있는 문제가 있었는데 문제를 끝까지 다 읽지 않고 input 위주로 해결하려하다보니 너무 어렵게 접근했다. 또한, 모든 풀이에서 2% 부족했다. 만약 문제를 더 읽고 하나하나 천천히 접근했다면 결과는 달랐을 것 같다. 그리디 1문제, 그래프 1문제, 구현 1문제라 생각된다.

지금 생각하면 1문제 제외하고는 시간 내에 해결할 수 있을 것 같다. 지식과 경험이 부족해서 원하는 만큼 해결하지 못한 경험을 할 수 있었다. 다음에도 이러한 내용이 나올 수 있으므로 조금 더 열심히 공부해서 도전해야겠다.

---

- 5 日

# Absoulte Path & Canonical Path

- 레퍼런스: [absolute-path-vs-canonical-path](https://www.benjaminlog.com/entry/absolute-path-vs-canonical-path)

유닉스 시스템에서 사용하는 경로 중 절대 경로에 대해서는 프로그래밍을 하면 많이 접해볼 상식이다. 하지만 canonical path에 대해서는 접해보지 못했는데 위의 글에서는 다음과 같이 설명한다.

> Canonical Path는 어떤 파일의 경로를 나타내기 위한 유일한 심볼이다. 또한 Canonical path는 항상 절대경로이기도 하다. 물론 역은 성립하지 않는다.

여기서 absoulte path와 비교를 하면서 설명을 더해보자.

`/origin/file1`과 `/origin/../origin/file1`의 absoulte path는 다를까?

둘 다 absoulte path라고 할 수 있다. 즉, 많은 수의 absoulte path는 만들어질 수 있다.

하지만 canonical path는 설명한 바와 같이 유일한 경로를 가진다. 여기서는 `/origin/file1` 이 한 경로만이 canonical path라고 할 수 있다.

---

# PS

LeetCode에서 매달 진행하는 LeetCoding Challenge를 계속 참여하려고 한다. 저번에 본 코딩테스트에서 느낀 점은 영어 문제에 대해서 조건과 목표를 파악하는 부분이 너무 느리기 때문에 영어 문제에 대해 많이 접해볼려고 하며, 하루에 한 문제는 꼭 푸는 방향으로 나아갈 것이다.

- Simpliy Path

```cpp
class Solution {
public:
    string simplifyPath(string path) {
        vector<string> v;
        string temp, ans;
        for(int i=0; i<path.length(); i++) {
            if(path[i] == '/') {
                if(temp == ".") {
                    temp.clear();
                    continue;
                }
                else if(temp == "..") {
                    if(v.size())
                        v.pop_back();
                }
                else if(!temp.empty()) {
                    v.push_back(temp);
                }
                temp.clear();
            } else {
                temp += path[i];
            }
        }
        if(path[path.length()-1] != '/') {
            if(temp == "..") {
                if(v.size())
                    v.pop_back();
            }
            else if(!temp.empty() && temp != ".") {
                v.push_back(temp);
            }
        }
        for (int i=0; i<v.size(); i++)
            ans += '/' + v[i];

        if(ans.empty())
            ans = '/';

		return ans;
    }
};
```

주어진 absolute path를 canonical path로 바꿔야하는 문제이다. 따라서 `.`은 무시하며 `..`의 역할만 주어진 채로 구현하였다. 이 때 `/`를 통해서 지금까지 들어온 문자열을 벡터에 넣어서 관리해주었다. 마지막에는 `/`가 나올 수도 있고 안 나올 수도 있다. 따라서 만약 마지막 값이 `/`가 아니라면 포문 내에서 사용한 논리 그대로 이어서 사용해주었다. 벡터 원소 값 앞에 `/`를 붙여서 반환해주면 마무리가 된다.

---

- 6 日

# PS

LeetCode

- Binary Tree Right Side View

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
	void rightSideViewFunc(TreeNode *root, int level, int *maxLevel, vector<int> &v) {
		if(root == NULL)
			return;

		if(*maxLevel < level) {
			v.push_back(root->val);
			*maxLevel = level;
		}

		rightSideViewFunc(root->right, level + 1, maxLevel, v);
		rightSideViewFunc(root->left, level + 1, maxLevel, v);
	}

    vector<int> rightSideView(TreeNode* root) {
        vector<int> v;
        int maxLevel = 0;
        rightSideViewFunc(root, 1, &maxLevel, v);
        return v;
    }
};
```

이진트리가 주어졌을 때 가장 오른쪽에 있는 노드를 출력하는 문제이다. 주어진 구조체를 이용하면서 함수를 완성시켜야 하므로 DFS와 같이 구현하였다. 각 level을 보면서 해당 층에서 가장 먼저 접하는 값을 벡터에 넣어서 반환하도록 하였다. 이것이 가능한 이유는 함수에서 제일 먼저 루트의 오른쪽을 먼저 탐색하도록 하였기 때문이다.

다른 사람들의 코드를 보다가 효율이 매우 좋은 코드를 보게 되어서 같이 올린다.

```cpp
class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> ans;
        if(root==NULL)
            return ans;
        queue<TreeNode*> q;
        q.push(root);
        int i;
        while(!q.empty())
        {
            int n=q.size();
            for(i=0;i<n;i++)
            {
                TreeNode* temp=q.front();
                q.pop();
                if(temp->left)
                    q.push(temp->left);
                if(temp->right)
                    q.push(temp->right);
                if(i==n-1)
                    ans.push_back(temp->val);
            }
        }
        return ans;
    }
};
```

이진트리의 각 층의 오른쪽 노드들을 얻기 위해서 내가 했던 방식과는 달리 큐를 이용한 방법으로 while문이 한번 끝날 때마다 이진트리의 한 층이 끝나는 것이다. 따라서 큐에는 현재 층의 노드들이 들어있으며, 왼쪽과 오른쪽의 자식 노드들을 큐에 집어 넣게 된다. 처음에 큐의 크기만큼 포문을 구성하여 한 층에서만 돌게 하였는데 이 때, 포문의 마지막 반복에는 무조건 해당 층의 오른쪽 노드가 오게 된다. 따라서 해당 노드를 모아서 반환해주면 된다.

이진트리에 대해서 공부할 때, 강의와 책을 보고 배운 것을 이용하여 풀었다. 내가 푼 풀이도 성능 면에서는 나쁘지는 않다. 하지만, 같은 생각을 선택한 컨테이너에 따라서 성능이 확실히 달라지므로 선택할 수 있는 폭을 넓혀야겠다. 큐로 푼 풀이는 내가 생각하기에는 정말 좋은 풀이라고 생각된다.

---

- 7 日

# PS

- Shortest Distance to a Character

```cpp
class Solution {
public:
    vector<int> shortestToChar(string s, char c) {
        vector<int> v, ans;
        for (int i=0; i<s.length(); i++) {
            if(s[i] == c) {
                v.push_back(i);
            }
        }
        int idx= 0;
        for (int i=0; i<s.length(); i++) {
            if(idx != v.size()-1) {
                if(abs(v[idx]-i) >= abs(v[idx+1]-i)) {
                    idx++;
                }
            }
            ans.push_back(abs(i-v[idx]));
        }
        return ans;
    }
};
```

문자열과 특정한 문자가 주어졌을 때 문자열 속에서 가장 가까운 특정한 문자의 거리를 문자마다 구해서 반환하는 문제이다.

예를 들어 `nicemeetyou`가 주어졌을 때 문자는 `e`라고 가정한다. 그렇다면 원하는 정답 배열은 `32101001234`이다.

먼저 특정한 문자가 문자열에 어떤 인덱스에 위치해있는지 구한다. 그렇게되면 문자열에서 몇번째 인덱스에서 특정한 문자가 나오는지 알고 있다. 따라서 문자열 인덱스에서 특정한 문자가 들어있는 인덱스를 빼 준 거릿값 만큼을 출력하면 된다. 이 때, 가장 가까운 특정한 문자를 찾아야하므로 현재 인덱스와 다음 인덱스 중 가까운 것을 취해서 빼줘야한다.

- 여행경로

```cpp
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

const int MAX = 1e5+1;

bool visited[MAX];
string ans = "abc";

void dfs(vector<vector<string>> &tickets, string from, string path, int level) {
    if(level == tickets.size()) {
        if(path < ans)
        	ans = path;
        return;
    }

    for (int i=0; i<tickets.size(); i++) {
        if(tickets[i][0] == from && !visited[i]) {
            visited[i] = true;
            dfs(tickets, tickets[i][1], path + tickets[i][1], level+1);
            visited[i] = false;
        }
    }
}

vector<string> solution(vector<vector<string>> tickets) {
    vector<string> answer, temp;
    string start = "ICN";
    sort(tickets.begin(), tickets.end());

    dfs(tickets, start, start, 0);

    for(int i=0; i<ans.length(); i+=3) {
        answer.push_back(ans.substr(i,3));
    }
    return answer;
}
```

DFS 문제로, 모든 여행지를 다 돌 수 있다고 가정하고 여행지들을 경유해서 돈다. 이 때, 도는 순서를 찾는 문제이다. 따라서 dfs를 통해서 쭈욱 따라가서 찾되, 똑같은 레벨의 여행지라면 사전 순으로 정렬되어야한다. 정렬 후 dfs 함수를 통해서 모든 값을 구한다.

dfs 함수에서는 돌아보지 않은 여행지 중 출발 여행지가 같다면 dfs 함수를 호출하며, 총 찾은 숫자가 주어진 티켓과 같다면 모든 여행지를 경유한 것이므로 해당 값들 중 가장 사전적 정의가 앞서는 문자열을 가지고 파싱하여 반환한다.

---

# 토익

토익을 치뤘는데 단지 졸업조건으로써 응시했다. 하지만 영어 레퍼런스를 읽는 정도라고 생각했지만 상당히 부족한걸 느꼈다. 영어 레퍼런스를 읽는 날이 많아질테니 앞으로 조금씩 영어 공부를 쭉 해나가야겠다.

---

- 8 日

# PS

- Peeking Iterator

```cpp
/*
 * Below is the interface for Iterator, which is already defined for you.
 * **DO NOT** modify the interface for Iterator.
 *
 *  class Iterator {
 *		struct Data;
 * 		Data* data;
 *		Iterator(const vector<int>& nums);
 * 		Iterator(const Iterator& iter);
 *
 * 		// Returns the next element in the iteration.
 *		int next();
 *
 *		// Returns true if the iteration has more elements.
 *		bool hasNext() const;
 *	};
 */

class PeekingIterator : public Iterator {
public:
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
	    // Initialize any member here.
	    // **DO NOT** save a copy of nums and manipulate it directly.
	    // You should only use the Iterator interface methods.

	}

    // Returns the next element in the iteration without advancing the iterator.
	int peek() {
        return Iterator(*this).next();
	}

	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	int next() {
        return Iterator::next();
	}

	bool hasNext() const {
        return Iterator::hasNext();
	}
};
```

Leetcode 오늘의 문제로 Iterator 클래스가 주어지고 이 클래스를 상속하는 PeekingIterator 클래스의 함수를 만들어주는 문제이다. 문제에서 여러 가지 조건을 주석을 통해서 넣어주었다. 나는 최대한 짧고 있는 함수를 이용하려고 하였다. 따라서 next와 hasNext는 있는 클래스에서 그대로 호출하였고 peek의 경우에만 현재 객체를 상위 클래스에 맞춰서 next 함수를 호출하여 다음 원소만 알아볼 수 있게 하였다.

- `2174. 로봇 시뮬레이션`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 100 + 2;

int board[MAX][MAX];

int px[4] = {-1, 0, 1, 0};
int py[4] = {0, 1, 0, -1};

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int a, b, n, m;
	int robot = 0, wall = 0, crashRobot = 0;
	cin >> a >> b >> n >> m;
	vector<pair<pair<int,int>, int>> v;
	v.push_back({{0,0}, 0});
	for (int i=1; i<=n; i++) {
		int y, x, intDir;
		char dir;
		cin >> x >> y >> dir;
		if(dir == 'N')
			intDir = 1;
		else if (dir == 'E')
			intDir = 2;
		else if (dir == 'S')
			intDir = 3;
		else
			intDir = 0;
		v.push_back({{x,y},intDir});
		board[x][y] = i;
	}

	for (int i=0; i<m; i++) {
		int num, repeat;
		char cmd;

		cin >> num >> cmd >> repeat;

		if(wall || robot)
			continue;

		int dx = v[num].first.first;
		int dy = v[num].first.second;
		int dir = v[num].second;
		while(repeat--) {

			if(cmd == 'F') {
				board[dx][dy] = 0;
				dx += px[dir];
				dy += py[dir];
				if(dy < 1 || dx < 1 || dy > b || dx > a) {
					wall = num;
					break;
				}
				if(board[dx][dy]) {
					robot = num;
					crashRobot = board[dx][dy];
					break;
				}
				board[dx][dy] = num;
				v[num] = {{dx, dy}, dir};
			}
			else if(cmd == 'R') {
				dir = (dir + 1) % 4;
				v[num] = {{dx, dy}, dir};
			}
			else if (cmd == 'L') {
				dir = (dir + 3) % 4;
				v[num] = {{dx, dy}, dir};
			}
		}
	}
	if(wall)
		cout << "Robot " << wall << " crashes into the wall";
	else if(robot)
		cout << "Robot " << robot << " crashes into robot " << crashRobot;
	else
		cout << "OK";
}
```

좌표계가 조금 다르다는거만 빼면 천천히 구현해나가면 된다. y축이 반대로 되어있다는 것을 이용해서 좌표계를 눕혀서 생각했다. 따라서 원래 이차원 배열을 사용할 때 사용하는 좌표인 `arr[y][x]`를 `arr[x][y]`로 바꿔서 이용하였고 방향에 따른 움직임도 그러하게 90도 틀었다. 이후에는 벽에 부딪히는 것과 로봇 끼리 만나는 것을 구현해주기, 방향 틀기만 구현해주었다.

---

- 9 日

# PS

- Convert BST to Greater Tree

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    void inorder(TreeNode* root, vector<int*>& nums) {
        if(root != nullptr) {
            inorder(root->left, nums);
            nums.push_back(&root->val);
            inorder(root->right, nums);
        }
    }
    TreeNode* convertBST(TreeNode* root) {
        vector<int*> nums;
        inorder(root, nums);

        for (int i=nums.size()-1; i>0; i--) {
            *nums[i-1] += *nums[i];
        }
        return root;
    }
};
```

- [leetcode](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/)

같은 문제로 주소를 달았다.

![예시](https://assets.leetcode.com/uploads/2019/05/02/tree.png)

예제 사진과 같이 오른쪽 자식트리 -> 루트 -> 왼쪽 자식트리의 값을 경로에 따라 더해서 그대로 반환해주면 되는 문제이다.

문제에서는 오른쪽부터 시작하는 것으로 보이나, 결국에는 왼쪽 자식들의 값이 다 더한 값이 되므로, 트리 순회중 중위 순회를 이용하여 순서를 좌->루트->우로 만들 수 있다면 매우 편하게 풀 수 있을 것 같다.

따라서 중위 순회를 이용하여 벡터에 값을 넣어주며, 벡터의 인덱스로 접근할 수 있게 정수의 주소값을 자료형으로 삼았다. 이후에는 중위순회의 순서를 반대로 값을 더해가면 nums[0]에는 최종적으로 모든 값의 합이 담기게 되며, 그 경로의 값들 또한 잘 더해진다.

---

# 객체지향의 사실과 오해

이번 설 연휴를 이용하여 사놓고 잠시 잊혀졌던 책을 읽어볼려고 한다. 바로, 객체지향의 사실과 오해라는 책이다. 이 책은 사람들이 객체지향이라는 패러다임에 대해서 흔히 가지게 되는 오해와 생각들을 이해하기 쉽게 정리해준다.

## 객체와 클래스

그 중 하나는 바로 객체지향을 생각할 때 핵심을 클래스로 생각하게 되는데 객체지향에 있어서 핵심은 클래스가 아닌 적절한 책임을 수행하는 역할간의 유연하고 견고한 협력관계를 구축하는 것이다. 클래스는 단지 협력하는 객체를 만들 때 필요한 구현 매커니즘일 뿐이라는 것이다. 클래스가 중요하지 않은 것이 아니라 사람들이 핵심을 잘못 알고 있다는 점을 지적해준다.

나는 객체지향에 대해서 배울 때 C++과 Java를 이용해서 클래스를 구축하고 캡슐화, 다형성 등 여러가지 용어에 대해서 배웠다. 하지만 책의 필자는 그것들이 중요한 것이 아니라고 얘기한다. 즉, 다른 것들은 구현하기 위한 수단일 뿐이고 객체지향의 목적과 핵심을 정확히 생각하라는 것이다.

> 클래스의 구조나 메서드가 아닌 객체의 역할, 책임, 협력에 집중하라. 객체지향은 클래스 지향이 아닌 객체 지향이다.

실생활과 빗대어서 객체에 대해 설명하는데 많은 생각을 하게 하였다. 클래스를 구현하고 그걸 토대로 객체지향 프로그래밍을 했다고 생각하였고 클래스를 사용함을써 나는 객체지향을 배웠다고 생각했다. 하지만 이 책은 몇 장 읽지 않았는데 그 부분이 오해였다고 말하니 다음에 이야기할 내용이 무엇인지 궁금해진다.

---

- 10 日

# PS

- Copy List With Random Pointer

```cpp
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
    	if(head == nullptr)
    		return head;

        Node* original = head;
        while(original != nullptr) {
        	Node* copyNode = new Node(original->val);
        	copyNode->next = original->next;

        	original->next = copyNode;
        	original = copyNode->next;
		}

		original = head;

		while(original != nullptr) {
			if(original->random != nullptr) {
				original->next->random = original->random->next;
			}
			original = original->next->next;
		}

		original = head;
		Node* answer = head->next;
		Node* temp = answer;
		while(original != nullptr) {
			original->next = original->next->next;
			if(original->next != nullptr) {
				temp->next = original->next->next;
			}
			original = original->next;
			temp = temp->next;
		}
		return answer;
    }
};
```

깊은 복사를 통해서 새로운 주소를 갖는 연결 리스트를 만들어야한다. 따라서 사이트에서 힌트에서 말하는 `A -> B -> C -> D`라면 `A -> A' -> B -> B' -> C -> C' -> D -> D'`로 새로 연결리스트를 생성한 다음 `A' -> B' -> C' -> D'`로 연결하도록 만들어서 반환하는게 문제의 답이다. random과 next 부분을 해당 길게 둔 리스트를 이용해서 해결하면 된다.

---

# 객체지향의 사실과 오해

## 객체

객체의 다양한 특성을 효과적으로 설명하기 위해서는 상태, 행동, 식별자를 지닌 실체로 보는 것이 가장 효과적이다고 한다.

### 상태와 프로퍼티

- 상태를 이용하면 과거에 얽매이지 않고 현재를 기반으로 객체의 행동 방식을 이해할 수 있다.
- 객체의 상태를 구성하는 모든 특징을 프로퍼티라고 한다. 프로퍼티는 정적이나, 프로퍼티 값은 동적이다.
- 객체와 객체 사이의 의미있는 연결인 링크가 존재해야 요청을 받고 보낼 수 있다.

### 행동

- 행동을 통해 객체 자신의 상태를 변경시킨다. 이 행동을 부수 효과(side effect)라고 한다.
  - 객체 자신의 상태 변경
  - 행동 내에서 협력하는 다른 객체에 대한 메시지 전송
- 행동은 객체의 상태를 변경시키지만 행동의 결과는 객체의 상태에 의존적이다.
  - 객체의 행동은 상태에 영향을 받는다.
  - 객체의 행동은 상태를 변경시킨다.
- 행동을 상태를 이용하여 두 가지 관점으로 서술하면
  - 상호작용이 현재의 상태에 어떤 방식으로 의존하는가
  - 상호작용이 어떻게 현재의 상태를 변경시키는가

> 행동이란 외부의 요청 또는 수신된 메시지에 응답하기 위해 동작하고 반응하는 활동이다. 행동의 결과로 객체는 자신의 상태를 변경하거나 다른 객체에게 메시지를 전달할 수 있다. 객체는 행동을 통해 다른 객체와의 협력에 참여하므로 행동은 외부에 가시적이어야 한다.

### 캡슐화

객체간의 메시지 송수신시에 송신자는 수신자의 상태 변경에 대해서는 알지 못한다. 즉, 객체는 상태를 캡슐 안에 감춰둔 채 외부로 노출하지 않는다. 이것이 캡슐화가 의미하는 것이다. 이 때 외부에 노출되는 것은 행동 뿐이며, 접근할 수 있는 유일한 방법이다.

행동을 경계로 캡슐화하는 것은 객체의 자율성을 높인다. 스스로 판단하고 스스로 결정하는 객체가 자율성이 높아질 수록 지능이 높아진다. 협력하는 객체들의 지능이 높아지면 협력은 유연하고 간결해진다.

> 상태를 잘 정의된 행동 집합 뒤로 캡슐화하는 것은 객체의 자율성을 높이고 협력을 단순하고 유연하게 만든다.

이러한 내용이 상태를 캡슐화 해야하는 이유이다.

---

- 11 日

# PS

- Valid Anagram

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int alpha[26], dif[26];
        memset(alpha, 0, sizeof(alpha));
        memset(dif, 0, sizeof(dif));
        if(s.length() != t.length())
            return false;

        for (int i=0; i<s.length(); i++) {
            alpha[s[i] - 'a']++;
            dif[t[i] - 'a']++;
        }

        for (int i=0; i<26; i++) {
            if(alpha[i] != dif[i])
                return false;
        }

        return true;
    }
};
```

두 문자열이 주어졌을 때 Anagram인지 확인하는 문제이다. 처음에는 쉽게 해결하기 위해 next_permutation을 이용해서 같은 문자열이 있는지 체크했으나 테스트 케이스에 엄청 긴 문자열이 있어서 시간초과가 나왔다. 이후에는 알파벳 수를 센 뒤 숫자가 같으면 Anagram으로 판명하고, 만약 길이가 다르다면 문자의 갯수도 다르기 때문에 거짓을 반환했다.

- `2631. 줄세우기`

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 200 + 1;

int arr[MAX];
int dp[MAX];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int n, ans = 0;
	cin >> n;
	for (int i=1; i<=n; i++) {
		cin >> arr[i];
	}

	for (int i=1; i<=n; i++) {
		dp[i] = 1;
		for (int j=1; j<=i; j++) {
			if(arr[j] < arr[i] && dp[i] < dp[j]+1) {
				dp[i] = dp[j] + 1;
			}
		}
		if(ans < dp[i])
			ans = dp[i];
	}
	cout << n - ans;
}
```

1 ~ n까지의 숫자가 무작위로 주어질 때 오름차순으로 정렬하기 위한 최소의 움직임 수를 구하는 문제이다. 최소의 움직임을 알기 위해서는 LIS (최장 증가 부분 수열)을 구해야한다. 오름차순으로 정렬하기 위한 최소의 움직임을 구해야하는데 이미 증가 부분 수열로 된 부분은 건들일 필요가 없기 때문에 최장 증가 부분 수열 크기를 전체 크기에서 뺀 숫자가 정답이다.

따라서 다이나믹 프로그래밍을 이용하여 최장 증가 부분 수열을 구한 뒤 전체 크기에서 그 크기를 빼주었다.

- `2170. 선 긋기`

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	vector<pair<int,int>> v;
	int n, ans = 0;
	cin >> n;

	for (int i=0; i<n; i++) {
		int s, e;
		cin >> s >> e;
		v.push_back({s,e});
	}

	sort(v.begin(), v.end());

	int start = v[0].first;
	int end = v[0].second;

	for(int i=1; i<v.size(); i++) {
		if(v[i].first > end) {
			ans += end - start;
			start = v[i].first;
			end = v[i].second;
		}
		else if(v[i].first < end && end < v[i].second)
			end = v[i].second;
	}
	ans += end - start;

	cout << ans;
}
```

도화지에 선을 긋는 출발점과 도착점이 주어지게 되는데 이 값들을 가지고 선을 그은 총 길이를 구하는 문제이다. 이 때 겹치는 선은 하나로 생각해야한다.

따라서 문제를 해결하기 위해 먼저 시작 지점을 기준으로 전부 정렬을 한 다음 선이 겹치는 경우와 안 겹치는 경우로 나누어서 해결하였다. 먼저 안 겹치는 경우에는 지금까지 그은 선들을 다 더해 값을 구한다. 그리고 새로 선을 시작하기 때문에 시작 지점과 도착 지점을 바꿔준다. 겹치는 경우에는 시작 지점은 그대로 두고 도착 지점을 계속 갱신해준다. 만약 계속 겹치게 긋다가 끝난다면 값을 더해주지 않기 때문에 마지막으로 도착 지점에서 시작 지점을 빼서 길이를 구해준다.

---

- 12 日

# PS

- Number of Steps to Reduce a Number to Zero

```cpp
class Solution {
public:
    int numberOfSteps (int num) {
        int answer = 0;
        while(num) {
            if(num & 1)
                num--;
            else
                num /= 2;
            answer++;
        }
        return answer;
    }
};
```

Leetcode 오늘의 문제는 홀짝 나눠서 짝수일 땐 2로 나누고 홀수일 땐 1을 빼는 방식으로 몇번 반복되는지 체크하는 문제였다.

오늘은 해커랭크에서 자바스크립트를 이용해서 PS 문제를 풀어보았다. 조금이라도 익숙하게 사용하기 위해서 자바스크립트를 이용했지만 쉬운 난이도의 문제들이라서 빠르게 풀어나갔다. 이외에도 자주 자바스크립트를 이용해봐야겠다.

---

- 13 日

# PS

- Shortest Path in Binary Matrix

```cpp
class Solution {
private:
    int px[8] = {0, 1, 1, -1, -1, -1, 0, 1};
    int py[8] = {1, 0, 1, 1, 0, -1, -1, -1};
    bool visited[100][100];

public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int size = grid.size();
        queue<pair<pair<int,int>,int>> q;
        if(!grid[0][0])
            q.push({{0,0}, 1});

        while(!q.empty()) {
            int y = q.front().first.first;
            int x = q.front().first.second;
            int cnt = q.front().second;
            q.pop();

            if(y == size-1 && x == size-1) {
                return cnt;
            }

            for(int i=0; i<8; i++) {
                int dy = y + py[i];
                int dx = x + px[i];

                if(dy < 0 || dx < 0 || dy >= size || dx >= size)
                    continue;
                if(grid[dy][dx] || visited[dy][dx])
                    continue;

                q.push({{dy,dx}, cnt+1});
                visited[dy][dx] = true;
            }
        }
        return -1;
    }
};
```

`n*n` 행렬이 있을 때 `[0,0]`에서 `[n-1,n-1]`까지 가는 최소 거리를 구하는 문제로, 단순한 8방향 BFS문제이다. 만약 불가능하다면 -1을 리턴하고 이외에는 제대로된 거리를 리턴해주면 된다.

또한 JS로 해커랭크에서 계속적으로 문제 풀이를 하고 있다. 하지만 남길 정도의 난이도는 아니라서 금방금방 넘기고 있다. 미디움 이상부터는 기억에 남는 내용을 기록하려고 한다.

---

- 14 日

# PS

- Is Graph Bipartite?

```cpp
class Solution {
private:
    int visited[100];
    bool ansFlag;
public:
    void dfs(vector<vector<int>>& graph, int start, int color) {
        if(ansFlag || visited[start])
            return;

        visited[start] = color;

        for(int i=0; i<graph[start].size(); i++) {
            if(color == visited[graph[start][i]]) {
                ansFlag = true;
                return;
            }
            else if(!visited[graph[start][i]]) {
                if(color == 1)
                    dfs(graph, graph[start][i], 2);
                else
                    dfs(graph, graph[start][i], 1);
            }
        }
    }

    bool isBipartite(vector<vector<int>>& graph) {
        ansFlag = false;
        memset(visited, 0, sizeof(visited));
        for(int i=0; i<graph.size(); i++) {
            if(!visited[i])
                dfs(graph, i, 1);
        }

        return !ansFlag;
    }
};
```

주어진 그래프가 이진 그래프인지 확인하는 문제이다. 이진 그래프란, 두 가지 색이 존재할 때 한 정점에 빨간색을 칠했다고 가정하면 인접한 정점들은 모두 파란색을 칠해야한다. 이러한 방식으로 칠해져있을 때 모든 그래프 정점의 인접한 정점들의 색이 달라야 이진 그래프라고 할 수 있다.

여기서는 풀이를 깊이우선탐색으로 진행하였다. visited 배열에서 방문하지 않으면 0으로 초기화되어 있고 방문시에는 1 혹은 2로 칠해져있다. 따라서 함수를 통해서 정점에 색깔을 칠한 뒤 깊이우선탐색으로 다음 정점에서는 현 정점과는 다른 색을 칠해야한다. 이러한 반복이 이뤄졌을 때 자기와 인접한 정점이 자기와 같은 색깔이라면 함수를 끝내고 boolean 값을 리턴하게 된다.

이 때 반환된 값이 true라면 이진 그래프가 아니란 의미이므로, 목적은 반대로 반환해줘야한다.

- [between-two-sets](https://www.hackerrank.com/challenges/between-two-sets)

```js
function getTotalX(a, b) {
  const min = Math.min(...a);
  const max = Math.max(...b);
  const result = [];
  const funcA = (item, x) => x % item === 0;
  const funcB = (item, x) => item % x === 0;

  for (let i = min; i <= max; i++) {
    if (a.every((el) => funcA(el, i)) && b.every((el) => funcB(el, i))) {
      result.push(i);
    }
  }

  return result.length;
}
```

a와 b 두 배열이 주어지는데 이 때, a 배열의 모든 원소에 나누어 떨어지면서 b 배열의 모든 원소에 나눌 수 있는 숫자를 찾아야한다. 따라서 a 배열의 최소 공배수 부터 b 배열의 최대 공약수까지 찾아보면 된다. 사이의 a의 공배수면서 b의 공약수인 수를 찾게되는데 이 때 `every()`를 사용하면 편하게 구현할 수 있다.

- [Array.every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

배열 안의 모든 원소를 판별 함수를 통과하는지 체크해주는 메서드이다. 이 때 빈 배열도 true로 반환해준다는 점을 기억해주면 좋을 것 같다. 따라서 a와 b의 조건에 맞게 판별 함수를 만든 뒤 조건문을 통해서 부합하는 숫자를 찾아 result 배열에 등록하여 그의 맞는 숫자 갯수를 알 수 있다.

every() 메서드를 처음보게 되어 사용하는 방법도 익힐 겸 기록해보았다. 자바스크립트에 내장된 메서드를 하나하나 알아가는 시간을 가지고 있어서 응용하면 남들이 알아보기 편하고 쉽게 구현할 수 있는 코드가 나올 공부가 된다.

---

- 15 日

# PS

- The K Weakest Rows in a Matrix

```cpp
bool cmp(pair<int,int> &a, pair<int,int> &b) {
    if(a.first == b.first)
        return a.second < b.second;
    return a.first < b.first;
}

class Solution {
public:

    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        vector<pair<int,int>> v;
        vector<int> answer;
        for(int i=0; i<mat.size(); i++) {
            int cnt = 0;
            for(int j=0; j<mat[i].size(); j++) {
                if(mat[i][j])
                    cnt++;
            }
            pair<int,int> p;
            p = {cnt, i};
            v.push_back(p);
        }
        sort(v.begin(), v.end(), cmp);
        for (int i=0; i<k; i++) {
            answer.push_back(v[i].second);
        }
        return answer;
    }
};
```

배열에서 각 row마다 1의 갯수를 구해서 오름차순으로 정렬한 뒤 k 갯수만큼을 반환하는 문제이다.

바로 생각난 방법은 pair를 이용하여 row 순번과 1의 갯수를 정렬하고 값 그대로 이용하는 것이었다.

---

# ICT 인턴십 코딩테스트

서류 전형에 코딩테스트를 총 5문제로, 해커랭크에서 진행되었다. 약 3시간 정도로 풀이를 했는데 대부분 풀이를 하고 시간초과로 인해서 새로 풀이하면서 시간을 잡아먹었다. 생각해보면 어렵지 않은 문제들이었지만 바로바로 생각해내지 못했다. 그 부분에 있어서는 문제를 제대로 이해하지 못한 게 있는 것 같다.

문제가 영어라서 바로바로 눈에 들어오지 않아서 바로 테스트 케이스에 눈이 가버리고 말았다. 그래서 놓친 부분이 많아서 시간이 상당히 소모되었다. 이후에 해커랭크에서 진행되면 영어를 조금 더 열심히 읽어야겠다.

---

- 16 日

# PS

- Letter Case Permutation

```cpp
class Solution {
private:
    vector<string> v;
    int dif = 'a' - 'A';
public:
    void solve(string s, int idx, string temp) {
        if(idx == s.length()) {
            v.push_back(temp);
            return;
        }

        solve(s, idx+1, temp + s[idx]);

        if('a' <= s[idx] && s[idx] <= 'z') {
            char upper = s[idx] - dif;
            solve(s, idx+1, temp + upper);
        }
        else if('A' <= s[idx] && s[idx] <= 'Z') {
            char lower = s[idx] + dif;
            solve(s, idx+1, temp + lower);
        }
    }

    vector<string> letterCasePermutation(string S) {
        solve(S, 0, "");
        return v;
    }
};
```

주어진 문자열 중 알파벳만 대소문자를 바꿔가면서 순열과 같이 만드는 문제이다. 원래 알파벳의 상태를 문자열에 붙여주고 소문자라면 대문자를, 대문자라면 소문자를 재귀 함수에 문자열을 붙이는 식으로 진행하였다.

처음에는 여러 가지 시행착오가 있었는데, 그 중 하나는 문자열에 알파벳을 제외한 숫자도 있다는 것이였다. 문자열 길이를 비트로 변환해서 각 비트 별로 문자열 하나하나를 대입하여 대소문자를 넣어주려고 했으나, 숫자가 끼어있어서 터무니없이 긴 시간이 걸렸다. 결국에 도달한 것이 재귀함수를 이용한 풀이였다.

---

- 17 日

# PS

- Container With Most Water

```cpp
class Solution {
public:
    int maxArea(vector<int>& height) {
        int answer = 0;
        int left = 0;
        int right = height.size()-1;

        while(left < right) {
            int width = min(height[left], height[right]);
            int temp = width * (right - left);
            height[left] < height[right] ? left++ : right--;
            answer = max(answer, temp);
        }
        return answer;
    }
};
```

주어진 그래프를 가지고 x좌표 중 두 곳을 골라서 너비로, x좌표에 해당하는 그래프의 길이 중 더 짧은 길이를 높이로 하는 넓이를 구해야한다. 이 때 넓이가 최대가 되는 값을 구하는 문제이다.

제일 처음에는 이중포문을 통해서 모든 지점을 다 확인하여 값을 반환했으나, 시간초과가 일어났다. 그래서 다음에는 이진 탐색을 이용해서 그래프 전체에서 왼쪽과 오른쪽을 하나씩 좁혀가면서 가장 큰 넓이를 구하도록 하였다.

---

# Linux Shell Script

bash 쉘에 대해서 기초적인 것을 적어보려고 한다.

## 쉘이란?

shell 은 운영체제의 커널과 사용자 사이를 이어주는 역할을 하며, shell은 상용자의 명령어를 해석하고 운영체제가 알아들을 수 있게 지시해준다.

그 후에 운영체제는 shell 에게서 받은 지시를 해석하여 하드웨어를 위한 지시어로 바꾸어준다.

## bash shell

### echo

```sh
#! /bin/bash

echo"print ~~"
```

print할 때 사용하는 명령어로 위와 같이 사용하면 된다.

### 변수 사용

```sh
#! /bin/bash

a=1
b=5
c="hello"

echo"$a $b $c"
```

변수는 선언과 동시에 정의를 하면 되며, 호출은 펄과 유사하게 `$`를 사용해서 호출하면 된다.

### 값 입력

```sh
#! /bin/bash

echo -n "input something :"

read input

echo "$input"
```

### 사칙연산

```sh
#! /bin/bash

a=1
b=1

result1 = `expr $a + $b`
result2 = `expr $a - $b`
result3 = `expr $a \* $b`
result4 = `expr $a / $b`
```

사칙연산은 똑같이 하되 expr을 명시해야하며, 곱하기의 경우에는 백슬래쉬를 앞에 쓰고 사용해야한다.

### 조건문

- if

```sh
if [ 조건 ]; then
    내용
elif [ 조건 ]; then
    내용
else
    문장
fi
```

if문에 쓰이는 조건들은 전부 정해져있으며 그대로 사용해야한다.

`[-z]`: 문자열의 길이가 0이면 참, `[-n]`: 문자열의 길이가 0이 아니면 참.

이런식으로 정해진 조건들을 확인해야한다.

- case

```sh
case 변수 in
    경우 1)
    ;;
esac
```

### 반복문

- for문

```sh
for 변수 in 반복조건
    do
        내용
    done
```

- while문

```sh
while [ 값1 조건식 값2 ]
    do
        내용
    done
```

- [레퍼런스](https://kangsecu.tistory.com/54)

---

- 18 日

# PS

- Arithmetic Slices

```cpp
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& A) {
        int size = A.size();
        vector<int> dp(size);
        int ans = 0;
        for(int i=2; i<size; i++) {
            if(A[i] - A[i-1] == A[i-1] - A[i-2]) {
                dp[i] = dp[i-1] + 1;
                ans += dp[i];
            }
        }
        return ans;
    }
};
```

일정하게 증가하는 배열을 구하는 문제로, 배열의 길이는 3 이상이다. 따라서 이어지는 값을 더해주기 위해서 dp 벡터를 만들어서 이어줬다.

---

- 19 日

# PS

- Minimum Remove to Make Valid Parentheses

```cpp
class Solution {
public:
    string minRemoveToMakeValid(string s) {
        stack<int> st;
        string answer;
        for(int i=0; i<s.length(); i++) {
            if(s[i] == '(') {
                st.push(i);
            }
            else if(s[i] == ')') {
                if(!st.empty())
                    st.pop();
                else
                    s[i] = '+';
            }
        }
        while(!st.empty()) {
            s[st.top()] = '+';
            st.pop();
        }

        for(int i=0; i<s.length(); i++) {
            if(s[i] != '+')
                answer += s[i];
        }

        return answer;
    }
};
```

문자열이 주어지는데 이 떄 잘못된 괄호가 있으면 전부 지우고 온전한 괄호만 포함한 채로 문자열을 반환하는 문제이다. 처음에는 닫힌 괄호에만 신경 썼더니 `))((`와 같은 예제에는 문제가 있었다.

이후에 생각한 것은 문자열에서 문제있는 부분을 전부 `+`로 바꿔버리는 것이다. 그렇게하면 짝을 가지지 못한 괄호들을 전부 바꿀 수 있었다. 이후에 마지막에 반환하는 문자열에 그 부분을 포함하지 않으면 원하는 문자열을 얻을 수 있다.

---

- 20 日

# PS

- Roman to Integer

```cpp
class Solution {
public:
    int romanToInt(string s) {
        int result = 0;
        map<char, int> m;
        m.insert({'I', 1});
        m.insert({'V', 5});
        m.insert({'X', 10});
        m.insert({'L', 50});
        m.insert({'C', 100});
        m.insert({'D', 500});
        m.insert({'M', 1000});

        for(int i=0; i<s.length()-1; i++) {
            int cur = m[s[i]];
            int next = m[s[i+1]];

            cur >= next ? result += cur : result -= cur;
        }
        result += m[s[s.length()-1]];
        return result;
    }
};
```

로마자를 숫자로 변환하는 문제이다. 쉽게 생각해서 뒤에 나오는 문자가 현재 문자보다 크면 결과값에서 빼주고 크거나 같으면 더해주는 방식으로 풀어줬다. map을 이용하여 조금 더 직관적으로 해결하였다.

---

- 21 日

# PS

- Broken Calculator

```cpp
class Solution {
public:
    int brokenCalc(int X, int Y) {
        int result = 0;

        while(Y > X) {
            if(Y&1) {
                Y++;
            }
            else {
                Y /= 2;
            }
            result++;
        }
        return result + X - Y;
    }
};
```

계산기가 고장나서 숫자에 1을 빼거나 2를 곱하는 방법밖에 없는 상황에서 X를 Y와 같게 만드는 문제이다. 처음에는 큐를 이용하였지만 시간 초과로 인해서 다른 사람 코드를 참조하여 풀어보았다. 주체를 X가 아닌 Y로 두고 Y가 홀수 일때 1을 더해서 짝수로 만들어주고 짝수일 때는 2로 나누어졌다. 반복조건은 X가 Y보다 작을 때만 반복하게 하여 그 반복 횟수와 X와 Y의 차이를 더해 값을 구했다.

처음에는 이해하기 어려웠으나, 기능 두 가지를 활용하여 X보다 Y를 작게 만들어서 그 차이는 무조건 한 기능을 이용하기 때문에 그 과정을 이용한 것을 알 수 있었다.

---

- 22 日

# PS

- Longest Word in Dictionary through Deleting

```cpp
class Solution {
public:
   bool isSubsequence(string s1, string s2){
      int j = 0;
      for(int i = 0; i < s1.size(); i++){
         if(s2[j] == s1[i]){
            j++;
            if(j == s2.size()) break;
         }
      }
      return j == s2.size();
   }
   string findLongestWord(string s, vector<string>& d) {
      string ans = "";
      for(int i = 0; i < d.size(); i++){
         string x = d[i];
         if(x.size() > ans.size() || (x.size() == ans.size() && (x < ans))){
            if(isSubsequence(s, x)) ans = x;
         }
      }
      return ans;
   }
};
```

주어진 문자열에서 문자들을 삭제해서 만들 수 있는 단어 중 가장 긴 단어를 d 배열에서 뽑아서 반환해야한다. 이 때 길이가 같다면 사전적 정의가 앞인 단어를 반환하면 된다.

처음에 시도한 방법은 알파벳 수를 전부 세서 배열로써 가지고 갯수를 충족하나를 찾아주었다. 하지만, 여기서 간과한 점이 있었다. 바로, 문자열의 부분수열에 속해야하는 것이었다. 문자열에서 문자들을 삭제한다고 문자들의 자리가 재배열되지는 않는다. 따라서 같은 알파벳 숫자를 가지고 있는 것이아니라 부분수열중에서 가장 크기가 길면서도 사전적 정의가 앞에 위치한 단어를 찾아줘야하는 문제였다.

---

- 23 日

# PS

- Search a 2D Matrix II

```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int row = matrix.size();
        int col = matrix[0].size();

        int i = 0;
        int j = col - 1;

        while(i < row && j >= 0) {
            if(matrix[i][j] < target)
                i++;
            else if(matrix[i][j] > target)
                j--;
            else
                return true;
        }
        return false;
    }
};
```

배열이 주어지는데 이 배열의 행과 열이 각각 오름차순으로 정렬되어 있다. 그 배열에서 주어진 target이란 값이 있는지 확인하는 문제이다. 최악의 경우 O(n^2) 시간복잡도가 걸리는데 배열의 크기가 `-10^9 <= target <= 10^9`이므로 시간이 엄청 걸린다.

따라서 target을 찾기 위해서 오른쪽 위부터 target보다 현재 숫자가 작으면 열의 인덱스를 증가시키고 현재 숫자가 크다면 그 행에 있다는 말이므로 해당 행에서 target을 찾는 식으로 구현하였다.

---

- 정보처리기사

요즘에는 정보처리기사 필기를 시험보기 위해서 공부 중인데, 과목 1,2을 위주로 공부중이다. 학교 강의로는 소프트웨어공학 과목에 속한 내용인데 학교 강의에서도 마찬가지로 외워야하는 항목들이 너무 많아서 조금 어려워하고 있다.

---

- 24 日

# PS

- `1074. Z`

```cpp
#include <bits/stdc++.h>
using namespace std;

int N, r, c, cnt;

void sol(int size, int y, int x) {
    if(y == r && x == c) {
        cout << cnt;
        return;
    }
    if(size == 1) {
        cnt++;
        return;
    }
    if(y > r || r >= y+size || x > c || c >= x+size) {
        cnt += size * size;
        return;
    }

	sol(size/2,y,x);
	sol(size/2,y,x+size/2);
	sol(size/2,y+size/2,x);
	sol(size/2,y+size/2,x+size/2);

}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cin >> N >> r >> c;
	sol(pow(2,N),0,0);
}
```

재채점으로 인해 시간초과로 오답으로 나와 다시 풀이를 해보았다. 분할정복을 이용해서 풀이를 하였으나, 시간을 줄이기 위해서 분할 시에 크기가 1인 된 경우를 1개로 보고, 해당 사분면을 다 체크한 경우에는 사분면 크기만큼을 답에 더해주었다. 전에는 사분면이 아닌 하나하나를 전부 체크하여 시간이 부족하였던 것으로 보인다.

---

- 25 日

# PS

- Shortest Unsorted Continuous Subarray

```cpp
class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        int size = nums.size();
        int left = -1, right = -1;
        int max = -10e5;
        int min = 10e5;

        for(int i=0; i<size; i++) {
            if(max < nums[i])
                max = nums[i];
            else if(max > nums[i])
                left = i;
        }

        for(int i=size-1; i>=0; i--) {
            if(min > nums[i])
                min = nums[i];
            else if(min < nums[i])
                right = i;
        }

        if(left == -1)
            return 0;
        return abs(right - left - 1);
    }
};
```

주어진 배열을 오름차순으로 바꿔야할 때, 가장 적게 옮겨서 오름차순을 만들 수 있는 횟수를 구하는 문제이다. 따라서 왼쪽과 오른쪽에서 각각 최댓값과 최솟값을 이용해서 해당 값이 역전되는 인덱스를 찾아서 인덱스 사이의 거리를 구하였다.

---
