#include <bits/stdc++.h>
using namespace std;

const int MAX = 20;

typedef struct {
	int y,x;
}Dir;
typedef struct {
	int time, y, x;
}path;
Dir Dirmove[4] = { {-1,0}, {0,-1}, {0,1}, {1,0}};

bool operator<(const path &p1, const path &p2) {
	if (p1.time > p2.time)
		return true;
	else if (p1.time == p2.time && p1.y > p2.y)
		return true;
	else if (p1.time == p2.time && p1.y == p2.y && p1.x > p2.x)
		return true;
	return false;
}
int v[MAX][MAX];
bool visited[MAX][MAX];

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	int n;
	cin >> n;
	
	pair<int,int> start;
	for (int i=0; i<n; i++) {
		for (int j=0; j<n; j++) {
			cin >> v[i][j];
			if(v[i][j] == 9) { // ����� ��ġ 
				start = make_pair(i,j);
				v[i][j] = 0; //�ʱ�ȭ 
			}
		}
	}
	queue<pair<pair<int,int>,int>> q; // �Ʊ��� 
	q.push({{start},2});
	int ans = 0; // �� 
	int cnt = 0; //���� ���� 
	
	while(!q.empty()) { //�Ʊ��� ���� 
		int y = q.front().first.first;
		int x = q.front().first.second;
		int size = q.front().second;
		q.pop();
		
		memset(visited, false, sizeof(visited)); // �ݺ����� �ʱ�ȭ 
		
		priority_queue<path> temp;
		temp.push({0,y,x}); // time, y, x
		visited[y][x] = true;
		
		while(!temp.empty()) { // �Ÿ� �� �� 
			int dist = temp.size(); //���� �Ÿ� ��� �� 
			priority_queue<pair<pair<int, int>, int>, vector<pair<pair<int, int>, int>>, greater<pair<pair<int, int>, int>>> pq;
			for (int d = 0; d < dist; d++) { 
				int curY = temp.top().y;
				int curX = temp.top().x;
				int curTime = temp.top().time;
				temp.pop();
				
				for (int i=0; i<4; i++) { // 4���� üũ 
					int nextY = curY + Dirmove[i].y;
					int nextX = curX + Dirmove[i].x;
					
					if(nextY >= 0 && nextY < n && nextX >= 0 && nextX < n) {
						if (!visited[nextY][nextX]) { //�湮���� 
							if(v[nextY][nextX] <= size) { //������ �� �ֳ� 
								temp.push({ curTime + 1, nextY, nextX});
								visited[nextY][nextX] = true;
								if (v[nextY][nextX] >= 1 && v[nextY][nextX] < size) // �����ĺ� 
									pq.push({ {nextY, nextX}, curTime + 1});
							}
						}
					}
				}
			}
			
			if(!pq.empty()) {  // �켱������ ���� ���� ���� ���� 
				cnt++;
				
				if (cnt == size) {
					q.push({ {pq.top().first}, size + 1});
					cnt = 0;
				}
				else q.push({ {pq.top().first}, size});
				
				v[pq.top().first.first][pq.top().first.second] = 0; // �迭���� ��� ���� ǥ��
				ans += pq.top().second;
				break; 
			}
		}
	}
	cout << ans;
}
