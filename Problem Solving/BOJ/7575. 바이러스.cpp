#include <bits/stdc++.h>
using namespace std;

const int MAX = 1000 + 1;

int len[MAX];
int sub[MAX];
vector<int> programs[MAX];
int n, k;
bool checked[MAX];
int fail[MAX];
/*
	ù��° ���α׷� �ڵ忡�� K�� �� ������ ��� ����� ���� ������ ���α׷��� KMP �����ؼ� ���� �κ� ���� Ȯ��
	J��° ���α׷����� KMP ���� �� reverse���Ѽ� �ٽ� KMP Ȯ�� 
*/                             

bool kmp(int idx) {
	memset(fail,0,sizeof(fail));
	for(int i=1, j=0; i<k; i++) {
		while(j > 0 && sub[i] != sub[j]) 
			j = fail[j-1];
		if(sub[i] == sub[j])
			fail[i] = ++j;
	}
	
	for (int i=0, j=0; i<len[idx]; i++) {
		while(j > 0 && programs[idx][i] != sub[j])
			j = fail[j-1];
		if(programs[idx][i] == sub[j]) {
			if(j == k-1) { // k�� �� ������ �����  �� 
				return true;
			}
			else
				j++;
		}
	}
	return false;
}


int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cin >> n >> k;
	for (int p=0; p<n; p++) {
		cin >> len[p];
		vector<int> t(len[p]);
		for (int i=0; i<len[p]; i++) {
			cin >> t[i];
			programs[p] = t;
		}
	}
	bool ans = false;
	for (int i=0; i<=len[0]-k; i++) { // ù ���α׷����� K���� ¥�� 
		for (int j=0; j<k; j++)
			sub[j] = programs[0][i+j];
		
		memset(checked, false, sizeof(checked));
		
		for (int j=1; j<n; j++)
			checked[j] = kmp(j);
			
		for (int j=1; j<n; j++) {
			if(checked[j])
				continue;
			
			reverse(programs[j].begin(), programs[j].end());
			checked[j] = kmp(j);
		}
		
		bool flag = true;
		for (int j=1; j<n; j++) {
			if(!checked[j]) {
				flag = false;
				break;
			}
		}
		
		if(flag) {
			ans = true;
			break;
		}
	}
	if(ans)
		cout << "YES";
	else
		cout << "NO";
}
