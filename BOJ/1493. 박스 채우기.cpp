#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	long long l, w, h;
	long long n;
	cin >> l >> w >> h;
	cin >> n;
	vector<pair<long long,long long>> v; // ť�� ��� ���� 
	for (int i=0,x, y; i<n; i++) {
		cin >> x >> y;
		v.push_back({x,y});
	}
	
	sort(v.begin(),v.end()); 
	reverse(v.begin(),v.end()); // ť�꿡�� first�������� �������� 
	
	long long check = 0, ans = 0, temp = 0;
	for (int i=0; i<v.size(); i++) { // ����ū ������ 8��� �÷��� min�� ���ϱ� 
		check <<= 3; // ���� 3���̹Ƿ� 2*2*2 = 8�� 
		temp = min(v[i].second, ((l >> v[i].first) * (w >> v[i].first) * (h >> v[i].first) - check));
		check += temp;
		ans += temp;
	}
	if(l*w*h == check)
		cout << ans;
	else
		cout << "-1";
} 
