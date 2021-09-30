(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{497:function(v,_,t){"use strict";t.r(_);var a=t(25),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"디렉토리와-파일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리와-파일"}},[v._v("#")]),v._v(" 디렉토리와 파일")]),v._v(" "),t("p",[v._v("전북대학교 박현찬 교수님의 유닉스 시스템프로그래밍 수업 정리입니다.")]),v._v(" "),t("h2",{attrs:{id:"디렉토리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리"}},[v._v("#")]),v._v(" 디렉토리")]),v._v(" "),t("p",[v._v("리눅스의 디렉토리는 계층구조로, 루트로부터 시작하여 트리 형태의 계층구조를 이룬다.")]),v._v(" "),t("h3",{attrs:{id:"root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[v._v("#")]),v._v(" root")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("디렉토리 계층 구조의 뿌리")]),v._v(" "),t("ul",[t("li",[v._v("모든 정보는 root로부터 단일한 트리 구조로 구성됨")])])]),v._v(" "),t("li",[t("p",[v._v("Windows")]),v._v(" "),t("ul",[t("li",[v._v("각각의 저장 장치 파티션마다 드라이브 문자 지정")]),v._v(" "),t("li",[v._v("각 드라이브마다 루트가 존재하고 디렉토리 구조가 존재")])])]),v._v(" "),t("li",[t("p",[v._v("root를 관리하는 파일 시스템 : 루트 파일 시스템")]),v._v(" "),t("ul",[t("li",[v._v("/dev/vda1라는 저장 장치에 루트 파일 시스템 내부 저장 정보 저장")])])]),v._v(" "),t("li",[t("p",[v._v("리눅스에 새로운 저장 장치 추가된다면?")]),v._v(" "),t("ul",[t("li",[v._v("루트 파일 시스템 하의 어떤 디렉토리에 해당 장치를 마운트")]),v._v(" "),t("li",[v._v("ex) /home/user/new_ssd 라는 디렉토리 만들고, 새 장치 mount 수행시 해당 디렉토리 밑에 저장되는 정보는 루트 파일 시스템이 아닌 새로운 장치에 저장")])])])]),v._v(" "),t("h3",{attrs:{id:"홈-디렉토리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#홈-디렉토리"}},[v._v("#")]),v._v(" 홈 디렉토리")]),v._v(" "),t("p",[v._v("각 사용자마다 별도의 홈 디렉토리가 존재하고 사용자가 로그인하면 홈 디렉토리에서 작업을 시작한다.")]),v._v(" "),t("p",[v._v("절대 경로 명 : 루트 디렉토리로부터 시작하여 경로 이름을 정확하게 적는 것")]),v._v(" "),t("p",[v._v("상대 경로 명 : 현재 작업 디렉토리부터 시작해서 경로 이름을 적는 것")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("~")]),v._v(" : 홈 디렉토리")]),v._v(" "),t("li",[t("code",[v._v(".")]),v._v(" : 현재 디렉토리")]),v._v(" "),t("li",[t("code",[v._v("..")]),v._v(" : 부모 디렉토리")])]),v._v(" "),t("h3",{attrs:{id:"그외-디렉토리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그외-디렉토리"}},[v._v("#")]),v._v(" 그외 디렉토리")]),v._v(" "),t("ul",[t("li",[v._v("/bin\n"),t("ul",[t("li",[v._v("Binaries : System-wide (global) 하게 사용되는 기본적인 명령어에 대한 실행 파일들")])])]),v._v(" "),t("li",[v._v("/sbin\n"),t("ul",[t("li",[v._v("System binaries : 시스템 관리를 위한 명령어의 실행 파일 들")])])]),v._v(" "),t("li",[v._v("/usr\n"),t("ul",[t("li",[v._v("각 사용자들이 설치한 프로그램들의 실행파일과 라이브러리, 소스, 매뉴얼 등")]),v._v(" "),t("li",[v._v("/usr/local : 새로운 프로그램들이 설치됨")])])]),v._v(" "),t("li",[v._v("/etc\n"),t("ul",[t("li",[v._v("Configurations : 각종 환경 설정 파일들 (네트워크, 서비스, 사용자, 암호 등)")])])]),v._v(" "),t("li",[v._v("/var\n"),t("ul",[t("li",[v._v("Variable data : 시스템 동작 중에 계속해서 변화하는 파일들 (log, webdata, lock)")])])])]),v._v(" "),t("h3",{attrs:{id:"디렉토리-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#디렉토리-명령어"}},[v._v("#")]),v._v(" 디렉토리 명령어")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("pwd")]),v._v(" : 현재 작업 디렉토리의 절대 경로명 출력")]),v._v(" "),t("li",[t("code",[v._v("cd [디렉토리]")]),v._v(" : 현재 작업 디렉토리를 지정된 디렉티리로 이동한다. 디렉토리 미 지정시 홈 디렉토리로 이동")]),v._v(" "),t("li",[t("code",[v._v("which 명령어")]),v._v(" : 명령어의 경로 출력")]),v._v(" "),t("li",[t("code",[v._v("whereis 명령어")]),v._v(" : 명령어의 경로 출력, 메뉴얼 경로 출력")]),v._v(" "),t("li",[t("code",[v._v("ls(dir) [-aslFR] 디렉토리* 파일*")]),v._v(" : 지정된 디렉토리의 내용을 리스트 한다. 디렉토리 미 지정시 현재 디렉토리 내용을 리스트 한다. 또한 파일을 지정하면 해당 파일만을 리스트한다. 옵션 중 "),t("code",[v._v("-s")]),v._v("는 size 옵션으로, 디렉토리 내에 있는 모든 파일의 크기를 KB크기로 출력해준다. "),t("code",[v._v("-R")]),v._v("은 Recursive 옵션으로 모든 하위 디렉토리 내용을 리스트해준다.")]),v._v(" "),t("li",[t("code",[v._v("mkdir [-p] 디렉토리")]),v._v(" : 디렉토리를 새로 만든다. "),t("code",[v._v("-p")]),v._v(" 옵션은 중간 디렉토리가 없는 경우 자동으로 생성해주는 옵션이다.")]),v._v(" "),t("li",[t("code",[v._v("rmdir 디렉토리")]),v._v(" : 디렉토리를 삭제한다. 이 때는 빈 디렉토리만 삭제할 수 있다.")])]),v._v(" "),t("h2",{attrs:{id:"파일"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일"}},[v._v("#")]),v._v(" 파일")]),v._v(" "),t("p",[v._v("유닉스의 파일")]),v._v(" "),t("ul",[t("li",[v._v("연속된 바이트 형태로 저장된 데이터")])]),v._v(" "),t("h3",{attrs:{id:"파일의-종류"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일의-종류"}},[v._v("#")]),v._v(" 파일의 종류")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("일반 파일")]),v._v(" "),t("ul",[t("li",[v._v("데이터를 가지고 있으면서 디스크에 저장")]),v._v(" "),t("li",[v._v("text file, binary file")])])]),v._v(" "),t("li",[t("p",[v._v("디렉토리")]),v._v(" "),t("ul",[t("li",[v._v("파일들을 계층적으로 조직화하는데 사용되는 일종의 특수 파일")]),v._v(" "),t("li",[v._v("디렉토리 내에 파일이나 서브디렉토리들이 존재")])])]),v._v(" "),t("li",[t("p",[v._v("장치파일")]),v._v(" "),t("ul",[t("li",[v._v("물리적인 장치에 대한 내부적인 표현")]),v._v(" "),t("li",[v._v("키보드(stdin), 모니터(stdout), 프린터 등도 파일처럼 사용")]),v._v(" "),t("li",[v._v("dev 디렉토리에 여러 장치들을 저장한다.")])])]),v._v(" "),t("li",[t("p",[v._v("심볼릭 링크 파일")]),v._v(" "),t("ul",[t("li",[v._v("어떤 파일을 가르키는 또 하나의 경로명을 저장하는 파일")]),v._v(" "),t("li",[v._v("윈도우즈의 바로가기 파일과 유사하다고 생각하면 이해에 도움 됨")])])])]),v._v(" "),t("p",[v._v("리눅스에서 지원하는 파일 종류")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("파일 종류")]),v._v(" "),t("th",[v._v("표시")]),v._v(" "),t("th",[v._v("설명")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("일반 파일")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("데이터를 갖고 있는 텍스트 파일 또는 이진 파일")])]),v._v(" "),t("tr",[t("td",[v._v("디렉토리 파일")]),v._v(" "),t("td",[v._v("d")]),v._v(" "),t("td",[v._v("디렉토리 내의 파일들의 이름들과 파일 정보를 관리하는 파일")])]),v._v(" "),t("tr",[t("td",[v._v("문자 장치 파일")]),v._v(" "),t("td",[v._v("c")]),v._v(" "),t("td",[v._v("문자 단위로 데이터를 전송하는 장치를 나타내는 파일")])]),v._v(" "),t("tr",[t("td",[v._v("블록 장치 파일")]),v._v(" "),t("td",[v._v("b")]),v._v(" "),t("td",[v._v("블록 단위로 데이터를 전송하는 장치를 나타내는 파일")])]),v._v(" "),t("tr",[t("td",[v._v("FIFO 파일")]),v._v(" "),t("td",[v._v("p")]),v._v(" "),t("td",[v._v("프로세스 간 통신에 사용되는 이름 있는 파이프")])]),v._v(" "),t("tr",[t("td",[v._v("소켓")]),v._v(" "),t("td",[v._v("s")]),v._v(" "),t("td",[v._v("네트워크를 통한 프로세스 간 통신에 사용되는 파일")])]),v._v(" "),t("tr",[t("td",[v._v("심볼릭 링크")]),v._v(" "),t("td",[v._v("l")]),v._v(" "),t("td",[v._v("다른 파일을 가리키는 포인터와 같은 역할을 하는 파일")])])])]),v._v(" "),t("h3",{attrs:{id:"파일-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일-명령어"}},[v._v("#")]),v._v(" 파일 명령어")]),v._v(" "),t("p",[t("code",[v._v("file [옵션] 파일")]),v._v(" : 파일의 종류를 볼 수 있다.")]),v._v(" "),t("h3",{attrs:{id:"파일의-상태"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일의-상태"}},[v._v("#")]),v._v(" 파일의 상태")]),v._v(" "),t("ul",[t("li",[v._v("파일 상태\n"),t("ul",[t("li",[v._v("파일에 대한 모든 정보")]),v._v(" "),t("li",[v._v("블록 수, 파일 타입, 접근권한")]),v._v(" "),t("li",[v._v("링크 수, 파일 소유자의 사용자 ID")]),v._v(" "),t("li",[v._v("그룹 ID, 파일 크기, 최종 수정 기간 등")]),v._v(" "),t("li",[v._v("이러한 정보들을 전부 메타데이터(metadata)라고 함")])])])]),v._v(" "),t("p",[v._v("ex) "),t("code",[v._v("ls -l newfile")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("-rw-rw-r--")]),v._v(" "),t("th",[v._v("1")]),v._v(" "),t("th",[v._v("root")]),v._v(" "),t("th",[v._v("root")]),v._v(" "),t("th",[v._v("14")]),v._v(" "),t("th",[v._v("Sep 14 13:39")]),v._v(" "),t("th",[v._v("new file")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("접근권한")]),v._v(" "),t("td",[v._v("링크수")]),v._v(" "),t("td",[v._v("소유자ID")]),v._v(" "),t("td",[v._v("소유그룹ID")]),v._v(" "),t("td",[v._v("파일크기")]),v._v(" "),t("td",[v._v("최종 수정 시간")]),v._v(" "),t("td",[v._v("파일 이름")])])])]),v._v(" "),t("h3",{attrs:{id:"stat-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stat-명령어"}},[v._v("#")]),v._v(" stat 명령어")]),v._v(" "),t("p",[t("code",[v._v("stat [옵션] 파일")]),v._v(" : 파일의 자세한 상태 정보(metadata)를 출력한다.")]),v._v(" "),t("ul",[t("li",[v._v("Blocks : 실제 저장 장치 내에서 차지하는 블록 개수")]),v._v(" "),t("li",[v._v("IO Block : 1개 블록의 크기(바이트). 이 단위로 장치 입출력이 수행됨")]),v._v(" "),t("li",[v._v("I-node : Index node. 운영체제에서 해당 파일을 관리하기 위해 부여한 번호")]),v._v(" "),t("li",[v._v("Links : 해당 I-node와 연결된 파일의 개수")])]),v._v(" "),t("h3",{attrs:{id:"파일-내용-출력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일-내용-출력"}},[v._v("#")]),v._v(" 파일 내용 출력")]),v._v(" "),t("p",[t("code",[v._v("cat [-n] 파일")]),v._v(" : 파일들의 내용을 그대로 화면에 출력한다. 파일을 지정하지 않으면 표준입력 내용을 그대로 화면에 출력한다. "),t("code",[v._v("-n")]),v._v(" 옵션은 출력의 라인마다 숫자를 매겨준다.")]),v._v(" "),t("p",[t("code",[v._v("more 파일")]),v._v(" : 파일들의 내용을 페이지 단위로 화면에 출력한다.")]),v._v(" "),t("p",[t("code",[v._v("head [-n] 파일")]),v._v(" : 파일들의 앞 10개 라인을 화면에 출력한다. 파일을 지정하지 않으면 표준입력 내용을 대상으로 한다.")]),v._v(" "),t("p",[t("code",[v._v("tail [-n] 파일")]),v._v(" : 파일들의 뒷 10개 라인을 화면에 출력한다. 파일을 지정하지 않으면 표준입력 내용을 대상으로 한다. "),t("code",[v._v("-f")]),v._v(" 옵션을 가지고 있는데 파일의 변화가 있을 때 계속 지켜보고자 할 때 사용한다. 예를 들어 log를 확인할 때 사용하면 좋다.")]),v._v(" "),t("p",[t("code",[v._v("wc [-lwc] 파일")]),v._v(" : 파일에 저장된 line, word, char의 개수를 세서 출력한다.  파일을 지정하지 않으면 표준입력 내용을 대상으로 한다.")]),v._v(" "),t("p",[v._v("ex) "),t("code",[v._v("wc cs1.txt")]),v._v(" : 38 318 2088 cs1.txt line, word, char 순서로 나오게 되며, 옵션을 통해서 원하는 개수를 얻을 수 있다.")]),v._v(" "),t("h3",{attrs:{id:"파일-명령어-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파일-명령어-2"}},[v._v("#")]),v._v(" 파일 명령어")]),v._v(" "),t("p",[t("code",[v._v("cp [-i] 파일1 파일2")]),v._v(" : 파일1을 파일2에 복사한다. "),t("code",[v._v("-i")]),v._v(" 옵션은 대화형 옵션으로, 복사 대상 파일와 같은 이름을 가진 파일이 존재한다면 덮어씌울 것인가 물어보는 옵션이다. "),t("code",[v._v("-r")]),v._v(" 옵션은 "),t("code",[v._v("cp [-r] 디렉토리1 디렉토리2")]),v._v(" 디렉토리1 전체(하위 디렉토리 포함)를 디렉토리2로 복사한다는 옵션이다.")]),v._v(" "),t("p",[t("code",[v._v("mv [-i] 파일1 파일2")]),v._v(" : 파일1의 이름을 파일2로 변경한다. "),t("code",[v._v("-i")]),v._v(" 옵션은 위의 cp와 같다. 여러 파일을 지정하려면 "),t("code",[v._v("mv 파일1 파일2 .. 파일n 디렉토리")]),v._v("와 같이 사용하면 된다.")]),v._v(" "),t("p",[t("code",[v._v("rm [-ri] 파일*")]),v._v(" : 파일을 삭제한다. "),t("code",[v._v("-i")]),v._v("는 대화형 옵션이며, "),t("code",[v._v("-r")]),v._v(" 옵션은 디렉토리 지정시 하위 디렉토리나 파일들을 다 삭제하는 명령어다.")]),v._v(" "),t("h3",{attrs:{id:"link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link"}},[v._v("#")]),v._v(" Link")]),v._v(" "),t("p",[v._v("링크 : 기존 파일에 대한 또 하나의 새로운 이름")]),v._v(" "),t("p",[t("code",[v._v("ln [-s] 파일1 파일2")]),v._v(" : 파일1에 대한 새로운 이름(링크)로 파일2를 만들어 준다. "),t("code",[v._v("-s")]),v._v(" 옵션은 심볼릭 링크를 뜻한다. 파일2 부분에 디렉토리를 넣어서 사용할 수도 있다.")]),v._v(" "),t("p",[v._v("심볼릭 링크")]),v._v(" "),t("ul",[t("li",[v._v("다른 파일을 가리키는 별도의 파일")]),v._v(" "),t("li",[v._v("실제 파일의 경로명을 저장하고 있는 일종의 특수 파일")]),v._v(" "),t("li",[v._v("이 경로명이 다른 파일에 대한 간접 포인터 역할")]),v._v(" "),t("li",[v._v("Windows의 바로가기 파일과 유사")])])])}),[],!1,null,null,null);_.default=e.exports}}]);