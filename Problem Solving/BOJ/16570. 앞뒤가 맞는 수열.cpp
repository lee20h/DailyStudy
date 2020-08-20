#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6+1;

int arr[MAX];
int sub[MAX];
int fail[MAX];

/*
	���� �ڸ��� �κ� ���ڿ��� ���λ�� ���̻��� ���� ���� �� �ִ븦 ���ϰ��� �Ѵ�.
	�� �� ���� �ڸ��� ���� �Ųٷ� �����ϸ� ���������� kmp�� �����Լ� ���� ���ϴ°Ͱ� ����. 
*/

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n;
	cin >> n;
	for (int i=n-1; i>=0; i--) {
		cin >> arr[i];
	}
	
	for (int i=1, j=0; i<n; i++) {
		while(j>0 && arr[i] != arr[j])
			j = fail[j-1];
		if(arr[i] == arr[j])
			fail[i] = ++j;
	}
	
	int ans = -1, cnt = 1;
	
	for (int i=0; i<n; i++) {
		if(fail[i]) {
			
			if(ans < fail[i]) {
				cnt = 1;
				ans = fail[i];
			}
			else if(ans == fail[i])
				cnt++;
		}
	}
	if(ans == -1)
		cout << ans;
	else
		cout << ans << ' ' << cnt;
	
}
