#include <bits/stdc++.h>
using namespace std;

const int MAX = 360000;

int fail[MAX+100];

bool origin[MAX+100];
bool comp[MAX*2+100];

/*
	�ٴ��� 360000�� ��ŭ �����ϹǷ� �� ������ ���ڸ�ŭ bool�� �迭�� üũ�� ��,
	�� �迭�� �ι�� �÷��� ������ �迭�� KMP �˰������� ���Ͽ���.
	�� �� MAX����ŭ for���� �������ϴ°� ���� �򰥷ȴ�. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, a;
	cin >> n;
	bool flag = false;
	for (int i=0; i<n; i++) {
		cin >> a;
		comp[a] = comp[a+MAX] = true;
	}
	
	for (int i=0; i<n; i++) {
		cin >> a;
		origin[a] = true;
	}
	
		
	for (int i=1, j=0; i<MAX; i++) {
		while(j>0 && origin[i] != origin[j])
			j = fail[j-1];
		if(origin[i] == origin[j])
			fail[i] = ++j;
	}
	
	for (int i=0, j=0; i<MAX*2; i++) {
		while(j>0 && comp[i] != origin[j])
			j = fail[j-1];
		if(comp[i] == origin[j]) {
			if(j == MAX-1) {
				flag = true;
				break;
			}
			else
				j++;
		}
	}
	if(flag)
		cout << "possible";
	else
		cout << "impossible";
}
