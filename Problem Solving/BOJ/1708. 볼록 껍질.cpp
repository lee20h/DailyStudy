#include <bits/stdc++.h>
using namespace std;

const int MAX = 100000 + 10;

struct pos {
	long long x, y;
};

pos v[MAX];


bool comp_y(pos a, pos b) {

	if (a.y != b.y)	return a.y < b.y;
	else return a.x < b.x;
}

long long ccw(pos a, pos b, pos c) { //ccw
	return a.x * b.y + b.x * c.y + c.x * a.y - (b.x * a.y + c.x * b.y + a.x * c.y);
}


bool comp_c(pos a, pos b) { //�ݽð� ����
	long long cc = ccw(v[0], a, b);
	if (cc != 0) return cc > 0; // ���� ���� ��
	else return (a.x + a.y) < (b.x + b.y); //������ ������� ��ǥ�� ����
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	stack<pos> s;
	int n;
	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> v[i].x >> v[i].y;
	}
		
	sort(v, v + n, comp_y); // ������ ã�� 
	sort(v + 1, v + n, comp_c);	 // �������� �ΰ� ������ ������ 0��° ���� ������ ���� ������ �ٽ� ���� 
	
	s.push(v[0]);
	s.push(v[1]);	
	pos first, second;

	for (int i = 2; i < n; i++) {
		while (s.size() >= 2) {
			second = s.top();
			s.pop();
			first = s.top();
			if (ccw(first, second, v[i]) > 0) { //��ȸ��
				s.push(second);
				break;
			}

		}
		s.push(v[i]);
	}
	cout << s.size();
	return 0;
}
