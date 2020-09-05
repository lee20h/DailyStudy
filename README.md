# 📙 Today I Learned  
## 규칙  
* 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
* 쓸데없는 Commit 지양
* markdown으로 작성
* 1일 1문제(PS, SQL)이상 해결
* 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---  

# 2020년

| [5월](./month/5월) | [6월](./month/6월) | [7월](./month/7월) | [8월](./month/8월) |
|----|-----|-----|---|

--- 

- 1日  

# SQLD 문제 풀이

- 데이터베이스 모델링

| 절차 | 설명 |
|---|---|
| 절차 | 설명 |
| 개념적 데이터 모델링 | 전사적인 데이터 모델로 기업 전체 데이터베이스 구조를 모델링한다. 높은 추상화 제공 |
| 논리적 데이터 모델링 | 재사용성이 높은 데이터 모델로 시스템을 구축하기 위한 데이터베이스 모델이다. 키, 속성, 관계 등을 표현 |
| 물리적 데이터 모델링 | 물리적 저장장치를 고려하여 저장장치에 맞게 데이터베이스를 구축한다. 데이터베이스 성능, 가용성, 보안 등을 고려 |  

- 반정규화

데이터베이스 성능을 향상시키기 위해서 데이터 중복, 통합, 분리, 집계 등을 수행하는 모델링 기법이다. 반정규화 기법은 테이블 병합, 분할, 추가 기법이다. 업무처리를 위한 기능칼럼 추가는 반정규화가 아니다. 

- 상호연관 서브쿼리

메인쿼리 값을 서브쿼리가 사용하고 서브쿼리의 값을 받아서 메인쿼리의 값을 받아서 메인쿼리가 계산되는 쿼리이다.  

- 정규형

1차 정규형 : 모든 속성은 반드시 하나의 값, 속성 값의 중복 제거  
2차 정규형 : 식별자에 종속되지 않는 속성의 중복 제거  
3차 정규형 : 2차 정규형을 만족하며, 식별자 외 일반 칼럼간의 종속 존재 제거  

- 유일 인덱스 스캔 (Unique Index Scan)

기본키 또는 유니크 인덱스로 엑세스 가능  

인덱스 : 원하는 데이터를 빠르게 찾기 위해 탐색키를 갖는 테이블로, 원하는 데이터를 쉽게 찾을 수 있게 돕는 책의 색인과 비슷한 개념  

인덱스 특징 : 테이블 기반으로 선택적으로 생성할 수 있는 구조.  
테이블에 인덱스를 생성하지 않아도 되고 여러 개 생성 가능.  
Insert, Update, Delete 등 DML 작업은 테이블과 인덱스를 함께 변경하므로 느려 질 수 있음  

- 속성

엔터티는 2개 이상의 속성으로 구성.  
속성은 엔터티를 설명하고 인스턴스의 구성요소.  
하나의 속성은 하나의 값을 갖음.  
속성의 특성 : 기본 속성, 설계 속성, 파생 속성  

- 순번을 구하는 그룹함수

RANK 함수 : ORDER BY를 포함한 쿼리문에서 특정 항목에 대한 순위를 구하는 함수이다. 이 때 특정범위 (PARTITION BY) 내에서 순위를 구할수도 있고 전체 데이터에 대한 순위를 구할 수도 있다.  
동일한 값에 대해서는 동일한 순서를 부여하게 된다.  

DENSE_RANK 함수 : 동일한 순위를 하나의 건수로 취급한다.  

ROW_NUMBER 함수 : ROW_NUMBER 함수는 동일한 값이라도 고유한 순위를 부여한다.  

동일한 값의 순위를 정해야 할 때 오라클의 경우 ROWID가 적은 행이 먼저 나온다.  

만약 동일 값에 대한 순서까지 관리하고 싶으면 ROW_NUMBER() OVER (ORDER BY SAL DESC, ENAME)을 같이 ORDER BY 절을 이용해 추가적인 정렬기준은 정의해야한다.

---

- 2日  

# SQLD 정리

## SQL 기본

- DDL : Table － Partition : range, List, Hash Partition

- DML : insert, update, delete, select

- DCL : grant, revoke

- TCL : commit, rollback

## Join

- 순수관계

	1. SELECT
	2. PROJECT
	3. (Natural) JOIN
	4. Divide

- 일반 집합연산

	1. union
	2. intersect
	3. minus, except
	4. product

- FROM절 Join

	1. Inner Joint Select
	2. Natural Join
	3. Outer Join
	4. Cross Join
	5. USING
	6. ON 조건절

## 데이터 모델링

- 3층 스키마 

	1. 외부 스키마 : 사용자 관점, View 단계
	2. 개념 스키마 : 데이터 통합 및 조직 전체의 DB 구조
	3. 내부 스키마 : 물리적 저장

- 데이터 모델링

	- 3가지 요소 : Thing, Attribute, Relationship

	- 절차 
		1. 개념적 : 높은 추상화, 포괄적, EA 수립
		2. 논리적 : 재사용성, 정규화
		3. 물리적 : 성능, 저장 등 물리적 특성

- 관계형 DB

	- Entity
		- 조건 : 업무에서 관리
		- 종류 : 유무(유형, 개념, 사건) , 발생 시점  (기본, 중심, 행위)

	- 정규화 : 완전 함수 종속성, 부분 함수, 이행 함수, 후보키가 기본키에 종속

	- Attribute : 하나의 속성 = 하나의 값, 기본-설계-파생 속성, 종류(단일 값, 복합, 다중 속성)

	- 관계 : 종류(존재관계, 행위관계), 관계 차수, Check, 식별과 비식별 관계

	- 반정규화 : 대상(범위, 용량, 통계, 조인 수), 다른 방법 유도(클러스터링, 뷰, 인덱스 조정), 반정규화 적용(테이블, 속성, 관계 반정규화)

	- 식별자 : 대표성(주, 보조), 생성여부(내부, 보조), 속성 수(단일, 복합), 대체여부(본질, 인조)

## Optimizer

- SQL Operation

	1. AND-EQUAL : INDEX에 의해서 반환된 ROWID를 병합해서 공통값으로 변환
	2. CONCATNATION : 반환되는 ROW를 합산(UNION, UNION ALL)
	3. Connect by : 계층형 Query
	4. Count : Count(*) 집계 함수 사용
	5. Filter : Where절의 조건절을 사용하지 못함
	6. For update : Row Level Lock이 발생하는 연산
	7. Hash Join : 해시 조인
	8. Hash anti Join : 한쪽 Row를 추출할 때 다른 쪽 Row와 매칭되지 않은 것을 추출 (Not in, Not Exist, minus)
	9. Hash Semi Join : Exists절을 사용하느 세미 조인(hash_sj or merge_sj 힌트 사용)
	10. Index Range Scan : `<`, `>` between, like 사용
	11. Index unique Scan
	12. Inlist iterator : inlist에 있는 인수만큼을 반복
	13. itersection : 여러 쿼리의 반환 결과값을 병합해서 공통 부분만 추출
	14. Nested Loop : 중첩 루프를 사용해서 조인
	15. Merge Join : Sort와 Merge 단계로 조인
	16. Merge Semi Join
	17. minus : 차집합

- Sub Query

	- Scalar : 한 행을 리턴하는 서브쿼리로 Select 절에 존재
	- Inline View : FROM절에 서브 쿼리 사용
	- 연관 Subquery : 메인쿼리 조건절이 서브쿼리에 사용, 메인쿼리의 칼럼이 서브쿼리에서 사용
	- Filter형 Subquery : 확인자, 메인쿼리에 주입을 받아 확인자, 조인으로 풀리지 않음
	- Early Filter형 Subquery : 서브쿼리가 메인쿼리로 푸쉬되면서 먼저 실행 (push_subq 힌트)
	- Access형 Subquery : 메인쿼리에 값을 제공하는 제공자( 단일 값 서브쿼리), 서브쿼리가 먼저 실행됨, join으로 풀림
	- 멀티값 서브쿼리 : 여러 개의 행을 되돌림(IN, ANY, ALL EXISTS 사용)


- Optimizer Join

	- Nested Loop : 중첩 for문, 소량의데이터. Random Access가 최소화. 힌트 ordered use_nl

	- Sort Merge : Sort 단계와 병합 단계, 병렬로 실행. 힌트 use_merge

	- Hash Join : 등가조인에 사용, 작은 테이블이 드라이빙 테이블이 되어야함. CPU 과다사용, Random Access 최소화. 힌트 use_hash

---

- 3日  

KMP 문제 풀이 [Censoring](http::/noj.am/10747)  

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MAX = 1e6;

int fail[MAX];
int match[MAX];

/*
	match = 문자열 s1의 인덱스일 때 문자열 s2와 일치하는 길 이로, 벡터에 s1 글자에 담은다.
	제거할 문자열 찾은 경우 벡터에서 그 만큼의 길이를 제거 후 제거한 문자열의 첫 문자가 들어오기 전의 상태로 돌아간다.
	따라서 match에 벡터의 사이즈값으로 해당 값을 받아온다. 
*/
int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string s1, s2;
	cin >> s1 >> s2;
	
	for (int i=1,j=0; i<s2.length(); i++) {
		while(j>0 && s2[i] != s2[j])
			j = fail[j-1];
		if(s2[i] == s2[j])
			fail[i] = ++j;
	}
	
	vector<char> v;
	
	for (int i=0,j=0; i<s1.length(); i++) {
		v.push_back(s1[i]);
		while(j>0 && s1[i] != s2[j])
			j = fail[j-1];
		if(s1[i] == s2[j]) {
			if(j == s2.length()-1) {
				for(int i=0; i<s2.length(); i++)
					v.pop_back();
				j = match[v.size()];
			}
			else
				j++;
		}
		match[v.size()] = j;
	}
	for (auto ans : v)
		cout << ans;
}
```

위의 주석과 같지만 더 설명을 붙여본다. kmp 실패함수를 통해서 해당 긴 문자열에서 짧은 문자열을 찾기를 반복한다. 이 때 벡터에 계속 해당 값들을 집어 넣으며 찾게 되면 찾은 문자열만큼 빼준다. 이후 인덱스를 다시 잡아주기 위해서 match 배열로 잡아주면 된다.

---

- 5日  

4일은 SQLD 시험 준비로 잠시 쉬어갔다.  

오늘은 시험 이후에 네이버에서 예전에 진행했었던 `D2 대학생 밋업: 백엔드 개발`에 대해 쓴 글에 대해 읽어봤다. 백엔드를 지망하는 학생이지만, 일의 범위나 다양한 시각을 생각하지 못해봤던 나에게 도움이 된 글이였다.  

[네이버 D2](https://d2.naver.com/news/3435170)에서 상세하게 읽어볼 수 있으며, 그 중 궁금했었던 부분이나, 도움이 된 부분을 기록하려고 한다.  

## 일의 범위

웹앱 개발, 데이터 분석 엔지니어링, 분산파일 시스템 혹은 DBMS 개발자들도 백엔드 개발자라고 불린다. 프론트엔드 개발자에 비해 그 영역이 모호하다고 볼 수 있다. 서버, DB, 프론트엔드 까지 풀스택으로 개발하는 백엔드 개발자도 심심치않게 볼 수 있다. 폭 넓은 기술을 접하기 때문에 여러 시스템 엔지니어나, 프론트엔드 개발자들과 소통을 많이하게 된다. 따라서 여러가지 분야에 대해서 공부하기 쉽고 그 중 하나를 전문으로 하는 전문가로 성장할 수 있다.  

## 전망

새로운 도구와 프레임워크의 등장은 개발자의 수요나 가치를 하락시키는 존재이지 않을까라는 염려가 있다. 이러한 염려는 기우에 불과하다. 왜냐하면 새로운 시스템에 대한 수요와 유지 보수할 기존의 시스템도 늘어나기 때문이다. 이러한 시스템들을 관리하기 위해서는 개발자들의 투자와 수요는 줄어들 수 없다. 이러한 이유로 인해 새로운 도구와 프레임워크들의 등장은 새로운 기회가 될 수 있으므로 잘 캐치할 수 있도록 하자.  

하지만 개발 분야만 본다면 분야가 계속 발전하게 되면서 자신이 전문으로 하고자하는 분야를 계속 담당할 수 없게 될 수 있다. 왜냐하면 시대가 변하면서 주로 사용하는 기술들이 변하기 때문이다. 그런 시대 속에서 빠르게 적응하면서 준비를 하기 위해서는 자신이 전문으로 하고자하는 분야 외에도 다른 분야에 대한 역량을 충분히 키워두는 것이 도움이 될 수 있다.  

이러한 흐름에는 백엔드 개발은 무난한 선택이라고 볼 수 있다. 여러가지 분야를 백엔드라고 말할 수 있다는 이전의 말과 같이 여러 분야와 조화되어서 변해가는 시대 흐름에 자신이 선택할 수 있는 폭을 넓힐 수 있기 때문이다.  

## 필요한 지식

- 웹 생태계의 스펙
	- HTML, HTTP(1.1 , HTTP/2)
- 기본 SDK, 라이브러리/프레임워크 이해와 활용
- 클라이언트를 위한 API 설계
- 서버/컴퍼넌트/객체 간의 역할 분담/의존성/통신 방법 설계
- 저장소 활용
	- DBMS 설계
	- Cache 적용
		- Global/Local cache 적용범위, 라이프 싸이클, 솔루션 선택
	- 파일 저장 정책/솔루션 선택 활용
- 검색엔진 연동 방식 결정
- 빌드 도구
	- Maven/Gradle
- 배포 전략
- 성능 테스트/프로파일링/튜닝
	- JVM 레벨의 튜닝 (GC 옵션 등)
		- 웹 서버(Nginx,Tomcat)등의 설정/튜닝
	- OS 설정의 주요 값 확인
- 인접 기술에 대한 이해
	- DBMS, Front End 등
- 서버 개발자에만 해당하지는 않는 항목
	- 테스트 코드 작성/리팩토링 기법
	- 버전 관리 전략
		- branch 정책 등
		
해당 부분은 사이트의 글을 그대로 인용해왔다. 이 부분은 JVM과 Linux를 바탕으로 한 환경에서 필자가 웹 서버 개발에 있어서 필요한 부분이라고 적은 부분이다.  

이러한 지식들을 한 사람이 모두 가지고 있어야하는 게아닌 팀의 개발자들의 지식을 합쳐서 구현 방식과 정책이 결정된다.  

이 때 팀 구성원이 할 수 있는 기술을 선택하되, 내부의 소수만 사용하는 관리 도구는 팀원 모두가 처음 쓰는 기술을 적용할 수 있지만, 큰 서비스에는 작은 서비스에서 먼저 시도 후 적용하는 것이 일반적이다.  

## 데이터베이스

백엔드 개발자에겐 RDB가 여전히 가장 우선시 되어지는 데이터베이스이다. 해당 데이터베이스를 다루는 능력이 핵심 역량으로 꼽힌다. 예시를 통해서 보면 개발하는 도중에도 쿼리의 호출 횟수나 실행 계획이 비효율적이지 않은지 확인하는 습관, 운영 중에도 느린 쿼리를 모니터링하고 DBA와 협업하여 성능 개선하는 습관, ORM같은 추상화된 프레임워크를 써서 SQL을 작성하지 않은 경우에도 이러한 습관은 필요하다.  

대용량 서비스에서의 과거와 현재의 차이를 보면, 과거에는 서버 간의 네트워크 호출 비용을 줄이기 위해 한번에 많은 테이블을 조인하는 긴 SQL을 통해서 DB 쿼리를 짰다. 하지만 요즘은 복잡한 JOIN은 피하고 단순한 SQL을 통해서 DB 쿼리를 짜는 추세이다. 왜냐하면 데이터를 다른 저장소에 캐시하거나 분산해서 저장하기 쉽기 때문이다. 대용량 저장하는 UGC 서비스에서는 RDB 테이블 사이의 JOIN을 최대한 제약하고 어플리케이션 레벨에서 여러 저장소의 연관된 데이터를 조합한다.  

DB안에서 실행되는 Stored prodecure은 급하게 개발된 서비스에서 많이 사용되었다. 네트워크 호출비용이 없고 DB안에 저장되므로 배포 절차가 단순했기 때문이다. 하지만, 길게 작성되게 되면 작성자도 수정하기 힘들어지고, 버전관리가 어려워진다. 추가적으로 데이터의 연산에 DB서버의 CPU 자원을 소모하게 되어 병목이 일어날 수 있어 가급적 사용을 하지 않는다.  

분산 DB를 사용하기도 어렵다. DB 서버 1대는 성능 향상을 위해 Local cache, Gloal cache를 동원하기도 한다. RDB는 사용량이 늘어나면 분산하는 비용도 상당하기 때문에 성장 가능성이 있는 큰 서비스의 경우에는 RDB의 자원을 아끼는 방법도 생각해야한다.  

해당 게시물에는 이 외에도 많은 내용이 있으나 당장 내가 받아들이기가 어려운 내용들도 상당히 많다. 따라서 지금은 이렇게까지 읽어보고 정리했으므로 다음에 조금 더 지식이 쌓인 뒤 읽어보며 회고해보도록 한다.  

마지막으로는 개발자의 수준에 대해 정리한 부분을 강조하고 싶다. 개발도구를 잘 활용하는 능력은 실력이라고도 할 수 있고, 이러한 도구를 토대로 새로운 도구에 적용하여 적응하는 능력도 실력이라고 볼 수 있다. 따라서 필자가 얘기하는 레벨2. 즉, 개발도구의 공식 레퍼런스를 보고 사용법을 스스로 익힐 수 있고 자신이 경험한 사용법을 문서화해서 팀 내에 설명하고 알려 줄 수 있는 수준이 되어야 한다는 것을 느낀다.  

어떤 개발툴이나 언어를 뛰어넘어 서비스에 필요한 부분에 대해 러닝커브를 크게 올릴 수 있는 개발자가 될 필요가 있다는 것을 느낄 수 있는 글이였다. 다음엔 밑의 내용에 대해 이해하는 시간을 가져볼려고 한다.  

---