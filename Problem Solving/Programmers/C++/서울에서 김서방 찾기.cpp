#include <string>
#include <vector>

using namespace std;

string solution(vector<string> seoul) {
    string answer = "";
    int idx;
    for (int i=0; i<seoul.size(); i++) {
        if(seoul[i] == "Kim")
            idx = i;
    }
    answer += "�輭���� ";
    answer += to_string(idx);
    answer += "�� �ִ�";
    return answer;
}
