#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e5+1;

int fail[MAX];

/*
	�ݺ� ������ ����� ���ؼ� �����Լ��� ����ϴµ� �����Լ��� Ư¡�� ���λ�� ���̻簡 ��ġ�ϴ� ���� ã�°��̴�.
	fail[n]�� ���̻�� ���λ簡 ���� ū ���� ����ִ�. �� �κ��� fail[fail[n]]�� ��� �ݺ��ؼ�
	�ش� �ݺ� ������ ã�� �� �ִ�. 
*/

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, k;
	int ans = 0;
	cin >> n >> k;
	string str;
	cin >> str;
	
	for (int i=1, j=0; i<n; i++) {
		while(j>0 && str[i] != str[j])
			j = fail[j-1];
		if(str[i] == str[j])
			fail[i] = ++j;
	}
	
	if(n <= k)
		cout << n;
	else { // pattern ���� ����, cnt ���� Ƚ�� 
		for (int i= fail[n-1]; i>0; i = fail[i-1]) {
			int pattern = n-i;
			int cnt = (n+k)/pattern;
			if(cnt >= 2 && cnt * pattern >= n)
				ans = max(ans, pattern);
		}
		cout << ans;
	}
	
} 
