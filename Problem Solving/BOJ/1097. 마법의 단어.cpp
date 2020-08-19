#include <bits/stdc++.h>
using namespace std;

int fail[1000 + 1];
/*
	T�� ����Ʈ�� ���ڿ� (�ִ� T.length()��)�� T�� �������� ��찡 K�� ����
	���ڿ����� �־����� �� ������ �������� ���� �� �ִ� �ܾ� �� ���
	������ next_permutation ����ϰ� kmp�� ���� ���ϵ�, �־��� ���ڿ��� ������ ���ԵǸ�
	�ڱ� �ڽŰ� �����Ƿ� length()���� -1��ŭ ���ش�. 
*/
int kmp(string a, string b) {
	memset(fail, 0, sizeof(fail));
	int cnt = 0;
	for (int i=1, j=0; i<a.length(); i++) {
		while(j > 0 && a[i] != b[j])
			j = fail[j-1];
		if(a[i] == b[j])
			fail[i] = ++j;
	}
	for (int i=0, j=0; i<a.length()-1; i++) {
		while(j > 0 && a[i] != b[j])
			j = fail[j-1];
		if(a[i] == b[j]) {
			if(j == b.length()-1) {
				cnt++;
				j = fail[j];
			}
			else
				j++;
		}
			
	}
	return cnt;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, k;
	string s;
	vector<string> str;
	vector<int> v;
	cin >> n;
	for (int i=0; i<n; i++) {
		cin >> s;
		v.push_back(i);
		str.push_back(s);
	}
	
	cin >> k;
	int cnt = 0;
	
	do {
		string comb, word;
		for (int i=0; i<n; i++)
			word += str[v[i]];
		
		comb = word + word;
		
		if(kmp(comb, word) == k)
			cnt++;
		
	}while(next_permutation(v.begin(),v.end()));
	cout << cnt;
} 
