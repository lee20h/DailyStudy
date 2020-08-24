#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e5 + 3;
char arr[MAX][88];
bool res;
int n, ans;

/*
	�ܾ Ʈ���̿� �Է� �ϸ�, NULL �� ���� �����Ҵ�� �Բ� branch�� �ø���.
	�� �Է� �� �ϳ��ϳ� �ٽ� ����, ���� �Ǵµ� �� �� ��찡 3������ ������.
	1. ��Ʈ 2. branch 2���̻� 3. ���� ���߿� ������ �ܾ� ���� 
*/
struct Trie {
	bool vaild;
	bool exist;
	int branch;
	Trie* node[26];
	Trie() : vaild(false), exist(false), branch(0) {
		for (int i=0; i<26; i++)
			node[i] = 0;
	}
	~Trie() {
		for (int i=0; i<26; i++)
			if(node[i])
				delete node[i];
	}
	void add(const char* s) {
		if (*s == 0)
			vaild = true;
		else {
			int pos = *s - 'a';
			if (node[pos] == NULL) {
				branch++;
				node[pos] = new Trie();
			}
			exist = true;
			node[pos]->add(s+1);
		}
	}
	void check (const char* s) {
		if(*s == 0)
			return;
		if (res) {
			ans++;
			res = false;
		}
		else {
			if (branch >= 2) ans++;
			else if (vaild) ans++;
		}
		int pos = *s - 'a';
		node[pos]->check(s+1);
	}
};

int main() {
	cout << fixed;
	cout.precision(2);
	while(cin >> n) {
		Trie* root = new Trie();
		for (int i=0; i<n; i++) {
			cin >> arr[i];
			root->add(arr[i]);
		}
		int total = 0;
		for (int i=0; i<n; i++) {
			res = true;
			ans = 0;
			root->check(arr[i]);
			total += ans;
		}
		cout << (double)total / n << '\n';
		delete root;
	}
}
