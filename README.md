# 📙 Today I Learned  
## 규칙  
* 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
* 쓸데없는 Commit 지양
* markdown으로 작성
* 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---  

# 2020년

| [5월](./month/5월) | [6월](./month/6월) | [7월](./month/7월) | [8월](./month/8월) | [9월](./month/9월)
|----|-----|-----|---|---|

--- 

- 1日  

기능개발
```cpp
#include <string>
#include <vector>
#include <queue>
using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer; 
    queue <int> q;
    
    int bound, rest, day, i, cnt = 0;
    
    for (i = 0; i < progresses.size(); i++) {
        rest = 100 - progresses[i];
        if (rest % speeds[i] == 0) day = rest/speeds[i];
        else day = rest/speeds[i] + 1;
        q.push(day);
    }
    
    bound = q.front();
    
    while(!q.empty()) {
        if (q.front() <= bound) {
            cnt++;
            q.pop();
        }
        else {
            bound = q.front();
            answer.push_back(cnt);
            cnt = 0;
        }
    }
    answer.push_back(cnt);
    return answer;
}
```
여러가지 풀이 방법 중 가장 직관적이고 좋은 방법을 찾아서 적어본다. 배포가 하루에 한번만 가능하고 앞에 있는 기능이 되야 뒤에 기능이 배포된다. 따라서 그 부분을 큐로 구현하면 큐의 front가 bound로 정하고 bound 초과하지 않으면 큐에서 기다리는 든 기능을 배포하면 된다. 그 과정을 반복하면 된다.  

---

- 2日  

다리를 지나는 트럭
```cpp
#include <string>
#include <vector>
#include <queue>
using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 0;
    
    queue<int> q, bridge;
    int total_weight = 0;
    while(1) {
        int size = bridge.size();
        for (int i=0; i<size; i++) {
            int len = bridge.front();
            bridge.pop();
            len--;
            if(len == 0) {
                total_weight -= q.front();
                q.pop();
                continue;
            }
            bridge.push(len);
        }
        
        if(truck_weights.size() && total_weight + truck_weights[0] <= weight) {
            total_weight += truck_weights[0];
            bridge.push(bridge_length);
            q.push(truck_weights[0]);
            truck_weights.erase(truck_weights.begin());
        }
        answer++;
        if(!truck_weights.size() && !q.size())
            break;
    }
    return answer;
}
```

3986. 좋은 단어
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	int n, ans = 0;
	cin >> n;
	for (int i=0; i<n; i++) {
		stack<char> st;
		string s;
		cin >> s;
		for (int j=0; j<s.length(); j++) {
			if(!st.empty() && st.top() == s[j]) {
				st.pop();
			}
			else st.push(s[j]);
		}
		if(st.empty())
			ans++;
	}
	cout << ans;
} 
```

프로그래머스에서 다리를 지나는 트럭 문제로, 전형적인 큐 문제이다. 큐를 하나만 사용하는게 아니라 다리 무게 큐, 시간 큐를 통해 시간 초를 세주었다. 백준 온라인 저지에서 좋은 단어라는 문제로, 이 문제 또한 전형적인 스택 문제이다. 괄호 검사와 같이 스택에 넣고 스택의 탑과 비교하여 해당 문자가 같으면 팝해주는 식으로 진행한다. 다 끝난 뒤 스택이 비어있는 문장을 세어주면 된다.  

요즘에 긴 연휴와 해커톤으로 인해 감이 많이 죽은 듯하다. 이젠 문제 풀이를 많이 해볼 생각이다. 코드포스와 프로그래머스 풀이를 많이 하고, 코드챌린지와 icpc 지역 예선을 하며 공부의 필요를 많이 느낀다.

---

- 3日

# Git 초급

[참고](https://backlog.com/git-tutorial/kr/)  

Git은 버전 관리 시스템의 일종이다.  

## 버전 관리 시스템 (Version Control System)

동일한 정보에 대한 여러 버전을 관리하는 것으로 파일의 변화를 시간에 따라 기록하여 과거 특정 시점의 버전을 다시 불러올 수 있는 시스템이다.  

백업과 버전관리를 위한 시스템으로, 프로젝트 진행 중 과거의 시점으로 돌아가거나, 변경 사항 추적, 특정 부분에 대하여 의미 추적을 위해서 사용한다.  

### 사용하는 이유

협업 도구로, 여러 사람이 같은 프로젝트에 참여할 경우 각자가 수정한 부분을 팀원 전체가 동기화하는 과정을 자동화를 하기 위한 이유가 크다. 그 외에는 소스 코드에서 수정자를 추적하기 위함이나, 대규모 수정 작업을 더욱 안전하게 진행하기 위해서이다.  

두번째 이유는 개발 편의성으로, Branch로 프로젝트에 영향을 최소화하면서 새로운 부분을 개발하기 위함과 Merge로 검증이 끝난 후 새로이 개발된 부분을 trunk에 합치기 위해서이다.  

이러한 이유와 많은 오픈 소스 프로젝트에서 어떠한 형태로든 버전 관리를 사용하고 있기 때문에 Git에 대해 공부할 필요가 있다.  

## 로컬 vs 중앙집중형  

- 로컬 : 1인 개발 시 사용, 팀 단위 사용 시 부적합

- 중앙 집중형 : 간단한 구조, Single Point of Failure (SPOF). 여러 로컬에서 한 중앙 서버로 연결하여 사용  

- 유사 시스템
    - 소스 코드 관리 (Source Code Management, SCM)
    - SW 버전 관리 (Software Version Management)
    - SW 형상 관리 (Software Configuration Management)
    - 리비전 관리 시스템 (Revision Control System)

- 널리 쓰이는 SW
    - SVN
    - Mercurial
    - Git

## Git: the stupid content tracker

- 분산 버전 관리 시스템, DVCS : 여러 사람이 협업하는 문서변경사항을 관리하는 시스템
    - 중앙 서버에 있는 코드를 각자의 local 컴퓨터에 복사한 후, 복사된 프로젝트를 가지고 서버에 업로드를 할 수 있다.

특징

- Free and Open soruce
- Easy to learn
- Tiny footprint (less memory, storage)
- Lighting fast performance

### brief history

2005년 리눅스 개발 커뮤니티에 의해 개발되었다. 기존 방식은 단순 압축(스냅샷)과 패치를 통해 버전 관리하였지만 이후에 Bitkeeper를 사용하다가 유료 전환되며 Git을 개발하였다.  

설계 목표 (vs Bitkeeper)

- 빠른 속도
- 단순한 구조
- 비선형적인 개발(수천 개의 동시 다발적인 브랜치)
- 완벽한 분산
- 리눅스 커널 같은 대형 프로젝트에도 유용할 것 (속도나 데이터 크기 면)

### 특징

- 단순성 : 변화된 부분만을 기록하는 것이 아니라, 전체를 버전 별로 보존.  
    - 델타 방식 vs 스냅샷 방식
    - git은 스냅샷 방식으로 언제나 데이터를 추가해나가는 방식

- 빠른 속도 : 로컬에서 명령 실행  
    - 분산된 형태로 관리되기 때문

- 무결성 : 변화된 파일에 대한 체크섬 관리
    - 파일, 디렉토리에 대한 SHA-1 Checksum을 이용해 분산 구조에서 무결성을 보장
    - Git은 모든 데이터를 checksum hash 형태로 관리

## Git의 3가지 영역

- 작업 폴더 (Working Directory)
    - 사용자가 변경하는 실제 파일이 들어가는 폴더

- 스테이지 (Stage, Index)
    - 변경사항을 관리할 파일들의 리스트
    - 작업 폴더 중에서 커밋할 파일만을 모아둘 수 있음

- 변경이력 (History, Git directory, repository)
    - 커밋이라 불리는 변경사항 묶음과 커밋들의 연결관계

## 로컬저장소와 원격저장소

저장소 (repository) : History를 저장하는 공간  

협업을 위해서는 원격저장소가 필수적이며, 로컬저장소와 원격저장소 간에 이력을 주고 받을 수 있다. 따라서 동기화 문제가 존재한다. 원격저장소가 여러 개를 둘 수도 있다.  

로컬저장소와 원격저장소는 인터넷을 통해서 연결하게 되는데 로컬저장소와 원격저장소의 내용이 다르면 동기화문제가 생길 수 있으므로, 최신화를 항상 체크해야한다.  

## 로컬 - 원격 저장소 간의 이동

로컬 - 원격 저장소  
Working Directory -> (git add) Staging Area -> (git commit) Local Repository -> (git push) Remote Repository  

원격 - 로컬 저장소  
Remote Repository -> (git fetch) Local Repository -> (git checkout or git merge) Working Directory

---

- 4日

프로그래머스 멀쩡한 사각형
```cpp
#include <cmath>

long long solution(int w, int h) {
    long long answer = 0;
    for(int i = 1; i <= w; i++){
        double pos = ceil((long long)h / (double)w * i);
        int block = h - pos;
        answer += block;
    }
    
    answer = answer * 2;
    return answer;
}
```

해당 문제는 상당히 골치아팠다. 대칭을 생각해서 한쪽만 구한 뒤 2배를 한다는 생각으로 진행하였다. 그 중 y = (h/w)x 함수로 생각해보았다. 따라서 높이에서 그래프가 속한 정사각형의 제일 높은 위치를 빼주었다. 거기서 필요한 부분은 방정식의 x값이 늘어나면서 바뀌는 y의 값을 천장함수로 지정하여 정사각형의 높은 위치를 얻어야한다. 그래프로 생각하면 빨리 풀 수 있었던 문제로 보인다.  

---

- 5日  

# 유닉스 Utilities

## find & grep

### find

`find 디렉토리 [-옵션]` : 옵션의 검색 조건에 따라 지정된 디렉터리 아래에서 해당되는 파일들을 모두 찾아 출력한다.  

ex) `$ find ~ -name *.c -print`, `$ find /usr -name "*.c" -print` print는 기본옵션으로 생략 가능하다.  

여러 검색 옵션이 있는데 그 중 파일의 접근권한 검색 (-perm), 파일의 접근 시간(-atime), 수정 시간(-mtime)으로 검색이 가능하다. 이때 atime과 mtime에 n을 적어 +|-로 기준 시간 이전, 이내로 검색이 가능하다.

또한, 파일의 소유자, 소유그룹, 크기, 종류로도 검색이 가능하며, 이러한 조건들을 조합하여 사용도 가능하다.  

마지막으로 검색된 파일을 처리할 수 있다. -exec 옵션으로 통해서 검색한 모든 파일을 대상으로 동일한 작업(명령어)을 수행한다.  

### grep

`grep 패턴 파일*` : 파링들을 대사응로 지정된 패턴의 문자열을 검색하고, 해당 문자열을 포함하는 줄들을 출력한다.  

옵션은 다음과 같다.  

**-i** 대소문자를 무시하고 검색한다.
**-n** 각 줄의 줄번호도 함께 출력한다.
**-l** 해당 패턴이 들어있는 파일 이름을 출력한다.
-v 명시된 패턴을 포함하지 않는 줄을 출력한다.
-c 패턴과 일치하는 줄 수를 출력한다.
-w 패턴이 하나의 단어로 된 것만 검색한다.
**-R** 하위 디렉토리의 파일들을 recursive 하게 검색한다.  

grep도 옵션들을 조합하여 여러가지 옵션을 중복해서 사용할 수 있다.  

### 정규식 (regular expression)

- `?` : 한 글자 혹은 없음을 의미한다. ex) ‘ab?’는 ab 혹은 ab 다음에 한 글자가 오는 문자열
- `.` : 임의의 한 문자를 의미한다. ex) ‘a...b’는 a로 시작해서 b로 끝나는 5글자 문자열
- `*` : 바로 앞의 것을 0번 이상의 반복 ex) ‘a*b’는 b, ab, aab, aaab, ... 등의 문자열
- `[ ]` : [과 ] 사이의 문자 중 하나를 의미. –기호: 문자의 범위를 지정. ex) ‘[abc]d’는 ad, bd, cd를 뜻한다. [a-z]는 a부터 z까지 중 하나
- `[^...]` : [^ 과 ] 사이의 문자를 제외한 나머지 문자 중 하나를 의미한다. ex) ‘[^abc]d’는 ad, bd, cd는 포함하지 않고 ed, fd 등은 포함. [^a-z]는 소문자가 아닌 모든 문자
- `^, $` :  각각 줄의 시작과 끝을 의미한다. ex) ‘^문자열’은 문자열로 시작하는 줄을 나타낸다. ‘문자열$’은 문자열로 끝나는 줄을 나타낸다.  

## 압축 : tar and compressions

### Tar Archive

- Archive
    - 백업 또는 다른 장소로의 이동을 위해 여러 파일들을 하나로 묶어놓은 묶음
    - 아카이브를 만들거나 푸는데 tar(tape archive) 사용
    - Tar: 이름에서 알 수 있듯, 전통적으로 Archive를 만드는데 사용.
        - Tar 로 생성된 archive 는 .tar 확장자를 가지며, tar file 혹은 tarball 이라고 표현하기도 함
- tar의 동작
    - 단순히 여러 파일의 데이터를 하나의 파일로 묶고,
    - 다시 여러 파일로 복원할 수 있도록 함
    - 파일의 용량은 원본보다 더 큼 (복원을 위해 기존 파일들의 이름, 크기, 권한 등 필요한 정보를 포함하기 때문)
    - 기본적으로 압축 (Compression)을 수행하지 않음. Archive 와 compression 은 별개

- 명령어
    - 옵션: c(create), v(verbose), x(extract), t(table of contents), f(file)
    - `$ tar -cvf 타르파일 파일+` : 여러 파일들을 하나의 타르파일로 묶는다. 확장자 .tar 사용
    - `$ tar -xvf 타르파일` : 하나의 타르파일을 풀어서 원래 파일들을 복원한다.
    - `$ tar -tvf 타르파일` : 타르파일의 내용을 확인한다.

### gzip

- 리눅스 환경에서 많이 사용하는 압축 프로그램
- 속도가 빠르고 적당한 수준의 압축률을 제공함
- 명령어 : `gzip [옵션] 파일*` : 파일들을 압축하여 .gz 파일로 만든다.

옵션
-d : 압축을 해제한다. (decompress)
-l : 압축파일 안에 있는 파일 정보(압축된 크기, 압축률) 출력한다.
-r : 하위 디렉터리까지 모두 압축한다.
-v : 압축하거나 풀 때 압축률, 파일명을 출력한다.

외에 bzip2, xz도 유사하게 사용하면 된다. bzip2와 xz가 압축률이 높으나, 그만큼 속도가 느리다.  

### Tar file 생성시 gzip 사용

- Tar의 Compression options
    - Tar 파일을 생성하거나 해제할 시, 동시에 압축 또는 복원을 수행함
    - -z : gzip 이용
    - -j : bzip2 이용 (소문자 j)
    - -J : xz 이용 (대문자 J)
- ex) 압축
    - $ tar -czvf textfiles.tar.gz *.txt
    - $ tar -cJf textfiles.tar.xz *.txt
- ex) 복원
    - $ tar -xzvf textfiles.tar.gz
    - $ tar -xJf textfiles.tar.xz

## 기타

### 파일 비교

- cmp 명령어 : 
    - `$ cmp 파일1 파일2` : 파일1과 파일2가 같은지 비교한다. 
    - 두 파일이 같으면 아무 것도 출력하지 않음.
    - 두 파일이 서로 다르면 서로 달라지는 위치 출력

- diff 명령어 :
    - `$ diff [-i] 파일1 파일2` : 파일1과 파일2를 줄 단위로 비교하여 그 차이점을 출력한다. -i 옵션은 대소문자 무시
    - 첫 번째 파일을 두 번째 파일 내용과 같도록 바꿀 수 있는 편집 명령어 형태
    - 추가(a) : 첫 번째 파일의 줄 n1 이후에 두 번째 파일의 n3부터 n4까지의 줄들을 추가하면 두 파일은 서로 같다. 
    - 삭제(d) : 첫 번째 파일의 n1부터 n2까지의 줄들을 삭제하면 두 번째 파일의 줄 n3 이후와 서로 같다
    - 변경(c) : 첫 번째 파일의 n1 부터 n2까지의 줄들을 두 번째 파일의 n3 부터 n4까지의 줄들로 대치하면 두 파일은 서로 같다.  
        - n1, n2 c n3, n4
        ```
        < 첫 번째 파일의 대치될 줄들
            --
        > 두 번째 파일의 대치할 줄들
        ```
    
### 패키지 설치

리눅스에서 추가 프로그램을 설치하는 세 가지 방법  

- 소스 코드를 다운로드 받아 직접 컴파일하고 설치함
    - 장점: 필요한 경우, 직접 수정하여 사용 가능
    - 단점: 빌드 환경을 구성해야 하는 등, 과정이 복잡함
- 패키지를 다운로드 받아 설치함
    - 장점: 컴파일 완료된 패키지 파일을 다운받아 설치함
    - 단점: 다른 패키지와의 의존성 문제를 직접 해결해야 함 (ex A 설치를 위해, B가 필요한데, B는 설치되어 있지 않음)
- **패키지 관리 프로그램 사용**
    - 패키지 명을 지정하면, 자동으로 패키지를 검색해 다운받고, 설치함
    - 장점: 패키지 다운로드도 의존성 문제 등을 자동으로 해결해줌
    - 단점: Customizing , 버전 관리 등이 다소 불편함

    - 여러 배포본에 따라 서로 다른 패키지 관리 프로그램을 제공
        - Debian 계열 (Ubuntu, Debian, : apt (or apt-get)
            - 패키지 형태: dpkg
        - Redhat 계열 (CentOS, Fedora,RHEL): yum
            - 패키지 형태: rpm
    - apt
        - 기존 apt-get 보다 사용자 편의적인 high-level package management system
        - 사용법: # apt [command] [package name]
        - Commands
            - install: 패키지 설치
            - autoremove: 패키지 자동 제거
            - update: 패키지 정보를 최신으로 업데이트함.
            - upgrade: 최신 버전으로 업데이트 가능한 모든 패키지를 설치함
            - search: 패키지 정보 검색
            - list: 사용 가능한 패키지 리스트 출력. 이미 설치된 경우, [installed] 로 표시됨.

### 디스크 사용

- df 명령어 : 파일 시스템에 대한 정보를 출력한다.
    - `$ df 파일시스템*` : 파일 시스템의 사용중이거나 사용 가능한 디스크 공간에 대한 정보를 보여준다.  

- du 명령어 : 
    - `$ du [-s] 파일*` : 파일이나 디렉토리가 사용하는 디스크 사용량(블록 수)을 알려준다.
    - 파일을 명시하지 않으면 현재 디렉터리의 사용 공간을 보여준다.
    - 기본으로 `-ahd 1` 모든 파일, 단위 포함, 한 레벨 아래 하위 디렉토리 

### IP주소

- `$ ip addr` : 사용중인 시스템의 IP 주소를 출력한다.
- `$ ifconfig` : Network Interface 에 대한 configuration 을 수행함
    - 단순히 ip addr 과 같이 네트워크 정보를 확인하기 위해서도 많이 사용함

### 별명

- alias 명령어 :
    - `$ alias 이름=문자열` : 문자열이 나타내는 기존 명령에 대해 새로운 이름을 별명으로 정의

### 히스토리

- history : 
    - `$ history [-rh] [번호]` : 입력된 명령들을 기억하는 기능
    - `$ HISTSIZE=100` : 기억할 히스토리 사이즈
    - `$ HISTFIESIZE=100` : 로그아웃 후에도 히스토리가 저장되도록 설정

### 재실행

- `!!` : 바로 전 명령 재실행
- `!n` : 이벤트 번호가 n인 명령 재실행
- `!` : 시작스트링 시작스트링으로 시작하는 최후 명령 재실행
- `!?` : 서브스트링 서브스트링을 포함하는 최후 명령 재실행

---

# Git 중급

## Branch

- VCS의 한계
    - 충돌이 나는 파일은 수동으로 해결할 수 밖에 없음
    - 따라서 최대한 분리하여 작업하도록 구성
        - 단위: 함수, 클래스, 파일, 폴더, 기능 등
    - 그러나 협업 구조에서 동시 작업의 필요성은 여전히 존재
        - 기능 추가 팀, 버그 수정 팀이 동시에 작업
- Branch
    - 같은 코드를 공유하되, 작업을 독립적으로 분리해서 수행할 수 있음
        - 독립적인 개발 및 테스팅, 커밋 이력 관리, 저장소 관리
        - Git은 가볍고 빠른 브랜치 동작 제공
    - 분리는 쉽다, 나중에 다시 합칠 때는?
        - Merge 담당 전문가, 테스트 과정 필요

### Branch 생성 및 Head 이동

- `$ git branch testing`
    - 새로운 브랜치 생성
    - HEAD의 위치는 변경되지 않음
- `$ git checkout testing`
    - HEAD의 위치를 변경
    - 작업 브랜치가 변경됨. 이후 커밋은 해당 브랜치에 추가됨

### Branch: Merge

- Fast-forward merge
    - 충돌없어서 충돌 관리 X
    - 따라서 해당 브랜치 내용이 main과 같다.
    - non fast-forward 병합 옵션으로 브랜치 내용을 따로 유지하면서 병합이 가능하다.

- Three-way merge
    - 3개 commit(브랜치와 또다른 브랜치, HEAD)에 대해 서로 다른 부분을 검사해야함

### Branch: Rebase

Rebase: 여러 commit 을 하나로 merge  

- merge
    - 변경 내용의 이력이 모두 그대로 남아 있기 때문에 이력이 복잡해짐.
- rebase
    - 이력은 단순해지지만, 원래의 커밋 이력이 변경됨. 정확한 이력을 남겨야 할 필요가 있을 경우에는 사용하면 안됨.
    - Local repository 에서 브랜치를 만들어 작업하다 push 해야 하는 경우, 굳이 브랜치의 흔적을 남길 필요가 없는 경우가 많음
- `$ git rebase -i HEAD~3`
    - HEAD에서 부터 최근 3개의 커밋을 표시하며, (HEAD 포함) vi 를 기반으로 interactive 하게 commit을 수정, 통합함
        - Vi 대신 다른 에디터를 사용하고 싶으면 기본 에디터 변경
        - (예. 메모장으로 변경) $ git config --global core.editor notepad
    - Squash (s)를 입력하면 Git은 해당 커밋과 바로 이전 커밋을 합치고
커밋 메시지도 Merge 한다.
    - 저장하고 나서 편집기를 종료하면 Git은 3개의 커밋 메시지를
Merge 할 수 있도록 에디터를 바로 실행해준다.
    - 만약 rebase 하다가 실수하면?
        - `$ git rebase --edit-todo`
            - 계속해서 중단된 작업 수행
        - `$ git rebase --abort`
            - Rebase 중단 및 원복

### 기타

- `$ git branch --d “branch name”`
    - Delete: 작업 중인 branch는 삭제 불가. 먼저 다른 branch로 HEAD를 옮기고 (checkout), 수행
- `$ git branch`
    - 현재 브랜치 확인
- `$ git show-branch`
    - 브랜치 확인
- `$ git log --graph --pretty=oneline --abbrev-commit`

## Branch 관리전략

성공적인 Branch Model

- 메인 브랜치(Main branch): Master, develop
- 피처 브랜치(Feature branch) 또는 토픽 브랜치(Topic branch)
- 릴리스 브랜치(Release branch)
- 핫픽스 브랜치(Hotfix branch)

### Main Branch

- 'master' 브랜치와 'develop' 브랜치, 이 두 종류의 브랜치를 보통 메인 브랜치로 사용합니다.
    - master : 'master' 브랜치에서는, 배포 가능한 상태만을 관리합니다.
커밋할 때에는 태그를 사용하여 배포 번호를 기록합니다.
    - develop : 'develop' 브랜치는 앞서 설명한 통합 브랜치의 역할을 하며, 평소에는 이 브랜치를 기반으로 개발을 진행합니다.

### Feature Branch

- Topic branch
- 새로운 기능 개발 및 버그 수정이 필요할 때
    - 'develop' 브랜치로부터 분기
    - 각 개발자에게 작업 분배 시 활용
    - 일반적으로 공유할 필요가 없기 때문에, 원격으로 관리하지 않음
    - 개발이 완료되면 'develop' 브랜치로 병합하여 다른 사람들과 공유

### Release Branch

- Master 브랜치로 병합하기 이전에, 병합 및 테스트 수행을 위
한 브랜치
    - 해당 릴리즈를 위한 최종적인 버그 수정 등의 개발 수행
        - 버그를 수정하거나 새로운 기능을 포함한 상태로 모든 기능이 정상적으로 동작하는지 확인
        - 모든 준비를 마치고 배포 가능한 상태가 되면 'master' 브랜치로 병합
        - 릴리즈 번호 태그로 구분
    - 기타 사항
        - 관례적으로 브랜치 이름 앞에 ＇release-＇ 를 붙임
        - 다음 릴리즈를 위한 개발 작업은 'develop' 에서 따로 계속 진행
        - 릴리즈 브랜치에서 기능을 점검하며 발견한 버그 수정 사항은 'develop' 브랜치에도 적용
        - 배포 완료 후 'develop' 브랜치에 대해서도 병합 작업을 수행

### Hotfix Branch

- 배포한 버전에 긴급하게 수정을 해야 할 필요가 있을 경우, 'master' 브랜치에서 분기하는 브랜치
    - 이미 작업 중인 develop 에서 수정하기는 어려우므로, 기존 배포 버전을 기반으로 hotfix 수행
    - 일반적으로 ‘hotfix-###’ 식으로 명명
    - 이후 develop 에도 병합하여 수정 사항 반영

텐서플로우가 대표적으로 Branch를 잘 이용하는 것을 보여준다. 그에 반해 리눅스의 경우에는 Branch를 하나만 가지고 잘 이용하는 모습도 보여준다.

---

- 6日

# AWS Computing Services

AWS에서는 배포 단위를 나눠서 여러 서비스를 제공한다.  

배포 단위
- 가상 프라이빗 서버 : Amazon Lightsail
- 가상 머신 : Amazon EC2
- 컨테이너 : Amazon ECS
- 서버리스 컨테이너 : AWS Fargate
- 코드 : AWS Lambda

## Amazon Lightsail

- 작은 규모의 서비스 구축을 위한 정액 요금제 서비스

## Amazon EC2

- 가상 서버 서비스
- 다양한 운영체제 사용 가능
- 다양한 과금 옵션 (온디맨드/예약/스팟)
- CPU/메모리/네트워크 등에 따라 다양한 인스턴스 타입 제공

### 프로비저닝 및 수명주기

- 생성 -> 시작 -> 중지 -> 종료
- 콘솔에서 수동관리
- API로 자동관리
- 디맨드 기반의 자동화 (수요 곡선)

### 가격

- On-demand price
    - 사용한 시간 단위 & 데이터 송수신 양으로 요금 책정
    - 일반적으로 운영체제 라이선스 비용이 포함되어 있으나,일부 SW는 사용자가 라이선스 관리를 해야 함
    - Linux, Windows, RHEL, SLES 등 (Redhat and Suse Enterprises)
    - Region 에 따라 가격이 다름

- Reserved Instance
    - 1년, 3년 단위로 미리 예약을 해서 사용하는 EC2 요금 정책
        - 비용 절감 및 유연성 유지
            - RI는 온디맨드 인스턴스 요금과 비교하여 상당한 할인 혜택(최대 75%)을 제공
        - 용량 예약 시작할 수 있다는 확신을 가질 수 있음
            - RI는 용량 예약을 제공하므로 사용자가 필요할 때 예약해 놓은 수의 인스턴스를 시작할 수 있다는 확신을 가질 수 있음

- Spot instance
    - AWS 내 유휴 자원을 경매를 통해 낮은 가격으로 짧은 시간 동안 이용할 수 있는 가격 정책
        - 크게 할인된 가격으로 이용 가능 (일반적으로 50% 이하)
        - 일시적이고 단기간동안 서비스를 사용해야 할 때 매우 유용함
    - 스팟 인스턴스의 요청
        - Bid: 지불하고자 하는 최고 스팟 가격을 지정
        - Start: 스팟 인스턴스는 스팟 가격이 지정한 가격보다 낮을 때 시작되고,
        - End: 이를 종료하도록 선택하거나,스팟 가격이 지정한 최고 가격을 초과할
때까지 계속해서 실행됨
        - 사용 시간을 설정할 수 있음: 1시간~6시간
            - 스팟 가격이 좀더 상승함

- Dedicated Hosting/Instance
    - 고객 전용의 EC2 인스턴스 용량을 갖춘 물리적 서버
        - 기존 서버에 한정된 소프트웨어 라이선스를 사용 가능
        - 물리 서버이므로 예측 가능한 성능 제공
    - 전용 호스팅 서버
        - 고객 전용으로 사용되는 물리 서버를 프로비저닝
    - 전용 인스턴스
        - 전용 호스팅 서버보다 물리적으로 제한적인 서비스
        - 특정 전용 서버에 배치할 수 없음, 용량 추가 불가 등

## EC2 Build

AWS Management Console에서 진행하며 과정은 이러하다.

1. AMI 선택
2. 인스턴스 유형 선태
3. 인스턴스 구성
4. 스토리지 추가
5. 태그 추가
6. 보안 그룹 구성
7. 검토

### AMI 선택

- “Free tier 사용 가능” 이란, Free tier 가 적용되는 인스턴스 타입(t2.micro)에서
수행 가능하고, 추가적인 라이선스 비용을 지불하지 않는다는 의미임.
- 다른 인스턴스 타입에서도 무료라는 의미가 아님
- Datacenter Edition
    - 1. 가상화된 환경에 대해 OS 커널이 최적화
    - 2. 데이터센터의 스토리지, 네트워크 환경에 최적화
    - 최근 다양한 OS가 데이터센터, 클라우드 에디션으로 배포되고, 비중이 급격히 높아지고 있음. 또한 비용 및 라이선스 정책도 상이함

### 스토리지 추가

- Windows server 요구량에 따라 자동으로 30GB 설정됨
- 리눅스 기본은 10GB
- Free tier의 EBS 허용량은 한달 30GB 이므로, Windows 하나를 사용하면 끝
- IOPS: I/O per Seconds
    - 스토리지 성능 단위. 높을수록 빠르고, 비싸다
    - SSD의 경우, 용량이 적을수록 성능 낮음

### Key Pair

- Key pair : 암호 파일
    - Build 이후, VM에 접근하기 위한 열쇠(private key)를 생성하는 것
    - 본인 컴퓨터에 열쇠 파일을 다운로드 하고, 이후 접근할 때 해당 파일을 사용해야 함
    - 분실 시, AWS에서 새로 발급받을 수 없음
    - 타인이 습득 시, 내 VM에 접근할 수 있음
        - 내 신용카드가 등록되어 있는데?
        - 상용 서비스를 하고 있다면? 고객 정보는?
- 다운로드를 하면 pem 확장자 파일이 나옴
    - 개인 이메일 계정으로 전송하고, 공용 컴퓨터에서는 완전히 삭제할 것
        - Shift + del

### Console

- Alarm status
    - 특정 조건을 설정하여, 여러가지 방식으로 관리자에게 알려줌
    - 예) CPU 사용률이 10분간 80% 를 넘으면, 우선 VM을 정지하고, 관리자에게 메일로 알려줌
- Public DNS and IP (IPv4)
    - 외부에서 접속 가능한 DNS 및 IP 주소
    - IPv6 는 따로 설정하여야 함
- Security Group
    - 접근 권한에 대한 설정을 그룹으로 관리할 수 있음

## AMI

- AMI
    - Amazon 머신 이미지(AMI)는 인스턴스를 시작하는 데 필요한 정보를 제공합니다. (Operating Systems + @)
    - 인스턴스를 시작할 때 AMI를 지정해야 합니다.
    - 동일한 구성의 인스턴스가 여러 개 필요할 때는 한 AMI에서 여러 인스턴스를 시작할 수 있습니다.
    - 서로 다른 구성의 인스턴스가 필요할 때는 다양한 AMI를 사용하여 인스턴스를 시작하면 됩니다.

### AMI 종류

- My AMI
    - 직접 생성한 AMI
    - 기존 AMI를 기반으로 자신만 사용할 수 있는 AMI를 작성 가능
    - 스토리지 (EBS) 사용 요금을 지불해야 함
- AWS Marketplace
    - 회사 또는 개인이 유용한 AMI를 작성하여 판매하는 것
    - AMI 사용료로 시간 당 별도 과금이 이루어짐 (ec2 와 별개). 무료 상품도 존재함.
    - 모든 종류의 SW 포함
    - 예) VPN 서버, Machine Learning, Block chain 등등
- Community AMI
    - 커뮤니티에 공개해 공유하는 AMI로, Marketplace AMI 와 유사하지만 무료임
    - Marketplace AMI의 old version 이거나 test 용 버전이 많음
    - 기술 지원 등을 기대하기 어려움

---

# Load test for Web services

## 부하 테스트

소프트웨어 시스템에 요청을 보내서 응답을 측정하는 절차

- 웹서비스의 품질을 파악하기 위한 테스트
    - 현재 서비스 구성의 제한(limit)을 찾기 위함
    - 원하는 부하를 수용할 수 있게끔 구성되었는지 확인하기 위함
    - 병목 지점을 찾고 병목 현상을 제거하기 위함
- 우리가 만든 웹서비스의 성능을 테스트하기 위해 사용
    - 얼마나 많은 요청을 처리할 수 있을까? (현재의 HA 구성에서)
    - 많은 요청 수에 대해 자동으로 처리 성능을 조절할 수 있을까?
    - 차후 Auto Scaling 의 동작 및 성능 확인에 사용

## 스트레스 테스트

시스템의 안정성을 결정하기 위해서 수행되는 의도적인 심한 테스트로, 일반적인 운영 용량을 넘은 테스트를 수행하여 결과를 관찰한다.

## AB

- 아파치 웹서버 성능검사 도구
    - Apache HTTP Server 의 간단한 성능 벤치마킹 도구
        - 정적 컨텐츠, REST API 등
    - 아파치 서버 패키지에 포함
    - 특히 아파치가 현재 초당 몇개의 요청을 서비스하는지 알려줌
- 유의할 점
    - AB는 서버의 응답에 걸리는 시간만 측정
        - Server-side centric benchmark
    - 사용자가 실제로 느끼는 체감 성능은?
        - HTML translation, image file loading, and etc.
        - Request 간의 delay를 줄 수 없기 때문에, 실제 요청 패턴과 차이가 있음

### Usage

Usage: `ab [options] [http[s]://]hostname[:port]/path`

### options

- `-n` : 성능을 검사하기위해 보내는 요청수. 기본값으로 요청을 한번만 보내기 때문에 일반적인 성능검사 결과를 얻을 수 없다.
- `-c` : 동시에 요청하는 요청수. 기본적으로 한번에 한 요청만 보낸다.
- `-g` : 측정한 모든 ㄱ밧을 'gnuplot' 혹은 TSV (Tab separate values, 탭으로 구분한 값) 파일에 기록한다. 라벨은 output 파일의 첫번째 라인을 참고한다.
- `-t` : 성능을 검사하는 최대 초단위 시간. 내부적으로 `-n 50000`을 가정한다. 정해진 시간동안 서버 성능을 검사할때 사용한다. 기본적으로 시간제한 없이 검사한다.
- `-v` : 출력 수준을 지정한다. 4 이상이면 헤더에 대한 정보, 3 이상이면 응답코드, 2 이상이면 경고와 정보를 출력한다.
- `-A` : 프록시를 통해 BASIC Authentication 정보를 제공한다. :로 구분한 사용자명과 암호를 base64 인코딩하여 전송한다.
- `-X` : proxy[:port] 프록시 서버를 사용하여 요청한다.

### example

- `ab -c 50 -t 10`
    - 서버가 10초동안 동시에 50개의 요청을 지속적으로 처리
    - 즉, 서버에 50개의 요청 부하가 지속적으로 몰려있는 상황
        - 50명의 사용자가 아니라, n명의 사용자가 무작위로 요청을 보내는데,
        - 서버 입장에서 볼 때, 언제나 50개의 요청이 대기 큐에 쌓여있는 것
    - 성능이 좋을수록, 총 처리된 요청 개수가 많아질 것.
- `ab -n 500 -c 10`
    - 서버가 10개의 동시 요청을 총 500개 처리하는 시나리오
    - 대기큐에 10개의 요청이 항상 쌓여있는데, 총 요청 수는 500개
    - 성능이 좋을수록, 총 수행 시간이 짧아질 것.

### Result

`-c 500 -t 10`

- Concurrency evel : 500
- Time taken for tests : 10001 seconds
- Complete requests : 2447
- Failed requests : 0
- Total transferred : 34507594 bytes
- HTML transferred : 33479854 bytes
- Requests per second : 244.67 [#/sec] (mean)
- Time per request : 2043.556 [ms] (mean)
- Time per request : 4.087 [ms] (mean, across all concureent requests)
- Transfer rate : 3369.47 [Kbytes/sec] received

- Percentage of the requests served within a certain time (ms)
    - 50% : 1905
    - 66% : 2022
    - 75% : 2103
    - 80% : 2175
    - 90% : 2333
    - 95% : 2495
    - 98% : 2660
    - 99% : 2726
    - 100% : 3137 (longest request)

50%와 100% 사이에 오차가 적어야 좋은 시스템을 의미한다.

### Result Analysis

- Failed requests
    - Fail 이 있을 경우, reliability 의 훼손
        - 즉, 서버가 제공할 수 있는 범위를 벗어남
            - 벤치마킹 중간에 정지될 수 있음
        - Length 제외: 첫 요청에 대한 응답과 다른 길이의 응답이 오는 경우를 측정함. 동적인 컨텐츠의 경우, 지속적으로 발생할 수 있음
- Response time
    - 요청 처리 시간의 표준 편차가 너무 크거나,
    - 요청 처리 시간 백분위에서 tail 이 길게 형성이 되거나,
    - 요청 처리 시간 자체가 너무 긴 경우,
    - 서비스의 품질이 사용자 요구사항에 크게 미달할 수 있음

### Long tail of Response time

`$ab -n 100 -c 10 -g result.plot http://www.google.com/index.html`

[참고사이트](https://blog.hkwon.me/ab-apache-http-server-benchmarking-tool/)

- 약 10% 의 요청이 800ms 이내에 처리되었음.
즉, 나머지 90%의 요청은 800ms 이상 소요되었음
- -c 10 옵션을 주었으므로 10개의 요청이 쌓일 때까지
이전 9개 까지는 빠르게 처리되다가, 10개 이후부터는
서버에 부하가 쌓이며 점차 느려지는 양상을 볼 수 있음
- 실제 서버의 부하는 상당 시간 서비스가 지속된 상태,
즉, 평균 사용자 수로 상당 시간 유지된 상태의
평균 요청 처리 수를 보아야
실제 사용자가 느끼는 서비스 수준을 파악할 수 있음

---

- 7日

# typeScript

## 설치

```
$ npm i -g typescript
```
app.ts
```ts
const name:string = "younghun";
const age:number = 24;
```

## 컴파일

```
$ tsc app.ts
```

컴파일이 완료되면 ts파일이 js파일로 변환  

## express 환경 구축

```
$ tsc --init
```

tsconfig.json 파일이 생성된다. 해당 파일에서 
```json
{
 "compilerOptions": {
   "target":"es6",
   "module":"commonjs",
   "outDir":"./dist",
   "rootDir":"./src",
   "strict": true,
   "moduleResolution":"node",
   "esModuleInterop":true
  }
}
```

주석을 지워주고 이러한 부분만 유지한다.

- target : 컴파일 ECMAscript 대상
- module : 모듈 코드 생성
- outDir : 컴파일 경로
- rootDir : 컴파일 대상의 root 디렉토리
- strict : typescript 엄격한 유형 검사 활성화
- moduleResolution : node 또는 classic 모듈 분석

등으로, [docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)을 참고하는게 제일 빠르다.  



```
$ npm init -y
$ npm i -D express typescript ts-node nodemon @types/node @types/express
```

express 환경을 구성 한 뒤 package.json을 고쳐준다.

```json
"script": {
  "start": "node dist/app.js",
  "dev": "nodemon src/app.ts",
  "build": "tsc -p ."
}
```

- start : 컴파일 한 app.js를 node 명령어로 실행
- dev : nodemon으로 typescript 파일 개발환경으로 실행
- build : 실제로 컴파일 후 javascript 파일 생성

## ts 파일 작성

여타 js로 작성하는 express와 달리 소스 맨 위에 이 부분을 적어줘야한다.

```ts
import express, {Request, Response, NextFunction} from 'express';
```

콜백 함수 작성시에 이렇게 사용할 수 있다.  

```ts
app.get('/', (req:Request, res:Response, next:NextFunction) => {
    // content
})
```

자바스크립트를 사용한 express와의 차이는 타입스크립트로 자료형 명시와 콜백에서의 명시 이외에는 없는거 같다. 하지만 코드 작성 방식에 따라서 module로 사용하거나, 클래스를 사용하게 되면 전혀 다른 언어와 같이 보인다는 점이 있다. 그러한 방법은 낯설게만 느껴졌다.

---

- 8日

# React

Velopert님의 강의를 듣고 정리하였습니다.

## JSX

1. Nested Element

```jsx
    /* 변경 필요 */
render() {
    return (
        <h1>HI</h1>
        <h2>I am Error</h2>
    )
}

render() {
    return (
        <div>
            <h1>Hi</h1>
            <h2>Error is gone.</h2>
        </div>
    )
}
```

2. JavaScript Expression

```jsx
/* Javascript 표현식은 {} 으로 감싸야한다. */
render() {
    let text = "hello React!";
    return (
        <div> {text} </div>
    );
}

/* 추가적으로 If Else 문 JSX 사용 */
render() {
    return (
        <p> { 1 == 1 ? 'True' : 'False'} </p>
    )
}
```

3. Inline Style

```jsx
/* JSX 안에서 style을 설정시 string 형식이 아닌 key가 camelCase인 객체 사용 */
render() {
    let style = {
        color : 'aqua',
        backgroundColor: 'back'
    };

    return (
        <div> {style}React</div>
    );
}

/* 클래스 사용 시 'className=' 사용 */
render() {
    return (
        <div className='box'>React</div>
    );
}
```

4. Comments

```jsx
/* JSX에서 주석 사용시 {}으로 감싸줘야한다 */

render() {
    return (
        <div>
            {/* This is How You Comment */}
            {/* Multi-line
                Testing*/}
                React
        </div>
    )
}
```

## props

- 컴포넌트 내부의 Immutable Data
- JSX 내부에 { this.props.propsName }
- 컴포넌트를 사용할 때, <> 괄호 안에 propsName="value"
- this.props.children은 기본적으로 갖고 있는 props로, <component> -해당 값이 들어감- </component>

1. 기본 값 설정

- Compoent.defaultProps = { ... }

```jsx
class App extends React.Component {
    render() {
        return (
            <div> {this.props.value} </div>
        );
    }
};
App.defaultProps = {
    value: 0
};
```

2. Type 검증

- Component.propTypes = { ... }

```jsx
Class App extends React.Component {
    render() {
        retrun(
            <div>
                {this.props.value}
                {this.props.secondValue}
                {this.props.thirdValue}
            </div>
        );
    }
};
App.propTypes = {
    value: React.PropTypes.string,
    secondValue: React.PropTypes.number,
    thirdValue: React.PropTypes.any.isRequired
};
```

## state

- 유동적인 데이터
- JSX 내부에 `{ this.state.stateName }`
- 초기값 설정이 필수, 생성자(constructor)에서 `this.state = {}` 으로 설정
- 값을 수정할 때에는 `this.setState({...})`, 렌더링 된 다음엔 `this.state =` 절대 사용하지 말 것

### 예시

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      value: this.state.value + 1
    });
  }
  
  render() {
    return (
      <div>
        <h2> {this.state.value} </h2>
        <button onClick = {this.handleClick}> Press me </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
```

1. 

```jsx
handleClick() {
    this.setState({
        value: this.state.value + 1
    });
}
```

2. 

```jsx
handleClick() {
    this.state.value = this.state.value + 1;
    this.forceUpdate();
}
```

1과 2는 같은 기능을 하지만, 2번 코드의 경우에는 렌더링 된 후 stat.value를 대입하여 바꾸므로 사용을 지양해야한다.  


## Component Mapping

- Javascript Map : 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 처리해서 그 결과로 새로운 배열을 생성한다.
    - `arr.map(callback, [thisArg])`
        - callback : 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가진다.
            - currentValue : 현재 처리되고 있는 요소
            - index : 현재 처리되고 있는 요소의 index 값
            - array : 메소드가 불러진 배열
        - thisArg (선택항목) : callback 함수 내부에서 사용할 this 값을 설정

```js
var numbers = [1,2,3,4,5];
var processed = numbers.map(function(num) {
    return num*num;
})

||

var processed = numbers.map((num) => {
    return num*num;
})
```

### 예제

```jsx
class ContactInfo extends React.Component {
  render() {
    return (
      <div> {this.props.contact.name} {this.props.contact.phone} </div>
    )
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        {name: 'A', phone: '010-0000-0002'},
        {name: 'B', phone: '010-0000-0003'},
        {name: 'C', phone: '010-0000-0004'},
        {name: 'D', phone: '010-0000-0005'}
      ]
    }
  }
  
  render() {
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    }
    
    return (
      <div>
        {mapToComponent(this.state.contactData) }
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Contact/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
```

---

- 9日

삼각 달팽이
```cpp
#include <string>
#include <cstring>
#include <vector>
using namespace std;
int table[1002][1002];

vector<int> solution(int n) {
	vector<int> answer;
    memset(table, -1, sizeof(table));
	for (int i=1; i<=n; i++) {
		for (int j=1; j<=i; j++) {
			table[i][j] = 0;
		}
	}
	int cnt = 1;
	int y = 1, x = 1;
	while(1) {
		bool flag = true;
		while(1) {
			if(table[y][x] != 0)
				break;
			table[y++][x] = cnt++;
			flag = false;
		}
		y--;
		x++;
		while(1) {
			if(table[y][x] != 0)
				break;
			table[y][x++] = cnt++;
			flag = false;
		}
		x-=2;
		y--;
		while(1) {
			if(table[y][x] != 0)
				break;
			table[y--][x--] = cnt++;
			flag = false;
		}
		x++;
		y+=2;
		if(flag)
			break;
	}
	for (int i=1; i<=n; i++) {
		for (int j=1; j<=i; j++) {
            if(table[i][j] == -1 || !table[i][j])
                continue;
			answer.push_back(table[i][j]);
		}
	}
    return answer;
}

```

배열을 먼저 -1로 초기화 한 뒤 정수 n 만큼 배열을 0으로 초기화 했다. 따라서 -1인 부분은 경계선이며 0이 변경 가능한 지역이다. 따라서 아래, 오른쪽, 좌상 대각선 반복을 하되, 0이 아닌 곳을 만나게 되면 멈추도록 설계했다. 전체 큰 반복문은 내부 반복문의 조건에 한번도 맞지 않으면 탈출하도록 하여 해결했다.  

해당 문제를 조금 깔끔하게 코딩하지 못한거 같다. 노력이 필요한 부분이다.  

2 x n 타일링
```cpp
#include <string>
#include <vector>

using namespace std;

const int MOD = 1e9+7;

int solution(int n) {
    int prev = 1;
    int cur = 1;
    for (int i=0; i<n-1; i++) {
        int temp = (prev + cur) % MOD;
        prev = cur;
        cur = temp;
    }
    return cur;
}
```

다이나믹 프로그래밍에서 대표적인 문제로, 2x1 타일과 1x2 타일로 구성한 가로길이가 주어지면 사용하는 경우의 수를 구하는 문제이다. 나는 바로 캐치하지 못하고 여러가지 경우의 수를 생각해보았다. 따라서 길이가 1, 2, 3 ... 인 예시를  쭉 생각해보았다. 그러자 피보나치와 같은 패턴을 보이는 것을 알 수 있었다. 그렇게 하여 해결할 수 있었다.  

이 부분을 점화식으로 접근해보면, `P(n) = P(n-1) + p(n-2)`와 같이 나온다. 왜냐하면 n번째는 n-1번째에서 가능한 경우의 수는 세로 타일을 하나 넣는 경우다. 그리고 n-2번째에서 가능한 경우는 세로 타일 혹은 가로 타일을 얘기할 수 있다. n-2번째에서 가능한 세로타일을 넣는 경우는 n-1번째에서 이야기한 경우가 포함된 경우다. 따라서 n을 구하고자 할 때는 n-1인 부분과 n-2인 부분을 더해줘야 구할 수 있다고 볼 수 있다.  

따라서 피보나치와 같은 점화식이 구해진다. 해당 점화식을 적용하게 되면 경우의 수를 하나하나 찾아 규칙을 찾은 것과 같다. 이제는 점화식을 먼저 찾아내서 코딩하는 습관을 들여야겠다.

---

- 10日

2020 한국 대학생 프로그래밍 대회 예선을 치뤘다. 3인 1팀으로 각 학교에서 치뤄지는데 전체 101등 학교 3등으로 마치게되었다. 하지만 많은 문제를 빠르게 풀지 못해서 아쉬움이 크다. 오히려 팀원들이 잘 풀어서 그 정도 결과가 나온 것 같다.  

# MongoDB

- Model : Schema를 감싸주는 역할  
- Schema : 정보들을 집약해주는 역할
- mongoose : Mongo DB ODM (Object Domcument Mapping) 중 하나로 가장 많이 사용한다.
- ODM : 객체와 문서를 1:1로 매칭한다는 뜻으로 문서를 DB에서 조회할 때 자바스크립트 객체로 바꿔주는 역할을 한다.

```js
const mongoose = require('mongoose');
mongoose.connect('', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log(`Mongoose Conected`);
}).catch(err => {
    console.log(err)
})
```

mongoose를 이용하여 등록하는 코드인데, 사실 이 코드를 이용할려면 먼저 mongoDB에서 선 작업이 필요하다. 해당 connect 구문에서의 뒤에 주소를 가져오는 작업이다.  

이후 모델과 스키마를 만들어주는 코드이다.  

```js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 3
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User }
```

이와 같이 먼저 Schema를 정의 한 뒤 모델을 그 Schema를 감싸서 모듈화시켜서 내보내게되면 다른 js파일에서 해당 모델을 사용할 수 있다.  

## 회원가입

body-parser 미들웨어와 postman이나 insomnia와 같이 rest api를 보낼 수 있는 툴로 클라이언트가 없는 상태에서 통신할 수 있게 하여 회원가입을 구현하고자 한다.

### body-parser

```js
const bodyParser = require('body-parser);
// application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());
```
body-parser를 사용하게 되면 json형식으로 rest api를 이용하게 될 때 `req.body`와 같은 문법으로 받아서 쉽게 파싱할 수 있다.

### rest api

```js
app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err)
            return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })

    })
})
```

body-parser 미들웨어를 사용하여 바로 User라는 모델에 post로 넘어오는 정보를 등록하는 모습이다. 성공하면 success를 true로 반환하고 실패했다면 success를 false로 반환한 뒤 에러를 출력한다.  

---

- 11日

# Mongo DB

## MongoURI 숨기기

Mongoose를 사용할 때 MongoDb와 연결하기 위해서 MongoDB의 아이디와 비밀번호 그리고 클러스터와 데이터베이스 이름까지 다 노출되기 때문에 다른 파일로 관리를 하게 된다.  

이때 node.js는 로컬과 배포시의 환경변수가 다른 점을 이용해서 URI를 다르게 잡아줄려고 한다.  

`key.js`, `dev.js`, `prod.js` 3가지로 봐보자.

key.js
```js
if(process.env.NODE_ENV == 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
```
`process.env.NODE_ENV` 환경변수의 경우 로컬환경과 배포환경의 값이 다르다 따라서 `production`인 경우는 배포 하는 mongoURL을 달아주고, 아닌 경우에는 개발환경의 mongoURL을 달아줘서 사용하면 된다.  

## node.js bcrypt 미들웨어

[npm 패키지 사이트](https://www.npmjs.com/package/bcrypt)

### 설치

```
npm install bcrypt
```
npm을 이용하여 미들웨어를 설치해준다.

### 사용법

설정
```js
const bcrypt = require('bcrypt');
const saltRounds = 10;
```

비밀번호 암호화
```js
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(, salt, function(err, hash) {
        // DB에 비밀번호 속성 Hash값 저장
    })
})
```

### MongoDB와 사용

통신이 오면 해당 모델로 저장을 하게 된다.
```js
app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })

    })
})
```

스키마와 모델이 정의된 코드에서 bcrypt를 설정해준 뒤 mongoose에서 사용가능한 `pre()` 메소드를 통해서 통신이 왔을 때 save 직전에 비밀번호가 바뀌었다면, 해당 값을 암호화하여 저장하도록 하는 코드이다.
```js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 3
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);
    
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }
```

또한, 비밀번호를 DB에 생성한 뒤 나중에 로그인하기 위해서 비밀번호를 비교하게 된다. 이때는 DB에 저장된 암호화시킨 비밀번호가 아닌 비교하기 위해 들어오는 비밀번호를 암호화시켜서 저장된 비밀번호와 비교하게 된다.  

bcrypt에서의 솔트는 해쉬를 강화한다는 장치로 이해하면 좋다.  

## JWT를 이용한 로그인

JsonWebToken로, node에서 다음과 같이 설치한다.

```
npm install jsonwebtoken --save
```

그리고 JWT는 저번에 공부한 것과 같이 cookie, localstroage, session에 저장이 가능하다. 이번에는 cookie에 저장하는 방법으로 할 것이다.

비밀번호 비교
```js
userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassowrd와 encoded password 비교
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch);
    })
}
```

토큰 생성
```js
userSchema.methods.generateToken = function(cb) {
    // jwt를 이용한 token 생성
    const user = this;
    const token = jwt.sign(user._id.toHexString(), 'secretToken');
    user.token = token;
    user.save(function(err, user) {
        if(err) return cb(err);
        cb(null, user);
    })
}
```

post를 통해서 요청을 받아서 `이메일 체크 -> 비밀번호 체크 -> 토큰 생성 후 쿠키 저장` 방식으로 진행한다.

```js
app.post('/login', (req, res) => {
    // 이메일이 DB에 있나 체크
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        // 있다면 비밀번호가 맞나 체크
        
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."});
            
            // 맞으면 Token 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
    
                // 토큰을 저장한다. 쿠키, 로컬스토리지, 세션
                // 쿠키 저장
                res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess: true, userId: user._id});
            })
        })
    })
})
```

이 부분을 통해 알 수 있던 부분은 스키마에 메소드를 생성할 때 매개변수를 맞춰줘야하는데 이 부분을 콜백함수로 잡아주는 부분이 새로웠다.  

그리고 쿠키에 경우에는 마지막에 `res.cookie("x_aut", user.token)` 부분을 통해서 쿠키를 저장할 수 있다는 것이다. 로컬 스토리지의 경우에는 클라이언트단에서 dom에 접근하여 저장하는 것만 사용해봐서 더욱 간단했다.  

## Auth

클라이언트의 토큰을 복호화했을 때 서버의 토큰과 같다면 인증이 통과하고 해당 토큰을 복호화해서 나온 id의 값이 같다면 해당 정보를 제공하는 것을 인증한다.

```js
app.get('/api/users/auth', auth, (req,res) => {
    
    // 미들웨어를 통과해 여기까지 온다면 인증은 통과됨

    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})
```

`./middleware/auth.js`
```js
const { User } = require('../models/User');

let auth = (req, res, next) => {
    // 인증 처리
    
    // 1. client cookie token 받기
    const token = req.cookies.x_auth;
    // 2. Token decode, 유저 찾기
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });
        
        // 요청시에 사용할 수 있게 요청값에 넣어준다.
        req.token = token;
        req.user = user;
        next();
    })
    // 3. 유저 있으면 인증 o, 없으면 인증 x
    
}
module.exports = { auth }
```

순서는 클라이언트 쿠키에 있는 토큰을 받은 뒤 해당 토큰을 복호화하여 유저를 찾아준다. 이후 찾게 된다면 통신에서 사용할 수 있게 요청값에 토큰과 유저를 넣어준다. `next()`를 통해서 미들웨어가 끝난 뒤 넘어갈 수 있게 해준다.  

마지막으로 module로 auth를 만들어서 사용할 수 있게 한다. 

mongoDB model User
```js
userSchema.statics.findByToken = function(token, cb) {
    let user = this;

    // token decode
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저 아이디로 찾은 뒤
        // 클라이언트에서 가져온 token과 db의 token 비교
        user.findOne({
            "_id" : decoded,
            "token": token
        }, function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        })
    })
}
```
해당 메소드는 유저 스키마가 token을 복호화시킨 경우 유저아이디가 일치하는 것을 찾은 뒤 token을 비교한 뒤 맞다면 user 스키마를 콜백으로 보내주는 메소드이다.  

## logout

auth를 이용한 로그인 이후에는 로그아웃은 쉽다. 왜냐하면 로그인의 경우는 auth 미들웨어를 만들어서 token을 복호화하여 클라이언트 token과 db의 token을 비교하는 과정을 거치게 된다. token이 같아야 auth를 통과하고 그 이후의 내용을 진행한다.  

로그인의 경우는 db에 저장된 token을 통해서 로그인 유무를 알 수 있었다. 따라서 로그아웃은 db의 해당 유저의 token을 초기화시키게 되면 로그아웃 상태로 체크할 수 있다.  

따라서 다음 코드와 같이 만들게 되면 token을 초기화시킬 수 있다.

```js
app.get('/api/users/logout', auth, (req,res) => {
    User.findOneAndUpdate({ _id: req.user._id},{ token: "" }, (err, user) => {
        if (err) return res.json({success: false, err});
        return res.status(200).send({
            success: true
        })
    })
})
```

auth 미들웨어를 먼저 거치기 때문에 로그인이 되어있어야 auth를 거쳐서 콜백함수를 진행할 수 있다. `findOneAndUpdate` 함수를 통해서 id를 찾고 token을 초기화 시킨다. 이 부분을 Insomnia를 통해서 통신을 해보니 확실히 알 수 있었다.  

---

# react 

## Virtual DOM vs Real DOM

- Real DOM : 여러 요소 중 하나의 요소를 업데이트한 경우 전체 요소를 모두 Reload해야 하는 Super Expensive한 작업

- Virtual DOM : 여러 요소 중 하나의 요소를 업데이트한 경우 해당 요소만 DOM에서 Reload하는 작업

### Virtual DOM

1. JSX을 렌더링. 그러면 Virtual DOM이 Update

2. Virtual DOM이 이전 virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분 찾기 (diffing)

3. 바뀐 부분만 Real DOM에서 바꿈

## Creat React App

예전엔 리액트 앱을 처음 실행하기 위해서 webpack이나 babel같은 것을 설정하기 위해서 많은 시간이 걸렸다. 하지만 이제는 `create-react-app`을 통해 바로 시작할 수 있다.

### Babel

최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 ES5 자바스크립트 문법로 변환하여  구형 브라우저에서도 실행 가능하게 함

### Webpack

많은 모듈들을 번들화시켜 간단하게 만들어주는 것으로, 상당히 복잡한 내용을 가지고 있으므로 여기서는 이 정도만 알아두자

### 설치

```
npx create-react-app .
```

이전에는 `npm install -g create-react-app`를 사용하여 global 디렉토리에 다운로드 받았었다. 이제는 npx를 이용하여 다운 받지 않고 사용이 가능하다. 이 부분을 살펴보자

## npx

### npm

npm (node package manager)는

1. 레지스트리와 같은 저장소 역할을 한다.

2. 어플리케이션을 실행하거나 빌드할 때 사용한다.

package.json에 npm에 대한 정의가 있으므로 살펴보면 좋다.  

npm을 통해서 install하는 경우 `-g` 옵션을 주지 않는다면 local로 다운로드 하게 된다. 이때는 `node_modules`라는 폴더에 쌓이게 된다.  

`-g`옵션을 주게 되면 프로젝트를 넘어 컴퓨터에 저장을 하는 것이다. 예를 들어 리눅스의 경우 `/usr/local/bin`에 저장이 된다.  

### npx

원래는 create-react-app을 설치할 때는 `npm install -g create-react-app`을 다운을 받았으나, 이제는 npx를 이용하여 다운로드를 받지 않고 npm registry에 있는 것을 받아와서 설치할 수 있다.  

이러한 방법의 장점은 disk storage를 낭비하지 않을 수 있으며, 항상 최신버전을 이용할 수 있다.  

---

- 12日

# react

## React Router Dom

[공식사이트](http://www.reacttraining.com/react-router/web/example/basic)  
React에서 페이지를 이동할 때는 React Router Dom을 사용한다.

### 기본 예시

```js
import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
        <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
```

와 같이 사용하게 되면 home, about, dashboard로 나눠서 이동을 볼 수 있다. 또, Switch 부분을 축약할 수 있다.

```js
<Switch>
    <Route exact path="/">
        <Home />
    </Route>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/dashboard">
        <Dashboard />
    </Route>
</Switch>
```
와 같은 부분을 다음과 같이 바꿀 수 있다.

```js
import home from './src/home'
import about from './src/about'
import dashboard from './src/dashboard'
<Switch>
    <Route exact path="/" component={home} />
    <Route exact path="/about" component={about} />
    <Route path="/dashboard" component={dashboard} />
</Switch>
```

---

# 소프트웨어공학

# 분석의 문제점

- 의사 소통의 문제
- 요구사항의 계속적 변화
- 분석도구의 미비
- 문서화의 어려움
- 정치적인 문제
- 일 할당 문제

### 의사 소통의 문제

사용자와 개발자 사이에 동의된 것도 시간이 지나고 나면 완전히 다른 모습으로 나타날 때가 많으므로 정확한 의사소통과 목표에 대한 기대를 명확하게 하기위해 문서화가 반드시 필요하다.  

분석단계에서 사용자와 개발자의 **의사소통**을 위하여 그림으로 생각을 표현하는 도구들이 개발되어 활용되고 있다. 대표적인 도구가 ER-다이어그램이다.

### 요구사항의 계속적 변화

사용자의 시스템에 대한 이해도가 증가하며 요구사항은 계속하여 변한다. 따라서 요구사항 명세서는 수정하기 쉽게 쓰여져야한다.  

개발에 들어가기 전, 요구사항을 동결하는 것은 프로젝트 관리상 필요하다. 요구사항의 계속적 변화고정된 요구사항 명세서를 시스템개발의 **기준선문서**라 하며, 이후에 요구되는 명세서의 변경은 프로젝트에 관계된 개발자 및 사용자의 동의를 필요로 한다.  

### 분석도구의 미비

요구사항 명세서가 논리적으로 요구사항을 잘 반영하였는지 평가하는 것은 쉬운 일이 아니다. 즉, 추상적인 단계인 분석과정의 결과물을 평가한다는 것은 어려운일이다. 개발 전 CASE 도구를 이용하여 요구사항 명세서를 시뮬레이션하여 검증하는 것은 프로젝트 초기에 오류를 잡안래 수 있도록 도움을 준다.  

### 문서화의 어려움

문서화는 업무지식에 대한 기록보관과 노하우의 손실을 막기위해 필요하다. 시스템이 커지면 커질수록 분석은 더욱 복잡해진다. 이때의 분석의 복잡도를 해결하기 위해 사용하는 효과적인 방법은 **분할하여 정복**하는 것이다.

### 정치적인 문제

분석은 정치적인 문제에 속하며, 이를 피할 수 없는 경우도 많다. 또한, 분석에서의 정치는 필요악으로 구분된다.  

요구사항 분석시 방법론을 도입하여 접근하면 분석과정을 더욱 체계적이고 공식적인 과정으로 만들 수 있으며 정치적인 영향력을 최소화할 수 있다. 이러한 정치적인 영향력이 기술을 압도하여 혼란을 주면 안된다.

### 일 할당 문제

시스템의 규모가 커지면 여러 명의 분석가가 일을 분할하여 진행한다. 일의 분할은 분야별로 나눠 하는 것이 이상적이며 분석의 초기 단계에 정확한 분할이 일워지지 않으면 분석을 진행하며 추후에 일을 분할하는 것은 더욱 어렵다. 그리고 일의 진행 중간에 인력을 더 투입하면 개발 기간이 더 소요될 가능성이 높다.

### 공식 기술 검토회

시스템 개발에 있어서도 한 개인의 결정보다는 참여자들의 지혜를 모아 최선의 길을 선택하는 것이 바람직하다. 여러 사람들이 의견을 제시할 수 있는 기회가 부여되어야 하고 공정 과정의 산출물에 대한 **공식적인 검토과정**이 필요하다. 특히, 개발 이전에 이루어지는 요구사항 명세서에 대한 공식적인 평가는 필수적이다.  

요구사항 명세서에 대한 **공식기술검토회**에는 고객, 분석가, 개발자, 시험자 등이 참여하여 결정을 내려야 한다. 공식검토회를 갖기 전 참여자들에게 요구사항 명세서가 배달되어 충분한 사전 검토를 할 수 있도록 하여야 한다. 이후 검토회를 통해 목표에 대한 최종 합의점을 한다. 이러한 합의점이 도달되면 사용자측과 개발팀이 서명한다. 이 후의 수정은 서명한 모든 사람들의 서명이 필요하다.  

## 요구사항 분석 방법의 공통점

- 분석 방법들은 시스템의 계층적이며 구조적인 표현을 가능하게 함
- 분석 방법들은 외부와의 인터페이스는 물론 시스템 내부 구성 요소들 사이의 인터페이스에 대한 세심한 주의 필요
- 분석 방법들은 분석 이후 단계인 설게와 구현단계에 필요로 하는 기본틀 제공
- 정형 명세 언어 외의 어느 분석 방법들은 제약조건이나 검증 기준의 표현에 많은 관심을 두지 않음

- 각 분석 방법들은 다음과 같은 공통적인 특성에 의하여 평가될 수 있다.

    1. 정보 영역 분석을 위한 메카니즘
    2. 기능과 동작을 표현하는 방법
    3. 인터페이스에 대한 정의
    4. 문제의 분할을 위한 방법
    5. 추상화 지원
    6. 본질적인 면(what)과 구현 관점(how to)의 표현

## 정보 수집 및 사용자와의 대화 방법

고객의 현재 가지고 있는 문제점이 무엇인지 볼 수 있어야 하며 고객이 원하는 시스템이 어떤 것인가를 파악하여야 한다. 이를 위해 고객과 대화하여 그들의 정보를 뽑아내야하고 이를 모아 통합할 수 있어야 한다. 이때의 고객과의 직접적인 대화는 인터뷰를 통하여 이뤄진다. 또한 고객과 직접 대화할 수 없을 때 **질문사항**을 만들어 우편이나 인터넷 등의 통신망으로 보내거나 **설문지**를 전달하여 간접적으로 정보를 모으는 방법도 있다.

## 사용자와의 관계

- 사용자와의 관계는 어렵지만 중요
- 사용자의 참여를 개발 초기에 증가시키고, 사용자와 개발자 사이의 문제점과 분쟁을 최소화시킬 수 있는 방법들
    1. 사용자와 개발자가 회의를 하면 회의록을 작성하여 서로 서명하는 것이 바람직
    2. 시제품을 빨리 만들어 사용자에게 보여줘야함
    3. 고객과의 대화 도구를 확립하여 사용자에게 요구사항 분석이나 설계기법에서 사용하는 모델링 기법을 설명하여 주고 이를 공통의 대화 언어로 사용
    4. 주고객이 누구인지 찾기
    5. 시스템을 블랙바스로 봐라. 사용자가 무엇을 얻을 것인가를 확립한 후, 이를 실현시키기 위해 시스템의 내부에 대한 분석이 이뤄져야한다.
    6. 고객과의 좋은 인간관계를 유지

## 모델링

- 모델링 : 개발대상 시스템의 성능분석이나 동작과정 등을 알아보기 위하여 간단한 물리적 모형, 도해를 만들거나 또는 그 시스템의 특징을 수학적으로 표현하는 과정. 즉, 어떤 것을 만들기 전에 그것을 이해하기 위한 목적으로 **추상화**하는 작업

- 모델 : 우리의 관심 분야에 맞추어 실세계의 존재를 의도적으로 불완전하게 표현한 추상적인 것  

모델링의 결과는 우리의 관심 분야가 아니거나 필수적이 아닌 세부적인 것은 생략하기 때문에 다루기가 쉽고 필수적인 것만을 표현해준다.  

### 추상화 작업

추상화의 결과는 항상 불완전하고 부정확하지만 그것이 추상화의 필요성과 유용성을 감소시키지는 않는다. 왜냐하면 좋은 모델은 어떤 문제의 중요한 핵심만을 포함하고 나머지 것들을 생략하기 때문이다.  

### 모델의 활용

- 용도에 따라 실제의 모습을 여러가지로 나타냄
- 모델은 단순하고 이해하기 쉬워야 하며 모호성이 없어야 함
- 모델링의 결과는 요구사항 명세서의 핵심 부분이 되며 프로젝트의 다음 단계로 옮겨가는데 필요한 정보 제공
- 모델링은 도표를 사용하여 시스템을 논리적으로 분할할 수 있게 해줌
- 모델링의 결과는 사용자와 개발자 사이의 **대화의 도구**로 사용
- 프로젝트의 초기 단계에서 필요한 요구사항을 뽑아내는 데 많은 도움을 줌
- 개발 단계(설계, 구현, 시험 포함)에 필요한 시스템의 윤곽과 골격 제공

### 모델링의 기본 요소

- 표현(Representation) : 텍스트가 아닌 시각적 표현(도표)

- 규약(Convention) : 시각적인 표현에 대한 설명

- 상술(Specification) : 
    - 시각적인 표현을 텍스트로 확증하는 과정으로 모델링 과정에서 나타난 **도표의 구체적인 정의**
    - 이 구체적인 설명은 모델의 일부분
    - 상술된 자료는 미니 명세서, 자료사전 등에 저장하여 관리

## 소프트웨어 시스템의 3가지 관점

한 모델은 한 관점을 정확히 표현하여 유용하게 사용되면 족하며 한 모델을 통해 여러 관점을 나타내기는 어렵다. 시스템은 바라보는 **관점**에 따라 모습이 달라지고 용도도 달라진다. 어느 한 관점도 완벽하게 나타내지는 못하지만 각 관점은 그를 나타내는 중요한 핵심을 포함하기 때문에 각 관점의 필요성과 유용성을 감소시키지 않는다.

- 기능 관점 : 기능 모델링
- 동적 관점 : 동적 모델링
- 정보(객체) 관점 : 정보(객체) 모델링

### 기능 관점

- 기능 모델은 시스템이 어떠한 **기능**을 수행하는가의 관점에서 시스템 기술
- 데이터에 대하여 수행되는 계산에 초점
- 시스템의 계산에 관한 논리와 현상을 보여주지만 계산이 일어나는 순서와 데이터 생성, 도착 순서 등에 대해서는 기술하지 않음
- 자료흐름도 : 데이터에 수행되는 계산에 근거하여 시스템을 쪼개나간다. 구성요소는 프로세스와 자료 흐름
- 기능 모델링에 사용되는 대표적인 분석기법을 **구조적 분석**이라 하며 자료흐름도와 자료사전에 의해 그 결과를 나타냄
- 구조적 분석기법 : 정보의 흐름과 정보의 변환을 나타내는 방법으로, 요구사항 분석 도구로 가장 많이 사용

### 동적 관점

- 시스템에 변화에 따른 시스템의 동작에 제어에 초점을 맞춰 시스템의 상태와 상태를 변하게 하는 원인들을 묘사
- 시스템의 시간과 변화에 대한 것을 포함함
- 시스템은 시간의 변화에 따라 한 상태에서 다른 상태로 변화게 되므로 이러한 변화는 동적인 면을 가지게 되고, 그로 인한 모델을 **동적 모델**이라 부름
- 동적 모델링의 주요 구성 요소는 상태와 사건으로, 많이 사용되는 동적 모델링 도구는 상태변화도와 사건추적도 외에는 State Chart, SDL(Specification and Description Language), 페트리네트 등
- 외부와의 상호작용이 많은 실시간 시스템들은 동적 관점에서 시스템이 기술되어야 함

### 정보 관점

- 정보 모델은 시스템에 필요한 정보를 보여줌으로써 시스템의 정적인 정보 구조를 포착하는 데 사용
- 시스템에 사용되는 정보 객체를 찾아내고, 이들 객체의 특성, 객체들 사이의 관계와 연관성을 규명
- 정보 모델은 다른 두 관점보다 실세계를 정확히 묘사할 수 있는 장점 보유
- 정보 모델에 나타나는 객체들은 다른 모델에서 나타나는 결과와는 달리, 변하지 않고 안정감이 있어 시스템 개발에 있어 튼튼한 기초 제공
- 정보 모델은 시스템의 기능이나 동적인 면을 고려하지 않고 오직 정적인 것에만 초점을 맞춤
- 특히 시스템의 데이터베이스를 분석하는 데 많이 사용 (ER 모델, EER 모델)
- **객체지향 시스템 개발 방법론**도 정보 모델링을 기초로 하여 시스템을 분석하고 개발하는 접근 방법
- 객체지향 모델은 객체의 정적인 정보에 객체의 동적인 면과 기능 관점을 추가하여 완벽한 객체를 구현하는 게 그 목적

### 세 관점의 통합

세 가지 모델은 시스템의 각기 다른 면을 나타내며 어느 하나도 시스템 전체를 완벽히 설명하지 못한다. 따라서 세 가지 관점을 모아지고 통합되어야 시스템의 요구사항이 완벽히 표현될 수 있다.  

개발하는 응용 분야에 따라서는 한 관점이 시스템의 필요한 모든 모습을 거의 다 설명하여줄 수도 있을 것이며, 이런 경우 다른 관점은 간략하게 묘사되거나 생략될 수 있다.  

ex)
- 컴파일러 시스템 : 기능 모델링
- 데이터베이스 시스템 : 정보 모델링
- 통신 시스템 : 동적 관점과 기능 관점에서의 모델링

## 요약

- 요구사항 분석은 시스템의 목표를 확립하는 과정이며 개발에 들어가기전 문제에 대한 연구를 하는 것
- 목표가 정확해야 프로젝트가 성공적으로 이뤄질 수 있으며 목표는 구체적이어야 함
- 요구사항 분석의 결과물인 요구샇아 명세서는 사용자와 개발자 모두에게 공통의 목표를 제시하는 것
- 요구사항 명세서는 시스템 개발 전과정에 걸쳐 기준이 되는 중요한 문서
- 요구사항을 완벽하게 이해하는 것은 소프트웨어 개발이 성공적으로 되기 위한 필수조건
- 요구사항 명세서는 사용자와 개발자 모두에게 대화의 도구로서 사용되며 설계 및 프로그래밍 단계에서 필요로 하는 중요한 정보를 포함하고 시스템의 윤곽과 골격을 제공

---

# 기능 모델링

## 기능 관점

- 소프트웨어 시스템은 받아들인 정보를 새로운 정보로 변환시켜 내보내 주는 것
- 구조적 분석기법 : 시스템을 기능 관점에서 바라보고 시스템에서 요구되는 정보의 흐름과 정보의 변환을 나타내 주는 대표적인 기능 모델으로, 현재 요구사항 분석에서 가장 많이 활용되고 있는 기법

## 구조적 분석기법

구조적 분석기법의 뿌리는 구조적 프로그래밍으로, 안정감 있는 시스템을 만들기 위해 설계의 원칙들을 필요로 했다. 이 부분을 해결한 것이 **구조적 설계기법**이다.  

하지만 설계의 원칙만 가지고는 시스템의 기능들을 다 표시하지 못하므로 요구사항 분석의 필요성이 대두되어 나타난 기법이 **구조적 분석기법**이다.  

구조적 분석기법에서 시스템은 받아들인 정보를 가공처리하는 하나의 큰 프로세스이며, 이 프로세스는 쪼개져 세부기능을 수행하는 작은 프로세스들로 나눠진다. 즉, 하향식으로 높은 차원의 기능을 작은 단위로 분할한다.

시스템이 반복적으로 분할되는 것을 자료흐름의 상세화라 한다.

### 계층화(leveliing)

**계층화** 또는 **일반화** : 일반화으로 큰 시스템을 상세화하면서 계층적인 배열을 두어 서로의 종속관계를 표시하는 것  

- 하향식 기법인 구조적 분석기법은 표현의 정도를 구분하고 읽기 쉽게 하기 위해서
- 큰 시스템을 분석하기 위해 분할의 개념은 필수적이므로

이러한 이유로 레벨화가 필요하다.  

자료흐름도는 하향식 방식으로 시스템을 분할하여 그림을 통해 나타낸다. 말단 프로세스들의 기능을 설명하는 **프로세스 명세서**, 자료흐름도에 사용되는 데이터의 정의 등을 기록하여 놓는 **자료사전**으로 구성된다.  

## 자료흐름도 (Data Flow Diagram)

자료흐름도 : 정보가 입력되어 적용되는 변화와 그 결과를 그림으로 묘사해주는 도식적 기법  

다음의 4가지 기호를 사용하여 표기

![image](https://user-images.githubusercontent.com/59367782/95723324-fd18c080-0caf-11eb-8c9e-d86e8c7b1902.png)

- 외부객체 : 시스템의 외부에서 시스템과 정보를 주고 받는 사용자 등의 외부객체
- 프로세스 : 시스템 안에서 정보를 처리하고 변환시키는 변환기이며 버블이라고도 부름
- 데이터 항목 : 정보의 흐름을 표시하는 자료항목 또는 데이터 단위이며 화살표는 데이터의 흐름을 표시
- 자료 저장소 : 오랫동안 보관되는 데이터를 저장하여 놓는 파일이나 데이터베이스 시스템

### 프로세스의 분할

프로세스들은 세부적으로 묘사하기 위해 분할될 수 있다. 한 프로세스를 루트로 하는 트리 구조로, 세부적으로 표시할 수 있다. 배경도나 중간 과정의 프로세스들은 모두 쪼개지지 않는 원시 프로세스들로 대체 될 수 있다.  

## 배경도

배경도 : 최상위의 하나로 된 프로세스를 그린 그림. 이는 시스템이 분할되기 전의 프로세스이다.  

배경도는 우리가 개발해야 할 시스템의 영역을 기술하고, 시스템과 외부 환경과의 경계를 결정, 외부와의 인터페이스를 제시하여 시스템의 입출력 데이터를 보여준다. 따라서 시스템과 외부 환경과의 인터페이스에 초점을 맞춘다.

배경도가 완성되어 사용자가 얻는 것을 확립한 후, 실현하기 위해 시스템의 내부에 대한 분석이 이뤄져야한다.  

배경도는 데이터와 시스템이 반응해야 하는 행위, 사건 등에서 시스템과 외부 객체사이에 오가는 정보를 추출하여 만들어지며, 시스템의 외부에서 바라본 시스템의 모습을 기술

### 자료흐름도 프로세스 번호

각 프로세스와 프로세스를 구체적으로 묘사하는 자료흐름도는 번호를 갖게되며, 각 자료흐름도는 상위 레벨의 부모 자료흐름도와 연관된 프로세스로부터 번호를 부여받는다.  

배경도의 프로세스는 최상위 프로세스로 번호 0을 갖으며, **분할되어 자료흐름도로 표시**된다. 이때 이 자료흐름도는 0의 번호가 붙는다.  

각 **프로세스의 번호**는 그 프로세스를 분할하여 표시하는 **자료흐름도의 번호**와 일치한다. 따라서 배경도의 프로세스 0은 프로세스 1, 2, 3, 4를 자녀 프로세스로 갖고, 반대로 프로세스 0은 프로세스 1, 2, 3, 4의 부모 프로세스이다.  

### 원시 프로세스

원시 프로세스 : 
- 프로세스들 중 더 이상 그 아래로 쪼개지지 않는 하위 프로세스이다.
- 상세한 설명은 **미니 명세서(프로세스 명세서)** 에 기록한다. 따라서 프로세스에 미니 명세서가 있다면 해당 프로세스가 원시 프로세스라는 것을 의미한다.  
- 미니 명세서의 번호는 그 프로세스의 번호와 동일. 따라서 미니 명세서의 수는 원시 프로세스의 개수와 일치

일반적으로 하나의 프로세스가 하나의 기능을 수행할 정도로 충분히 작게 쪼개는 것이 이상적이다. 또한 미니 명세서의 크기는 한 페이지에 요약될 정도가 적당하다.  

### 자료흐름도의 균형

자료흐름도의 균형 : 부모 자료흐름도의 정보 입출력은 자녀 자료흐름도의 입출력과 같아야함. 이는 정보흐름의 연속성을 유지하기 위해 필요하다.  

상위 레벨에서 많은 데이터를 묶어 하나로 표시하고 하위 레벨로 내려가면서 쪼개어 표시하는 것은 읽기 쉽다는 장점이 있다.  

균형에 대한 정보는 자료사전에 정의하여 놓는다.  

### 자료사전

자료사전 : 
- 자료흐름도에 나타난 데이터에 관한 정보(시각적인 정보)를 한 곳에 모아 놓음으로써 개발자나 사용자들이 편리하게 사용할 수 있게 해 준다.

- 메타데이터. 즉 데이터에 대한 데이터를 모아 놓는 저장소이며, 데이터 항목, 데이터 흐름 등에 관한 정의가 포함되어 있다.

### 구조적 분석기법과 기능 분할

시스템의 중요 요소나 기능을 찾아내어 분할 해나가는 것은 분석가의 임무이며 쉬운 일이 아니며, 완벽한 가이드라인이 없다. 따라서 구조적 분석기법은 이들 기능을 분할하는 일반적인 방법을 제시하여 준다.  

- 사건 분할 방식 : 모던 구조적 분석기법 제안

여기서는 Use Case[JAC92]를 적용하여 분석한다.

### 분할

분석 : 
- 문제를 **쪼개서 정복**하는 과정
- 어떤 것을 그 기본요소들로 분해하는 것과 관련되어 있고 그에 요구되는 개념이 **세분화** 또는 **분할**

세분화, 분할 :
- 우리의 지식을 체계적으로 정돈하기 위해 필요하며 추상화와 공통적 특성을 이용하여 더 작고 단순한 것들로 나눔
- 분할에 정도는 없으며 분할되어 나타나는 프로세스나 객체들을 쉽게 찾아낼 수 있는 간단한 해결 방법은 없다.
- 기존의 분할에 사용할 수 있는 정보가 있는 경우 이를 활용할 수도 있다.

일반적으로 시스템 분할에서 추구하는 중요한 목표는 요소들이 **독립성**을 가지며 요수 내부의 결합도가 높고 외부와의 결합은 최소화 되도록 시스템을 설계하는 것이다.

## 문제설명서

- 일반적으로 프로젝트 계획학허나 계약할 시기에 추상적인 시스템의 목적만을 나열한 **문제설명서** 또는 **제안서**로 일이 시작되는 경우가 많음
- 문제기술은 고객의 관점에서 고객이 사용하는 용어로 기술
- 문제기술에 모든 구체적인 요구사항이 정의되기는 어령무
- **제안서**(proposal)와 **제안요청서**(RFP: request for proposal)

### 문제 기술의 내용

- 해결하려는 문제점에 대해 명확환 기술해야 한다. 현재의 상황, 배경, 시스템 개발의 필요성, 문제 제약 조건, 달성하려는 목표에 대한 기술이 포함
- 자동화하는 데 요구되는 추진전략 및 방법을 기술한다. 적용하고자 하는 개발 방법론 및 접근 방법 등이 구체적으로 기술
- 제공되어야 할 기능, 만들어질 시스템의 제약 조건, 요구되는 하드웨어, 연관된 소프트웨어, 일의 범위 등을 기술
- 시스템 차원의 목표, 개발 과정에서 요구되는 사항, 결과물 등이 기술
- 추상적인 차원에서 합격 판정 검증 기준을 확립하여 기술
- 시스템이 개발되었을 때 예상되는 기대 효과 및 활용 방안을 기술

### 제안서의 양식

1. 연구개발의 필요성
    - 국내외 기술 개발 현황
    - 연구개발하려는 기술의 수준
    - 문제점
    - 앞으로의 전망
    - 연구개발의 중요성
2. 연구개발목표
3. 연구개발 내용 및 범위
4. 연구 결과물
5. 추진전략 및 방법
6. 지금까지의 연구개발 실적
7. 기대성과 및 활용방안
8. 인원 편성표
9. 연구개발 기자재 현황
10. 연구추진일정 계획
11. 소요예산명세
12. 참고 문헌

### 문제기술의 한계

문제기술은 프로젝트 계획단계에서 쓰인다. 따라서 문제기술은 문제를 이해하기 위한 출발점이며 완벽한 문서일 수 없다. 일반적으로 완벽하거나 구체적이지 못하며 이를 사용해 시스템을 검증하는 일은 쉽지 않다.  

계획이 끝나거나 계약이 이뤄진 후 구체적인 요구사항을 분석하여 요구사항 명세서를 만든다.

### Use Case를 이용한 구조적 분석기법

1. 문제기술 준비
2. 시스템을 사용하는 행위자가 누구인지 규명한다. 이 때 시스템의 주 고객인 주행위자와 시스템이 사용되도록 지원하여 주는 부행위자 규명
3. 각 행위자에 대하여 use case를 찾아내고 목록을 만든다. 이때 정보를 만들거나 사용하는 use case만 고려
4. 각 use case에 대하여 기본적인 활동만 구체적으로 기술
5. 각 use case에 대하여 예외적인 경우와 선택적인 경우를 찾아내어 구체적으로 기술한다. 이 경우 기본적인 활동과 상당히 다른 경우만을 조사

## 요약

- 구조적 분석기법은 정보의 흐름과 정보의 변환을 그래프로 나타내주는 기능 모델
- 구조적 분석기법은 시스템과 외부와의 정보흐름에서 시작하여 하향식으로 시스템의 기능을 분할
- 구조적 분석기법에서 나온 결과는 다음 단계인 설계 단계에서 필요로 하는 시스템의 골격을 제공
- 자료흐름도의 프로세스는 분석의 결과이며 프로그램의 모듈과는 다르다.
- 자료흐름도의 각 프로세스는 설계에서 필요로 하는 모듈로 변환될 가능성이 높으며 이 경우 각 정보흐름은 모듈들 사이의 매개 변수로 나타난다.
- 구조적 설계는 응용분야의 관점에서 컴퓨터 관점으로 이동하여 구조적 분서의 결과에 살을 붙여가는 과정

---

- 13日

# C Programming on Linux

## Vi

### 라인 복사 및 삭제

- 모든 명령어는 insert mode 에서 esc 키를 눌러 일반 모드로 나온 후, 수행
- 라인 복사 명령 : yy
    - 앞에 숫자를 입력하면, 현재 커서가 위치한 라인을 포함한
아래의 다수 라인을 한번에 “레지스터”로 복사함
- 라인 삭제 명령 : dd
    - 앞에 숫자를 입력하면, 현재 커서가 위치한 라인을 포함한
아래의 다수 라인을 한번에 “레지스터” 로 복사하고, 제거함
- 레지스터의 붙여넣기 : p
    - 현재 커서가 있는 곳에서부터 레지스터의 내용을 삽입함
- VI Register
    - VI에서 복사한 내용이 임시로 보관되는 공간.
    - VI 프로그램 간에 공유됨.
        - 따라서 VI가 종료되어도, 다시 VI를 수행하면 레지스터의 내용을 이용할 수 있음
        - 이 기능은 한 파일의 내용을 복사해서 다른 파일에 붙여넣을 때 유용함

### 라인 이동 및 관련 명령

- 라인 이동
    - 사용법 1: “:” 입력 후, 이동할 라인 숫자 입력
    - 사용법 2: 라인 숫자를 입력하고 Shift + g
- 관련 명령
    - 라인의 맨 앞으로 이동하기: 0 (숫자 영)
    - 맨 위로 이동하기: gg
    - 맨 밑으로 이동하기: “:$” or “(입력없이) shift + g”
    - 줄 번호 표시 하기 : “: set number”

### 문자열 찾기 / 바꾸기

- 문자열 찾기
    - “/”를 입력하고 찾을 문자열 입력
    - Enter 입력 후, 다음 단어, 이전 단어 검색
        - 소문자 n: 다음 단어
        - 대문자 N: 이전 단어
    - 이전에 찾아본 문자열 불러오기
        - “/”를 입력한 상태에서 위 아래 화살표 사용
- 문자열 바꾸기
    - :[범위]s/찾을문자열/바꿀문자열/[option]
    - 범위: comma 를 이용해 범위 표현. % 는 전체 영역
        - 예) 1,10: 첫 번째부터 10번째 라인 내에서 수행.
    - 찾을 문자열에는 정규 표현식 사용 가능 (regular expression 으로 검색)
    - Options
        - g: 범위 내에서 바꾸기 수행
        - c: 한 항목씩 물어보면서 수행
        - i: 대소문자 무시
    - 예) :%s/Protocol/protocol/gc

### 기타

- Undo/Redo (취소하기, 되돌리기)
    - u: undo
    - ^r: Redo (CTRL + r)
- 세로 및 가로 블록 선택, 편집
    - ^v: Visual block mode (CTRL + v)
    - 모드 진입 후, 화살표로 선택 후, 편집 명령
    - 예) 여러 라인에 있는 주석을 한번에 제거
        - 세로 모드로 여러 주석 문자를 선택 후 delete
    - 예) 여러 라인에 주석 한번에 넣기
        - 세로 모드로 영역 선택 후, shift + i 로 입력 모드 진입
        - 텍스트 입력 후, esc 를 두 번 누름
- Read-only 파일의 저장
    - :w 혹은 :wq 뒤에 ! 를 붙임 (force)
- 외부 텍스트 붙여넣기 모드
    - :set paste

## nano

- nano - Nano's ANOther editor, inspired by Pico
    - 전통적으로 메일 클라이언트에서 사용하던 Pico 라는 편집기를 기반으로,
    - Vi와 같이 여러 리눅스 배포판에서 기본 프로그램으로 사용함
    - Vi와 비교: “사용하기 쉽다.”
        - 대부분 단축키가 아래에 나열되어 있어 모르는 기능도 빠르게 활용할 수 있다.
        - “검색하여 교체하기” (replace) 기능이 보다 편리하게 사용 가능 하다.
        - 자동 들여쓰기 기능이 더 편리하다.
- Comments
    - Vi, nano 모두 기본 에디터이므로 간단한 사용 방법은 익혀두는 것이 좋다.
    - Vi, nano 모두 간단한 편집 기능은 큰 차이 없으므로, 익숙한 도구를 쓰면 된다.
    - 초심자가 처음 배운다면?
        - Nano: 접근성이 높다
        - Vi: 처음 배울 때 어려울 수 있지만, 보다 다양하고 강력한 기능들을 제공한다.
    - (!) 결국 다양하고 많은 편집을 필요로 할 때는 윈도우 환경이 훨씬 편리함.
        - 실제 파일은 리눅스에, 편집은 윈도우(or Mac)에서 수행하는 환경을 구축하는 것이 일반적

## GCC: GNU Compiler Collection

- GNU
    - 유닉스 환경에서 필수적인 다양한 시스템 소프트웨어를 공개 SW 형태로 제작, 배포하는 그룹
    - 1983년 부터 활동하며 다수의 SW를 배포하였고, 대다수 SW가 유닉스 환경에서 de facto standard 로 활용되고 있음
        - De facto standard: 사실상의 표준. 관습, 관례, 제품이나 체계가 시장이나 일반 대중에게 독점적 지위를 가진 것
    - GNU 패키지 목록
        - 일상적으로 사용하는 다양한 명령어들이 포함되어 있음 (bash, grep, gzip, tar, …)

- GCC: GNU Compiler Collection
    - GNU SW 중 가장 유명한 SW의 하나로, 다양한 Architecture (CPU) 환경에서 다양한 언어를 지원함
    - C, C++, Objective-C, Fortran, Ada, Go, and D
    - 위 언어를 위한 라이브러리도 포함
    - 상용 컴파일러와 비교해 성능이 낮다는 인식이 있었으나, 최근에는 많은 상용 레벨 SW를 위한 컴파일러로 널리 활용하고 있음
        - Linux, MySQL, Apache 등등
    - https://gcc.gnu.org/
    - Git repository: official, github
    - 설치 방법 (j-cloud 인스턴스에서는 수행할 필요 없음)
        - 패키지 업데이트 후, SW 빌드를 위한 필수 패키지 설치. 개발을 위한 manpage 추가
        - $ sudo apt update && sudo apt install    build-essential
        - $ sudo apt-get install manpages-dev

### 컴파일 환경

- 컴파일이란
    - 텍스트로 작성한 프로그램을 시스템이 이해할 수 있는 기계어로 변환하는 과정
    - 보통 컴파일 과정과 라이브러리 링크 과정을 묶어서 수행하는 것을 의미

### 사용 방법

- $ gcc <source file>
    - Output: 컴파일 성공 시, “a.out” executable file (실행 파일) 생성
- Options
    - “-o” : 생성된 실행 파일의 이름을 지정
    - “-Wall” : 모든 레벨의 warning messages 출력
    - “-O” : optimization 수행. “-O1”, “-O2”, “-O3” 와 같이 최적화 레벨을 지정할 수 있음
        - https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
    - “-l” : (소문자 L) 라이브러리 링크. Math, pthread 와 같이 명시적 링크가 필요한 경우
        - 적절한 library 를 –l 옵션을 이용해 링크해주어야 함
            - 예) math (-lm) , pthread (-lpthread)

```
$ gcc test.c
$ ls
a.out test.c
```
기본 실행파일명은 a.out

```
$ gcc -o test test.c
$ ls
test test.c
```
실행파일명 지정은 -o 옵션

## Standard Input and Output

### stdout and stderr

- fprintf()
    - printf() 와 유사하게 형식이 지정된 문자열 (formatted string)을 출력하되,
    - 맨 앞의 인자로 출력 방향을 지정할 수 있음
        - printf()는 fprintf()의 simple version. 실제로 fprintf(stdout, …) 으로 구현됨

### stdin

- Pipe 를 이용한 stdin 입력
    - Scanf()는 본래 stdin 으로 부터 입력을 받는 함수
    - Stdin 은 기본으로 console 을 통한 키보드 입력으로 연결되어 있음
    - Pipe를 이용해 cat 의 수행 결과를 stdin 으로 입력받은 것
- Stdin, stdout, stderr 의 redirection 을 이용해,
여러 프로그램 간의 편리한 연동이 가능함

## 명령행 인자

- 명령행 : 사용자가 명령을 입력하는 행 (command line)
- 명령행 인자 : 명령을 입력할 때 함께 지정한 인자(옵션, 옵션인자, 매개변수 등)
    - 명령행 인자는 main 함수로 전달됨.
    - Main 함수의 첫 번째 인자: 인자의 개수 (보통 int argc 로 선언함. Argument count)
    - Main 함수의 두 번째 인자: 문자열로 된 인자들이 저장된 포인터 배열
        - 보통 char *argv[] 또는 char **argv 로 선언함. Argument vector
        - 명령어는 항상 첫 번째 인자
        
예) `int main(int argc, char *argv[])`

- 포인터 배열?
    - 다양한 길이의 문자열이 임의의 개수만큼 저장되는 경우,
    - 포인터 배열로 다루는 것이 적합함

---

# AWS Storage Services 1: EBS, EFS

| 요구 사항: | 추천 제품: | 
|---|---|
|Amazon EC2, 관계형 및 NoSQL 데이터베이스, 데이터 웨어하우징, 엔터프라이즈 애플리케이션, 빅 데이터 처리 또는 백업 및 복구를 위한 영구 로컬 스토리지|Amazon elastic Block Store(Amazon EBS)|
|Linux 기반의 워크로드를 AWS 클라우드 서비스와 온프레미스 리소스에서 사용할 수 있도록 지원하는 간단하고 확장 가능하며 탄력적인 파일 시스템입니다. 이 제품은 애플리케이션을 중단하지 않고 온디맨드 방식으로 페타바이트 규모까지 확장하도록 구축되어 파일을 추가하고 제거할 때 자동으로 확장되고 축소되므로, 애플리케이션은 필요할 때 필요한 만큼 스토리지를 사용할 수 있습니다.|Amazon ElasticFile System(Amazon EFS)|
|사용자 생성 콘텐츠, 활성 아카이브, 서버리스 컴퓨팅, 빅 데이터 스토리지 또는 백업 및 복구를 위해 인터넷 위치에서 데이터에 액세스할 수 있도록 지원하는 확장 가능하고 안정적인 플랫폼입니다.|Amazon Simple Storage Service(Amazon S3)|
|아카이브 및 규제 준수를 위해 테이프를 대체할 수 있는 매우 저렴한 장기 스토리지 클래스| Amazon Glacier 및 Amazon S3 Glacier Deep Archive|
|고성능 컴퓨팅, 기계 학습 및 미디어 데이터 처리 워크플로우와 같이 컴퓨팅 집약적 워크로드에 최적화된 완전관리형 파일 시스템으로, Amazon S3에 완벽하게 통합되어 있습니다.|Amazon FSx for Lustre|
|Windows Server를 기반으로 구축된 완전관리형 네이티브 Microsoft Windows 파일 시스템으로, 이 제품을 사용하면 SMB 프로토콜 및 Windows NTFS, AD(ActiveDirectory) 통합, DFS(분산 파일 시스템)에 대한 전체 지원을 비롯하여, 파일 스토리지가 필요한 Windows 기반 애플리케이션을 AWS로 쉽게 이전할 수 있습니다. |Amazon FSx for Windows File Server|
|버스팅, 계층화 또는 마이그레이션을 위해 Amazon 클라우드 스토리지로 온프레미스 환경을 보강해주는 하이브리드 스토리지 클라우드입니다.| AWS Storage Gateway|
|유형 및 크기에 상관없이 모든 데이터를 AWS 클라우드로, 혹은 AWS 클라우드에서 이동하는 작업을 간소화 및 가속화할 수 있도록 지원하는 서비스 포트폴리오입니다.| 클라우드 데이터 마이그레이션 서비스|
|클라우드뿐 아니라 온프레미스에서도 AWS Storage Gateway를 사용해 AWS 서비스 전체에서 데이터 백업을 손쉽게 중앙화하고 자동화할 수 있는 완전관리형 백업 서비스입니다.|AWS Backup|


![image](https://user-images.githubusercontent.com/59367782/95824899-0adf4c00-0d6b-11eb-8136-7dcbe70d52ce.png)  

## EBS와 EFS

- EBS (Elastic Block Storage)
    - Amazon EC2 인스턴스에 연결된 영구 볼륨에 블록 데이터를 저장하고 이를 처리
    - 일반 HDD, SSD와 같은 블록 기반의 입출력을 지원하는 스토리지
    - EC2 VM의 OS, 데이터를 저장하기 위한 저장장치로 사용됨
    - 연간 고장률 AFR: 0.1%~0.2% (일반 HDD: 4%)
- EFS (Elastic File System)
    - 간편하고 확장 가능한 파일 시스템에 데이터를 저장 및 공유
    - Ext4, NTFS와 같이 파일 시스템 access semantics 에 따른 FS 인터페이스를 제공하는 서비스
    - 자체 고가용성, 내구성을 제공하도록 설계
    - 용량 자동 확장 및 축소

### EBS Pricing

- Amazon EBS 범용 SSD(gp2) 볼륨
    - $0.114 프로비저닝된 스토리지의 월별 GB당
    - 예) 30GB 한달 쓰면? $3.342 = 약 4천원
- Amazon EBS 프로비저닝된 IOPS SSD(io1) 볼륨
    - $0.128 프로비저닝된 스토리지의 월별 GB당
    - $0.067 프로비저닝된 월별 IOPS당
- Amazon EBS 처리량 최적화 HDD(st1) 볼륨
    - $0.051 프로비저닝된 스토리지의 월별 GB당
- Amazon EBS 콜드 HDD(sc1) 볼륨
    - $0.029 프로비저닝된 스토리지의 월별 GB당
- Amazon S3에 대한 Amazon EBS 스냅샷
    - $0.05 저장된 데이터의 월별 GB당

### EFS Pricing

- 표준 스토리지
    - $0.33 월별 GB당
- Infrequent Access 스토리지
    - $0.0272 월별 GB당
    - $0.011 전송량 기준
- 프로비저닝된 처리량 유형
    - $6.60 월별 MB/s
    
- 예) 30GB 한달: $9.9 (약 12,000원)
- EBS보다 약 3배 가량 비쌈.
    - EFS는 보다 고급의 기능을 제공하기 때문
    - IA는 약 1/12 수준 (다만 계층 간 전송에 대해 요금 부과) 

![image](https://user-images.githubusercontent.com/59367782/95834620-2866e280-0d78-11eb-9907-ba964f192c3c.png)

## Block storage and File system

- Block storage
    - 512B 단위로 분할된, (sector)
    - 0부터 시작하는 선형 주소 공간 (linear address space)에,
    - 데이터를 읽거나 쓸 수 있는 스토리지 장치
- File system
    - 하나의 파일 시스템 내에서 각기 unique name 을 갖는,
    - File 이라는 독립적인 개체에,
    - 1B 단위로 분할된,
    - 0부터 시작하는 선형 주소 공간 (linear address space)에,
    - 데이터를 읽거나 쓸 수 있는 스토리지 시스템
    - 일반적으로 블록 스토리지 장치의 상단에 위치함
        - 실제 데이터는 블록 스토리지에 저장됨

![image](https://user-images.githubusercontent.com/59367782/95825908-85f53200-0d6c-11eb-8002-2e3bd5ecf047.png)

- Block storage (left)
    - 데이터를 기록하기 위해 블록 스토리지 상의 주소를 직접 사용해야함
- File system (right)
    - 파일 시스템이 제공해주는 파일 이라는 추상적 개체를 이용
    - 모든 데이터는 0부터 시작하는 독립된 주소 공간에 기록할 수 있음
    - 실제 데이터가 기록되는 공간은 블록 스토리지이며,
    - 파일의 주소 공간과 블록 스토리지 주소 공간 사이의 mapping 을 파일 시스템이 관리
        - 이때 이 **매핑 정보** 또한 블록 스토리지에 저장되어야 함

- Block storage 장단점
    - (장점) 중간 계층을 거치지 않으므로 액세스가 빠르다.
    - (단점) 같은 주소 공간을 다수가 공유하므로, 데이터 관리가 어려움
        - 예) A와 B가 동시에 서로 다른 데이터를 0번 주소에 기록하려하면?
- File system 장단점
    - (장점) 파일마다 서로 주소 공간이 분리되어 있기 때문에, 서로 분리되어야 할 데이터를 쉽게 관리할 수 있음
        - 예) 위의 예에서, A와 B는 서로 다른 파일의 주소 공간에 각각 접근하므로 문제가 없음
    - (단점) 성능 저하
        - 파일의 데이터가 실제 블록 스토리지 어느 주소에 위치하는지 변환이 필요 (mapping)
        - 그러나 mapping 정보와 데이터의 메모리 캐싱을 통해 많은 부분 해소됨

## 그외

- S3 (Simple Storage Service)
    - AWS의 가장 기본적인 Object based storage
    - 일반적인 클라우드 스토리지와 동일함 (예. 네이버/다음 클라우드)
    - 내구성: 99.999 999 999% (11-9)
- Glacier (뜻: 빙하)
    - 데이터 보관 및 백업을 위한 안전하고 내구성있는 스토리지
    - 싸고 성능이 느림
    - 연평균 99.999 999 999%의 내구성

- AWS Storage Gateway
    - 사용자가 기존에 사용하던 스토리지 인프라 및 데이터를 포함한, 모든 스토리지 서비스를 AWS 클라우드와 통합할 수 있도록 지원
    - 파일, 볼륨, 테이프 인터페이스 지원
    - NFS, iSCSI 인터페이스 지원

- AWS Backup
    - 완전관리형 백업 서비스
    - 중앙 관리 및 자동화
        - AWS Storage Gateway를 사용해 AWS 서비스 전체에서 데이터 백업을 손쉽게 중앙집중화하고 자동화
        - AWS Backup 콘솔에서 클릭 몇 번이면 백업 일정과 보존 관리를 자동화하는 백업 정책을 생성할 수 있음


---

- 14日

# CleanCode

로버트 C. 마틴 저자의 클린코드를 읽기 시작하였다. 3장 함수까지 읽었는데 느낀 점이 많다. 아직 실무를 해보지 않은 학생으로서 커다란 프로젝트도 해보지 못했다. 그래서 가끔 PS를 하면서 만든 코드를 친구들과 이야기해볼 뿐 프로젝트 코드를 가독성 좋게 타인이 제대로 이해하게 코딩한다고 자신할 수 없다. 아직 많이 읽지는 않았지만 이 정도만 읽고도 책에서 읽은 내용을 하나도 지키지 않고 있어 충격이 컸다.

1장에서 클린 코드의 중요성을 이야기하고, 2장에서는 변수, 함수, 클래스 등 이름을 강조했다. 3장에서는 그 중 함수에 대해서 주로 서술하였다.  

책을 다 읽어보지 않았지만 이 책은 Java로 예시를 들며, 실제로 겪었던 일들을 토대로 글을 서술해간다. 그러한 일들을 나도 겪을 수 있다고 생각하면 이후에 도움이 될 수 있다고 생각된다. 시간이 흘러도 개발자들이 직접 개발하는 한 깔끔하고 가독성있는 코드는 항상 경쟁력을 가질 것이라고 생각한다. 따라서 이 책이 절대적인 규칙을 제공하지는 않지만 나의 코드에 조금이라도 보탬이 될 수 있게 배울 점이 있다고 본다. 다른 공부를 하다가 지치거나 여유있을 때 계속 읽어가면서 느낀 점을 적어볼려한다.  

지금까지 읽은 부분에서는 3장이 제일 기억에 남는다. 핵심 내용은 `함수는 한 가지 기능만 하면 된다` 이다. 이 내용으로 추상화, switch, 예외처리, 반복, 구조적 프로그래밍 등 여러가지를 설명한다. 다양한 내용이 나와도 결국엔 다른 사람들이 함수의 이름만 봐도 함수가 무슨 기능을 하는지 한번에 알고 사용할 수 있도록 만들어야한다는 것이다.  

메인과 분리하거나 재귀, 재사용을 위해서 함수를 만들어 사용하던 나에게는 새로운 이야기가 아닐 수 없다. 이러한 점에서 나는 아직 배울게 많고 코딩할 때 신경써야하는 점이 많다는 것을 단번에 깨달았다. 하지만 아직까지도 이름을 짓는데는 쉽지 않다. 그러한 예로 깃에 커밋 메시지를 적거나, 변수 이름을 짓기 위해 영어 단어를 생각하는 시간이 상당히 길다. 또한 함수도 같은 맥락이다. 함수의 기능을 한 가지로 축약하기 위해선 이름도 중요하다고 생각되는데, 이 부분이 부족하다.  

책을 읽어나가면서 도움이 되는 부분을 받아들여서 누군가에게 코드를 보여줘도 부끄럽지 않은 개발자가 되도록 노력해야겠다.

---

- 15日

# 2020 공개SW 온라인 체험캠프

오픈소스 소프트웨어 개발 수업을 [2020 공개SW 온라인 체험캠프]에 참여하는 것으로 대체하였다. 해당 캠프에서 공개SW에 대한 정의 등을 설명해주셨는데 연구원의 입장에서의 공개Sw와 실무자의 입장에서의 공개SW로 나뉘어서 받아들여졌다.  

오전에는 그러한 시간을 가지고 오후에는 두 개의 섹션으로 나뉘었는데 Keras와 Javascript 튜토리얼 한글화 두 가지로 나뉘었다. 나는 그 중 github를 활용한 자바스크립트 튜토리얼 한글화을 선택하여 실습을 하게 되었다. 자바스크립트 튜토리얼 한글화하는 프로젝트의 오너분이 오셔서 직접 상세하게 git을 학생입장에서 상세히 설명해주시고 오픈소스 생태계를 직접 이해할 수 있는 시간을 가졌다. 그리고 직접 컨트리뷰션하는 시간을 가졌는데 어렵지 않게 영어로 된 부분을 번역해서 Pull request를 던지고 직접 merge하는 모습도 보여주셨다.  

오늘은 짧으면서도 긴 시간을 캠프 참여하는데 시간을 보냈는데, 이 시간을 통해서 알던 내용도 다시 되짚어보고 실습을 통해서 제대로 Pull Request를 할 수 있게 배워갈 수 있었다. 내일도 이어서 하므로 더 배워갈 수 있었으면 좋겠다.

---
