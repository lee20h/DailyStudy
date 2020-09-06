#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6;

int fail[MAX];
int match[MAX];

/*
	match = ���ڿ� s1�� �ε����� �� ���ڿ� s2�� ��ġ�ϴ� �� �̷�, ���Ϳ� s1 ���ڿ� ������.
	������ ���ڿ� ã�� ��� ���Ϳ��� �� ��ŭ�� ���̸� ���� �� ������ ���ڿ��� ù ���ڰ� ������ ���� ���·� ���ư���.
	���� match�� ������ ��������� �ش� ���� �޾ƿ´�. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string s1, s2;
	cin >> s1 >> s2;
	
	for (int i=1,j=0; i<s2.length(); i++) {
		while(j>0 && s2[i] != s2[j])
			j = fail[j-1];
		if(s2[i] == s2[j])
			fail[i] = ++j;
	}
	
	vector<char> v;
	
	for (int i=0,j=0; i<s1.length(); i++) {
		v.push_back(s1[i]);
		while(j>0 && s1[i] != s2[j])
			j = fail[j-1];
		if(s1[i] == s2[j]) {
			if(j == s2.length()-1) {
				for(int i=0; i<s2.length(); i++)
					v.pop_back();
				j = match[v.size()];
			}
			else
				j++;
		}
		match[v.size()] = j;
	}
	for (auto ans : v)
		cout << ans;
}
