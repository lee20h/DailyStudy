#include <bits/stdc++.h>
using namespace std;

int hole[101];
int elec[101];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, k;
	int answer = 0;
	cin >> n >> k;
	for (int i=1; i<=k; i++) {
		cin >> elec[i];
	}
	
	for (int i=1; i<=k; i++) {
		for (int j=1; j<=n; j++) {
			if(hole[j] == 0) { // ���� �� ��� 
				hole[j] = elec[i];
				break;
			}
			else { // ���� ���� �ִ� ��� 
				if(hole[j] == elec[i]) { // �̹� �ش� ��Ⱑ �������� 
					break;
				} 
				if(j != n) continue; // ������ ���۱��� ��
				int swap, val = -1;
				for (int q=1; q<=n; q++) { // ���� 1~n���� �����ִ� ��� ���� �����ϴ��� üũ 
					int cnt = 0;
					for (int w=i+1; w<=k; w++) {
						if(elec[w] == hole[q]) break;
						cnt++;
					}
					if(cnt > val) { // �� swap 
						val = cnt;
						swap = q;
					}
				}
				hole[swap] = elec[i];
				answer++;
			}
		}
	}
	cout << answer;
}
