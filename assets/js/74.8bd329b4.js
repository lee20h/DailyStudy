(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{435:function(v,_,e){"use strict";e.r(_);var a=e(25),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"process-and-redirection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-and-redirection"}},[v._v("#")]),v._v(" Process and Redirection")]),v._v(" "),e("h2",{attrs:{id:"process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[v._v("#")]),v._v(" Process")]),v._v(" "),e("p",[v._v("프로세스는 실행중인 프로그램이며, 각 프로세스는 유일한 프로세스 번호 PID를 갖게 된다. 또, 각 프로세스는 부모 프로세스에 의해 생성된다.")]),v._v(" "),e("h3",{attrs:{id:"프로세스의-사용자-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스의-사용자-id"}},[v._v("#")]),v._v(" 프로세스의 사용자 ID")]),v._v(" "),e("p",[v._v("프로세스는 프로세스 ID 외에 프로세스의 사용자 ID (UID)와 그룹 ID (GID)를 갖는다. ID는 해당 프로세스를 실행 시킨 사용자의 ID와 그룹 ID로, 해당 사용자 및 그룹의 권한을 상속 받아서 프로세스가 수행할 수 있는 연산을 결정하는데 사용된다.")]),v._v(" "),e("p",[e("code",[v._v("id [사용자명]")]),v._v(" : 사용자의 실제 ID와 유효 사용자 ID, 그룹 ID 등을 보여준다.")]),v._v(" "),e("p",[v._v("프로세스의 실제 사용자 ID (real user ID) : 프로세스를 실행시킨 사용자의 ID로 설정되는 ID")]),v._v(" "),e("p",[v._v("프로세스의 유효 사용자 ID(effective user ID) : 현재 유효한 사용자 ID로, 보통 유효 사용자 ID와 실제 사용자 ID는 같다. 새로 파일을 만들 때나 파일의 접근권한을 검사할 때 주로 사용된다. 특별한 실행파일을 실행할 때 유효 사용자 ID는 달라진다.")]),v._v(" "),e("p",[v._v("set-user-id (set user ID upon execution) 실행권한 :")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("set-user-id가 설정된 실행파일을 실행하면 이 프로세스의 유효 사용자 ID는 그 실행파일의 소유자로 바뀌며, 실행되는 동안에 그 파일의 소유자 권한을 갖게 된다.")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("chmod 4755 파일 or chmod u+s 파일")])])])]),v._v(" "),e("p",[v._v("set-group-id (set group ID upon executin) 실행권한 :")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("실행되는 동안에 그 파일 소유자으 ㅣ그룹을 프로세스의 유효 그룹 ID로 갖게 된다. 실행권한은 8진수 모드로는 2000으로 표현된다.")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("chmod 2755 파일 or chmod g+s 파일")])])])]),v._v(" "),e("h3",{attrs:{id:"프로세스-상태-보기-ps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-상태-보기-ps"}},[v._v("#")]),v._v(" 프로세스 상태 보기 : ps")]),v._v(" "),e("p",[e("code",[v._v("ps [-옵션]")]),v._v(" : 현재 시스템 내에 존재하는 프로세스들의 실행 상태를 요약해서 출력한다.")]),v._v(" "),e("p",[v._v("옵션 : -A, -a, -u, -e, -f")]),v._v(" "),e("p",[v._v("자주 사용하는 형태를 보자")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("ps")]),v._v(" : 현재 사용자가 생성한 프로세스 목록을 간단히 출력")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("ps -aux")]),v._v(" : 모든 프로세스 출력, 메모리, CPU 사용량, 프로세스 상태")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("ps -ef")]),v._v(" : 모든 프로세스, 자식 프로세스 개수, 부모 프로세스 ID를 출력하여 부모 자식 간의 관계 파악 용이")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("ps -aux --sort [+][-]key")]),v._v(" : key로 지정된 필드 순으로 정렬하여 출력. Default : PID")]),v._v(" "),e("ul",[e("li",[v._v("+|- : 오름차순 혹은 내림차순. Default : 오름차순")])])])]),v._v(" "),e("p",[v._v("항목 정리")]),v._v(" "),e("ul",[e("li",[v._v("UID : 프로세스를 실행시킨 사용자 ID")]),v._v(" "),e("li",[v._v("PID : 프로세스 번호")]),v._v(" "),e("li",[v._v("PPID : 부모 프로세스 번호")]),v._v(" "),e("li",[v._v("C : 프로세스의 우선순위")]),v._v(" "),e("li",[v._v("STIME : 프로세스의 시작 시간")]),v._v(" "),e("li",[v._v("TTY : 명령어가 시작된 터미널")]),v._v(" "),e("li",[v._v("TIME : 프로세스에 사용된 CPU 시간")]),v._v(" "),e("li",[v._v("CMD : 실행되고 있는 명령어 이름")])]),v._v(" "),e("h3",{attrs:{id:"특정-프로세스-리스트-pgrep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#특정-프로세스-리스트-pgrep"}},[v._v("#")]),v._v(" 특정 프로세스 리스트 : pgrep")]),v._v(" "),e("p",[e("code",[v._v("pgrep [옵션] [패턴]")]),v._v(" : 패턴에 해당하는 프로세스들만을 리스트 한다.")]),v._v(" "),e("p",[v._v("옵션 :")]),v._v(" "),e("ul",[e("li",[v._v("-l : PID와 함께 프로세스의 이름 출력")]),v._v(" "),e("li",[v._v("-f : 명령어의 경로 출력")]),v._v(" "),e("li",[v._v("-n : 패턴과 일치하는 프로세스들 중 가장 최근 프로세스 출력")]),v._v(" "),e("li",[v._v("-x : 패턴과 정확하게 일치되는 프로세스 출력")])]),v._v(" "),e("h3",{attrs:{id:"프로세스-트리-출력"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-트리-출력"}},[v._v("#")]),v._v(" 프로세스 트리 출력")]),v._v(" "),e("p",[e("code",[v._v("pstree")]),v._v(" : 실행중인 프로세스들의 부모, 자식 관계를 트리 형태로 출력")]),v._v(" "),e("h2",{attrs:{id:"process-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#process-control"}},[v._v("#")]),v._v(" Process: Control")]),v._v(" "),e("h3",{attrs:{id:"shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[v._v("#")]),v._v(" Shell")]),v._v(" "),e("p",[v._v("쉘에서 수행되는 프로세스는 쉘 프로세스의 자식 프로세스")]),v._v(" "),e("ol",[e("li",[v._v("프롬프트를 내고 명령어를 입력 받는다.")]),v._v(" "),e("li",[v._v("자식 프로세스를 생성한다.")]),v._v(" "),e("li",[v._v("자식 프로세스에게 명령어를 실행시킨다.")])]),v._v(" "),e("h3",{attrs:{id:"echo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#echo"}},[v._v("#")]),v._v(" echo")]),v._v(" "),e("p",[e("code",[v._v("echo 메시지")]),v._v(" : 메시지를 화면에 출력")]),v._v(" "),e("h3",{attrs:{id:"sleep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sleep"}},[v._v("#")]),v._v(" sleep")]),v._v(" "),e("p",[e("code",[v._v("sleep 초")]),v._v(" : 명시된 시간만큼 프로세스 실행을 중지 시킨다.")]),v._v(" "),e("h3",{attrs:{id:"전면처리-vs-후면처리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전면처리-vs-후면처리"}},[v._v("#")]),v._v(" 전면처리 vs 후면처리")]),v._v(" "),e("p",[v._v("전면처리(foreground) : 일반적인 사용법")]),v._v(" "),e("ul",[e("li",[v._v("입력된 명령어를 전면에서 실행하고 쉘은 명령어 실행이 끝날 때 까지 기다린다.")]),v._v(" "),e("li",[e("code",[v._v("$ 명령어")])])]),v._v(" "),e("p",[v._v("후면 처리(background) :")]),v._v(" "),e("ul",[e("li",[v._v("명령어를 후면에서 실행하고 전면에서는 다른 작업을 실행하여 동시에 여러 작업을 수행할 수 있다.")]),v._v(" "),e("li",[e("code",[v._v("$ 명령어 &")])])]),v._v(" "),e("h3",{attrs:{id:"전면-작업과-후면-작업"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전면-작업과-후면-작업"}},[v._v("#")]),v._v(" 전면 작업과 후면 작업")]),v._v(" "),e("p",[e("code",[v._v("jobs [%작업번호]")]),v._v(" : 후면에서 실행되고 있는 작업들을 리스트 한다. 작업 번호를 명시하면 해당 작업만 리스트한다.")]),v._v(" "),e("p",[e("code",[v._v("fg %작업번호")]),v._v(" : 작업번호에 해당하는 후면 작업을 전면 작업으로 전환시킨다.")]),v._v(" "),e("p",[e("code",[v._v("bg %작업번호")]),v._v(" : Ctrl-Z키로 중지 시킨 뒤 작업번호에 해당하는 중지된 작업을 후면 작업으로 전환하여 실행한다.")]),v._v(" "),e("h3",{attrs:{id:"프로세스-끝내기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-끝내기"}},[v._v("#")]),v._v(" 프로세스 끝내기")]),v._v(" "),e("p",[e("code",[v._v("kill 프로세스번호 or %작업번호")]),v._v(" : 프로세스 강제 종료시킨다.")]),v._v(" "),e("p",[e("code",[v._v("kill -9 [pid]")]),v._v(" : 프로세스 강제 종료로 단순히 kill을 수행해서 종료가 되지 않는 경우 사용")]),v._v(" "),e("p",[e("code",[v._v("pkill [process name]")]),v._v(" : 해당 이름의 모든 프로세스를 종료하며 Regular expression 사용 가능")]),v._v(" "),e("h3",{attrs:{id:"프로세스-기다리기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-기다리기"}},[v._v("#")]),v._v(" 프로세스 기다리기")]),v._v(" "),e("p",[e("code",[v._v("wait [프로세스번호]")]),v._v(" : 프로세스 번호로 지정한 자식 프로세스가 종료될 때까지 기다린다. 지정하지 않으면 모든 자식 프로세스가 끝나기를 기다린다.")]),v._v(" "),e("h2",{attrs:{id:"redirection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redirection"}},[v._v("#")]),v._v(" Redirection")]),v._v(" "),e("h3",{attrs:{id:"출력-재지정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#출력-재지정"}},[v._v("#")]),v._v(" 출력 재지정")]),v._v(" "),e("p",[e("code",[v._v("명령어 > 파일")]),v._v(" : 명령어의 표준출력을 모니터 대신 파일에 저장한다. 파일이 없으면 새로 만들고, 있다면 기존 내용을 덮어쓴다.")]),v._v(" "),e("p",[e("code",[v._v("cat > 파일")]),v._v(" : 표준입력 내용을 모두 파일에 저장한다.")]),v._v(" "),e("p",[e("code",[v._v("cat 파일1 파일2 > 파일3")]),v._v(" : 파일1과 파일2의 내용을 붙여서 새로운 파일3을 만든다.")]),v._v(" "),e("p",[e("code",[v._v("명령어 >> 파일")]),v._v(" : 명령어의 표준출력을 모니터 대신에 파일에 추가한다.")]),v._v(" "),e("h3",{attrs:{id:"입력-재지정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#입력-재지정"}},[v._v("#")]),v._v(" 입력 재지정")]),v._v(" "),e("p",[e("code",[v._v("명령어 < 파일")]),v._v(" : 명령어의 표준입력을 키보드 대신에 파일에서 받는다.")]),v._v(" "),e("p",[e("code",[v._v("명령어 << 단어 .. 단어")]),v._v(" : 명령어의 표준입력을 키보드 대신에 단어와 단어 사이의 입력 내용으로 받는다.")]),v._v(" "),e("h3",{attrs:{id:"오류-재지정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#오류-재지정"}},[v._v("#")]),v._v(" 오류 재지정")]),v._v(" "),e("p",[e("code",[v._v("명령어 2> 파일")]),v._v(" : 명령어의 표준오류를 모니터 대신에 파일에 저장한다.")]),v._v(" "),e("ul",[e("li",[v._v("표준출력(standard output) : 정상적인 실행의 출력")]),v._v(" "),e("li",[v._v("표준오류(standard error) : 오류 메시지 출력")])]),v._v(" "),e("h3",{attrs:{id:"파이프"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파이프"}},[v._v("#")]),v._v(" 파이프")]),v._v(" "),e("p",[e("code",[v._v("명령어1 | 명령어2")]),v._v(" : 명령어1의 표준출력이 파이프를 통해 명령어2의 표준입력이 된다.")]),v._v(" "),e("h2",{attrs:{id:"commanding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commanding"}},[v._v("#")]),v._v(" Commanding")]),v._v(" "),e("p",[e("code",[v._v("명령어1; ...; 명령어n")]),v._v(" : 나열된 명령어들이 순차적으로 실행한다.")]),v._v(" "),e("p",[e("code",[v._v("(명령어1; ...; 명령어n)")]),v._v(" : 나열된 명령어들을 그룹으로 묶어서 실행한다.")]),v._v(" "),e("p",[v._v("조건 명령어 : 첫 번째 명령어 실행 결과에 따라 다음 명령어 실행을 결정할 수 있다.")]),v._v(" "),e("p",[e("code",[v._v("명령어1 && 명령어2")]),v._v(" : 명령어1이 성공적으로 실행되면 명령어2가 실행되고, 그렇지 않으면 명령어2가 실행되지 않는다.")]),v._v(" "),e("p",[e("code",[v._v("명령어1 || 명령어2")]),v._v(" : 명령어1이 실패하면 명령어2가 실행되고, 그렇지 않으면 명령어2가 실행되지 않는다.")]),v._v(" "),e("h3",{attrs:{id:"파일-이름-대치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파일-이름-대치"}},[v._v("#")]),v._v(" 파일 이름 대치")]),v._v(" "),e("p",[v._v("대표문자를 이용한 파일 이름 대치")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("*")]),v._v(" : 빈 스트링을 포함하여 임의의 스트링을 나타냄")]),v._v(" "),e("li",[e("code",[v._v("?")]),v._v(" : 임의의 한 문자를 나타냄")]),v._v(" "),e("li",[e("code",[v._v("[..]")]),v._v(" : 대괄호 사이의 문자 중 하나를 나타내며 부분범위 사용 가능함")])]),v._v(" "),e("h3",{attrs:{id:"명령어-대치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#명령어-대치"}},[v._v("#")]),v._v(" 명령어 대치")]),v._v(" "),e("p",[v._v("명령어를 실행할 때 다른 명령어의 실행 결과를 이용")]),v._v(" "),e("ul",[e("li",[v._v("`명령어` 부분은 그 명령어의 실행 결과로 대치된 후에 실행")]),v._v(" "),e("li",[v._v("` : back quote, backtick (역 따옴표)")])]),v._v(" "),e("p",[v._v("따옴표를 이용하여 대치 기능을 제한할 수 있다.")]),v._v(" "),e("p",[v._v("정리")]),v._v(" "),e("ol",[e("li",[v._v("작은따옴표(')는 파일이름 대치, 변수 대치, 명령어 대치를 모두 제한한다.")]),v._v(" "),e("li",[v._v('큰따옴표(")는 파일이름 대치만 제한한다.')]),v._v(" "),e("li",[v._v("따옴표가 중첩되면 밖에 따옴표가 효력을 갖는다.")])])])}),[],!1,null,null,null);_.default=t.exports}}]);