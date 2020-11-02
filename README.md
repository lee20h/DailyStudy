# 📙 Today I Learned  
## 규칙  
* 기억에 남는 내용 기록 후 [정적 웹페이지](https://lee20h.github.io/TIL/)에 정리
* Github Action으로 배포
* markdown으로 작성
* 문제 풀고 [Problem Solving](https://github.com/lee20h/TIL/tree/master/Problem%20Solving) 폴더에 모으기

---  

# 2020년

| [5월](./month/5월) | [6월](./month/6월) | [7월](./month/7월) | [8월](./month/8월) | [9월](./month/9월) | [10월](./month/10월) |
|----|-----|-----|---|---|---|

--- 

- 1日

캐시
```cpp
#include <string>
#include <vector>
#include <queue>
using namespace std;

int solution(int cacheSize, vector<string> cities) {
    int answer = 0;
    queue<string> cache;
    if (cacheSize == 0) {
        answer += 5 * cities.size();
        return answer;
    }

    for (int i = 0; i < cities.size(); i++) {
        bool isHit = false;
        string s = cities[i];

        for (int k = 0; k < s.size(); k++) {
            s[k] = toupper(s[k]);
        }

        int size = cache.size();
        for (int j = 0; j < size; j++) {
            string tmp = cache.front();
            cache.pop();
            if (s.compare(tmp) == 0)
                isHit = true;
            else
                cache.push(tmp);
        }
        if (isHit) { //cache hit
            cache.push(s);
            answer += 1;
        }
        else{ //cache miss
            if (size == cacheSize)
                cache.pop();
            cache.push(s);
            answer += 5;
        }
    }

    return answer;
}
```

이 문제는 컴퓨터의 캐시 교체 알고리즘 중 LRU 개념을 구현하면 되는 문제였다. Hit시에 시간은 1초 miss시에는 5초를 둬서 실행시간을 알아보면 되는데, 이 때, 대소문자 구별을 하지 않고, 캐시 크기만큼을 큐로 유지하며 도시 이름이 들어올 때마다 큐를 뒤져서 해당 도시가 이름이 저장되있나 체크한다. 없으면 다시 돌아올 수 있게 캐시를 한바퀴 회전시키고, 있다면 1초를 증가시키고 캐시에 넣고 없다면 5초를 증가시키고 캐시에 넣는다. 이 작업을 반복하도록하여 구현하였다.

여담으로 대소문자 구별을 없앨 때 `toupper`나 `tolower`를 사용해도 좋지만 아스키코드 표를 기준으로 `&31`을 통해서 대소문자 구분 없이 접근이 가능하다는 것도 계속 되뇌이면 후에 도움이 될 것 같다.

---

- 2日

# 컴퓨터 네트워크 : QoS

## Quality of Service

### Flow characteristics

Flow란?

- 일반적으로 응용 프로그램 연결 (FTP 연결, Video 연결 등)을 뜻함
- 망 사업자 관점에서 사용자 (사용자 A의 컴퓨터에서 오는 트래픽)
- IPv4에는 표준 정의가 없으나, IPv6에는 표준 정의가 내려져있음

정의된 Flow에 대해서 어떤 QoS를 제공할 것인가를 생각하는 것이 Flow Characteristics이다.

Flow Characteristics

- Reliability : 패킷 소실이 발생하지 않을 확률
- Delay
- Jitter : 패킷간 도착 간격의 차이
- Bandwidth

B-ISDN의 QoS의 모델은 하부망에서 ATM(Asynchronous Transfer Mode)이 인터넷의 QoS 보장 모델이 적용되지 않는 이유다. ATM이 가격 문제와, 고장이 자주 날 수 있어서 국내에선 사용하지 않는다.

### 인터넷의 QoS 모델

- IETF에서 표준화한 모델로, 두 가지 모델을 정의했다.
    - QoS 보장 서비스(Guaranteed Service) model : Flow 별로 전송 오류가 0%되고 보장한 대역폭을 100% 보장하는 모델
    - Qos 차별화 서비스(Differentiated Service) model : Flow들을 몇 개의 class로 나누고 각 클래스에 대해서 서비스를 차별화하는 모델

각 모델의 방식을 알아보자.

- QoS 보장 서비스

![image](https://user-images.githubusercontent.com/59367782/97831031-3e7e1800-1d12-11eb-8b6c-7a6fb7749368.png)

1개의 queue가 아니라 Flow 개수만큼 queue를 유지하므로 각 Flow에 QoS를 보장할 수 있다. Core 라우터의 경우 flow 개수가 1백만개 이상이다. 그렇다면 queue 또한 1백만개 이상이 생긴다. 우선순위 큐를 사용한 방법이므로 복잡도가 `O(log N)`이 되게 된다. 1백만개 넘게 되면 속도에 문제가 생기므로 크기가 제한적일 수 있다. 이러한 문제를 `Scalability Problem`이라한다.

- QoS 차별화 서비스

![image](https://user-images.githubusercontent.com/59367782/97831219-b9473300-1d12-11eb-9200-082311a3f1b6.png)

1개의 queue가 아니라 Class 개수만큼 queue를 유지한다. 망 사업자가 골드, 실버, 브론즈 서비스를 제공한다. 이 경우에는 3개의 queue만 가지고 있으면 되므로 구현이 간단하고 Scalability Problem이 없다. 하지만 만약 한 클래스에 다 몰리게 되면 차등별로 나눈 클래스의 의미가 없어진다. 이러한 문제를 해결하기 위해 각각의 클래스는 하위 클래스보다는 더 나은 서비스를 제공한다고 보장을 하는 식으로 해결할려고 하고 있다. 또한 각 Flow에 보장하는 QoS는 무엇인가가 아직도 문제로 남아있다.

### Techniques to Improve QoS

현재 라우터는 큐를 하나 사용하여 FIFO 방식으로 순서대로 제공하는 식으로 빠르고 싸게 구현하였다. 하지만 큐 별로 QoS를 제공할 수 없다. 따라서 멀티 큐로 우선순위 큐, 가중치를 준 공정 큐를 통해서 QoS를 제공하는 방법을 고안하기도 했다.

### Integrated Services

- Best-effort service (오늘날의 인터넷 서비스)
- Guaranteed service
    - Signaling
    - Flow Specification
    - Admission
    - Service Classes
    - RSVP(Reservation Protocol) : signaling을 위해서 사용

### RSVP

일대일 통신이 아니라 다자간 통신으로 Source와 여러 Receiver가 존재한다. 먼저 Path를 설정한 뒤 자원을 예약한다. 따라서 먼저 Path messages로 경로를 설정 한 뒤 역방향으로 Resv messages를 통해서 예약을 할 수 있게한다.

- Path messages
- Resv messages

### Differentiated Service

통합서비스를 대체하기 위해 차별화 서비스를 사용할려고 한다. 차별화 서비스는 flow-based가 아닌 class-based로 QoS 모델을 디자인한다.

---

# Application Layer

- **Client-server paradigm**
- Addressing
- Different servcies

## Client-Server Model: Socket Interface

Client와 Server가 Internet을 통해서 통신하는 방식을 의미한다. 대부분 여러 Client와 한 Server와 통신을 얘기한다. 가장 흔한 이러한 방식이 Web Server이다.

### Connectionless iterative server

Client가 연결 요청을 할 때 Server측에서 UDP 요청을 받아서 Client에게 결과를 반환하는 식인데 구현을 While을 통해서 구현되기 때문에 한번에 하나의 요청에만 답할 수 있으므로, 여러 요청시 순서대로 하나씩 응답할 수 있다. 이러한 방식은 구현이 간단하지만 Server의 성능이 비효율적이다. 그리고 UDP를 통한 요청이므로, 간단한 정보만 통신하기 좋다.

### Connection-oriented concurrent server

Client가 연결 요청 시 Server측과 TCP로 연결한 뒤 통신을 하게 되는데 Server가 자신을 Fork하여 Child Server를 통해서 한 Client당 하나의 Child Server를 둬서 통신을 유지한다. 이때 Server의 한 포트를 통해서 사용한다. Fork되는 여러 프로세스를 CPU 스케쥴링할 때 Context-switching에서 생기는 오버헤드 때문에 많은 양의 Server를 가질 수 없다. 이러한 Scalability Problem를 해결하기위해 프로세스를 Fork하지 않고 새로운 Thread를 만들어 Server 역할을 하게 되었다.

해당 방법을 Multi-threaded server라고 한다. 오늘날 기본은 Multi-threaded server가 기본이며, 두 방법을 혼용해서 사용하기도 한다.

### Cluster 방식의 Server implementation

해당 구조가 네이버나 구글같은 사용량이 높은 기업에서도 사용하는 구조이다.

![image](https://user-images.githubusercontent.com/59367782/97833305-6d978800-1d18-11eb-8beb-1fe948034829.png)

Client가 Web Accelerator(Load Balancer)가 HTTP 요청을 받은 뒤 Front-end Server들에 분산시켜서 요청을 보낸다. 이 때 Front-end Server가 다 독립적으로 사용하면 각각의 동기화 문제가 생기기 때문에 Back-end Server를 통해서 DB에 접근하는 구조로 되어있다. Client가 늘어나게 되면 Front-end Server를 늘리게 되면 부하를 이겨낼 수 있다.

## Socket Interface

소켓의 구조는 
||||
|---|---|---|
| Family | Type| Protocol |
|Local Socket address|||
|Remote Socket address|||

소켓 타입은 다음 그림과 같다. 화살표에 적힌 타입으로 코딩을 하게된다.

![image](https://user-images.githubusercontent.com/59367782/97835693-1ac0cf00-1d1e-11eb-9970-35c7bf8721a9.png)

### Socket interface for connectionless iterative server

![image](https://user-images.githubusercontent.com/59367782/97835823-5c517a00-1d1e-11eb-90d1-dff977602f34.png)

Server에서 요청을 받아야 결과를 응답할 수 있다.

### Socket interface for connection-oriented concurrent server

![image](https://user-images.githubusercontent.com/59367782/97835952-a3d80600-1d1e-11eb-8dd4-4d73d7d48fd7.png)
![image](https://user-images.githubusercontent.com/59367782/97835984-ae929b00-1d1e-11eb-815e-523d25a2d860.png)

Server에서 Fork하여 사용하는 이유

서버의 PCB에 레지스터 외에도 I/O Handler가 존재한다. I/O Handler에서 연결된 소켓을 핸들링하게 되는데, fork한 child와 server는 서로 다른 객체지만 child에서 I/O Handler를 똑같이 접근할 수 있으므로 연결된 소켓을 사용할 수 있게 된다.

- 운영체제에서 Process들은 서로 독립적
    - 서로의 메모리 접근 불가
    - 독립적인 프로세스가 자료를 공유하는 방법은 shared memory/message passing 방법이 있지만 서로 인지해야한다. 하지만 Server는 서로 다른 타입의 수많은 child가 언제 어떻게 데이터를 공유할지 알기 어려움
    - 따라서 코딩이 복잡하고 난해하므로 Fork-exec 조합이 server가 child에게 일을 넘기고 사용하기 좋은 방법

---

# File: High-level I/O

## I/O Stream

- Stream: 물줄기, 개울, 시내
    - I/O stream: 데이터가 흘러가는 것. 데이터의 이동을 표현하는 말
        - 예) Media streaming
        - Source 에서 Destination 으로 데이터가 이동함
        - 프로그램은 데이터가 이동하는 통로로, source 이자 destination 일 수 있음
- Input stream: Source로부터 데이터가 들어오는 경로
    - 예) Keyboard -> Program (`scanf()` 로 stream 을 연결할 수 있음)
- Output stream: Destination으로 데이터가 나가는 경로
    - 예) Program -> Console (`printf()` 로 stream 을 연결할 수 있음)

- 입력 스트림(input stream): 다른 곳에서 프로그램으로 들어오는 경로
    - 자료가 떠나는 시작 부분이 자료 원천부 (data source)
    - 표준입력: 원천부가 키보드
        - 파일입력: 파일이면 파일로부터 자료를 읽는 것
        - 스크린입력: 터치스크린이면 스크린에서 터치 정보
        - 네트워크입력: 다른 곳에서 프로그램으로 네트워크를 통해 자료가 전달
- 출력 스트림(output stream) : 프로그램에서 다른 곳으로 나가는 경로
    - 자료의 도착 장소가 자료 목적부 (data destination)
    - 표준출력: 목적부가 콘솔
        - 파일출력: 파일이면 파일에 원하는 값을 저장
        - 프린터출력: 프린터이면 프린터에 출력물
        - 네트워크출력: 네트워크이면 네트워크 출력이 되어 다른 곳으로 자료가 이동

## 텍스트 파일과 이진파일

- 텍스트 파일: 메모장(notepad) 같은 편집기로 작성된 파일
    - 내용이 아스키 코드(ascii code)와 같은 문자 코드값으로 저장
    - 메모리에 저장된 실수와 정수와 같은 내용도 문자 형식으로 변환되어 저장
    - 텍스트 편집기를 통하여 그 내용을 볼 수 있고 수정 가능

- 이진 파일: 실행파일과 그림 파일, 음악 파일, 동영상 파일 등
    - 목적에 알맞은 자료가 이진 형태(binary format)로 저장되는 파일
    - 자료는 메모리 자료 내용에서 어떤 변환도 거치지 않고 그대로 파일에 기록
    - 입출력 속도도 텍스트 파일보다 빠름
    - 메모장과 같은 텍스트 편집기로는 그 내용을 볼 수 없음
    - 내용을 이미 알고 있는 특정한 프로그램에 의해 인지될 때 의미가 있음

## 파일 스트림과 포인터

- 표준 입출력 라이브러리에서 제공하는 고수준 파일 입출력
    - File stream 이라는 서비스를 사용자에게 제공한다.
        - 저수준IO: 파일 vs. 고수준IO: 파일 스트림
- FILE* : 파일 포인터
    - 고수준 파일 입출력에서 열린 파일을 가리키는 포인터
    - 자료형으로 FILE * 형을 사용 -> 구조체에 대한 포인터

![image](https://user-images.githubusercontent.com/59367782/97855665-6f744200-1d3e-11eb-94cf-8449ff24ae72.png)

### 파일 스트림 열기

- 파일 스트림 열기: fopen(3)
```c
#include <stdio.h>

FILE *fopen(const char *pathname, const char *mode);
```
- Pathname으로 지정한 파일을 mode로 지정한 모드에 따라 열고 파일 포인터를 리턴
- mode 값
    - 파일모드에서 +의 삽입은 수정(update) 모드 의미
        - 원래의 모드에서 읽기 또는 쓰기가 추가되는 모드
        - 수정(update) 모드에서는 모드 간의 전환이 가능
    - 파일모드 r+
        - 처음에 읽기 모드로 파일을 열어 쓰기 모드로 전환 가능
        - 파일이 없으면 오류가 발생
    - 파일모드 w+
        - 처음에 쓰기 모드로 파일을 열어 필요하면 읽기 모드로 전환 가능
        - 만일 파일이 존재한다면 이전의 내용은 모두 사라짐
    - 파일모드 a+
        - 처음에 추가 모드로 파일을 열어 필요하면 읽기 모드로 전환 가능

### 파일 스트림 닫기

- 파일 스트림 닫기: fclose(3)
```c
#include <stdio.h>

int fclose(FILE *stream);
```
- Fopen() 으로 오픈한 파일 스트림을 닫는다.
- Close() 와 마찬가지로, 파일 스트림의 사용 종료를 알리는 역할이며, 저장 장치에 내용이 기록되는 것을 보장하지는 않는다
    - 저장 장치에 즉시 기록하려면: fflush(3)를 사용
- RETURN VALUE
    - On success: 0
    - On error: EOF
        - 성공하든, 실패하든 파일 접근은 더 이상 하면 안 됨

### 버퍼 기반 읽기 및 쓰기

- 버퍼 기반 입력함수: fread(3)
    - Stream으로 지정한 파일로부터, 항목의 크기가 size인 데이터를 **nitems에 지정한 개수**만큼 읽어 ptr에 저장 (구조체의 입출력에 적합함)
    - **성공하면 읽어온 항목 수를 리턴**
    - 읽을 항목이 없으면 0을 리턴
```c
#include <stdio.h>

size_t fread(void *ptr, size_t size, size_t nitems, FILE *stream);
```

- 버퍼 기반 출력함수: fwrite(3)
    - 항목의 크기가 size인 데이터를 **nitems에서 지정한 개수**만큼 ptr에서 읽어서 stream으로 지정한 파일에 출력
    - **성공하면 출력한 항목의 수를 리턴**
    - 오류가 발생하면 EOF를 리턴
```c
#include <stdio.h>

size_t fwrite(const void *ptr, size_t size, size_t nitems, FILE *stream);
```

### 파일 오프셋 지정

- 파일 오프셋 이동: fseek(3)
    - stream이 가리키는 파일에서 offset에 지정한 크기만큼 오프셋을 이동
    - whence는 lseek()와 같은 값을 사용
    - 성공하면 0을, 실패하면 EOF를 리턴
```c
#include <stdio.h>

int fseek(FILE *stream, long offset, int whence);
```

- 현재 오프셋 구하기: ftell(3)
    - 현재 오프셋을 리턴. 오프셋은 파일의 시작에서 현재 위치까지의 바이트 수
```c
#include <stdio.h>

long ftell(FILE *stream);
```

- 함수 fseek(f, 100L, SEEK_SET)의 호출
    - 파일 위치를 파일의 처음 위치에서 100바이트 떨어진 위치로 이동
- 함수 fseek(f, 100L, SEEK_CUR)의 호출
    - 파일의 현재 위치에서 100바이트 떨어진 위치로 이동
- 함수 fseek(f, -100L, SEEK_END)의 호출
    - 파일 끝 위치에서 앞으로 100바이트 떨어진 위치로 이동
- 함수 fseek()에서 offset
    - 양수이면 파일의 끝점으로,
    - 음수이면 파일의 시작점으로의 이동방향을 표시

![image](https://user-images.githubusercontent.com/59367782/97858991-4d30f300-1d43-11eb-93d2-cd8785709ee7.png)

- 처음 위치로 오프셋 이동: rewind(3)
    - 오프셋을 파일의 시작 위치로 즉시 이동

```c
#include <stdio.h>

void rewind(FILE *stream);
```

- 오프셋의 저장과 이동: fsetpos(3), fgetpos(3)
    - fgetpos() : 파일의 현재 오프셋을 pos가 가리키는 영역에 저장
    - fsetpos() : pos가 가리키는 위치로 파일 오프셋을 이동
```c
#include <stdio.h>

int fsetpos(FILE *stream, const fpos_t *pos);
int fgetpos(FILE *stream, fpos_t *pos);
```

## Text File I/O

### fprintf() and fscanf()

- 함수 fprintf()와 fscanf() 또는 fscanf_s()를 이용
    - 텍스트 파일에 자료를 쓰거나 읽기 위하여
    - 헤더 파일 stdio.h를 포함
        - 첫 번째 인자는 입출력에 이용될 파일
        - 두 번째 인자는 입출력에 이용되는 제어 문자열
        - 다음 인자들은 입출력될 변수 또는 상수 목록
```c
#include <stdio.h>

int fprintf(FILE *stream, const char *format, ...);

int fscanf(FILE *stream, const char *format, ...);
```
- 함수 fprintf()와 fscanf() 또는 fscanf_s()의 첫 번째 인자에 각각 stdin 또는 stdout를 이용하면 표준 입력, 표준 출력으로 이용이 가능
- Return value
    - fprintf(): 기록한 문자 수. 문자열 마지막의 NULL 문자는 제외
    - fscanf(): 읽은 아이템 수 혹은 파일의 끝에 도달한 경우 EOF

### feof() and ferror()

- 함수 feof(): 파일 스트림의 EOF(End Of File) 표시를 검사하는 함수
    - 읽기 작업이 파일의 이전 부분을 읽으면 0을 반환하고 **(EOF 아님)**
        - 그렇지 않으면 0이 아닌 값을 반환 **(파일 끝!)**
        - 이전 읽기 작업에서 EOF 표시에 도달하면 0이 아닌 값으로 지정 **(파일 끝!)**
    - **단순히 파일 지시자가 파일의 끝에 있더라도 feof()의 결과는 0**
        - 파일 끝에 도달한 다음, 한 번 더 읽기 동작이 수행되어야 EOF 가 셋팅됨
        - 이 동작 때문에 실제 사용 시, 잘못 사용하는 경우가 많음 *(사용 지양)*
- 함수 ferror(): 파일 처리에서 오류가 발생했는지 검사하는 함수
    - 이전 파일 처리에서 오류가 발생하면 0이 아닌 값을 반환 **(오류!)**
        - 오류가 발생하지 않으면 0을 반환 **(정상)**
    - 헤더파일 stdio.h 필요

### Additional services: fgetc() and fputc()

```c
#include <stdio.h>
int fgetc(FILE *stream);
int fputc(int c, FILE *stream);
```

- 함수 `fgetc()`
    - 파일로부터 문자 하나를 입력받는 함수
    - Return value
        - int 형 으로 casting 된 문자 하나를 반환
        - 만약 파일 끝인 경우, EOF 를 반환하며, 에러에는 0이 아닌 값
- 함수 `fputc()`
    - 문자 하나를 파일로 출력하는 함수
    - 함수들은 문자 하나의 입출력의 대상인 파일 포인터를 인자로 이용
- `getc()`와 `putc()`도 존재함. 그러나 잊어버릴 것.
    - Macro 로 구현되어 있을 가능성이 있어, `fgetc()`, `fputc()`보다 빠를 수도 있지만, 예상치 못한 문제점이 생길 수 있음

### Additional services: fgets() and fputs()

```c
#include <stdio.h>
char *fgets(char *s, int size, FILE *stream);
int fputs(const char *s, FILE *stream);
```

- 함수 `fgets()`: 파일로부터 한 행의 문자열을 입력 받는 함수
    - 파일로부터 문자열을 개행문자(`\n`)까지 읽어 마지막 개행문자를 `\0`문자로 바꾸어 입력 버퍼 문자열에 저장
        - 첫 번째 인자는 문자열이 저장될 문자 포인터
        - 두 번째 인자는 입력할 문자의 최대 수
        - 세 번째 인자는 입력 문자열이 저장된 파일
    - 텍스트 파일을 처리할 때, 라인 별로 처리가 가능하여 아주 편리함
- 함수 `fputs()`: 파일로 한 행의 문자열을 출력하는 함수
    - 문자열을 한 행에 출력
        - 첫 번째 인자는 출력될 문자열이 저장된 문자 포인터
        - 두 번째 인자는 문자열이 출력되는 파일
    - `fprintf()` 면 충분하지 않을까?

## Binary file I/O

### Text vs. Binary

- Text I/O: `fscanf()` and `fprintf()`
    - **본래 파일은 “Collection of Bytes”**
    - 텍스트 파일은? 자료의 입출력을 텍스트 모드(아스키 코드)로 처리
        - 텍스트 파일의 내용은 모두 지정된 아스키 코드와 같은 문자 코드값
    - 함수 `fprintf()`를 이용
        - int 형 변수 cnt의 값을 파일 f에 출력하는 과정
        - 실제로 파일에 저장되는 자료는 정수값 10에 해당하는 각 문자의 아스키 값
            - 각각의 문자 ‘1’과 ‘0’을 아스키 코드값으로 변환: 0x31, 0x30
            - 변환한 결과값을 저장함

![image](https://user-images.githubusercontent.com/59367782/97865530-b1f14b00-1d4d-11eb-8d80-94974f4fface.png)

- Binary I/O: `fread()` and `fwrite()`
    - **C 언어의 자료형을 유지하면서, 변환없이 그대로 바이트 단위로 저장**
    - 입출력은 Low-level I/O(read() and write())와 같이 바이트 단위로 수행되지만,
    - 자료형에 따라 데이터 개체 단위로 이용할 수 있도록 인터페이스가 다름
        - Low-level I/O: file, buf, **size**
        - High-level I/O: file, buf, **size and number of data objects**
    - 예) char[4] 형 자료의 쓰기
        - char name[4]; // sizeof(name) = 4
        - Low-level: write(fd, name, **4**); // 4B 사이즈의 데이터
        - High-level: fwrite(name, **4**, **1**, fp); // 4B 사이즈의 데이터를 1개 쓰기
    - **구조체 데이터를 읽고 쓰기에 적합함**
        - C에서는 연관있는 데이터를 구조체로 엮어서 사용하는 경우가 많고,
        - Binary I/O 는 Text I/O 보다 성능 및 용량 면에서 효율적으로 I/O가 가능함

![image](https://user-images.githubusercontent.com/59367782/97865792-1ca28680-1d4e-11eb-8354-f9e79f6d35ff.png)


## 예제

예제 1) `fread()`, `fwrite()`
```cpp
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
        FILE *rfp, *wfp;
        char buf[80];
        int i=0, count;

        if(argc != 3) {
                printf("< Usage: ./file4 file_for_read file_for_write >\n");
                return 1;
        }
        rfp = fopen(argv[1], "r");
        if (rfp == NULL) {
                perror("Open file for read");
                exit(1);
        }
        wfp = fopen(argv[2], "w");
        if (wfp == NULL) {
                perror("Open file for write");
                exit(1);
        }
        printf("%s and %s are opened! rfp = %p wfp = %p\n", argv[1], argv[2], rfp, wfp);

        while((count = fread(buf, 1, 10, rfp)) > 0 ) {
                printf("%d: count=%d\n", i++, count);
                fwrite(buf, 1, count, wfp);
        }
        fclose(rfp);
        fclose(wfp);
        return 0;

```

예제 2) `fseek()`, `ftell()`
```cpp
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>

char buf[80];
int  count;
FILE* fp;

void read_five_bytes() {
        if ((count = fread(buf, 1, 5, fp)) <= 0) {
                perror("Read Error");
                exit(1);
        }
}

int main(int argc, char* argv[]) {
        if(argc != 2) {
                printf ("< Usage: ./high2 filename >\n");
                return 1;
        }

        fp = fopen(argv[1], "r");
        if (fp == NULL) {
                perror("Open");
                exit(1);
        }
        printf("%s is opened! fp = %p\n", argv[1], fp);
        read_five_bytes();
        printf("\n%d: %s\n", count, buf);
        printf("Current position: %ld\n", ftell(fp));

        fseek(fp, 1, SEEK_SET);
        read_five_bytes();
        printf("\n%d: %s\n", count, buf);
        printf("Current position: %ld\n", ftell(fp));

        fseek(fp, 2, SEEK_SET);
        read_five_bytes();
        printf("\n%d: %s\n", count, buf);
        printf("Current position: %ld\n", ftell(fp));

        fclose(fp);

        return 0;
}
```

예제 3) `fprintf()`
```cpp
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
        FILE *fp;

        if(argc != 2) {
                printf("< Usage: ./high3 filename >\n");
                return 1;
        }
          
        fp = fopen(argv[1], "w"); 
        if(fp == NULL) {
                perror("Open");
                exit(1);
        }

        fprintf(fp, "%s %d %d %d %2.2f\n", "2015123", 80, 90, 100, 90.00);
        fprintf(fp, "%s %d %d %d %2.2f\n", "2016123", 50, 80, 60, 66.22);
        fprintf(fp, "%s %d %d %d %2.2f\n", "2017123", 70, 20, 70, 55.55);

        fclose(fp);
        return 0;
}    
```

예제 4) `fscanf()`
```cpp
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
	FILE *fp;
	char id[10];
	int grade1, grade2, grade3;
	float avg;
	if(argc != 2) {
		printf("< Usage: ./high4 filename >\n");
		return 1;
	}

	fp = fopen(argv[1], "r");
	if(fp == NULL) {
		perror("Open");
		exit(1);
	}
	
	fscanf(fp, "%s %d %d %d %f\n", id, &grade1, &grade2, &grade3, &avg);
	fprintf(stdout, "%s %d %d %d %.3f\n", id, grade1, grade2, grade3, avg);

	fscanf(fp, "%s %d %d %d %f\n", id, &grade1, &grade2, &grade3, &avg);
	fprintf(stdout, "%s %d %d %d %.3f\n", id, grade1, grade2, grade3, avg);

	fscanf(fp, "%s %d %d %d %f\n", id, &grade1, &grade2, &grade3, &avg);
	fprintf(stdout, "%s %d %d %d %.3f\n", id, grade1, grade2, grade3, avg);

	fclose(fp);
	return 0;
} 
```

예제 5) `fscanf() with feof()`
```cpp
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
        FILE *fp;
        char id[10];
        int grade1, grade2, grade3;
        float avg;
        if(argc != 2) {
                printf("< Usage: ./high5 filename >\n");
                return 1;
        }

        fp = fopen(argv[1], "r");
        if(fp == NULL) {
                perror("Open");
                exit(1);
        }

        while(!feof(fp)) {
                fscanf(fp, "%s %d %d %d %f\n", id, &grade1, &grade2, &grade3, &avg);
                fprintf(stdout, "%s %d %d %d %.3f\n", id, grade1, grade2, grade3, avg);
        }

        fclose(fp);
        return 0;
}
```

예제 6-1) `fgets() with feof()`
```cpp
#include <stdio.h>
#include <stdlib.h>

#define MAX_BUF	80

int main(int argc, char* argv[]) {
	FILE *fp;
	int line=0;
	char buf[MAX_BUF];

	if(argc != 2) {
		printf("< Usage: ./high6 filename >\n");
		return 1;
	}

	if((fp = fopen(argv[1], "r")) == NULL) {
		perror("Open");
		exit(1);
	}
	
	while(!feof(fp)) {
		fgets(buf, MAX_BUF, fp);
		fprintf(stdout, "%3d: %s", line++, buf);
	}

	fclose(fp);
	return 0;
}
```
예제 6-2) `fgets()`
```cpp
#include <stdio.h>
#include <stdlib.h>

#define MAX_BUF	80

int main(int argc, char* argv[]) {
	FILE *fp;
	int line=0;
	char buf[MAX_BUF];

	if(argc != 2) {
		printf("< Usage: ./high6 filename >\n");
		return 1;
	}

	if((fp = fopen(argv[1], "r")) == NULL) {
		perror("Open");
		exit(1);
	}
	
	while(fgets(buf, MAX_BUF, fp) != NULL) {
		fprintf(stdout, "%3d: %s", line++, buf);
	}

	fclose(fp);
	return 0;
} 
```

예제 7) 구조체 파일 쓰기
```cpp
#include <stdio.h>
#include <stdlib.h>

typedef struct {
        char id[10];
        int grade1, grade2, grade3;
        float avg;
} student;

int main(int argc, char* argv[]) {
        FILE *fp;
        int i;
        student data[3];

        if(argc != 2) {
                printf("< Usage: ./high7 filename >\n");
                return 1;
        }

        if((fp = fopen(argv[1], "w")) == NULL) {
                perror("Open");
                exit(1);
        }

        for (i=0; i<3; i++) {
                if(fscanf(stdin, "%s %d %d %d", data[i].id, &data[i].grade1, &data[i].grade2, &data[i].grade3) > 0) {
                        data[i].avg = (data[i].grade1+data[i].grade2+data[i].grade3)/3;
                        fwrite(&data[i], sizeof(student), 1, fp);
                }       else {
                        break;
                }
        }

        fclose(fp);
        return 0;
}

```
이러한 소스코드로 바이너리 파일을 생성한 뒤 `vim` 편집기로 `:%!xxd`로 hex 데이터로 확인하면 해당 값을 볼 수 있다. 이 때, 구조체 크기를 보면 원래는 10, 4, 4, 4,4 를 통해서 26이여야하나, 파일에서는 sizeof(student)는 28이다. 이 이유는 memory alignment로, 인텔 CPU는 데이터의 메모리 시작 주소를 항상 4의 배수가 되도록 정렬한다.
- 이로 인해 10B 크기의 char id[10] 데이터가 저장된 다음, 2B 만큼의 padding space 가 생긴 것
- 다음 int grade1 은 12B 위치부터 저장됨. 이후에는 모든 데이터가 memory aligned 된 위치이므로 padding 이 없음

---