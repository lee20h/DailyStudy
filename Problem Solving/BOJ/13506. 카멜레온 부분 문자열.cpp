#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6+1;
int fail[MAX];

/*
	���λ�� ���̻簡 �� �� �Ǵ� �� �� ���� ��� ���ڿ��� ���� N�̴�.
	�ι�°�� �� ���� fail(n), �������� �� ���� fail(fail(n))�̴�.
	���� �̷��� ���� �������ٺ��� ���λ�� ���̻簡 ��� �Ǵ� ���ڿ��� ���´�.
	�׵� �� ���λ�� ���̻縦 �����ϰ� �ּ� �ѹ� �� ��Ÿ���� üũ�ؼ� �� ���ڿ��� ����ϸ� �Ǵµ�,
	���⼭ �յڷ� ���� �ϳ��� ���� ���λ� �� ���̻縦 �����ϰ� �ؼ� ã�Ҵ�. 
*/
int main() {
	string str;
	cin >> str;
	int ans = 0;
	for(int i=1,j=0; i<str.length(); i++) {
		while(j>0 && str[i] != str[j])
			j = fail[j-1];
		if(str[i] == str[j]) {
			fail[i] = ++j;
		}
	}
	
	int pivot = fail[str.length() - 1];
	bool flag = false;
	while(pivot) {
		for (int i=1; i<str.length()-1; i++) {
			if(fail[i] == pivot) {
				for (int j=0; j<pivot; j++) {
					cout << str[j];
				}
				flag = true;
				break;
			}
		}
		
		if(flag) break;
		pivot = fail[pivot-1];
	}
	if(!flag)
		cout << -1;
}
