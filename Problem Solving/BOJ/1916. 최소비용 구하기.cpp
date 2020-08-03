#include <bits/stdc++.h>
using namespace std;

vector<pair<int,int>> v[100001];
const int INF = 987654321;
priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
int dist[1001];
int start_, end_, weight;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	int n, m;
	cin >> n >> m;
	for (int i=1; i<=n; i++) {
		dist[i] = INF; // �Ÿ� �� INF�� �ʱ�ȭ 
	} 
	for (int i=0; i<m; i++) {
		cin >> start_ >> end_ >> weight;
		v[start_].push_back({end_, weight});
	}
	cin >> start_ >> end_;
	
	dist[start_] = 0; // �������� �Ÿ� 0 
	
	pq.push({0,start_}); // �������� �켱���� ť�� ���� 
	
	while(!pq.empty()) {
		int cur = pq.top().second; // �湮���� ���� ��� �� ���� ��� ���� ��� 
		weight = pq.top().first;
		pq.pop();
		
		if(dist[cur] < weight) continue; // �̹� �ּҰŸ��� continue 
		
		for (int i=0; i<v[cur].size(); i++) { // ���� ���� dist �ּҷ� ���� 
			int adj = v[cur][i].first;
			int adjdist = v[cur][i].second + weight;
			
			if(dist[adj] > adjdist) { // dist���� ���� �Ÿ��� pq�� ���� 
				dist[adj] = adjdist;
				pq.push({adjdist, adj});
			}
		}
	}
	cout << dist[end_];
}
