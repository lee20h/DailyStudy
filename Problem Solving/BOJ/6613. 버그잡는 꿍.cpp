#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6*2;
int fail[MAX];
int idx[MAX];

/*
	bug �ܾ��� KMP �����Լ��� ���� �� �� �پ� bug �ܾ �ִ� �� Ȯ���Ѵ�.
	�� ���� �ε��� �迭�� ����� �ش� ������ �ε����� ã���ְ� char�� �迭�� ������ �κ��� �ι��ڸ� ������ ���Ѵ�. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n;
	string bug;
	while(cin >> n >> bug) {
		memset(fail, 0, sizeof(fail));
		
		for(int i=1,j=0; i<bug.length(); i++) {
			while(j>0 && bug[i] != bug[j])
				j = fail[j-1];
			if(bug[i] == bug[j])
				fail[i] = ++j;
		}
		cin.ignore();
		for (int t=0; t<n; t++) {
			string str;
			getline(cin,str);
			
			char ans[MAX];
			int k = 0;
			
			for(int i=0,j=0; i<str.length(); i++) {
				idx[k] = j;
				ans[k++] = str[i];
				while(j>0 && str[i] != bug[j])
					j = fail[j-1];
				if(str[i] == bug[j]) {
					if(j == bug.length()-1) {
						k -= bug.length();
						j = idx[k];
					}
					else
						j++;
				}
			}
			ans[k] = '\0';
			cout << ans << '\n';
		}
	}
}
