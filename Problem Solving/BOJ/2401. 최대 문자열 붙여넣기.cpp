#include <bits/stdc++.h>
using namespace std;

string short_str[501];
int fail[501][10001];
int dp[100001];
int mem[501];

/*
	fail �Լ��� �Ź� �����鼭 �ϳ��ϳ� ���ϰԵǸ� �޸� �ʰ��� �߰� �ȴ�.
	���� ª�� ���ڿ��� �����Լ��� ��� ���� ���� �� ���ڿ��� �ε��� ���ο���
	ª�� ���ڿ��� ���� kmp�� �����Ѵ�. �̶� kmp�� �ε����� i�� �� ���ڿ� ���� j�� ª�� ���ڿ���
	��� ������, ������ȹ���� �����ؼ� ������ �ε����� ������ �ε����� ���� ��� ������ �����Ѵ�.
	�� �� ��ġ�� ��� �ش� ���� ���ϰ� �� ū ���� ���ϴ� ������ �Ѵ�. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string str;
	int t;
	cin >> str >> t;
	int Len = str.length();
	for (int i=0; i<t; i++) {
		cin >> short_str[i];
		
		int len = short_str[i].length();
		
		for (int idx=1,j=0; idx<len; idx++) {
			while(j>0 && short_str[i][idx] != short_str[i][j])
				j = fail[i][j-1];
			if(short_str[i][idx] == short_str[i][j])
				fail[i][idx] = ++j;
		}
	}
	
	for (int i=0; i<Len; i++)  {
		if(i != 0)
			dp[i] = dp[i-1];
			
		for (int j=0; j<t; j++) {
			int len = short_str[j].length();
			
			while(mem[j]>0 && str[i] != short_str[j][mem[j]])
				mem[j] = fail[j][mem[j]-1];
			if(str[i] == short_str[j][mem[j]]) {
				if(mem[j] == len-1) { // �� ���ڿ��� �� �� ��� 
					int value = i - len >= 0 ? dp[i-len] : 0;
					value += len;
					dp[i] = max(dp[i], value);
					mem[j] = fail[j][mem[j]];
				}
				else
					mem[j]++;
			}
		}
	}
	cout << dp[Len-1];
	
}
