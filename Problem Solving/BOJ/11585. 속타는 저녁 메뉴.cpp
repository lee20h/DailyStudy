#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6+1;

char a[MAX];
char b[MAX*2];
int fail[MAX*3];

/*
	���� �귿�� ���� ���ڿ��� ȯ�� ���ڿ���, �ش� ���ڿ��� ���� �귿 ��翡 ������ ���� ���ؼ�
	���� �귿 ����� �ι�� �ø� ���� kmp �˰����� ���� �󸶳� ������ Ȯ���Ѵ�.
	���м��� ����� ���� �ִ������� ���ؼ� �����ش�. 
*/

int ShortFraction(int a, int b) {
	if(!(b%a))
		return a;
	return ShortFraction(b%a, a);
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n;
	cin >> n;
	int num = 0;
	for (int i=0; i<n; i++) {
		cin >> a[i];
	}
	for (int i=0; i<n; i++) {
		cin >> b[i];
		b[n+i] = b[i];
	}
	
	for (int i=1,j=0; i<n; i++) {
		while(j>0 && a[i] != a[j])
			j = fail[j-1];
		if(a[i] == a[j])
			fail[i] = ++j;
	}
	
	for (int i=0, j=0; i<n*2-1; i++) {
		while(j>0 && b[i] != a[j])
			j = fail[j-1];
		if(b[i] == a[j]) {
			if(j == n-1) {
				j = fail[j];
				num++;
			}
			else
				j++;
		}
	}
	
	cout << num/ShortFraction(num,n) << '/' << n/ShortFraction(num,n);
	
}
