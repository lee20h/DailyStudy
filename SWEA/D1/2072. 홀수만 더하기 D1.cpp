#include<iostream>

using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
    int sum, temp;
	for(test_case = 1; test_case <= T; ++test_case)
	{
		sum=0;
		for (int i=0; i<10; i++) {
			cin >> temp;
			if(temp%2==1) {
				sum+=temp;
			}
		}
		cout << "#" <<  test_case  << ' ' << sum << '\n';

	}
	return 0;//��������� �ݵ�� 0�� �����ؾ��մϴ�.
}
