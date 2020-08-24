#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6+1;

int fail[MAX];

/*
	�޽����� Ȯ���ϰ� �ް� �ϱ� ���ؼ� ��� �ݺ� �����Ѵٰ� �Ѵ�.
	�̶� �޴� �޽����� ���̴� ���� �޽����� ���̺��� ũ�ų� �����Ƿ�
	�ش� �κм����� ���ϵ� ���� ª�� �κм����� ���ϴ� ���̴�.
	���� �����Լ��� ���� ����, �ش� ���̿��� ���ش�. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n;
	cin >> n;
	string s;
	cin >> s;
	
	for (int i=1,j=0; i<n; i++) {
		while(j>0 && s[i] != s[j])
			j = fail[j-1];
		if(s[i] == s[j])
			fail[i] = ++j;
	}
	
	cout << n - fail[n-1];
}
