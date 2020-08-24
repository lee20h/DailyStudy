#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e5+1;
int fail[MAX];

/*
	��ȯ ���ڿ��� ȯ�� ���ڿ��� ���� ���Ƽ� �ι�� �÷��� �� KMP�˰����� ���� ���̸� ���ڿ��� ���̸�ŭ�� �����־���.
	���� �ڱ� �ڽ��� ������ϹǷ� ���ǿ��� 1�� ����, xor���꿡�� 0�� ������ �� ���� �κ��̹Ƿ� �״�� ã�´�. 
*/

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	string str, str2;
	int ans = 0;
	cin >> str;
	cin >> str2;
	
	str += str;
	
	for (int i=1, j=0; i<str2.length(); i++) {
		while(j>0 && str2[i] != str2[j])
			j = fail[j-1];
		if(str2[i] == str2[j])
			fail[i] = ++j;
	}
	
	for (int i=0, j=0; i<str.length()-1; i++) {
		while(j>0 && str[i] != str2[j])
			j = fail[j-1];
		if(str[i] == str2[j]) {
			if(j == str2.length()-1) {
				ans++;
				j = fail[j];
			}
			else
				j++;
		}
	}
	
	cout << ans;
}
