#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6+1;
long long fail[MAX];
/*
	KMP �����Լ��� �̿��ؼ� �κ� ���ڿ��� ���Ѵ�. 
	���λ�� ���̻簡 �����Ƿ� ��ü ���̿��� �ݺ��Ǵ� ���̸�ŭ�� ���� n-1�� �����ش�.
	�� ���� ��ü ���̿� ���ϸ� �ȴ�. n-1�� ������ �ڱ� �ڽ��� �����ϱ� �����̴�. 
*/

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	string c;
	long long n;
	cin >> c >> n;
	long long len = c.length();
	for (int i=1, j=0; i<len; i++) {
		while(j>0 && c[i] != c[j])
			j = fail[j-1];
		if(c[i] == c[j]) 
			fail[i] =  ++j;
	}
		
	cout << len + (len-fail[len-1]) * (n-1);
}

