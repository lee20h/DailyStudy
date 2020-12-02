# 📙 Today I Learned  
## 규칙  
* 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
* Github Action으로 배포
* markdown으로 작성
* 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---  

# 2020년

| [5월](./month/5월) | [6월](./month/6월) | [7월](./month/7월) | [8월](./month/8월) | [9월](./month/9월) | [10월](./month/10월) | [11월](./month/11월) |
|----|-----|-----|---|---|---|---|

---

- 1日

# Code Review: Experience

- 참고자료: 코드 리뷰 소개 및 경험
    - [카카오스토리 웹팀의 코드리뷰 경험, 안오균 (2016)](https://www.slideshare.net/OhgyunAhn/ss-61189141)
    - [JavaScript 코드 리뷰 - 코드 리뷰 문화 (2016)](https://cimfalab.github.io/deepscan/2016/08/code-review-1)
    - [코드 리뷰: 다음커뮤니케이션 (2013 DevOn)](https://www.slideshare.net/pioneerhjlee/code-review-devon2013)

## 코드 리뷰는 문화다

### 카카오스토리

- 서비스: 카카오스토리 웹
    - 프로트엔드 + 웹서버
    - JavaScript 95%, nginx, Bash
    - Backbone 기반 자체 프레임워크
- 코드 리뷰 도입부터 안정화까지
    - 도입: 3명, Github PR 활용, 모든 코드 리뷰 (2013.10 ~)
    - 2년간 사용하며 꾸준히 개선
        - 강제 리뷰 후 머지
        - 리뷰 규칙 구체화: 2단계 리뷰, 리뷰 데이, PR 및 커밋 규칙
        - 오프라인 + 온라인 병행
        - 브랜치 미리보기 서버 구성
        - 코드 리뷰 팀 구분, 리뷰 마스터 설정

### 경험 1: PR 이용 시 실수

- 예외 상황
    - Develop 브랜치에 바로 푸시
        - 실수로, 혹은 간단해서

- 해결 방법
    - Pre-push Git Hook 활용
        - Push 이벤트에 대해 자동 스크립트를 추가해 바로 머지가 되지 않도록
        - [Pro Git](https://git-scm.com/book/ko/v1/Git%EB%A7%9E%EC%B6%A4-Git-%ED%9B%85)

- Pre-push 깃훅의 효과
    - 모든 피쳐가 Pull Request를 통해서 머지됨
    - 초기 리뷰 문화 정착에 도움
    - 이 단계부터 **리뷰는 필수**라는 인식이 자리잡음

### 경험 2: 코드 컨벤션에 대한 리뷰

- 코드 스타일에 대한 리뷰가 대부분
    - 탭, 공백, 들여쓰기, 캐멀케이스, 언더스코어
    - 스타일 가이드 + 에디터 포맷터는 존재
    - 하지만 잘 지켜지지 않음

- 사실 코드 스타일 리뷰는 피곤함
    - 코드 스타일을 통일하면 참 좋겠지만
    - 남기는 사람도 보는 사람도 불편함
    - 도구로 해결할 수 없을까?

- 해결방법: pre-commit 깃훅에서 린트 수행
    - Code linting
        - 정적 코드 분석 및 테스트를 통해 잠재적 에러 및 성능 분석을 하는 것
        - 사용자 정의 방식으로, 코드 컨벤션 검사를 위해 활용할 수 있음
        - 도구: jshint, ESLint, Lint in Android studio 등
        - 참고: [Coding-Convention](https://subicura.com/2016/07/11/coding-convention.html)
    - 해당 커밋에서 변경한 파일 대상
    - 린트 실패 시 커밋할 수 없음

- 효과: pree-commit 훅의 린트는 성공적
    - 코드 스타일에 대한 리뷰가 크게 감소함
    - 수정하는 파일만 대상이므로 거부감이 적었음
    - 대상 파일의 나머지 코드도 수정해야 함
    - 수 개월 후 프로젝트 린트 오류 0%

### 경험 2: 코드 컨벤션에 대한 회고

- 코드 스타일은 꼭 맞춰야할까?
    - 한 사람이 짠 것 같은 코드: 읽고 수정하기 편하고 리뷰 속도도 빨라짐
    - 결국 팀의 속도가 빨라짐
- 코드 스타일에 대한 리뷰는 필요했을까?
    - 코드 스타일 리뷰는 모두의 스트레스였음
    - 특히 규칙이 정해져 있지 않았을 때 더했음
    - 시간이 아깝다고 느껴지기도 했음
- 코드 스타일은 도구로 해결하자
    - 상세한 단위까지 포맷터를 적용
    - 도구가 준비되지 않았다면 생략해도 좋을 듯
- 그래도 해야 하는 부분이 있더라
    - 주석 처리된 코드, 쓰이지 않는데 나중을 위해 아껴둔 코드

### 경험 3: 초기 단계에서 PR 규모 문제

- PR 규모가 커서 리뷰하기 어려움
    - 프로젝트 초기, 기초 구조를 잡던 때
    - 코드량이 많고 커밋의 단위도 커 리뷰하기 어려움
    - 전체 흐름을 파악하기도 어려움
- 해결방법: 온/오프라인 리뷰 병행, PR/커밋 단위 합의
    - 오프라인 리뷰에서 전반적인 의도를 설명, 회의 종료 후 온라인 리뷰
    - 개발 정기 미팅 때 단위 합의
        - PR은 피처 단위로
        - 커밋은 의미있는 작업 단위로

### 경험 4: 리뷰로 인한 병목 현상

- 리뷰를 포함한 개발 프로세스
    - 피처 작업 -> 리뷰 -> develop 머지 -> 알파 배포 -> 테스트
    - 알파 빌드&테스트 서버는 develop 브랜치를 사용
- 리뷰 병목 현상
    - 바쁠수록 리뷰를 미루게 됨
        - 피처 작업하기 바쁘니 리뷰를 미루게 됨 (> 10 PRs in review queue)
    - 리뷰시간이 예상보다 오래 걸림
        - 큰 피처인 경우 1시간 이상, 많으면 하루를 다 쓰는 경우도 있음
        - 태스크 관리 도구에 `개발 리뷰 중` 단계를 추가
    - 피처 작업은 완료해도 리뷰 대기 중
    - **리뷰가 되지 않아 develop 으로 머지하지 못함**
    - **대상 피처가 알파 서버에 배포되지 못함**

- 리뷰 병목으로 피해
    - 기획/디자인 직군의 불만
        - 타직군은 알파 서버에서 피처 확인 가능
        - 개발은 완료됐다고 하는데, 리뷰가 안돼서 확인할 수 없다!
    - 결국, 통합 테스트 때 스펙 변경이 발생함
        - 타직군은 구현된 기능을 통합 테스트 때나 보고 피드백
        - 버그 뿐 아니라 스펙과 디자인 변경이 다수 발생
    - 서로에 대한 불만
        - 개발: 내일 모레가 배포인데 스펙 변경?
        - 기획/디자인: 개발 다 됐다면서 이제 첨 보여줌?
    - **이 시점이 피로도가 가장 컸음**
    - **야근이 많아지고 의욕도 떨어짐**

- 해결방안 1: 미리보기 서버
    - 우선 기획/디자인팀과의 협업부터 해결
    - 브랜치 미리보기 서버를 구성함
        - 각 피처 브랜치의 스냅샷을 배포
    - 미리보기 서버는 매우 성공적
        - develop 머지 전(리뷰 전) 피처 공유 가능
        - 기획/디자인의 피드백을 미리 받고, 통합 테스트 때 스펙 변경이 크게 감소
        - 아이디어 프로토타입 공유 용도로 활발히 사용

- 해결방안 2: 리뷰팀과 리뷰데이, 리뷰 마스터
    - 리뷰 자체를 효율적으로 수행
    - 1차 시도: 리뷰 팀을 두 개로, 별도 리뷰어도 지정
        - 각 팀별로 리뷰 분담
        - 결과: 해결 안됨. 계속 업무는 바빠짐. 본인 피처 작업을 우선해야 하므로, 통합 테스트 날짜 직전에나 리뷰 수행
    - 2차 시도: 리뷰 데이 도입
        - 매주 정해진 요일에 최우선 PR 작업 리뷰
        - 결과: 여전히 비슷한 문제가 발생. 리뷰는 계속해서 우선순위가 떨어짐.
    - 3차 시도: 리뷰 마스터 도입
        - Merge 담당 역할, 개인 판단으로 merge 수행 및 주기적으로 리뷰 독려
        - 결과: 개인 책임 하에 수행되어 잘 동작됨. 애매한 경우, 결정권을 행사하여 의사 결정이 빠름

- 리뷰가 왜 병목이 됐을까?
    - 동료의 리뷰와 동의가 있어야 머지 가능한데, 늦게 함
- 모든 동료의 동의, 효과 있었을까?
    - 서로 어떤 작업을 하는지 알게 되고, 어렴풋하지만 대부분의 코드를 알게 됨
    - 효과는 좋음. 인원이 많아지며 병목의 원인이 됨
- 몇 명의 팀일 때 리뷰가 가장 잘 될까?
    - 2명: 피드백 빠르지만 논의 상대 부족
    - 3~5명: 전체 동의 조건으로 효과적이었음
    - 6명~: 의견/논의도 많음. 결과 대비 비효율적
- 시간이 갈수록 리뷰속도가 빨라짐
    - 일관성 있는 코드 스타일이 도움이 됨
    - 각자 중요하다고 생각하는 포인트 위주로 리뷰
    - 배포 주기가 짧아 쉽게 수정 배포 가능한 환경

### 경험 5: 새로운 팀 멤버 영입

- 프로젝트 멤버가 늘어남
    - 최대 8명까지 늘어남
    - 대부분 리뷰 문화가 거의 없던 팀에서 온 멤버
- 해결방안: 문화로 정착시킴. “우리 팀은 코드 리뷰를 하는 팀!”
    - `리뷰는 당연하다`는 문화는 정착된 상태
    - 영입 전부터 코드 리뷰 문화에 대해 강하게 언급
    - 첫 PR부터 폭풍 리뷰
- 새 멤버들의 공통된 리뷰 후기
    - 초기의 리뷰는 스트레스였다 (특히 코드 스타일)
    - 코드 학습 효과가 좋았다
    - 시간이 지나니 코드 스타일에 익숙해지더라

### 경험 6: 여러 사람이 담당하는 피처의 리뷰

- 여러 사람이 담당하는 피처의 리뷰
    - 한 피처를 여러 명이 함께 작업하는 경우
    - 작업 범위가 겹쳐 develop으로 PR 애매함
    - 피처 단위가 커서 한 번에 리뷰하기엔 부담스러움
- 해결방법: 메인 피처 브랜치로 PR하도록 함
    - 피처의 메인 브랜치인 feature/A를 따고
    - 하위 피처를 feature/A-1, feature/A-2로 작업
    - 작업 후, feature/A-1 > feature/A 로 PR

- 2번에 걸쳐 리뷰함
    - 상위 피처 브랜치로의 1차 리뷰는 담당자끼리만
    - 1차 리뷰는 큼직한 구조나 로직에 대해 러프하게
    - develop 브랜치로의 2차 리뷰는 모두가 참여
- 2차 리뷰의 효과
    - 구조 변경에 대한 피드백이 1차 리뷰에서 가능
    - 테스트 직전에 큰 변경이 적어짐
    - 두 번째 리뷰부턴 확실히 속도가 빠름

### 정리

![image](https://user-images.githubusercontent.com/59367782/100709522-a13a0080-33f1-11eb-8ba4-9cbf8d47a875.png)

### 회고 1. 리뷰는 서로에게 도움이 되었을까?

- 팀원들 후기
    - 새로운 스타일 또는 접근 방법을 알게 됨
    - “배울 게 많았다”
        - 다른 사람의 코드를 읽는 시간이 많아졌다
    - 논의 과정에서 서로 성장하는 느낌
        - `왜 이렇게 했을까` 생각하고, `왜 이렇게 했는지` 설명하는 시간이 많아짐
    - 이제는 안하면 뭔가 불안함
- 직접적 효과
    - 긴급 핫픽스 코드에서 버그 발견!
    - 코드 파악: 내가 짠 것 같은데 알고 보니 다른 사람이 짰음
    - 인수인계 할 게 거의 없음

### 회고 2. 리뷰의 유익함, 무익함

- 유익하다고 느꼈던 리뷰
    - 미리 발견하는 버그
    - 경험의 공유 (삽질 회피, 기존 코드 히스토리)
    - 더 나은 제안 (로직, 변수명)
- 조금은 불필요한 논쟁이라고 생각한 리뷰
    - 취향의 차이 (if vs switch)
    - 애매한 수준의 제안 (변수명, 미미한 성능 개선)
    - 너무 먼 미래에 대한 방어 코드

- 리뷰에 대해 공통적으로 느꼈던 스트레스
    - 코드 스타일의 사소한 부분까지 강요당했을 때
    - 피처도 작업하랴, 리뷰하랴, 피드백하랴
    - 내일이 마감인데, 전체 구조를 변경하는 리뷰
    - 내일이 테스트인데, 쌓인 리뷰가 수십 개
- 근본적으로 해결하기 어려운 문제들
    - 여전히 리뷰가 병목이 될 수 있다
    - 리뷰 문화 정착까지의 비용이 크다
    - 가끔은 리뷰가 생산 의욕을 꺾을 때도 있다

### 회고 3. 어떻게 리뷰를 유지할 수 있었을까?

- 우리가 리뷰를 유지할 수 있었던 이유
    - 초기부터 모두의 동의 하에 자율적으로 도입
    - 코드 리뷰는 당연하다라는 문화의 정착
    - 문제의 인식과 지속적인 개선 노력
    - 정기적인 개발 미팅: 특히 좋았음
        - 매주 정해진 시간에 자유 주제로 논의
        - 이터레이션 테스트 종료 후 회고
        - 리뷰 정책 / 개선에 대한 논의할 수 있는 기회
    - 도구: 엔터프라이즈 깃헙
    - 모두 같은 언어로 같은 서비스를 담당
    - 지속적으로 한 서비스를 담당
    - 수평적 문화 (영어 이름)

- 반면, 예전 좋지 않았던 리뷰 경험
    - 팀 내에서 코드 리뷰 진행
    - 자바스크립트 개발자가 모여있는 기능 조직
    - 각자 다른 프로젝트에 투입
    - 자율적으로 만들어진 분위기가 아니었음

### 코드 리뷰가 좋지 않을 수 있는 이유 및 환경

- 오프라인 코드 리뷰만 수행
    - 리뷰 미팅에서 프로젝터로 공유
    - 리뷰 미팅은 분위기 영향을 많이 받음
    - 과열된 논쟁이나 귀차니즘의 전파
- 도구의 부실함
    - SVN + 마땅한 리뷰 도구 없었음
    - 메모장이나 에디터에 주석으로 달아 전달
    - 별도 리뷰 도구를 도입했지만 잘 연동되지 않음
- 서로 다른 업무
    - 개발하는 언어는 같았지만
    - 담당하는 서비스가 모두 다름
    - 리뷰 범위의 한계 (스타일이나 일반적인 로직)

- 주니어-시니어 간의 코드 리뷰
    - 시니어가 주니어의 코드를 고쳐주는 일방향 리뷰
    - 시니어들에겐 큰 도움이 되지 않음
- 자리잡지 못한 문화
    - 코드 리뷰가 잘 워킹하지 않는 걸 모두 알고 있음
    - `뭘 코드리뷰를 해~`라는 분위기
    - `팀별로 코드리뷰를 하라`는 상위 조직의 강제성

### 리뷰 도입을 위한 제언

- 새로 시작하는 조직에 리뷰를 도입한다면
    - 모든 멤버의 자율적 동의로 시작하고,
    - 최대한 강제성을 적용한 규칙으로 시작
    - 규칙은 도구를 사용해 제한
- 시작할 때는 이렇게 해보면 어떨까?
    - develop,master push 제한 / 모두 PR로
    - 모든 멤버의 동의
    - 코드 스타일 체크는 자동화 (깃훅 등)
- 기존 조직에 리뷰를 도입한다면
    - 나와 마음이 맞는 동료를 찾아 소규모로 시작
    - 도구를 적극적으로 활용
    - 기존에 일하던 방식에 자연스럽게 적용될 수 있게
    - 다른 멤버가 거부감을 갖지 않도록 천천히 도입

- 근데 좀 해보려고 하면,
    - 다른 멤버는 시큰둥하다. 나만 하고 싶나…
    - 자꾸 하자고 하려니 귀찮고 미안하다…
    - 그냥도 이미 바쁜데 오바 아닌가…
- 코드리뷰는 문화
    - 기존의 습관을 단번에 바꾸기 어려움
    - 억지로 바꾸려고 하면 더 어려움
    - 여유와 시간을 갖고 천천히
    - 정답은 없음. 우리 팀에 맞는 방식으로.

- 작은 경험의 반복으로 익숙해지도록
    - 내 코드를 먼저 리뷰하도록 시도
    - 처음엔 리뷰하기 쉽도록 PR은 가능한 작게
    - Pull Request - 리뷰 - 머지의 경험 반복
    - (선택) 리뷰어를 지정해서 부탁
- 리뷰에 어떻게 반응하면 좋을까?
    - 피드백! 피드백!
    - 반영 여부는 본인이 결정하는 것이 좋은 듯
    - 코드는 내가 아니고, 그저 내가 작성한 코드일 뿐

- 어떻게 리뷰하면 좋을까?
    - 부드럽고 젠틀하게
    - 궁금한 건 의도를 물어보는 식으로 접근
    - 이견이 있다면 구체적인 방법을 제시
    - 마음이 불편하더라도 적극적으로 리뷰
- 리뷰 문화를 잘 유지하려면
    - 적극적으로 리뷰하고 잘 피드백하자
    - 코드 스타일 리뷰는 말 대신 도구로 처리하자
    - 서비스와 코드, 리뷰에 대해 자주 이야기하고
    - 리뷰가 병목이 되지 않게 개선하자

### 비자아적 프로그래밍

- 당신이 실수하리라는 것을 받아들여라.
- 당신이 만든 코드는 당신이 아니다.
- 당신이 얼마나 많이 알고 있다고 해도, 항상 누군가는 더 많은 것을 알고 있다.
- 권위는 지위가 아니라 지식으로부터 나온다.
- 자신보다 많이 알지 못하는 사람이라 해도 존경과 인내로 대하라.
- 사람이 아니라 코드 그 자체를 비판하라.

## 코드 리뷰: 도구들

### 코드 리뷰 도구

- 상용
    - Crucible, Collaborator
    - Pre-review, IDE 연동 등 많은 편의 기능 제공
- 공개
    - Gerrit, Phabricator, Review board
    - 오픈 소스 도구. 필수적 기능 및 기타 부가 기능도 상당수 제공
- GitHub PR 연동 서비스
    - reviewable.io, Review Ninja

## Gerrit 소개

### Gerrit code review system

- Gerrit
    - Git 기반의 코드 리뷰 시스템
        - Git 기반의 코드 개발 과정에 쉽게 적용 가능
    - 구글 안드로이드 프로젝트에서 파생
        - AOSP (Android Open Source Project)
        - 자체 서비스를 사용하다가, 오픈 소스 프로젝트로 발전시킴
        - 네덜란드 개발자가 네덜란드의 디자이너이자 건축가인 Gerrit Rietveld의 이름을 따서 Rietveld 시스템을 만들었고, 이를 토대로 Gerrit 으로 발전함
    - 이후 JAVA로 새롭게 작성됨
- 웹을 통해 서비스
    - 자체 서버를 구축해야 함

- [Gerrit Code Review](https://www.gerritcodereview.com/)

### Gerrit 특징

- 리뷰 통과 조건 설정
    - 다른 리뷰어로부터 일정 점수 이상을 얻어야 merge 가능
    - 점수와 의견을 통해 코드 품질 향상을 도움

- 사용자 권한 관리
    - 사용자 별로 접근 권한 관리
- 연동
    - Jenkins와 같은 외부 CI 도구와 쉽게 연동 가능
    - Eclipse 와 같은 IDE 와 연동 가능 (Mylyn 플러그인 사용)
- 다양한 인증 수단 지원
    - HTTP, LDAP, OpenID 와 같은 외부 인증 수단과 연계하여 사용 가능함

### 기존 Git repository 사용 방식

![image](https://user-images.githubusercontent.com/59367782/100710164-a8add980-33f2-11eb-8a03-c5d63764ec3a.png)

### Gerrit 을 이용한 방법

![image](https://user-images.githubusercontent.com/59367782/100710211-bb281300-33f2-11eb-8975-74e1edbd22ec.png)

### Gerrit 을 사용한 개발 흐름

![image](https://user-images.githubusercontent.com/59367782/100710252-caa75c00-33f2-11eb-82fb-7dda2352c235.png)

---

# Auto Scaling

- Scale in-out 을 자동으로 수행해주는 서비스
    - 유동적으로 변동하는 애플리케이션의 로드를 처리할 수 있는 정확한 수의 Amazon EC2 인스턴스를 보유하도록 보장
    - 내결함성 향상
        - 비정상 인스턴스를 검출하고, 대체 인스턴스 시작
        - 복수의 가용 영역을 사용하도록 구성 가능
    - 가용성 향상
        - 현재의 트래픽 요구를 처리할 수 있는 적절한 용량을 항상 갖출 수 있음
    - 비용 관리 개선
- 기타
    - EC2 Console 에서 제어
    - 비용: 무료
    - 참고: [AWS Auto Scaling Documentation](https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)

### Auto Scaling 구성 요소

![image](https://user-images.githubusercontent.com/59367782/100739748-ecb4d480-341a-11eb-9092-4d1ae375b914.png)

### 시작 구성, 시작 템플릿 및 AS 그룹

- 시작 구성
    - EC2 인스턴스를 시작하는 데 사용하는 템플릿
- 시작 템플릿
    - 시작 구성의 Renewal: 새로운 기능들에 대한 지원
    - 스팟 인스턴스를 자동으로 선택해 구성해주는 기능이 추가됨
- AS 그룹
    - 유사한 특성을 공유하고, 인스턴스 조정 및 관리 목적의 논리적 그룹으로 취급되는, EC2 인스턴스들의 모음
    - 조정 정책: 인스턴스의 수를 자동으로 조절하는데 사용되는 정책
- 특징
    - 한 시작 구성 혹은 템플릿은 여러 AS 그룹에서 사용될 수 있음
    - 한 AS 그룹은 하나의 시작 구성 혹은 템플릿만 사용할 수 있음

### AS 그룹

- Auto scaling 그룹의 제어 파라미터
    - 최소 인스턴스 수: 그룹의 크기가 이 값 아래로 내려가지 않음
    - 목표 인스턴스 수: 확보하는 것이 언제나 보장되는 인스턴스 수
        - 실제 콘솔에서는 현재 Auto scaling 그룹이 정책에 따라 유지하려는 숫자가 표시
    - 최대 인스턴스 수: 그룹의 크기가 이 값을 넘지 않음

![image](https://user-images.githubusercontent.com/59367782/100739822-0d7d2a00-341b-11eb-87b8-a6ec5a22fef4.png)

- 구성 시, 미리 필요한 정보
    - 서버 시작 및 구성에 걸린 시간 (생성 시작부터 사이트 접속 가능까지)
    - 애플리케이션의 성능과 가장 연관성이 높은 지표 (예. 홈페이지 반응 속도)
    - Auto Scaling 그룹에 포함하려는 가용 영역 수
    - Auto Scaling에서 수행하려는 역할
        - Auto Scaling의 조정 기능을 사용하여 용량을 늘리거나 줄일지, 그저 일정한 서버 수가 항상 실행되도록 하는 데만 Auto Scaling을 사용할지 여부 (Auto Scaling은 두 기능을 동시에 수행할 수 있음)
    - 사용할 수 있는 기존 리소스 (예: EC2 인스턴스 또는 AMI)

## 오토 스케일링을 통한 인스턴스 숫자 관리

### 인스턴스 조정 (AS 그룹)

- 항상 현재 인스턴스 수준 유지
    - Elastic scalability 지원이 아닌, fault tolerance 목적으로만 운영
- 수동 조정
    - 원하는 용량을 수정해 인스턴스를 확장/축소 가능
- 예약된 조정
    - 일정을 기반으로 인스턴스 수 조정. 예) 주말에 확장하고 평일에는 축소
- 동적 조정 (on demand dynamic scaling)
    - 수요 변화를 추적하는 지표를 설정하고, 해당 지표에 대해 설정된 확장/축소 정책에 따라 인스턴스를 조정
    - 축소 시, 참고사항: 어떤 인스턴스를 종료할 것인가?
        - 가용 영역 간 인스턴스 수의 균형을 맞추려고 함
        - 시작한지 오래된 인스턴스부터 종료

### AS의 조정 정책의 커스터마이징

1. 최대 서비스 용량 측정: 인스턴스 3개 일 때, 얼마나 높은 성능을 낼 수 있는지, 요청에 대한 응답시간을 지표로 사용해 측정
2. CloudWatch 경보 설정: 원하는 응답 시간 범위에 대한 경보 설정
3. CW 경보에 따른 조정 정책 설정: 인스턴스 증감 정책 수립
4. 테스트 및 경보, 정책 수정 반복

### CloudWatch 경보 설정: 감소 정책 경보

- 증가/감소 경보에 대해 고려할 사항
    - 증가시켜야 하는 경우: 서비스의 품질이 나쁜 상황
        - 인스턴스가 증가하면, 비용이 증가하고, 서비스 품질이 좋아짐
    - 감소시켜야 하는 경우: 서비스의 품질이 불필요하게 너무 좋은 상황
        - 인스턴스가 감소하면, 서비스 품질이 나빠지지만, 비용이 절약됨
- **좋은 서비스 품질을 유지하려면?**
    - 품질이 나쁠 때는 즉각, 인스턴스도 여러 개 증가시키고,
    - 품질이 너무 좋다고 판단될 때에는 최대한 천천히, 하나 씩 감소시켜야 함
- 비용을 최대한 절약하려면?
    - 품질이 나쁠 때에도 최대한 천천히, 인스턴스도 하나씩 증가시키고,
    - 품질이 너무 좋다고 판단될 때에는 즉각, 여러 개씩 감소시킴

### 결과



- 실제 서비스 환경은 훨씬 복잡함
    - 동시 접속 사용자 수의 변화가 훨씬 급격하거나, 완만할 수 있음
        - 예) 점심 시간에 갑자기 사람들이 몰림. 심야 시간에는 수요가 완만하게 감소함
    - 각 사용자들의 요청도 동작에 따라 그 부하가 서로 다름
        - 예) 단순히 상품을 둘러보는 동작 vs. 상품을 결제하고 주문을 수행하는 동작
- 따라서 다양한 테스트를 통해 지속적으로 정책을 수정, 보완하여야 함

---

- 2日

