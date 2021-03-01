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

| [1월](./years/2021/1월.md) | [2월](./years/2021/2월.md) |
| -------------------------- | -------------------------- |

---

- 1 日

# PS

- Distribute Candies

```cpp
class Solution {
public:
    int distributeCandies(vector<int>& candyType) {
        set<int> s;
        for(int i=0; i<candyType.size(); i++) {
            s.insert(candyType[i]);
        }
        return min(s.size(), candyType.size()/2);
    }
};
```

앨리스가 먹을 사탕 종류를 나누는 문제이다.

사탕 종류가 같은 것들이 들어있을 수도 있으므로 종류만 체크하기 위해서 set을 사용하였다.

set의 크기 즉, 사탕의 종류와 사탕의 갯수의 절반 중 작은 숫자를 반환해주면 되는 문제이다.

---
