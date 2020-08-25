#include <bits/stdc++.h>
using namespace std;

const int MOD = 100007;
const int LEN = 200001;

int mod(long long n) {
	if(n >= 0)
		return n % MOD; // ���
	return ((-n/MOD+1)*MOD + n) % MOD; // ���� 
}

/*
	3033. ���� �� ���ڿ��� ���� ���� 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int n;
	string str;
	cin >> n >> str;
	
	int left = 0, right = n;
	while(left+1 < right) {
		int mid = (left + right)/2;
		
		// �ؽð��� i �κκ� ���ڿ��� ���� ��ġ 
		vector<vector<int>> position = vector<vector<int>>(MOD, vector<int>());
		int hash = 0, power = 1;
		bool found = false;
		
		// ������ ��� ��ġ���� ���� mid�� �κ� ���ڿ����� �ؽð��� ���غ��� ó�� 
		for (int i=0; i<=n-mid; i++) {
			if(i==0) {
				for (int j=0; j<mid; j++) {
					hash = mod(hash + 1LL*str[mid-1-j]*power);
					if(j < mid-1)
						power = mod(power*2);
				}
			}
			else
				hash = mod(2*(hash - 1LL*str[i-1]*power) + str[i+mid-1]);
			// �ؽð� �� �� 
			if(!position[hash].empty()) {
				// ���� ���ڿ� �����ߴ��� �� 
				for (auto p : position[hash]) {
					bool same = true;
					for (int j=0; j<mid; j++) {
						if(str[i+j] != str[p+j]) {
							same = false;
							break;
						}
					}
					if(same) { // ���� 
						found = true;
						break;
					}
				}
			}
			if(found)
				break;
			else
				position[hash].push_back(i); // �� ã���� ���� 
		}
		
		if(found)
			left = mid;
		else
			right = mid;
	}
	cout << left;
}
