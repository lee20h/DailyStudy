#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6 + 1;

int fail[MAX];

/*
	���ڿ��� n �����̶� �κй��ڿ��� n�� �̾�ٿ��� �� �ش� ���ڿ��� ���;��ϱ� ������
	���λ��̸鼭 ���̻��� �κй��ڿ��� ���̸� �����Լ��� ���ؼ� �����Ѵ�.
	���� ���ڿ��� �ε��� - 1�� �� �κй��ڿ��� ���̴� ���ڿ��� n�� �������� ���� �κй��ڿ��� �����̴�.
	��, length / length - fail[leength-1] �� ������ ���ϸ� �縰����� �������ְ� ã���ָ� �ȴ�. 
*/

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	string str;
	cin >> str;
	int n = 0;
	for (int i=1, j=0; i<str.length(); i++) {
		while(j > 0 && str[i] != str[j])
			j = fail[j-1];
		if(str[i] == str[j]) {
			fail[i] = ++j;
		}
	}
	
	for (int i=2; i<=str.length(); i++) {
		if (fail[i-1] == 0 || fail[i - 1] % (i - fail[i - 1])) // �縰��� 
			continue;
		int ans = i / (i - fail[i-1]); // ������ 
		if(ans > 1) { // ������ ���� ��� 
			cout << i << ' ' << ans << '\n';
		}
	}
}
